---
name: Portfolio de Tobías Tarnowski
description: Archivo editorial cinético de sistemas, automatización y producto digital.
colors:
  signal-orange: "#ff5a36"
  signal-orange-deep: "#d93f20"
  operational-ink: "#0b0b0b"
  archive-paper: "#efefe9"
  clean-paper: "#f8f7f2"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  sharp: "0"
  action-pill: "999px"
spacing:
  base: "4px"
  compact: "8px"
  control: "16px"
  section: "clamp(5rem, 10vw, 11rem)"
  page-inline: "clamp(1rem, 3vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.operational-ink}"
    rounded: "{rounded.action-pill}"
    padding: "14px 24px"
    height: "58px"
  status-label:
    backgroundColor: "{colors.clean-paper}"
    textColor: "{colors.operational-ink}"
    rounded: "{rounded.sharp}"
    padding: "10px 12px"
---

# Design System: Portfolio de Tobías Tarnowski

> Contexto de ejecución: `SPEC.md`. Producto: `PRODUCT.md`. Este archivo es la autoridad normativa para estilo, layout y movimiento.

## Overview

**Creative North Star: "El tablero editorial en movimiento"**

El portfolio se comporta como una pieza editorial de gran formato atravesada por la energía de un sistema en ejecución. La referencia de NOTMID se traduce en escala tipográfica, fotografía protagonista, contraste de campos completos y transiciones precisas; no se copia su identidad, su catálogo ni su estructura de ecommerce.

La personalidad es directa, técnica y humana. Los casos se presentan como evidencia de conexiones reales entre interfaz, datos, automatización, infraestructura y hardware. La densidad visual alterna bloques muy grandes con pausas amplias para que el recorrido tenga ritmo de estudio creativo y siga siendo fácil de leer.

El movimiento se concentra en una entrada focal del hero, un paralaje leve ligado al scroll, respuesta táctil de controles y una sola cinta continua. El contenido permanece visible sin animación y toda posición animada tiene alternativa para `prefers-reduced-motion`.

**Key Characteristics:**

- Tipografía de gran escala y composición asimétrica.
- Negro, papel frío y un único naranja señal.
- Fotografía o captura real cuando existe; portada editorial honesta cuando no.
- Superficies planas, cortes rectos y botones de acción en forma de píldora.
- Movimiento con jerarquía: una secuencia protagonista y estados secundarios breves.

## Colors

La paleta es restringida: un naranja de señal contra tinta casi negra y dos papeles fríos.

### Primary

- **Naranja señal:** acento único para la palabra activa del hero, CTAs, estados públicos, selección, foco y la cinta tecnológica.
- **Naranja señal profundo:** variante reservada para estados presionados o combinaciones que necesiten más contraste.

### Neutral

- **Tinta operacional:** fondo de portfolio, texto principal y regiones de alto contraste.
- **Papel de archivo:** fondo editorial principal; conserva una temperatura fría y evita el blanco genérico.
- **Papel limpio:** contraste suave para superficies secundarias y etiquetas.

**The One Signal Rule.** El naranja es el único acento cromático de marca; no introducir azules, violetas o gradientes como segunda voz.

**Excepción de autoría ZUBU.** La sección especial de ZUBU Agency puede usar su azul `#1688ff` y cian `#35d4ff` sobre tinta, únicamente dentro de ese bloque y de sus enlaces. La excepción identifica una marca cofundada y no se propaga al sistema del portfolio.

**The Field Rule.** El color ocupa campos completos o acciones concretas; no se dispersa en pequeñas decoraciones sin función.

## Typography

**Display Font:** Archivo (con Arial y sans-serif como respaldo)  
**Body Font:** Archivo (con Arial y sans-serif como respaldo)  
**Label/Mono Font:** IBM Plex Mono (con monospace como respaldo)

**Character:** Archivo aporta masa, claridad y un dibujo contemporáneo suficientemente neutro para que el contenido y las capturas lideren. IBM Plex Mono se limita a metadatos, estados y medición; nunca funciona como disfraz “tech”.

