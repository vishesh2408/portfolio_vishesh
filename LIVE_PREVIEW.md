Live preview — Run locally

1) Install dependencies (if not already done)

PowerShell:

```
Set-Location -Path "C:\Users\hp\Desktop\SEM 6\portfolio\my-app"
npm install
```

2) Start the dev server

```
npm start
```

Open http://localhost:3000 (or the port CRA chooses) in your browser.

3) Quick screenshot (optional)

If you want an automated screenshot, install Playwright and run its screenshot helper (install is optional):

```
# install once
npm i -D @playwright/test
npx playwright install

# take a screenshot (after the dev server is running)
npx playwright screenshot http://localhost:3000 --output=hero-snapshot.png
```

Alternatively, open the page and use your OS/browser screenshot tool.

Notes
- The project now uses local Tailwind/PostCSS. If you add new files with Tailwind classes, restart `npm start` so PostCSS picks up changes.
- If you see unexpected git deletions (node_modules), restore package manifests before committing (contact me if you want me to run a safe commit for you).
