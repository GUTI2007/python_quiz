/**
 * ==========================================================================
 * QUIZ INTERACTIVO: ÁRBOLES DE DECISIÓN Y CLASIFICACIÓN EN MACHINE LEARNING
 * Presentación: Instructora Martha Ester Gómez Adasme
 * Centro de Servicios y Gestión Empresarial - SENA
 * ==========================================================================
 */

// 1. BANCO DE PREGUNTAS (100% Fiel a las 11 diapositivas del PDF, opciones balanceadas en longitud)
const QUIZ_QUESTIONS = [
  {
    id: 1,
    slide: "Diapositiva 2: ¿Qué es un Árbol de Decisión?",
    question: "¿A qué tipo de aprendizaje en Machine Learning corresponden los Árboles de Decisión?",
    options: [
      { text: "Aprendizaje Supervisado", correct: true },
      { text: "Aprendizaje No Supervisado", correct: false },
      { text: "Aprendizaje por Refuerzo", correct: false },
      { text: "Aprendizaje Auto-asistido", correct: false }
    ],
    explanation: "¡Correcto! En la diapositiva 2 se indica que es un método de Aprendizaje Supervisado no paramétrico para clasificación y regresión."
  },
  {
    id: 2,
    slide: "Diapositiva 3: Componentes del Árbol",
    question: "¿Cuál es el punto de inicio del árbol donde se formula la primera pregunta sobre los datos?",
    options: [
      { text: "Nodo Hoja", correct: false },
      { text: "Nodo Raíz", correct: true },
      { text: "Rama Base", correct: false },
      { text: "Tronco ML", correct: false }
    ],
    explanation: "¡Exacto! Según la anatomía del árbol (diapositiva 3), el Nodo Raíz es el punto de partida y la primera evaluación."
  },
  {
    id: 3,
    slide: "Diapositiva 3: Anatomía del Árbol",
    question: "¿En qué componente del árbol se encuentran las predicciones o decisiones finales?",
    options: [
      { text: "Nodos Hoja", correct: true },
      { text: "Nodos Raíz", correct: false },
      { text: "Nodos Guía", correct: false },
      { text: "Sub-ramas", correct: false }
    ],
    explanation: "¡Muy bien! Los Nodos Hoja (diapositiva 3) contienen las predicciones finales (clases o valores predichos)."
  },
  {
    id: 4,
    slide: "Diapositiva 2 y 11: Estructura y Reglas",
    question: "¿Qué tipo de reglas lógicas aprende automáticamente un árbol a partir del entrenamiento?",
    options: [
      { text: "Reglas 'if-then-else'", correct: true },
      { text: "Matrices de Markov", correct: false },
      { text: "Series de Fourier", correct: false },
      { text: "Ecuaciones gaussianas", correct: false }
    ],
    explanation: "¡Excelente! La presentación destaca que genera reglas intuitivas 'if-then-else' (si-entonces-sino) similares a la toma de decisiones humana."
  },
  {
    id: 5,
    slide: "Diapositiva 4: Ventajas del Modelo",
    question: "¿Cuál es una ventaja clave de los Árboles de Decisión mencionada en la presentación?",
    options: [
      { text: "Requieren normalizar todas las variables obligatoriamente", correct: false },
      { text: "Son fáciles de interpretar y requieren preparación mínima", correct: true },
      { text: "Funcionan exclusivamente con datos numéricos continuos", correct: false },
      { text: "Ocultan su razonamiento comportándose como caja negra", correct: false }
    ],
    explanation: "¡Correcto! Diapositiva 4: Destacan por su interpretabilidad (fáciles de visualizar) y preparación mínima (no necesitan normalización)."
  },
  {
    id: 6,
    slide: "Diapositiva 5: Impureza de Gini",
    question: "En el criterio de división por Impureza de Gini, ¿qué representa un valor de Gini = 0?",
    options: [
      { text: "Nodo con división cancelada por falta de muestras", correct: false },
      { text: "Máxima mezcla y confusión binaria entre clases", correct: false },
      { text: "Nodo puro: todas las muestras son de una sola clase", correct: true },
      { text: "Presencia de un error en el cálculo de varianza", correct: false }
    ],
    explanation: "¡Exacto! Diapositiva 5: Gini = 0 representa un nodo puro (100% de una sola clase). En clasificación binaria, Gini ≈ 0.5 es máxima mezcla."
  },
  {
    id: 7,
    slide: "Diapositiva 8: Implementación en Python",
    question: "¿Cuál es la clase de Scikit-Learn para entrenar un árbol clasificador en Python?",
    options: [
      { text: "DecisionTreeClassifier", correct: true },
      { text: "LinearRegressionTree", correct: false },
      { text: "RandomForestSplitter", correct: false },
      { text: "SupportVectorClassifier", correct: false }
    ],
    explanation: "¡Genial! Diapositiva 8: La clase oficial en Scikit-Learn es DecisionTreeClassifier."
  },
  {
    id: 8,
    slide: "Diapositiva 8: Métodos de Scikit-Learn",
    question: "¿Qué método de Scikit-Learn se ejecuta para entrenar el modelo con los datos (X, y)?",
    options: [
      { text: "predict(X)", correct: false },
      { text: "score(X, y)", correct: false },
      { text: "fit(X, y)", correct: true },
      { text: "train(X, y)", correct: false }
    ],
    explanation: "¡Así es! Diapositiva 8: fit(X, y) entrena el modelo; predict(X) genera predicciones y score(X, y) calcula la precisión."
  },
  {
    id: 9,
    slide: "Diapositiva 9 y 10: Hiperparámetros y Sobreajuste",
    question: "¿Qué hiperparámetro limita la profundidad del árbol para prevenir el sobreajuste (overfitting)?",
    options: [
      { text: "criterion", correct: false },
      { text: "max_depth", correct: true },
      { text: "leaf_size", correct: false },
      { text: "bootstrap", correct: false }
    ],
    explanation: "¡Muy bien! Diapositiva 9 y 10: Limitar max_depth es la principal estrategia para evitar que el árbol crezca sin control y memorice datos."
  },
  {
    id: 10,
    slide: "Diapositiva 10: Técnicas contra el Sobreajuste",
    question: "¿Cómo se llama la técnica que simplifica el modelo eliminando ramas poco informativas?",
    options: [
      { text: "Poda (Pruning)", correct: true },
      { text: "Riego (Watering)", correct: false },
      { text: "Tala (Logging)", correct: false },
      { text: "Corte (Trimming)", correct: false }
    ],
    explanation: "¡Excelente! Diapositiva 10: La Poda (pruning) simplifica el modelo eliminando ramas poco informativas para mejorar la generalización."
  }
];

