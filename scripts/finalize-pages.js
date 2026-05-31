/* eslint-disable */
// Post-build step for GitHub Pages.
// 1. If the builder emitted a nested `browser/` folder (happens when the build
//    is invoked with `--output-path docs`, which overrides the flattened
//    outputPath from angular.json), flatten it into docs/.
// 2. Copy docs/index.html -> docs/404.html so deep links / refreshes don't 404.
// 3. Drop an empty docs/.nojekyll so Pages serves files/folders verbatim.
const fs = require('node:fs');
const path = require('node:path');

const docsDir = path.resolve(__dirname, '..', 'docs');
const browserDir = path.join(docsDir, 'browser');

// 1. Flatten docs/browser/* -> docs/* when present.
if (fs.existsSync(browserDir)) {
  for (const entry of fs.readdirSync(browserDir)) {
    const from = path.join(browserDir, entry);
    const to = path.join(docsDir, entry);
    fs.rmSync(to, { recursive: true, force: true });
    fs.renameSync(from, to);
  }
  fs.rmSync(browserDir, { recursive: true, force: true });
  console.log('[finalize-pages] Flattened docs/browser/ into docs/');
}

const indexFile = path.join(docsDir, 'index.html');
if (!fs.existsSync(indexFile)) {
  console.error('[finalize-pages] docs/index.html not found. Run the build first.');
  process.exit(1);
}

// 2 & 3. SPA fallback + disable Jekyll.
fs.copyFileSync(indexFile, path.join(docsDir, '404.html'));
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');

console.log('[finalize-pages] Created docs/404.html and docs/.nojekyll');
