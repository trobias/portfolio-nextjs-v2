# Verificación del remaster

> Criterios de aceptación: `SPEC.md`. Si un resultado cambia, actualizar también `NEXT_STEPS.md` y la tarea correspondiente.

Fecha de revisión: 28 de agosto de 2026.

Producción: `https://portfolio-nextjs-v2-ashen.vercel.app`, proyecto Vercel independiente `portfolio-nextjs-v2`.

## Resultado técnico

| Control | Resultado | Evidencia |
|---|---|---|
| TypeScript | Pasa | `npm run typecheck` finaliza sin errores |
| Build de producción | Pasa | `npm run build` genera 36 páginas estáticas, incluidas 28 fichas de proyecto, Open Graph y Twitter card |
| Consola del navegador | Pasa | Sin mensajes de nivel `warn` o `error` en portada y catálogo |
| Overflow horizontal | Pasa | Portada, catálogo y caso largo verificados en escritorio y móvil |
| Teclado | Pasa | El primer `Tab` enfoca `Saltar al contenido` y apunta a `#main-content` |
| Detector de calidad visual | Pasa | El detector de Impeccable devuelve una lista vacía |
| ESLint | Bloqueado por toolchain | `typescript-eslint` todavía no soporta TypeScript 7.0; requiere autorización para fijar TypeScript 6.x |
| React Doctor | No ejecutado | No está instalado localmente; instalarlo o ejecutarlo con descarga requiere autorización |

## Producción y Git

- Repositorio público: `https://github.com/trobias/portfolio-nextjs-v2`, rama `main`.
- Proyecto Vercel: `portfolio-nextjs-v2`, conectado al repositorio para futuros despliegues desde Git.
- El primer deployment respondió 404 porque Vercel había creado el proyecto con preset `Other` y salida `public/`; se corrigió a `Next.js` con build, instalación y output en autodetección.
- El deployment final quedó `Ready` después de compilar TypeScript y generar 36 páginas.
- Portada, `/proyectos`, una ficha individual, `/robots.txt`, `/sitemap.xml` y `/opengraph-image` responden HTTP 200 en producción.
- La copia independiente no tiene dependencias instaladas localmente; el gate definitivo se ejecutó en el entorno limpio de Vercel mediante `npm install` y `npm run build`.

## Revisión visual

- Portada a 1440 × 900: jerarquía, capas del hero, navegación, CTA y animación asentada.
- Portada móvil a 390 × 844: título completo, CTA visible, menú desplegable usable y sin desplazamiento horizontal.
- Caso `facturacion-mercadopago-arca` en móvil: palabras largas y portada editorial contenidas dentro del viewport.
- Catálogo: 28 tarjetas renderizadas y ancho del documento igual al viewport.
- `prefers-reduced-motion`: el código elimina desplazamientos esenciales y detiene el marquee; falta una pasada manual final en dos navegadores antes de publicar.

Las capturas de revisión están en `.impeccable/review/desktop-home.png` y `.impeccable/review/mobile-home.png`.

## Verificación de enlaces aportados

| URL / producto | Estado observado | Decisión en el portfolio |
|---|---|---|
| ZUBU Agency | Pública, sin login | Demo y captura |
| Agroveterinaria Gross tienda | Pública, sin login | Demo y captura |
| Salazar Inmobiliaria | Pública, sin login | Demo y captura |
| OrdenYa ERP | Solicita usuario y PIN | No se enlaza como demo |
| OrdenYa Natural | Pública, sin login | Demo y captura |
| BarberAdmin | Redirige a login | Página interna sin demo |
| Yeryos | Pública, sin login | Demo y captura |
| Norte Gaming | Pública, sin login | Demo y captura |
| Tienda EMAG | Pública, sin login | Demo y captura dentro del caso EMAG + SUBOT |
| Mamayucca ERP | Redirige a panel con PIN | Página interna sin demo |
| Tienda Mamayucca `/ZUBU` | Redirige a una página 404 | Se conserva la demo pública válida en `mamayucca.com` |
| ZUBU Rentals | El dominio no resuelve DNS | Página interna, pendiente de una URL vigente |

## Privacidad

No se inició sesión en Dokploy, no se intentó recuperar credenciales y no se registraron en la documentación URLs privadas de paneles, IPs ni identificadores internos. Las capturas locales provienen sólo de páginas públicas sin login.
