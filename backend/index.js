const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const multer = require('multer');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'changeme';

app.use(express.json());

const uploadsDir = path.join(__dirname, 'uploads');
const dataDir = path.join(__dirname, 'data');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Mongoose models
let ContactModel, ProfileModel;

async function initMongoose() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.log('MONGO_URI not set — running in file-based mode');
    return;
  }
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const contactSchema = new mongoose.Schema({ name: String, email: String, message: String, createdAt: { type: Date, default: Date.now } });
    const profileSchema = new mongoose.Schema({ name: String, title: String, bio: String, resume: String, profileImage: String, updatedAt: { type: Date, default: Date.now } });
    ContactModel = mongoose.model('Contact', contactSchema);
    ProfileModel = mongoose.model('Profile', profileSchema);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
  }
}

async function ensureDirs() {
  await fs.mkdir(uploadsDir, { recursive: true });
  await fs.mkdir(dataDir, { recursive: true });
  const profilePath = path.join(dataDir, 'profile.json');
  try {
    await fs.access(profilePath);
  } catch (e) {
    await fs.writeFile(profilePath, JSON.stringify({ name: 'Your Name', title: 'Frontend Developer', bio: 'Edit this via the admin panel.', resume: '', profileImage: '' }, null, 2));
  }
  const contactsPath = path.join(__dirname, 'contacts.json');
  try {
    await fs.access(contactsPath);
  } catch (e) {
    await fs.writeFile(contactsPath, '[]');
  }
}

function checkAdmin(req, res, next) {
  const auth = req.headers.authorization || req.query.token || req.headers['x-admin-token'];
  const token = auth && auth.startsWith('Bearer ') ? auth.slice(7) : auth;
  if (token !== ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden - invalid admin token' });
  }
  next();
}

// Save contact to DB if available, otherwise to file
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'name,email,message required' });
  const contactObj = { name, email, message, createdAt: new Date() };
  try {
    if (ContactModel) {
      await ContactModel.create(contactObj);
      return res.json({ status: 'ok' });
    }
    // fallback to file
    const contactsPath = path.join(__dirname, 'contacts.json');
    const raw = await fs.readFile(contactsPath, 'utf8');
    const arr = JSON.parse(raw || '[]');
    arr.push(contactObj);
    await fs.writeFile(contactsPath, JSON.stringify(arr, null, 2));
    res.json({ status: 'ok' });
  } catch (err) {
    console.error('Failed to save contact', err);
    res.status(500).json({ error: 'failed' });
  }
});

// Admin: list contacts
app.get('/api/contacts', checkAdmin, async (req, res) => {
  try {
    if (ContactModel) {
      const docs = await ContactModel.find().sort({ createdAt: -1 }).lean();
      return res.json(docs);
    }
    const contactsPath = path.join(__dirname, 'contacts.json');
    const raw = await fs.readFile(contactsPath, 'utf8');
    res.json(JSON.parse(raw || '[]'));
  } catch (err) {
    res.status(500).json({ error: 'failed' });
  }
});

// Admin upload: save files and update profile (file + DB)
app.post('/api/admin/upload', checkAdmin, upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'profile', maxCount: 1 }]), async (req, res) => {
  const files = req.files || {};
  const result = {};
  if (files.resume && files.resume[0]) {
    result.resume = '/uploads/' + path.basename(files.resume[0].path);
  }
  if (files.profile && files.profile[0]) {
    result.profile = '/uploads/' + path.basename(files.profile[0].path);
  }

  // update profile.json with paths if present
  try {
    const profilePath = path.join(dataDir, 'profile.json');
    const raw = await fs.readFile(profilePath, 'utf8');
    const profile = JSON.parse(raw || '{}');
    if (result.resume) profile.resume = result.resume;
    if (result.profile) profile.profileImage = result.profile;
    await fs.writeFile(profilePath, JSON.stringify(profile, null, 2));

    // persist to DB
    if (ProfileModel) {
      const doc = await ProfileModel.findOne() || new ProfileModel({});
      if (result.resume) doc.resume = result.resume;
      if (result.profile) doc.profileImage = result.profile;
      doc.updatedAt = new Date();
      await doc.save();
    }
  } catch (e) {
    console.error('Failed to update profile.json', e);
  }

  res.json({ status: 'ok', files: result });
});

// Admin: update data file and DB for profile.json
app.post('/api/admin/update-data', checkAdmin, async (req, res) => {
  const { filename, content } = req.body;
  if (!filename || content === undefined) return res.status(400).json({ error: 'filename and content required' });
  const safe = path.basename(filename);
  const target = path.join(dataDir, safe);
  try {
    await fs.writeFile(target, JSON.stringify(content, null, 2));
    // If profile.json, update DB too
    if (safe === 'profile.json' && ProfileModel) {
      const doc = await ProfileModel.findOne() || new ProfileModel({});
      Object.assign(doc, content);
      doc.updatedAt = new Date();
      await doc.save();
    }
    res.json({ status: 'ok', file: safe });
  } catch (err) {
    res.status(500).json({ error: 'failed' });
  }
});

// Serve data: prefer DB for profile.json
app.get('/api/data/:file', async (req, res) => {
  const safe = path.basename(req.params.file);
  try {
    if (safe === 'profile.json' && ProfileModel) {
      const doc = await ProfileModel.findOne().lean();
      if (doc) return res.json(doc);
    }
    const target = path.join(dataDir, safe);
    await fs.access(target);
    res.sendFile(target);
  } catch (e) {
    res.status(404).json({ error: 'Not found' });
  }
});

app.use('/uploads', express.static(uploadsDir));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/', (req, res) => res.send('Backend running'));

// start
ensureDirs().then(async () => {
  await initMongoose();
  // If DB connected and no profile, seed from file
  try {
    if (ProfileModel) {
      const existing = await ProfileModel.findOne();
      if (!existing) {
        const p = JSON.parse(await fs.readFile(path.join(dataDir, 'profile.json'), 'utf8'));
        await ProfileModel.create(Object.assign({}, p));
        console.log('Seeded profile into MongoDB');
      }
    }
  } catch (e) {
    console.error('DB seed error', e.message);
  }
  app.listen(port, () => console.log(`Backend listening on port ${port}`));
}).catch(e => {
  console.error(e);
});
