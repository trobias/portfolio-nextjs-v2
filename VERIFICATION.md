# Verificación del remaster

> Criterios de aceptación: `SPEC.md`. Si un resultado cambia, actualizar también `NEXT_STEPS.md` y la tarea correspondiente.

Fecha de revisión: 28 de agosto de 2026.

Producción: `https://portfolio-nextjs-v2-ashen.vercel.app`, proyecto Vercel independiente `portfolio-nextjs-v2`.

## Resultado técnico

| Control | Resultado | Evidencia |
|---|---|---|
| TypeScript | Pasa | `npm run typecheck` finaliza sin errores |
| Build de producción | Pasa | `npm run build` genera 35 páginas estáticas, incluidas 27 fichas de proyecto, Open Graph y Twitter card |
| Consola del navegador | Pasa | Sin mensajes de nivel `warn` o `error` en portada y catálogo |
| Overflow horizontal | Pasa | Portada, catálogo y caso largo verificados en escritorio y móvil |
| Teclado | Pasa | El primer `Tab` enfoca `Saltar al contenido` y apunta a `#main-content` |
| Detector de calidad visual | Pasa | El detector de Impeccable devuelve una lista vacía |
| ESLint | Pasa | `npm run lint` finaliza sin advertencias ni errores con el toolchain fijado |
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
- Catálogo: 27 tarjetas renderizadas y ancho del documento igual al viewport.
- `prefers-reduced-motion`: el código elimina desplazamientos esenciales y detiene el marquee; falta una pasada manual final en dos navegadores antes de publicar.

Las capturas de revisión base están en `.impeccable/review/desktop-home.png` y `.impeccable/review/mobile-home.png`.

## Iteración del archivo por categorías

Se verificó localmente la puerta visual al archivo, las miniaturas compactas, los tres grupos estructurales de `/proyectos` y el barrido circular direccional de los CTAs principales.

- `npm ci`: 337 paquetes fijados instalados, 0 vulnerabilidades reportadas.
- `npm run typecheck`: pasa.
- `npm run build`: pasa y genera las 36 rutas estáticas.
- `npm run lint`: pasa sin modificar dependencias.
- Revisión visual: 390px, 768px y 1440px sin pérdida horizontal después de ajustar el título, la introducción y el conteo móvil.
- Capturas nuevas: `.impeccable/review/archive-top-390.png`, `.impeccable/review/archive-top-768.png` y `.impeccable/review/archive-groups-1440.png`.

Publicación confirmada para el commit `81ff71a`:

- Deployment de producción `Ready` en 23 segundos y asociado a `portfolio-nextjs-v2-ashen.vercel.app`.
- Portada, `/proyectos` y `/proyectos/tienda-mamayucca` responden HTTP 200.
- Esa publicación fue reemplazada por la iteración de 27 casos y tres categorías documentada debajo.

## Verificación de enlaces aportados

| URL / producto | Estado observado | Decisión en el portfolio |
|---|---|---|
| ZUBU Agency | Pública, sin login | Demo y captura |
| Agroveterinaria Gross tienda | Pública, sin login | Demo y captura |
| Ceferina Accesorios | Pública, sin login | Demo y captura |
| OrdenYa ERP | Solicita usuario y PIN | No se enlaza como demo |
| OrdenYa Natural | Pública, sin login | Demo y captura |
| Yeryos | Pública, sin login | Demo y captura |
| Tienda EMAG | Pública, sin login | Demo propia separada del bot |
| EMAG Inmersivo `/home2` | Pública, sin login | Demo propia separada de Tienda EMAG |
| Mamayucca ERP | Redirige a panel con PIN | Página interna sin demo |
| Tienda Mamayucca `/ZUBU` | Redirige a una página 404 | Se conserva la demo pública válida en `mamayucca.com` |

## Iteración compacta y catálogo por producto

Verificación local del 28 de agosto de 2026:

- `npm run typecheck`: pasa.
- `npm run build`: pasa; genera 35 páginas estáticas y 27 rutas de caso.
- `npm run lint`: pasa sin advertencias ni errores.
- `/proyectos`: 27 tarjetas, tres familias y orden comercio → sistemas → infraestructura.
- Responsive: `scrollWidth === clientWidth` en 390, 768 y 1440 px, sin respuestas HTTP 4xx durante la navegación.
- Portada: ocho destacados en el orden solicitado y acceso “Ver todos” antes y después de la grilla.
- Medios: Ceferina, Gross, ZUBU y EMAG Inmersivo tienen capturas propias; Gross, Tienda EMAG, Yeryos y Zuzaniuk cargan GIF locales sin pasar por el optimizador de imágenes.
- Contacto: el `dialog` abre con foco en “Cerrar menú de contacto”, cierra con Escape y contiene Gmail, Outlook, Instagram, WhatsApp y fallback `mailto`.
- Teclado: en una carga limpia, el primer `Tab` enfoca “Saltar al contenido”.
- Movimiento reducido: la cinta queda sin animación y las transiciones del diálogo se reducen a duración mínima.
- Capturas: `.impeccable/review/archive-iteration-390.png`, `archive-iteration-768.png`, `archive-iteration-1440.png`, `featured-iteration-1440.png`, `contact-dialog-390.png` y `zubu-feature-1440.png`.

Publicación confirmada para el commit funcional `6ac5b2d`:

- Portada y `/proyectos` responden HTTP 200 con Ceferina, el menú de contacto y “3 categorías”.
- `/proyectos/emag-inmersivo-gsap` responde HTTP 200 en el alias de producción.
- El HTML publicado contiene los 27 casos y el CTA superior del archivo.

## Privacidad

No se inició sesión en Dokploy, no se intentó recuperar credenciales y no se registraron en la documentación URLs privadas de paneles, IPs ni identificadores internos. Las capturas locales provienen sólo de páginas públicas sin login.
