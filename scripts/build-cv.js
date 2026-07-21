/* eslint-disable */
// Genera el CV en PDF a partir de sus fuentes HTML (cv/cv.html en español y
// cv/cv.en.html en inglés) usando Chrome headless, y los publica en public/ y
// docs/ como cv-es.pdf y cv-en.pdf. Además copia el español a cv.pdf para
// mantener compatibilidad con enlaces antiguos.
//
// Chrome se localiza, por orden, con: la variable de entorno CHROME_BIN, la
// instalación de Playwright bajo PLAYWRIGHT_BROWSERS_PATH, o el chromium/chrome
// del sistema (PATH). Uso: `node scripts/build-cv.js` o `npm run cv:pdf`.
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const outDirs = [path.join(root, 'public'), path.join(root, 'docs')];

// CVs a generar: cada fuente produce un PDF con el nombre indicado.
const cvs = [
  { source: path.join(root, 'cv', 'cv.html'), name: 'cv-es.pdf' },
  { source: path.join(root, 'cv', 'cv.en.html'), name: 'cv-en.pdf' },
];

// Alias de compatibilidad: cv.pdf sigue apuntando al CV en español.
const aliases = [{ from: 'cv-es.pdf', to: 'cv.pdf' }];

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

/** Imprime una fuente HTML a un PDF con Chrome headless. */
function printToPdf(chrome, source, output) {
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
}

function main() {
  for (const dir of outDirs) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const chrome = findChrome();
  const generated = [];

  for (const cv of cvs) {
    if (!fs.existsSync(cv.source)) {
      console.error(`[build-cv] No existe la fuente ${cv.source}`);
      process.exit(1);
    }

    // Genera en el primer directorio y copia al resto (evita relanzar Chrome).
    const primary = path.join(outDirs[0], cv.name);
    printToPdf(chrome, cv.source, primary);
    for (const dir of outDirs.slice(1)) {
      fs.copyFileSync(primary, path.join(dir, cv.name));
    }
    generated.push(cv.name);
  }

  for (const alias of aliases) {
    for (const dir of outDirs) {
      fs.copyFileSync(path.join(dir, alias.from), path.join(dir, alias.to));
    }
    generated.push(`${alias.to} (alias de ${alias.from})`);
  }

  console.log(`[build-cv] Generado con ${path.basename(chrome)}: ${generated.join(', ')}`);
  console.log(`[build-cv] En: ${outDirs.map((d) => path.relative(root, d)).join(', ')}`);
}

main();
