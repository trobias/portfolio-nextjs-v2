# Product

> Contexto de ejecución y estado de implementación: `SPEC.md`. Evidencia por caso: `PROJECTS.md`.

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Personas y empresas que buscan a alguien capaz de diseñar, integrar y mantener soluciones digitales completas.
- Reclutadores y equipos técnicos que necesitan evaluar rápidamente proyectos reales, criterio de ingeniería y amplitud de stack.
- Potenciales clientes que llegan desde una recomendación, GitHub o ZUBU Agency y quieren entender qué problema se resolvió antes de pedir una reunión.

> Nota de alcance: estos públicos se infieren del contenido existente del portfolio, de sus canales de contacto y del pedido de remasterización. Deben validarse si el posicionamiento comercial cambia.

## Product Purpose

El portfolio presenta el trabajo de Tobías Tarnowski como un archivo navegable de sistemas, automatizaciones, productos web, infraestructura, IA y hardware. Su objetivo es convertir proyectos dispersos entre GitHub, despliegues y documentación privada en casos claros que expliquen problema, enfoque, stack, resultado y nivel de acceso.

El éxito significa que una persona pueda entender en pocos segundos qué construye Tobías, recorrer evidencia real sin atravesar logins y llegar a un contacto directo con suficiente contexto.

## Positioning

El portfolio no separa desarrollo, automatización e infraestructura en disciplinas aisladas: muestra cómo se conectan para resolver operaciones reales, desde una interfaz pública hasta los flujos, APIs, datos y dispositivos que la sostienen.

## Operating Context

- Los proyectos pueden vivir en repositorios públicos, repositorios privados, despliegues públicos o instancias privadas administradas con Dokploy.
- Una demo sólo se publica cuando es accesible sin login y no expone datos, paneles internos ni operaciones sensibles.
- Un enlace a GitHub sólo se publica cuando el repositorio es público y corresponde inequívocamente al proyecto.
- Cuando no existe una salida pública segura, el portfolio ofrece una ficha interna que explica el caso sin inventar evidencia ni revelar infraestructura.

## Capabilities and Constraints

- Stack confirmado del portfolio: Next.js, React, TypeScript, CSS y Motion.
- Idioma principal: español de Argentina.
- Contenido principal: proyectos, fichas de caso, enlaces públicos verificados, imágenes propias o capturas de demos públicas y contacto.
- La migración preserva los informes, imágenes y archivos históricos existentes dentro de `public/`.
- No deben publicarse URLs administrativas, credenciales, secretos, datos de clientes, repositorios privados ni rutas internas de Dokploy.
- No deben atribuirse métricas, resultados comerciales, tecnologías o responsabilidades que no estén confirmadas.
- La fecha exacta, alcance técnico y evidencia de varios proyectos nuevos continúan abiertos y se documentan como pendientes en `PROJECTS.md`.

## Brand Commitments

- Nombre público: Tobías Tarnowski.
- Mensaje existente que se conserva: “Conecto. Automatizo. Resuelvo.”
- Dirección vinculante solicitada por el usuario: diseño moderno, expresivo y muy animado, inspirado en el ritmo editorial, contraste, escala y microinteracciones de NOTMID, sin copiar su ecommerce ni su identidad.
- El sistema debe sentirse técnico y humano; no como una plantilla SaaS, un dashboard genérico ni un clon del sitio de referencia.

## Evidence on Hand

- Portfolio estático original, sus textos y sus enlaces.
- Imágenes, capturas, documentos y archivos de proyectos históricos migrados a `public/images/` y `public/proyectos/`.
- Perfil público de GitHub: `https://github.com/trobias`.
- Repositorios públicos verificados para EMAG, Jarvis, Asistente IA de LinkedIn, Process Simulator y ZUBU3, entre otros.
- Demos públicas verificadas para Mamayucca, Agroveterinaria Gross, ZUBU Agency, Ceferina, Tienda EMAG, EMAG Inmersivo, Yeryos, Tienda OrdenYa y Nutriado.
- No hay evidencia pública confirmada todavía para todos los proyectos nuevos. El portfolio debe reconocer esa ausencia y usar una ficha interna, no fabricar una demo o captura.

## Product Principles

1. **La evidencia manda.** Cada enlace, captura y afirmación debe poder verificarse.
2. **El caso primero.** El visitante entiende problema, sistema y resultado antes de ver una lista de tecnologías.
3. **Privacidad por defecto.** La falta de acceso público se resuelve con documentación editorial, nunca exponiendo infraestructura privada.
4. **Movimiento con significado.** Las animaciones explican jerarquía, continuidad y energía; no bloquean contenido ni interacción.
5. **Exploración directa.** Todo proyecto tiene una URL propia y el siguiente paso siempre es visible.

## Accessibility & Inclusion

- Objetivo mínimo: WCAG 2.2 AA para contraste, navegación por teclado, foco visible, estructura semántica y alternativas textuales.
- Las áreas táctiles principales deben alcanzar al menos 44 × 44 px.
- `prefers-reduced-motion` debe mantener la comprensión y reducir desplazamientos, paralaje y bucles no esenciales.
- El sitio debe seguir siendo legible con zoom, textos largos, imágenes faltantes y JavaScript de animación no disponible.
