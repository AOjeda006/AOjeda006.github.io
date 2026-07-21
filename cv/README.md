# CV — fuente y generación del PDF

El CV se publica en **dos idiomas** a partir de sendas **fuentes HTML mantenibles**:

- Español → [`cv/cv.html`](./cv.html) → `public/cv-es.pdf`
- Inglés → [`cv/cv.en.html`](./cv.en.html) → `public/cv-en.pdf`

Además se genera `public/cv.pdf` como **alias del español** (compatibilidad con
enlaces antiguos). En el build, `public/` se copia a `docs/`, por lo que los tres
PDF acaban también en `docs/`.

Así el CV se versiona como texto y se regenera de forma reproducible, sin editar
el PDF a mano. Ambas fuentes comparten el mismo diseño (A4, 2 páginas); mantenlas
sincronizadas al cambiar contenido o estilos.

## Regenerar los PDF

```bash
npm run cv:pdf
```

El script [`scripts/build-cv.js`](../scripts/build-cv.js) renderiza cada fuente
con **Chrome headless** (`--print-to-pdf`) y escribe los resultados en `public/`
y `docs/` (`cv-es.pdf`, `cv-en.pdf` y el alias `cv.pdf`).

Chrome se localiza por este orden:

1. La variable de entorno `CHROME_BIN` (ruta explícita al ejecutable).
2. La instalación de Playwright bajo `PLAYWRIGHT_BROWSERS_PATH`.
3. `google-chrome` / `chromium` / `chrome` en el `PATH`.

Si no hay Chrome instalado:

```bash
CHROME_BIN=/ruta/a/google-chrome npm run cv:pdf
```

## Editar el CV

Edita el texto y los estilos en la fuente HTML correspondiente (`cv/cv.html`
para el español, `cv/cv.en.html` para el inglés; cada archivo es autónomo) y
vuelve a ejecutar `npm run cv:pdf`. Cada documento está pensado para ocupar
2 páginas A4; si añades contenido, revisa el resultado para que no se descuadre
la paginación ni queden encabezados de sección huérfanos al pie de página.
