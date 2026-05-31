# Portfolio · Angular SPA

Portfolio personal como **Single Page Application** en Angular 21 (standalone, sin
NgModules ni router), construido siguiendo **Clean Architecture** y los **principios
SOLID**, y optimizado para desplegarse en **GitHub Pages**.

Estética _dark & creative_: fondo `#0a0a0f`, acento violeta `#7c6ff7`, tipografía
**Syne** (títulos) + **Space Mono** (etiquetas/código).

---

## 🏛️ Arquitectura

El código se organiza por capas, con las dependencias apuntando siempre hacia el dominio:

```
src/app/
├── core/
│   ├── domain/            # Entidades + puertos (interfaces de repositorio)
│   │   ├── models/        # Project, Stat, SocialLink, Profile
│   │   └── repositories/  # ProjectRepository, ProfileRepository + InjectionTokens
│   ├── application/       # Casos de uso (una responsabilidad cada uno)
│   │   └── use-cases/     # GetProjects, GetProfile, GetStats, GetSocialLinks
│   └── infrastructure/    # Adaptadores: implementaciones in-memory de los puertos
│       ├── data/          # Datos (todo el texto placeholder con // TODO)
│       ├── repositories/  # InMemory*Repository
│       └── data-access.providers.ts
├── shared/
│   ├── animations/        # Triggers de @angular/animations (fadeUp, listStagger)
│   ├── directives/        # appReveal (IntersectionObserver), appCountUp (contador)
│   ├── services/          # ScrollService (scrollIntoView)
│   └── utils/             # onceInView (helper de IntersectionObserver)
├── presentation/          # Un componente por sección
│   ├── nav/  hero/  about/  projects/  contact/  footer/
├── app.ts                 # Shell: compone todas las secciones en orden
└── app.config.ts          # Providers (animations + binding puerto→adaptador)
```

**SOLID en la práctica**

- **S**RP: cada caso de uso, directiva y componente tiene una única razón para cambiar.
- **O**CP: añadir un nuevo origen de datos (HTTP, CMS) = nuevo adaptador, sin tocar dominio ni presentación.
- **L**SP: cualquier `*Repository` puede sustituir al in-memory sin romper a los consumidores.
- **I**SP: puertos pequeños y enfocados (`ProjectRepository`, `ProfileRepository`).
- **D**IP: los componentes dependen de **tokens** abstractos, no de implementaciones concretas (`app.config.ts` hace el binding).

---

## 🚀 Puesta en marcha

```bash
npm install        # instala dependencias
npm start          # servidor de desarrollo en http://localhost:4200
npm run build      # build de producción (sale en docs/)
npm run lint       # ESLint, debe pasar sin warnings
npm test           # tests unitarios (Vitest)
```

---

## ✏️ Cómo personalizarlo

Todo el contenido editable está marcado con comentarios `// TODO:` para encontrarlo rápido
(`grep -r "TODO:" src`). Lo principal vive en archivos de datos, separado de la UI:

| Qué cambiar | Archivo |
|---|---|
| Bio, rol, nombre, pills de tecnologías, ruta del CV | [`src/app/core/infrastructure/data/profile.data.ts`](src/app/core/infrastructure/data/profile.data.ts) |
| Estadísticas (años, proyectos…) | mismo archivo, constante `STATS` |
| Links de email / GitHub / LinkedIn | mismo archivo, constante `SOCIAL_LINKS` |
| Proyectos (título, categoría, tecnologías, GitHub) | [`src/app/core/infrastructure/data/projects.data.ts`](src/app/core/infrastructure/data/projects.data.ts) |
| Iniciales del logo (`TN_`) | [`src/app/presentation/nav/nav.component.ts`](src/app/presentation/nav/nav.component.ts) |
| Líneas del título gigante y texto decorativo | [`src/app/presentation/hero/hero.component.ts`](src/app/presentation/hero/hero.component.ts) |
| Textos del footer | [`src/app/presentation/footer/footer.component.ts`](src/app/presentation/footer/footer.component.ts) |
| Título/`<meta>` de la página | [`src/index.html`](src/index.html) |
| Colores y tipografías (CSS custom properties) | [`src/styles.scss`](src/styles.scss) |

**CV**: coloca tu PDF en `public/cv.pdf` (o cambia `cvUrl` en `profile.data.ts`). Todo lo que
hay en `public/` se copia tal cual al build.

---

## 🌐 Despliegue en GitHub Pages

El build se publica desde la carpeta **`docs/`** de la rama principal.

```bash
npm run deploy
```

Este comando:

1. Ejecuta `ng build --output-path docs --base-href ./` (rutas relativas, válidas en Pages).
2. Vía `postdeploy`, genera `docs/404.html` (copia de `index.html`) y `docs/.nojekyll`.

Luego sube los cambios y activa Pages:

```bash
git add docs && git commit -m "Deploy" && git push
```

En **Settings → Pages** del repositorio, selecciona:

- **Source**: _Deploy from a branch_
- **Branch**: `main` · carpeta **`/docs`**

> Hay además un `.nojekyll` en la raíz del repo para desactivar el procesado de Jekyll.

---

## ✨ Características

- SPA standalone (sin NgModules), navegación por **scroll suave** con `scrollIntoView` + fragments (sin router).
- Animaciones con `@angular/animations` + `IntersectionObserver`:
  - Fade + slide-up al entrar cada sección.
  - **Stagger** (100 ms) en las cards de proyectos.
  - **Contador animado** (0 → valor) en las estadísticas.
  - Nav con fondo `backdrop-filter: blur` al hacer scroll.
- Diseño responsive con menú hamburguesa en móvil.
- `ChangeDetectionStrategy.OnPush` + signals en todos los componentes.
