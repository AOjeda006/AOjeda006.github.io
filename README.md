# Portfolio — Andrés Ojeda Rodríguez

Portfolio personal de Andrés Ojeda Rodríguez, desarrollador backend & full-stack.

🔗 **Web en vivo:** https://aojeda006.github.io

## Stack

- **Angular 21** — standalone components, signals y `ChangeDetectionStrategy.OnPush`
- **TypeScript** y **SCSS**
- **Vitest** para los tests
- **Arquitectura limpia** por capas: `domain` / `application` / `infrastructure` / `presentation`

## Desarrollo local

```bash
npm install
npm start        # ng serve → http://localhost:4200
```

## Build y despliegue

```bash
npm run deploy
```

Genera la carpeta `docs/` con `ng build --output-path docs --base-href ./` y un paso
posterior (`scripts/finalize-pages.js`) que crea `404.html` y `.nojekyll` y aplana la
salida del build. GitHub Pages sirve el sitio desde `/docs`.

## Contenido editable

El contenido del portfolio vive en `src/app/core/infrastructure/data/`:

- [`projects.data.ts`](src/app/core/infrastructure/data/projects.data.ts) — proyectos
- [`profile.data.ts`](src/app/core/infrastructure/data/profile.data.ts) — perfil, stats y redes

## Licencia

PolyForm Noncommercial 1.0.0 — ver [LICENSE.md](LICENSE.md).
