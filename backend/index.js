const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const multer = require('multer');
require('dotenv').config();

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

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'name,email,message required' });
  const contactsPath = path.join(__dirname, 'contacts.json');
  const raw = await fs.readFile(contactsPath, 'utf8');
  const arr = JSON.parse(raw || '[]');
  arr.push({ name, email, message, createdAt: new Date().toISOString() });
  await fs.writeFile(contactsPath, JSON.stringify(arr, null, 2));
  res.json({ status: 'ok' });
});

app.get('/api/contacts', checkAdmin, async (req, res) => {
  const contactsPath = path.join(__dirname, 'contacts.json');
  const raw = await fs.readFile(contactsPath, 'utf8');
  res.json(JSON.parse(raw || '[]'));
});

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
  } catch (e) {
    console.error('Failed to update profile.json', e);
  }

  res.json({ status: 'ok', files: result });
});

app.post('/api/admin/update-data', checkAdmin, async (req, res) => {
  const { filename, content } = req.body;
  if (!filename || content === undefined) return res.status(400).json({ error: 'filename and content required' });
  const safe = path.basename(filename);
  const target = path.join(dataDir, safe);
  await fs.writeFile(target, JSON.stringify(content, null, 2));
  res.json({ status: 'ok', file: safe });
});

app.get('/api/data/:file', async (req, res) => {
  const safe = path.basename(req.params.file);
  const target = path.join(dataDir, safe);
  try {
    await fs.access(target);
    res.sendFile(target);
  } catch (e) {
    res.status(404).json({ error: 'Not found' });
  }
});

app.use('/uploads', express.static(uploadsDir));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/', (req, res) => res.send('Backend running'));

ensureDirs().then(() => {
  app.listen(port, () => console.log(`Backend listening on port ${port}`));
}).catch(e => {
  console.error(e);
});
