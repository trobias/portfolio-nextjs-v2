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
| Agroveterinaria Gross | Tienda pública principal + institucional secundaria | GIF del hero comercial y capturas propias | Confirmar stack y módulos del sistema privado |
| ZUBU Agency | Dominio + repo público | Captura vigente, repo `ZUBU3` y rol de cofundador confirmado por CV | Entregar URL oficial de Facebook |
| EMAG + SUBOT | Repo público | Material histórico de n8n/WhatsApp | Sin demo del bot en producción |
| Tienda EMAG | Demo pública | GIF del hero y captura propia | Repositorio privado |
| EMAG Inmersivo / GSAP | Demo pública en `/home2` | Captura propia y video de hero | Repositorio privado |
| Jarvis | Repo público | Capturas históricas del flujo | Sin demo: requiere permisos de Workspace |
| Facturación Mercado Pago + ARCA | Caso interno | Portada editorial | Diagrama desensibilizado, stack y estados reales |
| ERP Mamayucca | Despliegue privado con PIN + código local | Portada editorial; stack y módulos auditados localmente | Captura desensibilizada autorizada y resultado |
| Bot Mamayucca | Caso interno | Portada editorial | Canales, integraciones, diagrama y resultado |
| Misiones Muebles | Código local + despliegue privado | Portada editorial; alcance y stack auditados localmente | Captura desensibilizada o demo autorizada |
| Nico Scraper | Repo privado confirmado | Portada editorial | Fuente, pipeline, límites, salida y stack |
| Ceferina Accesorios | Demo pública | Captura propia del hero | Repositorio privado |
| Yeryos | Demo pública | GIF del hero y captura propia | Confirmar repositorio sólo si se hace público |
| Zuzaniuk | Código local + repo privado | GIF creado desde el video local del hero | Confirmar si tendrá demo pública |
| ERP OrdenYa | Despliegue privado con PIN | Portada editorial | Capturas autorizadas del ERP si corresponde |
| Tienda OrdenYa | Demo pública | Captura del catálogo Natural | Repositorio privado |
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
- Demos públicas: Mamayucca, tienda Agroveterinaria Gross, ZUBU Agency, Ceferina, Tienda EMAG, EMAG Inmersivo, Yeryos, Tienda OrdenYa y Nutriado.
- El ERP de OrdenYa y el ERP Mamayucca requieren credenciales o PIN; no se presentan como demos.
- La ruta compartida `tiendamamayucca.vercel.app/ZUBU` redirigió a una página 404; se conserva la tienda pública válida.
- El antiguo deploy `zubu-landing.vercel.app` devolvió 404 durante el relevamiento y no se publica como demo.
- Ceferina fue asociada a su dominio explícitamente entregado; Zuzaniuk se auditó desde la ubicación local entregada y conserva su repo remoto privado sin enlace público.

## Material que debe pedir cada ficha privada

- Una frase: problema y usuario real.
- Tres a cinco decisiones técnicas confirmadas.
- Stack exacto y responsabilidad de Tobías.
- Resultado verificable, sin métricas inventadas.
- Dos capturas desensibilizadas a 1600 × 1000 o una URL pública sin login.
- Autorización explícita para publicar nombres, marcas y capturas del cliente.