// 2. SISTEMA DE AUDIO SINTETIZADO (Web Audio API - Sin archivos externos)
class AudioManager {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, delay = 0) {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + delay;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playCorrect() {
    this.init();
    // Acorde ascendente victorioso
    this.playTone(523.25, 'triangle', 0.12, 0.15, 0.00); // C5
    this.playTone(659.25, 'triangle', 0.12, 0.15, 0.08); // E5
    this.playTone(783.99, 'triangle', 0.15, 0.18, 0.16); // G5
    this.playTone(1046.50, 'sine', 0.25, 0.20, 0.24);    // C6
  }

  playWrong() {
    this.init();
    // Tono grave descendente
    this.playTone(280, 'sawtooth', 0.18, 0.12, 0.00);
    this.playTone(200, 'sawtooth', 0.28, 0.12, 0.12);
  }

  playFanfare() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
    const delays = [0, 0.12, 0.24, 0.36, 0.52, 0.68];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.22, 0.18, delays[idx]);
    });
  }

  playClick() {
    this.init();
    this.playTone(800, 'sine', 0.04, 0.05, 0);
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }
}

// 3. SISTEMA DE RANKING Y PERSISTENCIA (Sincronización en la Nube en Tiempo Real)
class RankingManager {
  constructor() {
    this.storageKey = 'sena_tree_quiz_scores_v3';
    this.cache = this.getLocalScores();
    this.apiUrl = '/api/scores';
  }

