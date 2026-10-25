# English for Communication

Sitio web de práctica autónoma de inglés con propósitos específicos (ESP) para la Licenciatura en Comunicación, CAA Virtual, BUAP.
Usa el mismo motor que *CAA English Practice*. Todo el contenido para alumnos está en inglés.

## Unidades (12)

Cada unidad se conecta con una materia disciplinar del plan de estudios 2016 (se omiten las de tronco común).

| Nivel | Unidad | Materia | Gramática / enfoque |
| --- | --- | --- | --- |
| A1 | Look at This Poster | Comunicación Visual | there is / there are, colores, formas, posición |
| A1 | Say Cheese! | Fotografía | imperativos, pronombres de objeto |
| A1 | On Air! | Lenguaje Sonoro / radio | presente simple (he/she/it), la hora, at/on/in |
| A1 | My Media Day | Estudios de Audiencia | adverbios de frecuencia, preguntas de encuesta |
| A2 | Breaking News | Taller de Periodismo | pasado simple, preguntas Wh- (las 5 W) |
| A2 | Behind the Cover | Diseño de Productos Editoriales / Edición Digital | comparativos y superlativos |
| A2 | Lights, Camera, Action! | Lenguaje y Producción Audiovisual | presente continuo, tipos de plano, secuenciadores |
| A2 | Going Viral | Gestión de Comunidades Virtuales | going to / will |
| B1 | Selling an Idea | Publicidad / Comunicación Integral de Mercadotecnia | primer condicional, unless, lenguaje persuasivo |
| B1 | The Press Release | Relaciones Públicas | presente perfecto vs. pasado, registro formal |
| B1 | Keep the Team Informed | Comunicación en las Organizaciones / Interna | must, have to, don't have to, should |
| B1 | Voices of the Community | Comunicación para el Desarrollo y el Cambio Social | used to, preguntas indirectas |

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal con las unidades, filtros por nivel y buscador (también busca por materia). |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad | `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `english-for-communication`.
2. Sube todo el contenido de esta carpeta (no la carpeta en sí).
3. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
4. El sitio queda en `https://TU-USUARIO.github.io/english-for-communication/`.

## Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon la materia en `subject` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html` (con `subject`).

## Notas

- **Speaking, actividad 1 (Voice practice):** el alumno elige un papel, la computadora lee al otro personaje y el alumno dice sus líneas. El reconocimiento de voz del navegador revisa si se entendió (75 % de las palabras o más). Funciona en Google Chrome y Microsoft Edge (y en Safari reciente). En otros navegadores aparece un aviso. El audio lo procesa el servicio de voz del navegador (en Chrome, Google); no se guarda en el sitio.
- **Speaking, actividad 2:** sigue siendo una grabación de evidencia para subir a la plataforma.

- El progreso se guarda en el navegador con la clave `esp:` (distinta de `caa:`), así que no se mezcla con el otro sitio aunque estén en la misma cuenta de GitHub.
- Los personajes de cada unidad tienen su voz (mujer/hombre) en `speakers` dentro de su `data.js`.
