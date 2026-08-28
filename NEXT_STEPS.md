# Próximos pasos

> Backlog ejecutable: `tasks/todo.md`. Orden, riesgos y rollback: `tasks/plan.md`. Contexto completo: `SPEC.md`.

## P0 — Bloqueos para completar todos los casos

1. **Dokploy:** abrir una sesión autenticada o entregar las URLs públicas autorizadas. La sesión disponible durante el relevamiento expiró; no se intentó iniciar sesión ni recuperar credenciales.
2. **Contenido privado:** completar el checklist de `PROJECTS.md` para Bot Mamayucca, ERP Mamayucca, facturación, Misiones Muebles, Nico Scraper, Ceferina, Zuzaniuk, BarberAdmin y ZUBU Rentals.
3. **ESLint:** autorizar el cambio de TypeScript 7 a una versión 6.x compatible con `typescript-eslint`. Typecheck y build pasan; lint queda bloqueado por incompatibilidad de herramientas.
4. **React Doctor:** autorizar su instalación local si querés agregar ese diagnóstico al gate; no existe un binario instalado y no se descargó tooling mutable sin permiso.

## P1 — Mejoras posteriores a la publicación

1. Revalidar todos los enlaces públicos y revisar que ninguna demo haya agregado login.
2. Reemplazar portadas editoriales por capturas reales sólo cuando exista autorización.
3. Open Graph y Twitter card creados estáticamente con diseño editorial (`/opengraph-image`, `/twitter-image`).
4. Ejecutar Lighthouse sobre `https://portfolio-nextjs-v2-ashen.vercel.app` para LCP, CLS, INP, accesibilidad y SEO.
5. Probar teclado, hover real, zoom 200% y `prefers-reduced-motion` en Chrome/Edge y Firefox.
6. Decidir si los archivos estáticos legacy de la raíz (`index.html`, `styles.css`) se archivan o eliminan; se conservaron para no borrar trabajo sin aprobación.


## P2 — Evolución opcional

- Filtros interactivos sólo si los cuatro capítulos actuales dejan de ser suficientes; cada caso ya conserva una URL estable y una categoría específica.
- Transiciones de vista entre tarjeta y ficha si aportan continuidad y tienen fallback accesible.
- Una secuencia GSAP/ScrollTrigger únicamente si aparece una historia realmente dependiente del scroll; hoy Motion + CSS cubren el sistema con menor costo.
- CMS o fuente de datos externa cuando el ritmo de actualización justifique abandonar `lib/projects.ts`.
- Analítica respetuosa de privacidad sólo con decisión explícita sobre proveedor y consentimiento.

## Definición de terminado por proyecto

Un caso deja de estar “pendiente” cuando tiene copy validado, al menos una evidencia visual propia, estado de acceso correcto, enlaces comprobados, metadata, revisión móvil/escritorio y ninguna exposición de datos privados.