  getLocalScores() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveLocalScores(scores) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(scores));
    } catch (e) {}
  }

  getScores() {
    return this.cache;
  }

  // Cargar puntajes desde la nube (Gist / API Vercel)
  async fetchCloudScores() {
    try {
      const res = await fetch(this.apiUrl, { cache: 'no-store' });
      if (res.ok) {
        const scores = await res.json();
        if (Array.isArray(scores)) {
          this.cache = scores;
          this.saveLocalScores(scores);
          return scores;
        }
      }
    } catch (e) {
      // Si está offline o en desarrollo local, continúa con la caché
    }
    return this.cache;
  }

  // Guardar puntaje en la nube y localmente
  async addEntry(player) {
    // Actualizar inmediatamente la caché local
    this.cache.push(player);
    this.cache.sort((a, b) => b.score - a.score || a.time - b.time);
    this.cache = this.cache.slice(0, 50);
    this.saveLocalScores(this.cache);

    // Enviar a la nube en segundo plano
    try {
      const res = await fetch(this.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player)
      });
      if (res.ok) {
        const updated = await res.json();
        if (Array.isArray(updated)) {
          this.cache = updated;
          this.saveLocalScores(updated);
          return updated;
        }
      }
    } catch (e) {
      console.warn("Error guardando en la nube:", e);
    }
    return this.cache;
  }

  // Limpiar puntajes de la nube y de la caché
  async clearScores() {
    this.cache = [];
    this.saveLocalScores([]);
    try {
      await fetch(this.apiUrl, { method: 'DELETE' });
    } catch (e) {
      console.warn("Error limpiando en la nube:", e);
    }
  }
}

// 4. MOTOR PRINCIPAL DE LA APLICACIÓN
class QuizApp {
  constructor() {
    this.audio = new AudioManager();
    this.ranking = new RankingManager();

    // Estado de la partida
    this.playerName = "";
    this.playerAvatar = "🌲";
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.userAnswers = [];
    this.questionStartTime = 0;
    this.totalTimerInterval = null;
    this.totalSeconds = 0;
    this.answeredCurrent = false;

    // Estado del retador (si llegó por link compartido)
    this.challenger = null;

    // Elementos del DOM
    this.dom = {
      // Vistas
      welcomeView: document.getElementById('welcome-view'),
      quizView: document.getElementById('quiz-view'),
      resultsView: document.getElementById('results-view'),

      // Reto
      challengeBanner: document.getElementById('challenge-banner'),
      challengeAvatar: document.getElementById('challenge-avatar'),
      challengeTitle: document.getElementById('challenge-title'),
      challengeSub: document.getElementById('challenge-sub'),
      duelCard: document.getElementById('duel-card'),
      duelUserAvatar: document.getElementById('duel-user-avatar'),
      duelUserName: document.getElementById('duel-user-name'),
      duelUserScore: document.getElementById('duel-user-score'),
      duelRivalAvatar: document.getElementById('duel-rival-avatar'),
      duelRivalName: document.getElementById('duel-rival-name'),
      duelRivalScore: document.getElementById('duel-rival-score'),
      duelVerdict: document.getElementById('duel-verdict'),

      // Formulario de inicio
      playerNameInput: document.getElementById('player-name'),
      avatarOptions: document.querySelectorAll('.avatar-opt'),
      startBtn: document.getElementById('start-quiz-btn'),

      // Barra superior del quiz
      quizStep: document.getElementById('quiz-step'),
      quizStreakBadge: document.getElementById('quiz-streak'),
      quizStreakCount: document.getElementById('streak-count'),
      quizCurrentScore: document.getElementById('current-score'),
      progressBar: document.getElementById('progress-bar-fill'),

      // Pregunta y opciones
      slideTag: document.getElementById('slide-tag'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),
      explanationCard: document.getElementById('explanation-card'),
      explanationHeader: document.getElementById('explanation-header'),
      explanationIcon: document.getElementById('explanation-icon'),
      explanationTitle: document.getElementById('explanation-title'),
      explanationText: document.getElementById('explanation-text'),
      nextBtn: document.getElementById('next-btn'),

      // Resultados
      finalTrophy: document.getElementById('final-trophy'),
      finalTitle: document.getElementById('final-title'),
      finalSubtitle: document.getElementById('final-subtitle'),
      finalBadge: document.getElementById('final-badge'),
      metricScore: document.getElementById('metric-score'),
      metricAccuracy: document.getElementById('metric-accuracy'),
      metricTime: document.getElementById('metric-time'),

      // Compartir
      whatsappBtn: document.getElementById('whatsapp-share-btn'),
      copyLinkBtn: document.getElementById('copy-challenge-btn'),
      playAgainBtn: document.getElementById('play-again-btn'),
      reviewAnswersBtn: document.getElementById('review-answers-btn'),

      // Ranking
      podiumWrapper: document.getElementById('podium-wrapper'),
      leaderboardList: document.getElementById('leaderboard-list'),

      // Modal de revisión
      reviewModal: document.getElementById('review-modal'),
      closeModalBtn: document.getElementById('close-modal-btn'),
      reviewModalBody: document.getElementById('review-modal-body'),

      // Toast & Audio Toggle
      soundToggleBtn: document.getElementById('sound-toggle-btn'),
      soundIcon: document.getElementById('sound-icon'),
      toast: document.getElementById('toast'),
      toastMessage: document.getElementById('toast-message')
    };

    this.init();
  }

