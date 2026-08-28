# Próximos pasos

> Backlog ejecutable: `tasks/todo.md`. Orden, riesgos y rollback: `tasks/plan.md`. Contexto completo: `SPEC.md`.

## P0 — Bloqueos para completar todos los casos

1. **Dokploy:** abrir una sesión autenticada o entregar las URLs públicas autorizadas. La sesión disponible durante el relevamiento expiró; no se intentó iniciar sesión ni recuperar credenciales.
2. **Contenido privado:** completar el checklist de `PROJECTS.md` para Bot Mamayucca, ERP Mamayucca, facturación, Misiones Muebles, Nico Scraper, Ceferina, Zuzaniuk, BarberAdmin y ZUBU Rentals.
3. **Dominio final:** confirmar la URL de producción para reemplazar `https://tobias.vercel.app` en metadata, sitemap y robots.
4. **ESLint:** autorizar el cambio de TypeScript 7 a una versión 6.x compatible con `typescript-eslint`. Typecheck y build pasan; lint queda bloqueado por incompatibilidad de herramientas.
5. **React Doctor:** autorizar su instalación local si querés agregar ese diagnóstico al gate; no existe un binario instalado y no se descargó tooling mutable sin permiso.

## P1 — Antes de publicar

1. Revalidar todos los enlaces públicos y revisar que ninguna demo haya agregado login.
2. Reemplazar portadas editoriales por capturas reales sólo cuando exista autorización.
3. Open Graph y Twitter card creados estáticamente con diseño editorial (`/opengraph-image`, `/twitter-image`).
4. Ejecutar Lighthouse en producción para LCP, CLS, INP, accesibilidad y SEO.
5. Probar teclado, 200% de zoom y `prefers-reduced-motion` en Chrome/Edge y Firefox.
6. Decidir si los archivos estáticos legacy de la raíz (`index.html`, `styles.css`) se archivan o eliminan; se conservaron para no borrar trabajo sin aprobación.

## P2 — Evolución opcional

- Filtros por área sólo si los 28 casos se vuelven difíciles de recorrer; la URL individual de cada caso ya existe.
- Transiciones de vista entre tarjeta y ficha si aportan continuidad y tienen fallback accesible.
- Una secuencia GSAP/ScrollTrigger únicamente si aparece una historia realmente dependiente del scroll; hoy Motion + CSS cubren el sistema con menor costo.
- CMS o fuente de datos externa cuando el ritmo de actualización justifique abandonar `lib/projects.ts`.
- Analítica respetuosa de privacidad sólo con decisión explícita sobre proveedor y consentimiento.

## Definición de terminado por proyecto

Un caso deja de estar “pendiente” cuando tiene copy validado, al menos una evidencia visual propia, estado de acceso correcto, enlaces comprobados, metadata, revisión móvil/escritorio y ninguna exposición de datos privados.
