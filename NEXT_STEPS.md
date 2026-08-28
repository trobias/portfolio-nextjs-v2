# Próximos pasos

> Backlog ejecutable: `tasks/todo.md`. Orden, riesgos y rollback: `tasks/plan.md`. Contexto completo: `SPEC.md`.

## P0 — Bloqueos para completar todos los casos

1. **Dokploy:** abrir una sesión autenticada o entregar las URLs públicas autorizadas. La sesión disponible durante el relevamiento expiró; no se intentó iniciar sesión ni recuperar credenciales.
2. **Contenido privado:** completar el checklist de `PROJECTS.md` para Bot Mamayucca, ERP Mamayucca, facturación, Misiones Muebles, Nico Scraper y ERP OrdenYa. Ceferina ya tiene demo; Zuzaniuk ya tiene evidencia local, pero no demo pública.
3. **React Doctor:** autorizar su instalación local si querés agregar ese diagnóstico al gate; no existe un binario instalado y no se descargó tooling mutable sin permiso.

## P1 — Mejoras posteriores a la publicación

1. Revalidar todos los enlaces públicos y revisar que ninguna demo haya agregado login.
2. Reemplazar portadas editoriales por capturas reales sólo cuando exista autorización.
3. Open Graph y Twitter card creados estáticamente con diseño editorial (`/opengraph-image`, `/twitter-image`).
4. Ejecutar Lighthouse sobre `https://portfolio-nextjs-v2-ashen.vercel.app` para LCP, CLS, INP, accesibilidad y SEO.
5. Probar teclado, hover real, zoom 200% y `prefers-reduced-motion` en Chrome/Edge y Firefox.
6. Entregar la URL oficial de Facebook de ZUBU Agency para completar su bloque social sin inventar un perfil.
7. Decidir si los archivos estáticos legacy de la raíz (`index.html`, `styles.css`) se archivan o eliminan; se conservaron para no borrar trabajo sin aprobación.
8. Autorizar una actualización compatible del toolchain de lint: la combinación fijada actualmente hace que `typescript-eslint` rechace TypeScript 7.0.2 antes de analizar el código.


## P2 — Evolución opcional

- Filtros interactivos sólo si los tres capítulos actuales dejan de ser suficientes; cada caso ya conserva una URL estable y una categoría específica.
- Transiciones de vista entre tarjeta y ficha si aportan continuidad y tienen fallback accesible.
- Una secuencia GSAP/ScrollTrigger únicamente si aparece una historia realmente dependiente del scroll; hoy Motion + CSS cubren el sistema con menor costo.
- CMS o fuente de datos externa cuando el ritmo de actualización justifique abandonar `lib/projects.ts`.
- Analítica respetuosa de privacidad sólo con decisión explícita sobre proveedor y consentimiento.

## Definición de terminado por proyecto

Un caso deja de estar “pendiente” cuando tiene copy validado, al menos una evidencia visual propia, estado de acceso correcto, enlaces comprobados, metadata, revisión móvil/escritorio y ninguna exposición de datos privados.
