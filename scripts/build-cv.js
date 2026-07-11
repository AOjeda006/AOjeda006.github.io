/* eslint-disable */
// Genera el CV en PDF a partir de la fuente HTML (cv/cv.html) usando Chrome
// headless, y lo publica en public/cv.pdf y docs/cv.pdf.
//
// Chrome se localiza, por orden, con: la variable de entorno CHROME_BIN, la
// instalación de Playwright bajo PLAYWRIGHT_BROWSERS_PATH, o el chromium/chrome
// del sistema (PATH). Uso: `node scripts/build-cv.js` o `npm run cv:pdf`.
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'cv', 'cv.html');
const targets = [path.join(root, 'public', 'cv.pdf'), path.join(root, 'docs', 'cv.pdf')];

/** Localiza un ejecutable de Chrome/Chromium en el sistema. */
function findChrome() {
  if (process.env.CHROME_BIN && fs.existsSync(process.env.CHROME_BIN)) {
    return process.env.CHROME_BIN;
  }

  const browsersDir = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (browsersDir && fs.existsSync(browsersDir)) {
    for (const entry of fs.readdirSync(browsersDir)) {
      if (!entry.startsWith('chromium-')) continue;
      const candidate = path.join(browsersDir, entry, 'chrome-linux', 'chrome');
      if (fs.existsSync(candidate)) return candidate;
    }
  }

  for (const name of ['google-chrome', 'chromium', 'chromium-browser', 'chrome']) {
    try {
      return execFileSync('which', [name], { encoding: 'utf8' }).trim();
    } catch {
      /* siguiente candidato */
    }
  }

  throw new Error(
    'No se encontró Chrome/Chromium. Define CHROME_BIN con la ruta al ejecutable.',
  );
}

function main() {
  if (!fs.existsSync(source)) {
    console.error(`[build-cv] No existe la fuente ${source}`);
    process.exit(1);
  }

  const chrome = findChrome();
  const output = targets[0];

  execFileSync(
    chrome,
    [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${output}`,
      `file://${source}`,
    ],
    { stdio: ['ignore', 'ignore', 'ignore'] },
  );

  for (const target of targets.slice(1)) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(output, target);
  }

  console.log(`[build-cv] Generado ${path.relative(root, output)} con ${path.basename(chrome)}`);
  console.log(`[build-cv] Copiado a: ${targets.map((t) => path.relative(root, t)).join(', ')}`);
}

main();