### Hierarchy

- **Display** (850, `clamp(3rem, 8vw, 6rem)`, 0.82): títulos de primer viewport y cierres; tracking mínimo de `-0.04em`.
- **Headline** (800–850, `clamp(2.65rem, 6.4vw, 6rem)`, 0.92): encabezados de sección y frases manifiesto.
- **Title** (750, `clamp(1.55rem, 3vw, 3.2rem)`, 1): títulos de proyectos y filas operativas.
- **Body** (400–650, 16–24px, 1.45–1.55): prosa con medida máxima aproximada de 65–75 caracteres.
- **Label** (500–600, 10–12px, `0.05em–0.08em`, mayúsculas): categorías, acceso y metadatos.

**The Six-Rem Ceiling.** Los titulares de producto no superan `6rem`; la energía proviene de la composición y el peso, no de texto que se recorta.

**The Mono Means Data Rule.** La monoespaciada sólo nombra estado, categoría, fecha, tecnología o medición.

## Layout

El margen horizontal usa `clamp(1rem, 3vw, 3rem)`. Las secciones alternan grillas de dos columnas, filas editoriales y campos a ancho completo; no hay una matriz visible decorativa. El espaciado vertical escala entre 5 y 11rem para separar capítulos, con más aire antes de un título que después.

Los proyectos destacados y el archivo completo comparten una grilla densa de cuatro columnas en escritorio, dos en tablet y una en móvil. El archivo se divide en tres capítulos explícitos —comercio/plataformas/experiencias, sistemas/ERP/bots/automatización e infraestructura/hardware/3D—. Marca y web se integran con comercio, mientras ERP, sistema, tienda y bot se muestran como productos distintos. Cada capítulo mantiene un ancla estable, conteo, descripción y categoría específica por tarjeta. Los puntos de control principales son 700px y 900px; se verifica además en 390px, 768px y 1440px.

**The Pace Rule.** Una región densa siempre desemboca en una región quieta; no concatenar seis secciones con el mismo patrón de tarjetas.

**The No Horizontal Loss Rule.** Nombres, URLs y títulos largos deben envolver; ninguna palabra puede exigir scroll horizontal.

## Elevation & Depth

El sistema es plano por defecto. La profundidad proviene de fotografía, recorte, campos cromáticos y contraste tonal. No se usan halos, glassmorphism ni sombras permanentes en tarjetas.

Los botones pueden adquirir un cambio leve de color y escala al interactuar. Las imágenes usan zoom y saturación en hover, sólo en dispositivos con puntero fino. El foco de teclado es un contorno sólido de 3px con separación de 4px.

**The Flat Evidence Rule.** Las capturas y fotografías se presentan como evidencia frontal; nunca dentro de mockups genéricos con sombras decorativas.

## Shapes

Las superficies, capturas, tarjetas y etiquetas tienen esquinas rectas. Los botones de acción principales son la única forma persistentemente redondeada. Las imágenes de grilla se recortan en 16:10 y las portadas internas pueden usar 4:3 cuando la evidencia lo requiere. La iteración densa reduce aproximadamente 40% la presencia visual del archivo mediante cuatro columnas, títulos menores, gaps cortos y un hero de índice comprimido. Todas las imágenes reservan dimensiones.

Las líneas divisorias son de 1px y baja opacidad. No se usan bordes laterales gruesos para producir énfasis; el énfasis se logra con escala, peso o cambio de campo.

## Components

### Buttons

- **Shape:** píldora de acción completa (`999px`) con altura mínima de 56–58px.
- **Primary:** naranja señal sobre tinta, padding de 14px × 24px.
- **Hover / Focus:** los CTAs en píldora usan un `fill sweep` circular. Una capa de 150% × 200% entra desde abajo (`translateY(76%) → 0`) en 600ms y sale por arriba (`0 → -76%`) al abandonar el control; el color del contenido cambia con 100ms de retraso. El foco de teclado reproduce la entrada, `prefers-reduced-motion` resuelve el cambio sin desplazamiento y `:active` aplica `scale(0.97)` durante 140–160ms.
- **Secondary:** enlace editorial con texto explícito y flecha del mismo sistema vectorial.

