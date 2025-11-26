const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const root = process.cwd();
const inFile = path.join(root, 'src', 'index.css');
const outFile = path.join(root, 'src', 'tw-test.css');

if (!fs.existsSync(inFile)) {
  console.error('Input CSS not found:', inFile);
  process.exit(2);
}

const input = fs.readFileSync(inFile, 'utf8');

postcss([tailwind(path.join(root, 'tailwind.config.cjs')), autoprefixer])
  .process(input, { from: inFile, to: outFile })
  .then(result => {
    fs.writeFileSync(outFile, result.css, 'utf8');
    if (result.map) fs.writeFileSync(outFile + '.map', result.map.toString(), 'utf8');
    console.log('Tailwind build succeeded:', outFile);
  })
  .catch(err => {
    console.error('Tailwind build failed:');
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  });