  async init() {
    this.checkUrlChallenge();
    this.bindEvents();
    this.renderLeaderboard();

    // Sincronizar inmediatamente con la base de datos en la nube
    await this.syncWithCloud();

    // Polling en tiempo real cada 4 segundos para que los 16 aprendices se vean aparecer en vivo
    setInterval(() => {
      this.syncWithCloud();
    }, 4000);
  }

  async syncWithCloud() {
    await this.ranking.fetchCloudScores();
    this.renderLeaderboard();
  }

  // Detectar si el usuario abrió un link con reto (?retador=Alexis&score=1250&avatar=🤖)
  checkUrlChallenge() {
    const params = new URLSearchParams(window.location.search);
    const retador = params.get('retador') || params.get('challenger');
    const score = parseInt(params.get('score'), 10);
    const avatar = params.get('avatar') || '⚡';

    if (retador && !isNaN(score)) {
      this.challenger = { name: retador, score, avatar };
      this.dom.challengeBanner.style.display = 'flex';
      this.dom.challengeAvatar.textContent = avatar;
      this.dom.challengeTitle.textContent = `¡Desafío activo de ${retador}!`;
      this.dom.challengeSub.textContent = `Marcó ${score} pts. ¿Tienes lo necesario para superarlo?`;

      // Registrar al retador en el ranking para que todos los compañeros se vean en la tabla
      const existing = this.ranking.getScores();
      const alreadyHas = existing.some(e => e.name.toLowerCase() === retador.toLowerCase() && e.score === score);
      if (!alreadyHas) {
        this.ranking.addEntry({
          name: retador,
          avatar: avatar,
          score: score,
          correct: Math.min(10, Math.round(score / 140)),
          time: 40,
          date: new Date().toISOString().split('T')[0]
        });
      }
    }
  }

