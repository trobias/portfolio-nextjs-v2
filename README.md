# Portfolio de Tobías Tarnowski

Portfolio editorial construido con Next.js, React, TypeScript y Motion. Presenta 27 casos entre comercio, software, ERP, bots, automatización, IA, redes, infraestructura y hardware.

- Repositorio: `https://github.com/trobias/portfolio-nextjs-v2`
- Producción: `https://tarnowski-portafolio.vercel.app`

## Inicio rápido

```powershell
npm run dev
npm run typecheck
npm run build
```

`npm run typecheck` y `npm run build` pasan con las versiones fijadas. `npm run lint` está bloqueado porque el `typescript-eslint` incluido no soporta TypeScript 7.0.2; no cambies dependencias sin autorización.

## Lectura para humanos y agentes

1. `SPEC.md`: estado completo, contrato de aceptación, límites y handoff.
2. `PRODUCT.md`: usuarios, posicionamiento y principios.
3. `DESIGN.md`: paleta, tipografía, layout, componentes y movimiento.
4. `PROJECTS.md`: inventario de evidencia, demos y casos privados.
5. `VERIFICATION.md`: pruebas ejecutadas y estado de los enlaces.
6. `NEXT_STEPS.md`: bloqueos que requieren decisión o material.
7. `tasks/plan.md` y `tasks/todo.md`: secuencia y backlog ejecutable.
8. `AGENTS.md` y `CLAUDE.md`: reglas operativas para asistentes.

## Regla principal

La evidencia manda. Una demo sólo se enlaza si funciona sin login; un repositorio sólo se enlaza si es público y corresponde al caso; un sistema privado se explica sin publicar paneles, credenciales, datos de clientes ni infraestructura interna.

Este repositorio es independiente del portfolio HTML legacy. El proyecto anterior continúa en `trobias/PORTFOLIO` y se publica en `https://antiguoportafoliotarnowski.vercel.app`; no se elimina ni se sobreescribe desde aquí.