### Chips

- **Style:** las etiquetas de acceso son rectangulares, monoespaciadas y compactas; no son botones.
- **State:** naranja para evidencia pública prioritaria, papel para repositorio o documentación.

### Cards / Containers

- **Corner Style:** recto (`0`).
- **Background:** imagen/captura real o portada tipográfica que declara material pendiente.
- **Shadow Strategy:** ninguna sombra en reposo.
- **Border:** divisor superior de 1px entre imagen, metadatos y texto.
- **Behavior:** la tarjeta completa es enlace; hover sólo modifica la imagen y la flecha, sin levantar el contenedor.

### Navigation

- **Style:** wordmark a la izquierda, cuatro enlaces breves en desktop y `details/summary` nativo en móvil.
- **States:** subrayado que crece con transform en hover; foco naranja de 3px; área táctil mínima de 44px.
- **Mobile:** menú textual de alto contraste, sin navegación basada sólo en iconos.

### Signature Component: Hero cinético

Tres líneas aparecen mediante máscara vertical en 900ms con 80ms de separación. La imagen se desplaza como máximo 7% durante el primer tramo del scroll. La curva de llegada es `cubic-bezier(0.23, 1, 0.32, 1)`. Con movimiento reducido se conserva un fundido breve y se elimina el desplazamiento.

### Signature Component: Cinta tecnológica

Es el único loop continuo de la página. Usa movimiento lineal de 38s, se pausa en hover y queda estática con movimiento reducido. No agregar una segunda marquesina.

### Signature Component: Puerta al archivo

El acceso desde la portada al índice completo ocupa un campo naranja de ancho completo, declara cantidad de casos y categorías, y usa un titular de cierre en lugar de un enlace secundario. En hover, una capa de papel cruza el campo mediante `scaleX` y la flecha avanza; no hay loop ni cambio de layout.

La portada repite un acceso compacto antes de los destacados para que “Ver todos” sea visible antes de recorrer la grilla. La puerta naranja se conserva debajo como cierre, pero reduce su altura y escala tipográfica para sostener la nueva densidad.

### Signature Component: Menú de contacto

“Escribime” conserva el barrido direccional de la píldora y abre un `dialog` nativo. El panel entra en 220ms mediante `opacity + translate3d + scale`, bloquea el fondo, cierra con Escape, botón o click en backdrop y ofrece Gmail, Outlook, Instagram, WhatsApp y `mailto` como fallback. Con movimiento reducido elimina el desplazamiento.

### Movimiento del archivo por capítulos

Los encabezados y tarjetas se asientan al entrar al viewport mediante `animation-timeline: view()` como mejora progresiva: `translate3d(0, 1.5rem, 0)` y opacidad 0.55 hacia su estado natural. Si el navegador no soporta scroll timelines, el contenido aparece estático y completo. `prefers-reduced-motion` elimina la animación.

## Do's and Don'ts

### Do:

- **Do** usar capturas verificadas de demos públicas y registrar su fecha de verificación.
- **Do** explicar de forma visible cuándo un proyecto es privado o está pendiente de material.
- **Do** reservar el naranja para acción, foco y señal editorial.
- **Do** animar `transform`, `opacity` y recortes acotados; mantener el contenido visible por defecto.
- **Do** probar cada cambio en 390px, 768px y 1440px, con teclado y movimiento reducido.

### Don't:

- **Don't** copiar productos, textos, logos, composición exacta o identidad de NOTMID.
- **Don't** inventar demos, métricas, clientes, tecnologías o capturas de paneles privados.
- **Don't** introducir gradientes de texto, vidrio decorativo, cuadrículas de fondo o tarjetas de icono genéricas.
- **Don't** usar más de una cinta en loop, paralaje fuerte, `transition: all` o propiedades que provoquen reflow.
- **Don't** publicar dominios administrativos, secretos, datos de clientes o identificadores de Dokploy.
