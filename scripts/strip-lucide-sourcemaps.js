const fs = require('fs').promises;
const path = require('path');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full);
    else if (e.isFile() && full.endsWith('.js')) {
      try {
        let text = await fs.readFile(full, 'utf8');
        const newText = text.replace(/\/\/#[ \t]*sourceMappingURL=.*$/gm, '');
        if (newText !== text) {
          await fs.writeFile(full, newText, 'utf8');
          console.log('Stripped sourceMappingURL from', full);
        }
      } catch (err) {
        console.error('Error processing', full, err.message);
      }
    }
  }
}

(async () => {
  const base = path.join(__dirname, '..', 'my-app', 'node_modules', 'lucide-react', 'dist', 'esm');
  try {
    await walk(base);
    console.log('Done.');
  } catch (err) {
    console.error('Failed to run script:', err.message);
    process.exit(1);
  }
})();
