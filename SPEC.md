# Spec: remaster del portfolio de Tobías Tarnowski

Estado: publicado y en iteración de contenido/densidad.
Última verificación de contenido: 28 de agosto de 2026.
Fuente de ejecución: este archivo define qué se construye; `DESIGN.md`, `PROJECTS.md` y `VERIFICATION.md` definen cómo se ve, qué evidencia puede publicarse y qué ya fue comprobado.

## 1. Objetivo

Transformar el portfolio estático original en un sitio moderno con Next.js, React, TypeScript y Motion. Debe presentar a Tobías como alguien que conecta desarrollo, automatización, IA, infraestructura, redes y hardware para resolver sistemas completos.

La referencia visual es NOTMID sólo por su escala tipográfica, contraste, ritmo editorial, fotografía protagonista y energía de movimiento. No se copia su ecommerce, su identidad, sus textos, su catálogo ni su composición exacta.

### Usuarios

- Potenciales clientes que quieren entender el problema resuelto y pedir contacto.
- Reclutadores y equipos técnicos que necesitan revisar evidencia, stack y criterio.
- Colaboradores o agentes que deben mantener el portfolio sin reconstruir contexto desde conversaciones anteriores.

### Resultado observable

1. La portada comunica “Conecto. Automatizo. Resuelvo.” dentro del primer viewport.
2. El índice muestra 27 casos con una ruta estática propia y tres familias de navegación.
3. Cada demo enlazada fue verificada sin login; cada sistema privado se explica sin exponer acceso.
4. La dirección visual, la evidencia y los próximos pasos quedan documentados en el repositorio.
5. Lint, typecheck y build pasan; cualquier gate opcional no ejecutado queda declarado, no oculto.

## 2. Supuestos confirmados por el trabajo existente

- El portfolio es una aplicación web pública, no una app nativa.
- El idioma principal es español de Argentina.
- No existe autenticación, base de datos ni CMS dentro de este repositorio.
- `lib/projects.ts` es la fuente de contenido y acceso de cada caso.
- Los despliegues privados de clientes no forman parte de la superficie pública.
- La ausencia de evidencia se representa con una portada editorial honesta.
- No se agregan dependencias, despliegues ni cambios de credenciales sin autorización explícita.

## 3. Stack fijado

| Capa | Tecnología | Versión |
|---|---|---:|
| Framework | Next.js App Router | 16.3.3 |
| UI | React / React DOM | 19.2.8 |
| Lenguaje | TypeScript | 7.0.2 |
| Movimiento | Motion | 13.1.1 |
| Estilos | CSS global con variables | local |
| Tipografía | Archivo + IBM Plex Mono | `next/font` |
| Lint | ESLint + eslint-config-next | 10.9.1 / 16.3.3 |

No incorporar Tailwind, GSAP, CMS, librerías de componentes o analítica por defecto. Deben justificar una necesidad que CSS + Motion no cubran y requieren aprobación para instalarse.

## 4. Comandos

```powershell
npm run dev
npm run typecheck
npm run build
npm run lint
npm run start
```

Los comandos usan las versiones fijadas del repositorio. Los resultados vigentes están en `VERIFICATION.md`; no modificar versiones sin aprobación.

## 5. Estructura y propiedad

| Ruta | Responsabilidad |
|---|---|
| `app/` | Rutas, metadata, sitemap, robots y estilos globales |
| `components/` | Hero, navegación, grilla, visuales y elementos reutilizables |
| `lib/projects.ts` | Modelo tipado y 27 fichas de proyecto |
| `public/project-covers/` | Capturas nuevas de demos públicas verificadas |
| `public/proyectos/` | Evidencia histórica, informes y galerías migradas |
| `public/images/` | Retrato e imágenes generales |
| `.impeccable/` | Tokens estructurados, configuración y capturas de revisión |
| `tasks/` | Plan de continuidad y backlog ejecutable |
| `DESIGN.md` | Contrato visual y de movimiento |
| `PRODUCT.md` | Público, posicionamiento y principios de producto |
| `PROJECTS.md` | Inventario de evidencia y estado de acceso |
| `VERIFICATION.md` | Gates y pruebas ya ejecutadas |
| `NEXT_STEPS.md` | Bloqueos y decisiones que necesita Tobías |
| `AGENTS.md` / `CLAUDE.md` | Protocolo para agentes futuros |

