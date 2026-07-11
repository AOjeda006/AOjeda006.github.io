# CV — fuente y generación del PDF

El CV publicado (`public/cv.pdf`, servido en la web y copiado a `docs/cv.pdf` en
el build) se genera a partir de una **fuente HTML mantenible**: [`cv/cv.html`](./cv.html).
Así el CV se versiona como texto y se regenera de forma reproducible, sin editar
el PDF a mano.

## Regenerar el PDF

```bash
npm run cv:pdf
```

El script [`scripts/build-cv.js`](../scripts/build-cv.js) renderiza `cv/cv.html`
con **Chrome headless** (`--print-to-pdf`) y escribe el resultado en
`public/cv.pdf` y `docs/cv.pdf`.

Chrome se localiza por este orden:

1. La variable de entorno `CHROME_BIN` (ruta explícita al ejecutable).
2. La instalación de Playwright bajo `PLAYWRIGHT_BROWSERS_PATH`.
3. `google-chrome` / `chromium` / `chrome` en el `PATH`.

Si no hay Chrome instalado:

```bash
CHROME_BIN=/ruta/a/google-chrome npm run cv:pdf
```

## Editar el CV

Edita **solo** `cv/cv.html` (texto y estilos van en el mismo archivo, es
autónomo) y vuelve a ejecutar `npm run cv:pdf`. El documento está pensado para
ocupar 2 páginas A4; si añades contenido, revisa el resultado para que no se
descuadre la paginación.
