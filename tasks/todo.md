# Backlog ejecutable

Cada tarea cabe en una sesión enfocada y debe actualizar la documentación relacionada.

## Baseline completada

- [x] Migrar el portfolio a Next.js, React, TypeScript y Motion.
- [x] Implementar el sistema visual y de movimiento documentado en `DESIGN.md`.
- [x] Crear 28 rutas de proyecto desde `lib/projects.ts`.
- [x] Verificar y capturar las demos públicas disponibles.
- [x] Crear fallback editorial para proyectos privados o sin evidencia.
- [x] Validar typecheck, build, consola, teclado y responsive principal.

## Pendiente, bloqueado por decisión o material

- [x] Confirmar dominio de producción y actualizar metadata, sitemap y robots.
  - Acceptance: las tres superficies usan `portfolio-nextjs-v2-ashen.vercel.app` y el build de Vercel pasa.
  - Verify: `/robots.txt`, `/sitemap.xml`, metadata y rutas principales responden HTTP 200.
  - Files: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `VERIFICATION.md`.

- [ ] Autorizar y aplicar una versión TypeScript compatible con ESLint.
  - Acceptance: `npm run lint`, `npm run typecheck` y `npm run build` terminan con código 0.
  - Verify: ejecutar los tres comandos sin instalar tooling global.
  - Files: `package.json`, `package-lock.json`, `VERIFICATION.md`, `NEXT_STEPS.md`.

- [ ] Completar ERP Mamayucca con evidencia autorizada.
  - Acceptance: módulos, stack, responsabilidad y resultado están confirmados; las capturas no contienen datos operativos.
  - Verify: revisión humana de contenido y navegación móvil/escritorio.
  - Files: `lib/projects.ts`, `public/project-covers/`, `PROJECTS.md`, `VERIFICATION.md`.

- [ ] Completar Bot Mamayucca y Facturación Mercado Pago + ARCA.
  - Acceptance: cada caso tiene diagrama o captura aprobada y describe estados/error sin secretos.
  - Verify: no hay credenciales, comprobantes reales ni endpoints privados en el diff.
  - Files: `lib/projects.ts`, `public/project-covers/`, `PROJECTS.md`.

- [ ] Completar Misiones Muebles, Nico Scraper, Ceferina, Zuzaniuk y BarberAdmin.
  - Acceptance: cada caso tiene problema, usuario, stack, responsabilidad, resultado y evidencia autorizada, o conserva explícitamente su estado pendiente.
  - Verify: enlaces públicos sin login y build de las rutas.
  - Files: `lib/projects.ts`, `public/project-covers/`, `PROJECTS.md`, `VERIFICATION.md`.

- [ ] Revalidar o reemplazar ZUBU Rentals.
  - Acceptance: una URL vigente responde sin login o el caso continúa sin enlace y explica por qué.
  - Verify: navegación limpia, captura local y actualización de fecha.
  - Files: `lib/projects.ts`, `public/project-covers/`, `PROJECTS.md`, `VERIFICATION.md`.

## Pendiente antes de publicar

- [x] Crear Open Graph propio.
  - Acceptance: imagen local optimizada, metadata completa y preview legible.
  - Verify: inspección de metadata y build.
  - Files: `app/opengraph-image.tsx`, `app/twitter-image.tsx`.

- [ ] Ejecutar QA final en 390px, 768px y 1440px, zoom 200%, teclado y reduced motion.
  - Acceptance: sin overflow, contenido oculto, trampas de foco ni movimiento esencial.
  - Verify: registrar resultados en `VERIFICATION.md`.
  - Files: `VERIFICATION.md` y sólo los componentes que requieran corrección.

- [ ] Ejecutar Lighthouse sobre build de producción.
  - Acceptance: registrar LCP, CLS, INP, accesibilidad y SEO con fecha y entorno.
  - Verify: adjuntar o resumir el reporte en `VERIFICATION.md`.
  - Files: `VERIFICATION.md`.

- [x] Crear repositorio y deployment independientes.
  - Acceptance: `trobias/portfolio-nextjs-v2` está conectado al proyecto Vercel `portfolio-nextjs-v2` sin reemplazar `trobias/PORTFOLIO`.
  - Verify: deployment `Ready`, build de 36 páginas y seis rutas HTTP 200.
  - Files: `README.md`, `AGENTS.md`, `CLAUDE.md`, `VERIFICATION.md`.
