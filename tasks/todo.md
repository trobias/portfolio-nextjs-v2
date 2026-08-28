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

- [ ] Confirmar dominio final y actualizar metadata, sitemap y robots.
  - Acceptance: las tres superficies usan el mismo dominio de producción y `npm run build` pasa.
  - Verify: inspeccionar `/robots.txt`, `/sitemap.xml` y metadata de `/`.
  - Files: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `NEXT_STEPS.md`.

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

- [ ] Revisar y autorizar deploy.
  - Acceptance: Tobías aprueba dominio, contenido privado publicado y destino de hosting.
  - Verify: revisión humana final; el agente no despliega por inferencia.
  - Files: documentación de deploy que se cree en ese momento.
