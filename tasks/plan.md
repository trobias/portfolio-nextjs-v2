# Plan de continuidad

Fuente: `SPEC.md`. Este plan parte de una baseline ya implementada y no autoriza instalaciones, acceso privado ni despliegues.

## Dependencias

```text
A. Decisiones de Tobías
   ├─ A1 dominio final [resuelto] ──> B1 metadata/SEO [completado]
   ├─ A2 evidencia privada ─────────> B2 completar casos privados
   └─ A3 Facebook ZUBU ─────────────> B3 completar canales de la agencia

B1 + B2 + B3
   └─> C. QA final 390/768/1440 + A11Y + Lighthouse
       └─> D. Revisión humana
           └─> E. Deploy sólo con autorización
```

## Fase 1: desbloqueos

1. Dominio y publicación resueltos con el repositorio y proyecto Vercel independientes; conservar el alias documentado hasta aprobar un dominio personalizado.
2. Obtener la URL oficial de Facebook de ZUBU Agency; no asociar resultados homónimos.

Checkpoint: `NEXT_STEPS.md` no contiene un bloqueo que ya fue resuelto.

## Fase 2: contenido y evidencia

1. Actualizar una ficha privada por sesión para limitar el cambio a `lib/projects.ts`, capturas y dos documentos.
2. Desensibilizar capturas antes de copiarlas a `public/project-covers/`.
3. Validar que toda métrica, tecnología y responsabilidad tenga fuente.

Checkpoint: cada ficha actualizada cumple las cinco invariantes de evidencia de `SPEC.md`.

## Fase 3: metadata y publicación

1. Reemplazar el dominio provisional en metadata, sitemap y robots.
2. Crear Open Graph propio con dimensiones y texto alternativo definidos.
3. Reejecutar typecheck, build, lint y revisión de navegador.
4. Ejecutar Lighthouse en una build servida como producción.

Checkpoint: los criterios de aceptación globales de `SPEC.md` pasan.

## Riesgos y mitigación

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Publicar panel privado | Exposición de operación o datos | No enlazar login/PIN; revisión de evidencia antes del build |
| Dominio o demo cambia | Enlace roto o login inesperado | Revalidar antes de cada release |
| Cambiar stack visual | Pérdida de coherencia | `DESIGN.md` es vinculante; revisión en tres viewports |
| Actualizar dependencias | Regresión de build | Versiones fijadas, aprobación previa y rollback de lockfile |
| Capturas con datos reales | Riesgo de privacidad | Usar demos públicas o material desensibilizado autorizado |

## Rollback

- Contenido: revertir sólo la entrada y evidencia del caso afectado.
- Tooling: restaurar `package.json` y `package-lock.json`, luego `npm ci` sólo con autorización.
- UI: revertir el componente/CSS de la tarea; no tocar el resto de la dirección visual.
- Deploy: no existe automatización en este repositorio; cualquier rollback de hosting se define al autorizar publicación.