Los `index.html` y `styles.css` legacy de la raíz se conservan hasta que Tobías autorice archivarlos o eliminarlos.

## 6. Modelo de proyecto

Cada entrada de `lib/projects.ts` debe mantener esta forma conceptual:

```ts
type Project = {
  slug: string;
  title: string;
  category: string;
  group: "commerce" | "automation" | "infrastructure";
  year: string;
  index: string;
  summary: string;
  description: string[];
  result: string;
  stack: string[];
  cover?: string;
  coverAlt?: string;
  gallery: string[];
  links: { label: string; href: string }[];
  access: {
    label: "Demo pública" | "Repositorio público" | "Caso documentado" | "Despliegue privado";
    detail: string;
  };
  featured?: boolean;
  tone: "orange" | "ink" | "sand";
};
```

`group` controla únicamente la arquitectura del índice `/proyectos`; `category` conserva la descripción específica de cada caso. Las tres familias —comercio/plataformas/experiencias, sistemas/ERP/bots/automatización e infraestructura/hardware/3D— viven junto a los proyectos en `lib/projects.ts`. Web y marca se integran en comercio, mientras ERP, tienda y bot se modelan como productos separados.

### Invariantes de evidencia

1. `Demo pública` exige navegación sin login y sin acciones administrativas expuestas.
2. `Repositorio público` exige coincidencia inequívoca entre repo y caso.
3. Un login, PIN, DNS caído o 404 nunca se vende como demo.
4. Una captura nueva debe ser propia, local y tomada desde una superficie pública.
5. Una afirmación no confirmada se escribe como pendiente, nunca como hecho.

## 7. Diseño y movimiento

La fuente normativa completa es `DESIGN.md`. Estas invariantes permiten a un agente detectar una desviación rápida:

- Paleta: tinta casi negra, papel frío y un único naranja señal.
- Tipos: Archivo para contenido; IBM Plex Mono sólo para datos y estados.
- Forma: tarjetas y campos rectos; píldoras sólo para acciones principales.
- Composición: editorial, asimétrica, con fotografía/captura como evidencia.
- Archivo: tres capítulos anclables y grilla compacta 4/2/1; no confundir “caso” con “repositorio público”.
- Hero: entrada escalonada por máscaras, paralaje leve y CTA visible.
- CTAs en píldora: componente compartido `AnimatedPillLink`, con barrido circular direccional de 600ms y fallback sin desplazamiento.
- Loop: una sola cinta tecnológica; no agregar otra marquesina.
- Rendimiento: animar transform, opacidad o recorte acotado; evitar reflow.
- Fallback: el contenido debe quedar visible si falla el JavaScript de animación.
- Accesibilidad: foco visible, 44px táctiles, navegación semántica y movimiento reducido.

## 8. Estado verificable de marketing

La matriz completa vive en `PROJECTS.md` y `VERIFICATION.md`. Resumen para el siguiente agente:

- Públicas y enlazadas: ZUBU Agency, Agroveterinaria Gross tienda, Ceferina, Tienda OrdenYa, Yeryos, Tienda EMAG, EMAG Inmersivo, Tienda Mamayucca y Nutriado.
- Públicas con código confirmado: los repositorios que `lib/projects.ts` enlaza explícitamente.
- Privadas por credenciales o PIN: ERP OrdenYa y ERP Mamayucca.
- Inválida: la ruta compartida de Tienda Mamayucca `/ZUBU` terminó en 404; se usa el dominio público válido de Mamayucca.
- Dokploy: no se inició sesión, no se recuperaron credenciales y no se documentan paneles, IPs o IDs internos.

## 9. Estrategia de pruebas

| Nivel | Qué verifica | Estado |
|---|---|---|
| Tipos | Integridad del modelo y componentes | `npm run typecheck` pasa |
| Producción | Compilación y prerender de todas las rutas | Revalidar `npm run build` tras la iteración de 27 casos |
| Lint | Reglas estáticas | `npm run lint` pasa |
| Navegador | Hero, menú, grilla, casos y consola | Revisado en 390px y 1440px |
| Accesibilidad | Skip link, foco, semántica y reduced motion | Skip link comprobado; auditoría manual final pendiente antes de publicar |
| Enlaces | Demo pública vs. login/404/DNS | Verificado y documentado el 27/08/2026 |

