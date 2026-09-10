# 🌲 Quiz: Árboles de Decisión y Clasificación en Machine Learning

Aplicación web interactiva, moderna y didáctica diseñada para evaluar y reforzar los conceptos fundamentales de la presentación de **Árboles de Decisión y Clasificación en Machine Learning**.

- **Competencia:** Python (Machine Learning)
- **Instructora:** Martha Ester Gómez Adasme
- **Aprendices del Proyecto:** Samuel Gutierrez Franco, Henry Jafet Caballero Mendoza, Juan José Gallego Bran, Emanuel Henao González, Alexis Gómez Pavas
- **Institución:** Centro de Servicios y Gestión Empresarial — SENA

---

## 🚀 Características Principales

1. **Preguntas Muy Fáciles y Didácticas (10 Preguntas)**
   - Extraídas directamente de las 11 diapositivas del PDF.
   - Retroalimentación explicativa inmediata con tips y justificación pedagógica en cada respuesta.
   - Puntuación dinámica: 100 puntos base + bonificación por rapidez + multiplicador de racha (combo).

2. **Sistema de Rankeo (Leaderboard Dinámico)**
   - Registro de jugador con nombre/apodo y selección de avatar (`🌲`, `⚡`, `🤖`, `🎓`, `🏆`, `🚀`).
   - Persistencia local en el navegador (`localStorage`).
   - Podio visual con medallas de Oro 🥇, Plata 🥈 y Bronce 🥉, y lista de posiciones con tiempo y aciertos.
   - Precargado con los nombres de los aprendices y la instructora para fomentar la competencia sana.

3. **Compartir en WhatsApp y Modo Desafío (Viral Challenge)**
   - **Botón directo de WhatsApp:** Genera un mensaje formateado con emojis, puntaje, aciertos, tiempo y enlace de reto.
   - **Enlace de Reto Directo:** Al compartir el link generado (`?retador=TuNombre&score=1350&avatar=🤖`), la persona que lo abra verá un banner de duelo:
     > *"⚔️ ¡[Nombre] te ha retado a superar su puntaje de [Puntaje] pts!"*
   - Al finalizar la partida, se despliega una tarjeta de duelo cara a cara (*Head-to-Head*) comparando ambos puntajes y declarando al ganador.

4. **Diseño Visual de Primer Nivel**
   - Estilo *Glassmorphism* oscuro con acentos esmeralda (`#10b981`) y cian neón (`#0ea5e9`).
   - Efectos de confeti de celebración en pantalla final.
   - Efectos de sonido sintetizados mediante la **Web Audio API** (sin depender de archivos de audio externos) con botón para silenciar.
   - Modal interactivo para revisar todas las respuestas y explicaciones tras completar el quiz.
   - 100% responsivo y optimizado para teléfonos celulares (ideal para abrir desde el enlace de WhatsApp).

---

## 🛠️ Cómo Ejecutar Localmente

### Opción 1: Abrir directamente el archivo
Haz doble clic en el archivo `index.html` en el explorador de archivos para abrirlo en Chrome, Edge o cualquier navegador.

### Opción 2: Usar un servidor local de Python
Abre una terminal o consola en esta carpeta y ejecuta:
```bash
python -m http.server 8080
```
Luego abre tu navegador en `http://localhost:8080`.

### Opción 3: Servidor con Node.js
```bash
npx serve .
```

---

## 🌐 Cómo Publicarlo en Internet Gratis (Para compartir por WhatsApp con toda la clase)

Para que cualquier persona pueda jugar desde su celular a través de WhatsApp sin necesidad de estar en tu misma red Wi-Fi, puedes subirlo gratis a cualquiera de estas plataformas:

### 1. GitHub Pages (Recomendado)
1. Sube los archivos (`index.html`, `styles.css`, `app.js`, `README.md`) a un repositorio en GitHub.
2. Ve a **Settings** > **Pages**.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Guarda y en 1 minuto tendrás un enlace público como:
   `https://tu-usuario.github.io/tu-repo/`

### 2. Vercel o Netlify (Sin instalar nada)
1. Entra a [vercel.com](https://vercel.com) o [netlify.com](https://netlify.com).
2. Arrastra y suelta la carpeta `quizzis`.
3. Te generará al instante un enlace seguro `https://...` listo para enviar por WhatsApp.

---

## 📁 Estructura del Proyecto

```
quizzis/
├── index.html                                                  # Estructura semántica, vistas y modal
├── styles.css                                                  # Estilos modernos, animaciones y glassmorphism
├── app.js                                                      # Lógica del juego, banco de preguntas, audio y ranking
├── Arboles-de-Decision-y-Clasificacion-en-Machine-Learning.pdf  # Presentación original de referencia
└── README.md                                                   # Guía de uso y despliegue
```
