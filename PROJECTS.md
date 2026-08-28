# Inventario de proyectos y evidencia

> Contrato global: `SPEC.md`. Quality gates y verificación fechada: `VERIFICATION.md`.

Este archivo registra qué puede publicarse y qué falta confirmar. La fuente de verdad de las fichas renderizadas es `lib/projects.ts`; este inventario explica por qué cada enlace o portada existe.

## Política de publicación

1. Una demo se enlaza sólo si responde, se puede recorrer sin login y no expone datos o acciones administrativas.
2. GitHub se enlaza sólo si el repositorio es público y corresponde inequívocamente al caso.
3. Un despliegue privado puede mencionarse como evidencia de existencia, pero nunca se publica su panel, IP, credenciales o identificadores.
4. Si no hay evidencia pública, el caso conserva una página interna con lenguaje explícitamente provisional.
5. Las capturas públicas se guardan en `public/project-covers/`; no se hotlinkean imágenes de terceros.

## Estado actual

| Caso | Estado público | Evidencia / portada | Pendiente |
|---|---|---|---|
| Tienda Mamayucca | Demo pública | Captura propia de `mamayucca.com` | Confirmar repositorio si alguna vez se hace público |
| Agroveterinaria Gross | Dos demos públicas | Capturas institucional + tienda | Confirmar stack y módulos del sistema privado |
| ZUBU Agency | Dominio + repo público | Captura de `zubuagency.com`, repo `ZUBU3` | Reemplazar homepage 404 del repo si corresponde |
| EMAG + SUBOT | Demo + repo público | Captura de Tienda EMAG y material histórico de n8n/WhatsApp | Confirmar qué significa SUBOT dentro del alcance final |
| Jarvis | Repo público | Capturas históricas del flujo | Sin demo: requiere permisos de Workspace |
| Facturación Mercado Pago + ARCA | Caso interno | Portada editorial | Diagrama desensibilizado, stack y estados reales |
| ERP Mamayucca | Despliegue privado con PIN | Portada editorial | Módulos, stack, capturas autorizadas y resultado |
| Bot Mamayucca | Caso interno | Portada editorial | Canales, integraciones, diagrama y resultado |
| Misiones Muebles | Detectado en Dokploy | Portada editorial | URL pública autorizada o acceso autenticado para relevarlo |
| Nico Scraper | Caso interno | Portada editorial | Fuente, pipeline, límites, salida y stack |
| Ceferina Accesorios | Caso interno | Portada editorial | Dominio y material propios; no usar marcas homónimas |
| Yeryos | Demo pública | Captura propia de la tienda | Confirmar repositorio sólo si se hace público |
| Zuzaniuk | Caso interno | Portada editorial | Objetivo, stack, imágenes, demo o repo |
| Salazar Inmobiliaria | Demo pública | Captura propia del sitio | Confirmar stack y alcance técnico |
| OrdenYa | Catálogo público + ERP privado | Captura del catálogo Natural | Capturas autorizadas del ERP si corresponde |
| BarberAdmin | Despliegue con login | Portada editorial | Recorrido o capturas desensibilizadas autorizadas |
| Norte Gaming | Demo pública | Captura propia de la tienda | Confirmar repositorio sólo si se hace público |
| ZUBU Rentals | Dominio sin DNS | Portada editorial | Restaurar URL o entregar un dominio vigente |
| Nutriado | Demo + repo público | Captura pública | Confirmar alcance clínico/comercial antes de ampliar copy |
| Asistente IA RR.HH. | Repo + informe | Capturas existentes | Sin cambios urgentes |
| Process Simulator | Repo + informe | Captura de UI y foto del prototipo | Sin cambios urgentes |
| Nuevo Quaranta | Caso documentado | Galería propia | Sin cambios urgentes |
| Hackobo | Informe | Portada propia | Mantenerlo identificado como práctica académica |
| Animabed | Capturas propias | Galería histórica | Sin demo activa |
| GNS3 | Informe | Portada propia | Sin cambios urgentes |
| Enlaces inalámbricos | Informe | Portada propia | Sin cambios urgentes |
| Begapanku | Presentación + informe | Portada propia | Sin cambios urgentes |
| Control térmico Arduino | Simulación + informe | Portada propia | Verificar periódicamente Tinkercad |

## Fuentes verificadas

- Perfil público: `https://github.com/trobias`.
- Demos públicas: Mamayucca, Agroveterinaria Gross institucional, tienda Gross, ZUBU Agency, Tienda EMAG, Yeryos, Salazar Inmobiliaria, catálogo Natural de OrdenYa, Norte Gaming y Nutriado.
- `barberia.zubuagency.com`, el ERP de OrdenYa y el ERP Mamayucca requieren credenciales o PIN; no se presentan como demos.
- `rentals.zubuagency.com` no resolvió DNS y la ruta compartida `tiendamamayucca.vercel.app/ZUBU` redirigió a una página 404; ninguna se enlaza como demo.
- El antiguo deploy `zubu-landing.vercel.app` devolvió 404 durante el relevamiento y no se publica como demo.
- Las búsquedas de Ceferina, Zuzaniuk y otros nombres ambiguos no produjeron coincidencias atribuibles con seguridad; no se enlazaron resultados homónimos.

## Material que debe pedir cada ficha privada

- Una frase: problema y usuario real.
- Tres a cinco decisiones técnicas confirmadas.
- Stack exacto y responsabilidad de Tobías.
- Resultado verificable, sin métricas inventadas.
- Dos capturas desensibilizadas a 1600 × 1000 o una URL pública sin login.
- Autorización explícita para publicar nombres, marcas y capturas del cliente.