Todo cambio visual debe volver a probar 390px, 768px y 1440px. Todo cambio en proyectos debe verificar enlaces y regenerar el build estático.

## 10. Límites operativos

### Siempre

- Leer `SPEC.md`, luego el documento específico del área a cambiar.
- Mantener `lib/projects.ts`, `PROJECTS.md` y `VERIFICATION.md` sincronizados.
- Ejecutar typecheck y build después de cambios de código o contenido estructural.
- Preservar privacidad, accesibilidad y fallback sin animación.
- Mantener cambios pequeños y reversibles.

### Preguntar antes

- Instalar o cambiar versiones de dependencias.
- Acceder a Dokploy o a cualquier panel autenticado.
- Publicar capturas de sistemas privados o nombres/resultados de clientes no autorizados.
- Desplegar, pushear, mergear, cambiar dominio, añadir analítica o borrar archivos legacy.

### Nunca

- Publicar secretos, credenciales, IPs privadas, variables de entorno o datos de clientes.
- Inventar métricas, tecnologías, repositorios o capturas.
- Copiar identidad o layout exacto de NOTMID.
- Silenciar un gate borrando una prueba, una regla o evidencia.

## 11. Qué ya está terminado y no debe rehacerse

- Migración a Next.js/React/TypeScript/Motion.
- Sistema visual tinta/papel/naranja y hero cinético.
- Índice de 27 casos y generación estática de 27 rutas.
- Capturas públicas locales y placeholders honestos para casos privados.
- Documentación de producto, diseño, evidencia, verificación y siguientes pasos.
- Responsive móvil/escritorio, corrección de títulos largos, menú y skip link.

Un agente nuevo debe continuar desde este estado. No debe reconstruir el proyecto, reemplazar el sistema visual ni volver a investigar enlaces ya fechados salvo que el trabajo sea revalidarlos.

## 12. Trabajo pendiente y dependencias

```text
P0 Evidencia privada autorizada ──┬──> completar casos privados
                                 └──> reemplazar placeholders aprobados

Dominio resuelto ───────────────────> metadata + sitemap + robots + OG

P1 Contenido completo ──────────────> QA 390/768/1440 + A11Y + Lighthouse
                                      └──> publicación autorizada
```

El backlog ejecutable está en `tasks/todo.md`; el orden y rollback están en `tasks/plan.md`.

## 13. Criterios de aceptación globales

1. `npm run typecheck` termina con código 0.
2. `npm run build` termina con código 0 y prerenderiza las 27 rutas de proyecto.
3. Ninguna página produce scroll horizontal a 390px, 768px o 1440px.
4. El primer `Tab` desde una carga limpia enfoca “Saltar al contenido”.
5. `prefers-reduced-motion` elimina paralaje y loop continuo sin ocultar contenido.
6. Cada enlace marcado como demo abre una página útil sin pedir credenciales.
7. Todo caso sin demo conserva una ficha interna con estado de acceso explícito.
8. Ninguna documentación contiene secretos, URLs de administración o datos internos de Dokploy.
9. `AGENTS.md` y `CLAUDE.md` apuntan a las mismas fuentes canónicas.

## 14. Fuera de alcance actual

- Autenticación, CMS, base de datos o panel de edición del portfolio.
- Copia exacta de NOTMID o transformación en ecommerce.
- Login automático en servicios privados.
- Configuración de un dominio personalizado distinto del alias público de Vercel.
- Métricas comerciales no entregadas por el usuario.
- Eliminación de los archivos legacy.

## 15. Preguntas abiertas para Tobías

1. ¿Qué capturas de ERP Mamayucca, Bot Mamayucca, Facturación, Misiones Muebles, Nico Scraper y ERP OrdenYa están autorizadas para publicación?
2. ¿Cuál es la URL oficial de Facebook de ZUBU Agency?
3. ¿Zuzaniuk tendrá una demo pública o debe permanecer como caso documentado con repositorio privado?

## 16. Rollback

- Los cambios de contenido se revierten restaurando la entrada afectada en `lib/projects.ts` y su fila documental.
- Las capturas nuevas se pueden retirar sin tocar la arquitectura si se pierde autorización.
- Los archivos legacy siguen disponibles como referencia hasta autorización explícita.
- No hay migraciones de datos, infraestructura ni estado externo en esta baseline.