  bindEvents() {
    // Selección de Avatar
    this.dom.avatarOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        this.dom.avatarOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        this.playerAvatar = opt.getAttribute('data-avatar');
        this.audio.playClick();
      });
    });

    // Iniciar Quiz
    this.dom.startBtn.addEventListener('click', () => this.startQuiz());
    this.dom.playerNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.startQuiz();
    });

    // Siguiente Pregunta
    this.dom.nextBtn.addEventListener('click', () => this.handleNextQuestion());

    // Botones de Compartir
    this.dom.whatsappBtn.addEventListener('click', () => this.shareOnWhatsApp());
    this.dom.copyLinkBtn.addEventListener('click', () => this.copyChallengeLink());

    // Volver a Jugar
    this.dom.playAgainBtn.addEventListener('click', () => this.resetQuiz());

    // Modal de Revisión
    this.dom.reviewAnswersBtn.addEventListener('click', () => this.openReviewModal());
    this.dom.closeModalBtn.addEventListener('click', () => this.closeReviewModal());
    this.dom.reviewModal.addEventListener('click', (e) => {
      if (e.target === this.dom.reviewModal) this.closeReviewModal();
    });

    // Toggle de Sonido
    this.dom.soundToggleBtn.addEventListener('click', () => {
      const enabled = this.audio.toggleSound();
      this.dom.soundIcon.textContent = enabled ? '🔊' : '🔇';
      this.showToast(enabled ? 'Sonido activado' : 'Sonido silenciado');
    });

    // Reiniciar ranking a 0 en la nube y local
    const resetBtn = document.getElementById('reset-leaderboard-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', async () => {
        if (confirm('¿Estás seguro de que deseas reiniciar todos los puntajes a cero para todos los computadores?')) {
          await this.ranking.clearScores();
          this.renderLeaderboard();
          this.showToast('🗑️ Puntajes reiniciados a cero en la nube');
        }
      });
    }
  }

  startQuiz() {
    const rawName = this.dom.playerNameInput.value.trim();
    this.playerName = rawName || "Aprendiz ML";
    this.audio.playClick();

    // Reset de variables
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.userAnswers = [];
    this.totalSeconds = 0;

    // Iniciar cronómetro total
    clearInterval(this.totalTimerInterval);
    this.totalTimerInterval = setInterval(() => {
      this.totalSeconds++;
    }, 1000);

    // Cambiar de vista
    this.dom.welcomeView.style.display = 'none';
    this.dom.resultsView.style.display = 'none';
    this.dom.quizView.style.display = 'block';

    this.renderQuestion();
  }

  // Método de barajado aleatorio (Fisher-Yates) para que nunca se repita la posición ni la letra
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  renderQuestion() {
    this.answeredCurrent = false;
    const q = QUIZ_QUESTIONS[this.currentIndex];
    this.questionStartTime = Date.now();

    // Actualizar marcadores
    this.dom.quizStep.textContent = `Pregunta ${this.currentIndex + 1} de ${QUIZ_QUESTIONS.length}`;
    this.dom.quizCurrentScore.textContent = `${this.score} pts`;

    // Barra de progreso
    const pct = ((this.currentIndex) / QUIZ_QUESTIONS.length) * 100;
    this.dom.progressBar.style.width = `${pct}%`;

    // Contenido de la pregunta
    this.dom.slideTag.textContent = q.slide;
    this.dom.questionText.textContent = q.question;

    // Ocultar explicación y botón siguiente
    this.dom.explanationCard.classList.remove('visible');
    this.dom.nextBtn.style.display = 'none';

    // Barajar opciones para que la respuesta correcta NUNCA tenga una letra o posición fija
    const shuffledOptions = this.shuffleArray(q.options);
    this.currentShuffledOptions = shuffledOptions;

    // Generar opciones con letras A, B, C, D
    this.dom.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    shuffledOptions.forEach((optObj, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${optObj.text}</span>
      `;
      btn.addEventListener('click', () => this.handleAnswerSelect(idx, btn, optObj));
      this.dom.optionsContainer.appendChild(btn);
    });
  }

  handleAnswerSelect(selectedIndex, selectedBtn, selectedOptObj) {
    if (this.answeredCurrent) return;
    this.answeredCurrent = true;

    const q = QUIZ_QUESTIONS[this.currentIndex];
    const isCorrect = selectedOptObj.correct;
    const elapsedSeconds = (Date.now() - this.questionStartTime) / 1000;

    // Deshabilitar todos los botones de opciones
    const allButtons = this.dom.optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;

      // Cálculo de puntos: 100 base + bonificación de velocidad (hasta 40 pts si responde en < 6s) + bonus de racha
      const speedBonus = Math.max(0, Math.round((6 - elapsedSeconds) * 8));
      const streakBonus = (this.streak - 1) * 15;
      const pointsWon = 100 + speedBonus + streakBonus;
      this.score += pointsWon;

      selectedBtn.classList.add('correct');
      this.audio.playCorrect();

      // Mostrar racha
      if (this.streak >= 2) {
        this.dom.quizStreakBadge.style.display = 'flex';
        this.dom.quizStreakCount.textContent = `x${this.streak}`;
        this.dom.quizStreakBadge.classList.add('active');
        setTimeout(() => this.dom.quizStreakBadge.classList.remove('active'), 500);
      }
    } else {
      this.streak = 0;
      this.dom.quizStreakBadge.style.display = 'none';
      selectedBtn.classList.add('wrong');

      // Resaltar la respuesta correcta entre los botones de la pantalla
      this.currentShuffledOptions.forEach((opt, idx) => {
        if (opt.correct) {
          allButtons[idx].classList.add('correct');
        }
      });
      this.audio.playWrong();
    }

    // Buscar el texto de la opción correcta
    const correctOptObj = q.options.find(o => o.correct);

    // Guardar para revisión
    this.userAnswers.push({
      question: q,
      userText: selectedOptObj.text,
      correctText: correctOptObj.text,
      isCorrect,
      time: elapsedSeconds.toFixed(1)
    });

    // Actualizar puntaje visual
    this.dom.quizCurrentScore.textContent = `${this.score} pts`;

    // Mostrar tarjeta de explicación pedagógica
    this.dom.explanationHeader.className = `explanation-header ${isCorrect ? 'correct' : 'wrong'}`;
    this.dom.explanationIcon.textContent = isCorrect ? '✅' : '💡';
    this.dom.explanationTitle.textContent = isCorrect ? '¡Respuesta Correcta!' : 'Ten en cuenta:';
    this.dom.explanationText.textContent = q.explanation;
    this.dom.explanationCard.classList.add('visible');

    // Mostrar botón de siguiente
    this.dom.nextBtn.style.display = 'inline-flex';
    this.dom.nextBtn.textContent = (this.currentIndex === QUIZ_QUESTIONS.length - 1) ? 'Ver Resultados 🏆' : 'Siguiente Pregunta ➡️';
  }

  handleNextQuestion() {
    this.audio.playClick();
    this.currentIndex++;
    if (this.currentIndex < QUIZ_QUESTIONS.length) {
      this.renderQuestion();
    } else {
      this.finishQuiz();
    }
  }

  async finishQuiz() {
    clearInterval(this.totalTimerInterval);
    this.dom.progressBar.style.width = '100%';

    // Registrar en Leaderboard (Nube + Local)
    const entry = {
      name: this.playerName,
      avatar: this.playerAvatar,
      score: this.score,
      correct: this.correctCount,
      time: this.totalSeconds,
      date: new Date().toISOString().split('T')[0]
    };
    await this.ranking.addEntry(entry);

    // Cambiar a vista de resultados
    this.dom.quizView.style.display = 'none';
    this.dom.resultsView.style.display = 'block';

    // Rellenar métricas
    this.dom.metricScore.textContent = `${this.score}`;
    this.dom.metricAccuracy.textContent = `${this.correctCount}/${QUIZ_QUESTIONS.length}`;
    this.dom.metricTime.textContent = `${this.totalSeconds}s`;

    // Calificación y título dinámico
    if (this.correctCount === 10) {
      this.dom.finalTrophy.textContent = '👑';
      this.dom.finalTitle.textContent = `¡Puntaje Perfecto, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Dominas a la perfección los Árboles de Decisión y Scikit-Learn.";
      this.dom.finalBadge.textContent = "🌟 Maestro Supremo de ML";
    } else if (this.correctCount >= 8) {
      this.dom.finalTrophy.textContent = '🏆';
      this.dom.finalTitle.textContent = `¡Gran Desempeño, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Tienes conocimientos muy sólidos sobre los conceptos de la presentación.";
      this.dom.finalBadge.textContent = "🌲 Especialista en Árboles";
    } else if (this.correctCount >= 5) {
      this.dom.finalTrophy.textContent = '🥈';
      this.dom.finalTitle.textContent = `¡Buen intento, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Superaste la mayor parte del quiz. ¡Un repaso extra y llegarás a la cima!";
      this.dom.finalBadge.textContent = "⚡ Aprendiz Destacado";
    } else {
      this.dom.finalTrophy.textContent = '🌱';
      this.dom.finalTitle.textContent = `¡Ánimo, ${this.playerName}!`;
      this.dom.finalSubtitle.textContent = "Repasa las diapositivas de la Profe Martha Ester y vuelve a intentarlo.";
      this.dom.finalBadge.textContent = "🌱 Semilla en Crecimiento";
    }

    // Efectos de celebración
    this.audio.playFanfare();
    this.triggerConfetti();

    // Si había un retador activo, mostrar tarjeta de duelo Head-to-Head
    if (this.challenger) {
      this.dom.duelCard.classList.add('visible');
      this.dom.duelUserAvatar.textContent = this.playerAvatar;
      this.dom.duelUserName.textContent = this.playerName;
      this.dom.duelUserScore.textContent = `${this.score} pts`;

      this.dom.duelRivalAvatar.textContent = this.challenger.avatar;
      this.dom.duelRivalName.textContent = this.challenger.name;
      this.dom.duelRivalScore.textContent = `${this.challenger.score} pts`;

      if (this.score > this.challenger.score) {
        this.dom.duelVerdict.innerHTML = `🎉 <span style="color:var(--emerald-400)">¡Victoria! Has superado a ${this.challenger.name} por ${this.score - this.challenger.score} puntos.</span>`;
      } else if (this.score === this.challenger.score) {
        this.dom.duelVerdict.innerHTML = `🤝 <span style="color:var(--amber-400)">¡Empate técnico legendario con ${this.challenger.name}!</span>`;
      } else {
        this.dom.duelVerdict.innerHTML = `⚔️ <span style="color:var(--rose-500)">¡${this.challenger.name} mantiene la ventaja por ${this.challenger.score - this.score} pts! ¿Revancha?</span>`;
      }
    }

    // Actualizar tabla de ranking
    this.renderLeaderboard(entry);
  }

  // Generar y abrir enlace de WhatsApp con el mensaje formateado
  shareOnWhatsApp() {
    this.audio.playClick();
    const challengeUrl = this.getShareableUrl();
    const message = `🌲 *¡Te reto al Quiz de Árboles de Decisión (SENA)!* 🧠⚡\n\n` +
      `👤 Jugador: *${this.playerName}* ${this.playerAvatar}\n` +
      `🏆 Puntaje: *${this.score} pts* (${this.correctCount}/${QUIZ_QUESTIONS.length} aciertos)\n` +
      `⏱️ Tiempo: *${this.totalSeconds}s* | Racha Máxima: *${this.maxStreak}* 🔥\n\n` +
      `¿Crees que puedes superar mi puntaje? ¡Acepta el duelo aquí! 👇\n` +
      `${challengeUrl}`;

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  }

  // Copiar link de reto al portapapeles
  copyChallengeLink() {
    this.audio.playClick();
    const challengeUrl = this.getShareableUrl();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(challengeUrl).then(() => {
        this.showToast('📋 ¡Enlace de reto copiado al portapapeles!');
      }).catch(() => {
        this.fallbackCopyText(challengeUrl);
      });
    } else {
      this.fallbackCopyText(challengeUrl);
    }
  }

  fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showToast('📋 ¡Enlace de reto copiado!');
    } catch (err) {
      this.showToast('⚠️ No se pudo copiar automáticamente.');
    }
    document.body.removeChild(textArea);
  }

  getShareableUrl() {
    const baseUrl = window.location.origin + window.location.pathname;
    const cleanName = encodeURIComponent(this.playerName);
    const cleanAvatar = encodeURIComponent(this.playerAvatar);
    return `${baseUrl}?retador=${cleanName}&score=${this.score}&avatar=${cleanAvatar}`;
  }

  // Renderizar la tabla de posiciones
  renderLeaderboard(currentEntry = null) {
    const scores = this.ranking.getScores();

    // Si la tabla está en cero, mostrar estado vacío elegante
    if (!scores || scores.length === 0) {
      this.dom.podiumWrapper.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.2rem 1rem; color: var(--text-muted); background: rgba(255,255,255,0.02); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 2.3rem; margin-bottom: 0.4rem;">🌱</div>
          <div style="font-size: 1.05rem; font-weight: 700; color: #fff;">¡Tabla de posiciones en 0!</div>
          <div style="font-size: 0.85rem; margin-top: 0.25rem; color: var(--text-secondary);">Completa el quiz para ser el primer aprendiz en el ranking.</div>
        </div>
      `;
      this.dom.leaderboardList.innerHTML = '';
      return;
    }

    // 1. Podio (Top 3)
    const top3 = scores.slice(0, 3);
    const medals = ['🥇', '🥈', '🥉'];
    const podiumClasses = ['first', 'second', 'third'];

    this.dom.podiumWrapper.innerHTML = '';
    // Mapeo orden visual: 2do (izquierda), 1ro (centro), 3ro (derecha)
    const displayOrder = [1, 0, 2];

    displayOrder.forEach(idx => {
      const player = top3[idx];
      if (player) {
        const card = document.createElement('div');
        card.className = `podium-card ${podiumClasses[idx]}`;
        card.innerHTML = `
          <div class="podium-medal">${medals[idx]}</div>
          <div class="podium-avatar">${player.avatar || '🌲'}</div>
          <div class="podium-name" title="${player.name}">${player.name}</div>
          <div class="podium-score">${player.score} pts</div>
          <div class="podium-time">${player.correct}/10 • ${player.time}s</div>
        `;
        this.dom.podiumWrapper.appendChild(card);
      }
    });

    // 2. Lista de posiciones (4+) - Soporta holgadamente 16, 30 y hasta 50 aprendices
    const rest = scores.slice(3, 50);
    this.dom.leaderboardList.innerHTML = '';

    rest.forEach((player, i) => {
      const pos = i + 4;
      const isMe = currentEntry && currentEntry.name === player.name && currentEntry.score === player.score;
      const row = document.createElement('div');
      row.className = `ranking-row ${isMe ? 'current-player' : ''}`;
      row.innerHTML = `
        <div class="ranking-left">
          <span class="ranking-pos">#${pos}</span>
          <span class="ranking-avatar">${player.avatar || '👤'}</span>
          <span class="ranking-player-name">${player.name} ${isMe ? '(Tú)' : ''}</span>
        </div>
        <div class="ranking-right">
          <span class="ranking-time">${player.correct}/10 • ${player.time}s</span>
          <span class="ranking-score">${player.score} pts</span>
        </div>
      `;
      this.dom.leaderboardList.appendChild(row);
    });
  }

  // Modal de revisión de respuestas
  openReviewModal() {
    this.audio.playClick();
    this.dom.reviewModalBody.innerHTML = '';

    this.userAnswers.forEach((ans, i) => {
      const q = ans.question;
      const item = document.createElement('div');
      item.className = `review-item ${ans.isCorrect ? 'was-correct' : 'was-wrong'}`;

      item.innerHTML = `
        <div class="review-q-num">Pregunta ${i + 1} (${q.slide})</div>
        <div class="review-q-title">${q.question}</div>
        <div class="review-answer-status">
          ${ans.isCorrect ?
            `✅ Tu respuesta: <strong>${ans.userText}</strong>` :
            `❌ Marcaste: <em>${ans.userText}</em> | Correcta: <strong>${ans.correctText}</strong>`
          }
        </div>
        <div class="review-exp">${q.explanation}</div>
      `;
      this.dom.reviewModalBody.appendChild(item);
    });

    this.dom.reviewModal.classList.add('active');
  }

  closeReviewModal() {
    this.audio.playClick();
    this.dom.reviewModal.classList.remove('active');
  }

  resetQuiz() {
    this.audio.playClick();
    this.dom.resultsView.style.display = 'none';
    this.dom.welcomeView.style.display = 'block';
  }

  showToast(msg) {
    this.dom.toastMessage.textContent = msg;
    this.dom.toast.classList.add('show');
    setTimeout(() => {
      this.dom.toast.classList.remove('show');
    }, 3000);
  }

  // Efecto de confeti (Usa window.confetti si está cargado vía CDN, o canvas fallback)
  triggerConfetti() {
    if (typeof window.confetti === 'function') {
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#10b981', '#0ea5e9', '#fbbf24', '#c084fc'];

      (function frame() {
        window.confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        window.confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    } else {
      // Fallback simple por si se usa sin conexión a internet
      this.drawCanvasConfetti();
    }
  }

  drawCanvasConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#10b981', '#0ea5e9', '#fbbf24', '#f43f5e', '#a855f7'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        r: Math.random() * 6 + 4,
        d: Math.random() * 80,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: (Math.random() * 0.07) + .05,
        tiltAngle: 0
      });
    }

    let animationFrames = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.tilt = Math.sin(p.tiltAngle - (i / 3)) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + (p.r / 4), p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 4));
        ctx.stroke();
      }

      animationFrames++;
      if (animationFrames < 120) {
        requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    draw();
  }
}

// Iniciar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.app = new QuizApp();
});
