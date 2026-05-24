/**
 * Core Game Engine: Astroblast Space Spelling
 * Coordinates Canvas rendering, game loop, spelling target matching, physics, particles,
 * localized translations, and theme rendering.
 */

// Translations dictionary for full internationalization of the UI
const TRANSLATIONS = {
  ru: {
    lblShield: "Щит",
    lblScore: "Очки",
    lblLevel: "Уровень",
    lblLevelSelect: "Стартовый уровень:",
    startTitle: "КОСМОСПАСАТЕЛЬ",
    startSubtitle: "Защити космическую базу! Сбивай астероиды, нажимая буквы на клавиатуре. Учи алфавит весело!",
    startLblLang: "Выберите язык:",
    startLblMode: "Режим игры:",
    practiceMode: "📚 Практика (без проигрыша)",
    arcadeMode: "🚀 Аркада (на очки)",
    playBtn: "ПОЛЕТЕЛИ! 🚀",
    settTitle: "Настройки",
    settLblTheme: "Оформление:",
    settLblLang: "Язык обучения:",
    settLblMode: "Режим игры:",
    settLblSound: "Звуковые эффекты:",
    settLblVoice: "Озвучка букв:",
    settLblSpeed: "Скорость речи:",
    settClose: "Сохранить ⚙️",
    goTitle: "КОНЕЦ ИГРЫ",
    goSubtitle: "Защитный щит полностью разряжен!",
    goLblReachedScore: "Набранные очки:",
    goLblReachedLevel: "Максимальный уровень:",
    restartBtn: "ИГРАТЬ СНОВА 🔄",
    voiceOn: "Вкл",
    voiceOff: "Выкл",
    practiceName: "📚 Практика",
    arcadeName: "🚀 Аркада",
    themeNeon: "Неон 🌌",
    themeCartoon: "Мультик 🧸",
    themeRetro: "Ретро 📟",
    levelUpText: "УРОВЕНЬ ПОВЫШЕН!",
    levelSpeech: "Уровень ",
    victoryTitle: "ПОБЕДА! 🏆",
    victorySubtitle: "Космическая база спасена! Ты выучил все буквы и слова!"
  },
  en: {
    lblShield: "Shield",
    lblScore: "Score",
    lblLevel: "Level",
    lblLevelSelect: "Starting Level:",
    startTitle: "SPACE SPELLER",
    startSubtitle: "Defend the cosmic base! Destroy asteroids by typing letters on the keyboard. Learning is fun!",
    startLblLang: "Choose Language:",
    startLblMode: "Game Mode:",
    practiceMode: "📚 Practice (Relaxed)",
    arcadeMode: "🚀 Arcade (Challenging)",
    playBtn: "LET'S FLY! 🚀",
    settTitle: "Settings",
    settLblTheme: "Visual Theme:",
    settLblLang: "Learning Language:",
    settLblMode: "Game Mode:",
    settLblSound: "Sound Effects:",
    settLblVoice: "Voice Speech:",
    settLblSpeed: "Speech Speed:",
    settClose: "Save & Close ⚙️",
    goTitle: "GAME OVER",
    goSubtitle: "The protective shield is fully depleted!",
    goLblReachedScore: "Final Score:",
    goLblReachedLevel: "Max Level Reached:",
    restartBtn: "PLAY AGAIN 🔄",
    voiceOn: "On",
    voiceOff: "Off",
    practiceName: "📚 Practice",
    arcadeName: "🚀 Arcade",
    themeNeon: "Neon 🌌",
    themeCartoon: "Cartoon 🧸",
    themeRetro: "Retro 📟",
    levelUpText: "LEVEL UP!",
    levelSpeech: "Level ",
    victoryTitle: "VICTORY! 🏆",
    victorySubtitle: "Space base is saved! You successfully mastered all letters and words!"
  },
  es: {
    lblShield: "Escudo",
    lblScore: "Puntos",
    lblLevel: "Nivel",
    lblLevelSelect: "Nivel Inicial:",
    startTitle: "ORTO-COSMOS",
    startSubtitle: "¡Defiende la base cósmica! Destruye asteroides escribiendo letras. ¡Aprender es divertido!",
    startLblLang: "Elegir Idioma:",
    startLblMode: "Modo de juego:",
    practiceMode: "📚 Práctica (Relajado)",
    arcadeMode: "🚀 Arcade (Acción)",
    playBtn: "¡A VOLAR! 🚀",
    settTitle: "Ajustes",
    settLblTheme: "Aspecto visual:",
    settLblLang: "Idioma de estudio:",
    settLblMode: "Modo de juego:",
    settLblSound: "Efectos de sonido:",
    settLblVoice: "Pronunciación:",
    settLblSpeed: "Velocidad de voz:",
    settClose: "Guardar ⚙️",
    goTitle: "FIN DEL JUEGO",
    goSubtitle: "¡El escudo protector se ha agotado por completo!",
    goLblReachedScore: "Puntuación final:",
    goLblReachedLevel: "Nivel máximo alcanzado:",
    restartBtn: "JUGAR DE NUEVO 🔄",
    voiceOn: "Sí",
    voiceOff: "No",
    practiceName: "📚 Práctica",
    arcadeName: "🚀 Arcade",
    themeNeon: "Neón 🌌",
    themeCartoon: "Dibujos 🧸",
    themeRetro: "Retro 📟",
    levelUpText: "¡SUBIDA DE NIVEL!",
    levelSpeech: "Nivel ",
    victoryTitle: "¡VICTORIA! 🏆",
    victorySubtitle: "¡La base espacial está a salvo! ¡Has aprendido todas las letras y palabras!"
  },
  de: {
    lblShield: "Schild",
    lblScore: "Punkte",
    lblLevel: "Level",
    lblLevelSelect: "Start-Level:",
    startTitle: "BUCHSTABEN-JAGD",
    startSubtitle: "Verteidige die Weltraumbasis! Zerstöre Asteroiden durch Tippen. Lernen macht Spaß!",
    startLblLang: "Sprache wählen:",
    startLblMode: "Spielmodus:",
    practiceMode: "📚 Üben (Entspannt)",
    arcadeMode: "🚀 Arcade (Herausforderung)",
    playBtn: "LOS GEHT'S! 🚀",
    settTitle: "Einstellungen",
    settLblTheme: "Design-Stil:",
    settLblLang: "Lernsprache:",
    settLblMode: "Spielmodus:",
    settLblSound: "Soundeffekte:",
    settLblVoice: "Sprachausgabe:",
    settLblSpeed: "Sprachgeschwindigkeit:",
    settClose: "Speichern ⚙️",
    goTitle: "SPIEL VORBEI",
    goSubtitle: "Die Schutzschilde sind komplett zusammengebrochen!",
    goLblReachedScore: "Endpunktzahl:",
    goLblReachedLevel: "Maximales Level:",
    restartBtn: "NOCHMAL SPIELEN 🔄",
    voiceOn: "An",
    voiceOff: "Aus",
    practiceName: "📚 Üben",
    arcadeName: "🚀 Arcade",
    themeNeon: "Neon 🌌",
    themeCartoon: "Cartoon 🧸",
    themeRetro: "Retro 📟",
    levelUpText: "LEVEL UP!",
    levelSpeech: "Level ",
    victoryTitle: "SIEG! 🏆",
    victorySubtitle: "Weltraumbasis gerettet! Du hast alle Buchstaben und Wörter gelernt!"
  },
  fr: {
    lblShield: "Bouclier",
    lblScore: "Score",
    lblLevel: "Niveau",
    lblLevelSelect: "Niveau de départ:",
    startTitle: "L'ORBITE DES MOTS",
    startSubtitle: "Défends la base spatiale ! Détruis les astéroïdes en tapant les lettres. Apprendre est un jeu !",
    startLblLang: "Choisir la langue:",
    startLblMode: "Mode de jeu:",
    practiceMode: "📚 Entraînement (Zen)",
    arcadeMode: "🚀 Arcade (Défi)",
    playBtn: "C'EST PARTI ! 🚀",
    settTitle: "Configuration",
    settLblTheme: "Thème visuel:",
    settLblLang: "Langue d'étude:",
    settLblMode: "Mode de jeu:",
    settLblSound: "Effets sonores:",
    settLblVoice: "Voix parlée:",
    settLblSpeed: "Vitesse de parole:",
    settClose: "Enregistrer ⚙️",
    goTitle: "FIN DE PARTIE",
    goSubtitle: "Le bouclier de protection est entièrement déchargé !",
    goLblReachedScore: "Score final:",
    goLblReachedLevel: "Niveau max atteint:",
    restartBtn: "REJOUER 🔄",
    voiceOn: "Oui",
    voiceOff: "Non",
    practiceName: "📚 Entraînement",
    arcadeName: "🚀 Arcade",
    themeNeon: "Néon 🌌",
    themeCartoon: "Dessin 🧸",
    themeRetro: "Rétro 📟",
    levelUpText: "NIVEAU SUPERIEUR!",
    levelSpeech: "Niveau ",
    victoryTitle: "VICTOIRE! 🏆",
    victorySubtitle: "Base spatiale sauvée ! Tu as appris toutes les lettres et les mots !"
  },
  it: {
    lblShield: "Scudo",
    lblScore: "Punti",
    lblLevel: "Livello",
    lblLevelSelect: "Livello di partenza:",
    startTitle: "ASTRO-PAROLE",
    startSubtitle: "Difendi la base spaziale! Abbatti gli asteroidi digitando le lettere. Imparare è divertente!",
    startLblLang: "Scegli la lingua:",
    startLblMode: "Modalità di gioco:",
    practiceMode: "📚 Allenamento (Rilassato)",
    arcadeMode: "🚀 Arcade (Sfida)",
    playBtn: "DECOLLO! 🚀",
    settTitle: "Impostazioni",
    settLblTheme: "Tema grafico:",
    settLblLang: "Lingua di studio:",
    settLblMode: "Modalità di gioco:",
    settLblSound: "Effetti sonori:",
    settLblVoice: "Sintesi vocale:",
    settLblSpeed: "Velocità voce:",
    settClose: "Salva ⚙️",
    goTitle: "PARTITA FINITA",
    goSubtitle: "Lo scudo provvidenziale si è esaurito completamente!",
    goLblReachedScore: "Punteggio finale:",
    goLblReachedLevel: "Livello massimo:",
    restartBtn: "GIOCA ANCORA 🔄",
    voiceOn: "Sì",
    voiceOff: "No",
    practiceName: "📚 Allenamento",
    arcadeName: "🚀 Arcade",
    themeNeon: "Neon 🌌",
    themeCartoon: "Fumetto 🧸",
    themeRetro: "Retro 📟",
    levelUpText: "NUOVO LIVELLO!",
    levelSpeech: "Livello ",
    victoryTitle: "VITTORIA! 🏆",
    victorySubtitle: "Base spaziale salvata! Hai imparato con successo tutte le lettere e le parole!"
  }
};

const INVADER_MATRIX = [
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,0,0,1,0,0,0,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,0,0],
  [0,1,1,0,1,1,1,0,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,1,1,1,1,1,1,0,1],
  [1,0,1,0,0,0,0,0,1,0,1],
  [0,0,0,1,1,0,1,1,0,0,0]
];

const RETRO_SHIP_MATRIX = [
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,0,1,0,0,0,0],
  [0,0,0,1,1,0,1,1,0,0,0],
  [0,0,0,1,1,0,1,1,0,0,0],
  [0,0,1,1,0,0,0,1,1,0,0],
  [0,0,1,1,0,0,0,1,1,0,0],
  [0,0,1,1,1,0,1,1,1,0,0],
  [0,1,1,0,1,1,1,0,1,1,0],
  [0,1,1,1,1,0,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,1,0,1,1,1,1,1,0,1,1],
  [1,0,0,1,1,0,1,1,0,0,1],
  [0,0,0,1,0,0,0,1,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0]
];

class Game {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");

    // Game states: 'start', 'playing', 'settings', 'gameover'
    this.state = "start";
    
    // Configurations
    this.theme = "neon";
    this.lang = this.detectUserLanguage();
    this.mode = "practice"; // 'practice' or 'arcade'
    
    // Gameplay variables
    this.score = 0;
    this.level = 1;
    this.startLevel = 1; // User selectable starting level
    this.shield = 100;
    
    // Letter hit frequency tracker (needs 5 hits per active letter to level up)
    this.letterHits = {};
    this.slowMotionFactor = 1.0; // Dynamic speed factor in practice mode

    // Collections
    this.asteroids = [];
    this.lasers = [];
    this.particles = [];
    this.stars = [];
    
    // Spaceship settings
    this.ship = {
      x: 0,
      y: 0,
      width: 40,
      height: 48,
      angle: 0,
      recoil: 0,
      targetAngle: 0
    };

    // System buffers
    this.typingTarget = null; // Locked asteroid target currently being typed
    this.typedBuffer = ""; // Letters typed so far on locked target
    this.spawnTimer = 0;
    this.spawnInterval = 3200; // Time in ms between spawns (scales down with level)
    this.lastTime = 0;
    this.levelUpBannerTimer = 0;

    // Custom mobile styling tracking
    this.pressedKeys = new Set();

    // Setup listeners and bootstrap
    this.initDOM();
    this.initResize();
    this.initStarfield();
    this.applyTheme(this.theme);
    this.translateUI();

    // Initialize frequency trackers for default starting level
    this.initLevelLetterHits();
    this.updateHUDVisibility();

    // Start game rendering loop
    requestAnimationFrame((t) => this.loop(t));
  }

  /**
   * Automatically detects the user's browser language.
   * If the language is supported by the game, it returns it; otherwise, defaults to English.
   */
  detectUserLanguage() {
    try {
      const userLang = (navigator.language || navigator.userLanguage || "en").split("-")[0].toLowerCase();
      if (LANGUAGE_DATA[userLang]) {
        return userLang;
      }
    } catch (e) {
      console.warn("Could not detect user language, falling back to default:", e);
    }
    return "en"; // Standard default fallback
  }

  /**
   * Links game variables with DOM UI elements, setup button clicks.
   */
  initDOM() {
    // Settings gear button
    document.getElementById("btn-settings-gear").addEventListener("click", () => {
      audio.playClick();
      this.openSettings();
    });

    // Save/Close settings button
    document.getElementById("btn-save-settings").addEventListener("click", () => {
      audio.playClick();
      this.closeSettings();
    });

    // Start button
    document.getElementById("btn-start-game").addEventListener("click", () => {
      audio.playClick();
      this.startGame();
    });

    // Restart game button
    document.getElementById("btn-restart-game").addEventListener("click", () => {
      audio.playClick();
      this.restartGame();
    });

    // Theme selector click triggers (both Start and Settings screens)
    document.querySelectorAll("#sett-theme-control button, #start-theme-control button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        audio.playClick();
        const selTheme = e.currentTarget.getAttribute("data-theme");
        this.applyTheme(selTheme);
      });
    });

    // Speech slider adjustments
    const speechSlider = document.getElementById("sett-speech-speed");
    speechSlider.addEventListener("input", (e) => {
      audio.setSpeechRate(parseFloat(e.target.value));
    });

    // Sound switches
    document.querySelectorAll("#sett-sound-control button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        audio.playClick();
        const active = e.target.getAttribute("data-sound") === "on";
        audio.toggleSound(active);
        
        document.querySelectorAll("#sett-sound-control button").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
      });
    });

    // Voice switches
    document.querySelectorAll("#sett-voice-control button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        audio.playClick();
        const active = e.target.getAttribute("data-voice") === "on";
        audio.toggleVoice(active);
        
        document.querySelectorAll("#sett-voice-control button").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
      });
    });

    // Mode switch trigger (settings)
    document.querySelectorAll("#sett-mode-control button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        audio.playClick();
        const selMode = e.target.getAttribute("data-mode");
        this.setGameMode(selMode);
      });
    });

    // Mode switch trigger (start menu)
    document.querySelectorAll("#start-mode-control button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        audio.playClick();
        const selMode = e.target.getAttribute("data-mode");
        this.setGameMode(selMode);
      });
    });

    // Starting level trigger (start menu)
    document.querySelectorAll("#start-level-control button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        audio.playClick();
        const selLvl = parseInt(e.target.getAttribute("data-level"));
        this.setStartingLevel(selLvl);
      });
    });

    // Starting level trigger (settings menu)
    document.querySelectorAll("#sett-level-control button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        audio.playClick();
        const selLvl = parseInt(e.target.getAttribute("data-level"));
        this.setStartingLevel(selLvl);
      });
    });

    // Keyboard physical inputs listeners
    window.addEventListener("keydown", (e) => {
      if (this.state !== "playing") return;
      
      const char = e.key.toUpperCase();
      // Allow alphabet characters based on language or accent markers
      if (char.length === 1 && char.match(/[\p{L}\p{M}]/u)) {
        this.handleInputKey(char);
      }
    });
  }

  /**
   * Adjusts Canvas rendering resolution based on bounding containers.
   */
  initResize() {
    const resize = () => {
      // Clear fuzzy canvas issue by setting real resolution matching the displayed pixel bounds
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
      
      // Update ship positioning at bottom center
      this.ship.x = this.canvas.width / 2;
      this.ship.y = this.canvas.height - 35;
    };

    window.addEventListener("resize", resize);
    
    // Quick delay to ensure keyboard container height has populated inside CSS flex loop
    setTimeout(resize, 100);
  }

  /**
   * Initializes a set of scrolling stars for parallax backgrounds.
   */
  initStarfield() {
    this.stars = [];
    const starCount = 65;
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * 500, // Normalized X layout (scaled dynamically to canvas width)
        y: Math.random() * 800,
        speed: Math.random() * 0.8 + 0.2, // Smaller speeds are farther away
        size: Math.random() * 2.2 + 0.5,
        twinkle: Math.random()
      });
    }
  }

  /**
   * Localizes all static strings in overlay menus.
   */
  translateUI() {
    const dict = TRANSLATIONS[this.lang];

    // HUD labels
    document.getElementById("lbl-shield").innerText = dict.lblShield;
    document.getElementById("lbl-score").innerText = dict.lblScore;
    document.getElementById("lbl-level").innerText = dict.lblLevel;

    // Level Select labels
    document.getElementById("start-lbl-level-select").innerText = dict.lblLevelSelect;
    document.getElementById("sett-lbl-level-select").innerText = dict.lblLevelSelect;

    // Start Screen
    document.getElementById("start-title").innerText = dict.startTitle;
    document.getElementById("start-subtitle").innerText = dict.startSubtitle;
    document.getElementById("start-lbl-lang").innerText = dict.startLblLang;
    document.getElementById("start-lbl-mode").innerText = dict.startLblMode;
    const startThemeLbl = document.getElementById("start-lbl-theme");
    if (startThemeLbl) startThemeLbl.innerText = dict.settLblTheme;
    document.getElementById("start-btn-practice").innerText = dict.practiceMode;
    document.getElementById("start-btn-arcade").innerText = dict.arcadeMode;
    document.getElementById("btn-start-game").innerText = dict.playBtn;
    
    // Start Screen Themes
    const startThemeRetro = document.getElementById("start-theme-retro");
    if (startThemeRetro) startThemeRetro.innerText = dict.themeRetro;
    const startThemeNeon = document.getElementById("start-theme-neon");
    if (startThemeNeon) startThemeNeon.innerText = dict.themeNeon;
    const startThemeCartoon = document.getElementById("start-theme-cartoon");
    if (startThemeCartoon) startThemeCartoon.innerText = dict.themeCartoon;

    // Settings Screen
    document.getElementById("sett-title").innerText = dict.settTitle;
    document.getElementById("sett-lbl-theme").innerText = dict.settLblTheme;
    document.getElementById("sett-lbl-lang").innerText = dict.settLblLang;
    document.getElementById("sett-lbl-mode").innerText = dict.settLblMode;
    document.getElementById("sett-lbl-sound").innerText = dict.settLblSound;
    document.getElementById("sett-lbl-voice").innerText = dict.settLblVoice;
    document.getElementById("sett-lbl-speed").innerText = dict.settLblSpeed;
    document.getElementById("sett-btn-sound-on").innerText = dict.voiceOn;
    document.getElementById("sett-btn-sound-off").innerText = dict.voiceOff;
    document.getElementById("sett-btn-voice-on").innerText = dict.voiceOn;
    document.getElementById("sett-btn-voice-off").innerText = dict.voiceOff;
    document.getElementById("sett-btn-practice").innerText = dict.practiceName;
    document.getElementById("sett-btn-arcade").innerText = dict.arcadeName;
    document.getElementById("btn-save-settings").innerText = dict.settClose;

    // Settings Screen Themes
    const settThemeRetro = document.getElementById("sett-theme-retro");
    if (settThemeRetro) settThemeRetro.innerText = dict.themeRetro;
    const settThemeNeon = document.getElementById("sett-theme-neon");
    if (settThemeNeon) settThemeNeon.innerText = dict.themeNeon;
    const settThemeCartoon = document.getElementById("sett-theme-cartoon");
    if (settThemeCartoon) settThemeCartoon.innerText = dict.themeCartoon;

    // Game Over
    document.getElementById("go-title").innerText = dict.goTitle;
    document.getElementById("go-subtitle").innerText = dict.goSubtitle;
    document.getElementById("go-lbl-reached-score").innerText = dict.goLblReachedScore;
    document.getElementById("go-lbl-reached-level").innerText = dict.goLblReachedLevel;
    document.getElementById("btn-restart-game").innerText = dict.restartBtn;

    // Populate Segment Controls for languages
    this.renderLanguageControls();
  }

  /**
   * Generates dynamic language segment controls on start & settings card.
   */
  renderLanguageControls() {
    const parentIds = ["start-lang-control", "sett-lang-control"];
    
    parentIds.forEach(id => {
      const container = document.getElementById(id);
      if (!container) return;
      container.innerHTML = "";

      Object.keys(LANGUAGE_DATA).forEach(langCode => {
        const item = LANGUAGE_DATA[langCode];
        const btn = document.createElement("button");
        btn.className = `segment-btn ${this.lang === langCode ? "active" : ""}`;
        btn.innerText = item.nativeName;
        btn.addEventListener("click", () => {
          audio.playClick();
          this.setLanguage(langCode);
        });
        container.appendChild(btn);
      });
    });
  }

  /**
   * Switches language, rebuilds custom virtual keyboards.
   */
  setLanguage(langCode) {
    if (!LANGUAGE_DATA[langCode]) return;
    this.lang = langCode;
    
    // Clear typing locked target, words and lasers on screen when changing language mid-game
    this.typingTarget = null;
    this.typedBuffer = "";
    this.asteroids = [];
    this.lasers = [];

    this.translateUI();
    this.buildVirtualKeyboard();
    this.initLevelLetterHits();
  }

  /**
   * Updates game difficulty mode (Practice vs Arcade)
   */
  setGameMode(mode) {
    this.mode = mode;
    
    // Sync buttons active state
    document.querySelectorAll("#start-mode-control button, #sett-mode-control button").forEach(btn => {
      if (btn.getAttribute("data-mode") === mode) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    this.updateHUDVisibility();
    
    if (this.mode === "arcade") {
      this.shield = 100;
      this.updateShieldBar();
    }
  }

  /**
   * Toggles visibility of Shield and Score boards dynamically to declutter screen in Practice Mode.
   */
  updateHUDVisibility() {
    const shieldEl = document.getElementById("hud-shield-panel");
    const scoreEl = document.getElementById("hud-score-panel");
    
    if (this.mode === "practice") {
      if (shieldEl) shieldEl.style.display = "none";
      if (scoreEl) scoreEl.style.display = "none";
    } else {
      if (shieldEl) shieldEl.style.display = "flex";
      if (scoreEl) scoreEl.style.display = "flex";
    }
  }

  /**
   * Updates start level state and syncs UI segmented controls.
   */
  setStartingLevel(lvl) {
    this.startLevel = lvl;

    document.querySelectorAll("#start-level-control button, #sett-level-control button").forEach(btn => {
      if (parseInt(btn.getAttribute("data-level")) === lvl) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // If currently running (either playing or paused in settings), reset engine immediately
    if (this.state === "playing" || this.state === "settings") {
      this.level = lvl;
      document.getElementById("level-val").innerText = this.level;
      this.initLevelLetterHits();
      
      this.typingTarget = null;
      this.typedBuffer = "";
      this.asteroids = [];
      this.lasers = [];
      this.spawnInterval = Math.max(3000, 3500 - this.level * 100);
    }
  }

  /**
   * Switches aesthetic theme classes on the primary container.
   */
  applyTheme(themeName) {
    this.theme = themeName;
    const container = document.getElementById("game-container");
    const body = document.body;
    
    // Clear old theme body/containers
    body.className = `theme-${themeName}`;
    container.className = `theme-${themeName}`;

    // Update settings and start screen segment buttons state
    document.querySelectorAll("#sett-theme-control button, #start-theme-control button").forEach(btn => {
      if (btn.getAttribute("data-theme") === themeName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Redraw stars to fit theme aesthetics (e.g. cartoon vs vector retro dots)
    this.initStarfield();
  }

  /**
   * Generates a fully touch-optimized standard keys matrix in keyboard container.
   */
  buildVirtualKeyboard() {
    const container = document.getElementById("keyboard-container");
    container.innerHTML = "";

    const layout = LANGUAGE_DATA[this.lang].keyboardLayout;
    
    layout.forEach(row => {
      const rowDiv = document.createElement("div");
      rowDiv.className = "keyboard-row";

      row.forEach(char => {
        const keyBtn = document.createElement("div");
        keyBtn.className = "key";
        keyBtn.innerText = char;
        keyBtn.id = `vkey-${char}`;

        let lastTouchTime = 0;
        const pressHandler = (e) => {
          if (e.type === "mousedown" && Date.now() - lastTouchTime < 500) {
            return;
          }
          if (e.type === "touchstart") {
            lastTouchTime = Date.now();
          }

          if (e.cancelable) {
            e.preventDefault();
          }
          keyBtn.classList.add("pressed");
          if (this.state === "playing") {
            this.handleInputKey(char);
          }
        };

        const releaseHandler = () => {
          keyBtn.classList.remove("pressed");
        };

        keyBtn.addEventListener("touchstart", pressHandler);
        keyBtn.addEventListener("touchend", releaseHandler);
        keyBtn.addEventListener("touchcancel", releaseHandler);

        // Fallback for mouse clicks
        keyBtn.addEventListener("mousedown", pressHandler);
        keyBtn.addEventListener("mouseup", releaseHandler);
        keyBtn.addEventListener("mouseleave", releaseHandler);

        rowDiv.appendChild(keyBtn);
      });

      container.appendChild(rowDiv);
    });

    // Recalculate canvas resolution and ship bounds after keyboard is fully populated
    window.dispatchEvent(new Event("resize"));
  }

  /**
   * Maps unique alphabet letters in the level vocabulary to a hit tracker map.
   */
  initLevelLetterHits() {
    const data = LANGUAGE_DATA[this.lang];
    const vocabulary = data.levelWords[this.level - 1] || data.levelWords[data.levelWords.length - 1];

    this.letterHits = {};
    vocabulary.forEach(word => {
      for (let char of word) {
        this.letterHits[char] = 0;
      }
    });
  }

  /**
   * Evaluates input logic, matches keys to flying target spelling contents.
   */
  handleInputKey(char) {
    // If no target is currently locked, find a candidate asteroid
    if (!this.typingTarget) {
      const candidates = this.asteroids.filter(ast => ast.text.startsWith(char));
      
      if (candidates.length > 0) {
        // Tie breaker: Lock onto the candidate lowest on the screen (closest threat!)
        candidates.sort((a, b) => b.y - a.y);
        this.typingTarget = candidates[0];
        this.typedBuffer = char;
        
        // Highlight active visual key
        this.flashVirtualKey(char);
        
        // Face ship towards target
        this.lockShipRotation(this.typingTarget);
        
        // Core interaction handling: Single Letters vs Syllables/Words
        if (this.level === 1) {
          this.shootAndDestroyTarget();
        } else {
          // Play click/feedback for initial typing progress
          audio.playClick();
          // Check if syllable or word was single-letter long (edge cases)
          if (this.typedBuffer === this.typingTarget.text) {
            this.shootAndDestroyTarget();
          }
        }
      } else {
        // Input matches nothing, trigger brief visual vibration or ignore
        this.flashVirtualKey(char, true);
        audio.playError();
      }
    } else {
      // Locked target exists: Check if input matches the NEXT character in spelling sequence
      const nextCharNeeded = this.typingTarget.text.charAt(this.typedBuffer.length);
      
      if (char === nextCharNeeded) {
        this.typedBuffer += char;
        this.flashVirtualKey(char);
        this.lockShipRotation(this.typingTarget);

        if (this.typedBuffer === this.typingTarget.text) {
          // Words / Syllables completed! Ship shoots and destroys it
          this.shootAndDestroyTarget();
        } else {
          // Partial spelling success: small laser sound click
          audio.playClick();
        }
      } else {
        // Typo! Reset buffer, flash error, child starts spelling this locked item again
        this.typedBuffer = "";
        this.typingTarget = null;
        this.flashVirtualKey(char, true);
        audio.playError();
      }
    }
  }

  /**
   * Points ship turret vector direction towards active targeted asteroid coordinates.
   */
  lockShipRotation(target) {
    const dx = target.x - this.ship.x;
    const dy = target.y - this.ship.y;
    this.ship.targetAngle = Math.atan2(dy, dx) + Math.PI / 2; // Compensate for ship facing UP
  }

  /**
   * Fires laser beam and triggers spelling target explosion.
   */
  shootAndDestroyTarget() {
    const target = this.typingTarget;
    if (!target) return;

    // Launch laser beam entity
    this.lasers.push({
      x: this.ship.x,
      y: this.ship.y,
      targetX: target.x,
      targetY: target.y,
      progress: 0,
      speed: 0.15, // Travel speed parameter
      color: this.theme === "retro" ? "#33ff33" : (this.theme === "cartoon" ? "#ff3366" : "#00f0ff")
    });

    // Pronounce the word / syllable / letter
    audio.speak(target.text.toLowerCase(), this.lang);
    audio.playLaser();
    
    // Apply recoil effect on spaceship
    this.ship.recoil = 8;

    // Destroy target asteroid once laser arrives (delayed explosion for visual impact)
    const activeTarget = this.typingTarget;
    setTimeout(() => {
      this.explodeAsteroid(activeTarget);
    }, 120);

    // Reset keyboard buffer locks
    this.typingTarget = null;
    this.typedBuffer = "";
  }

  /**
   * Generates explosion particle bursts, calculates score rewards.
   */
  explodeAsteroid(ast) {
    const index = this.asteroids.indexOf(ast);
    if (index === -1) return; // Already destroyed/removed

    this.asteroids.splice(index, 1);
    audio.playExplosion();

    // Create particle debris
    const count = this.theme === "retro" ? 10 : 25;
    const colors = this.theme === "cartoon" 
      ? ["#ffd32a", "#ff9f43", "#ff6b6b", "#10ac84"] 
      : (this.theme === "retro" ? ["#33ff33"] : ["#00f0ff", "#ff007f", "#ffffff"]);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      
      this.particles.push({
        x: ast.x,
        y: ast.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.0,
        decay: Math.random() * 0.04 + 0.02
      });
    }

    // Increment hit frequencies for every character in the destroyed target word
    for (let char of ast.text) {
      if (this.letterHits[char] !== undefined) {
        this.letterHits[char] += 1;
      }
    }

    // Update Score: 1 point per letter in Arcade mode
    const pointsGained = ast.text.length * (this.mode === "arcade" ? 1 : 0);
    this.score += pointsGained;
    document.getElementById("score-val").innerText = String(this.score).padStart(4, "0");

    // Track progression: Level up only when all letters in active vocab are hit >= 5 times!
    let canLevelUp = true;
    for (let char in this.letterHits) {
      if (this.letterHits[char] < 5) {
        canLevelUp = false;
        break;
      }
    }

    if (canLevelUp) {
      this.triggerLevelUp();
    }
  }

  /**
   * Bumps game levels, modifies spelling content, plays level-up jingle.
   */
  triggerLevelUp() {
    this.level++;
    
    // Victory End check: Capped at 7 levels
    if (this.level > 7) {
      this.triggerGameEnd(true);
      return;
    }

    // Slow down spawning briefly, display glowing banner overlay
    this.levelUpBannerTimer = 180; // 3 seconds at 60fps
    
    audio.playLevelUp();
    
    const dict = TRANSLATIONS[this.lang];
    audio.speak(dict.levelSpeech + this.level, this.lang);

    // Update levels HUD display
    document.getElementById("level-val").innerText = this.level;

    // Reset active spelling hit count tracking maps for new level
    this.initLevelLetterHits();

    // Reset targeted locked buffers to prevent typing errors across transitions
    this.typingTarget = null;
    this.typedBuffer = "";

    // Adjust difficulty curves: increase spawn speed (gentler progression for kids)
    this.spawnInterval = Math.max(3000, 3500 - this.level * 100);
  }

  /**
   * Spawns fresh asteroids matching current level vocab.
   */
  spawnAsteroid() {
    const text = this.getSpellingContentForLevel();
    const radius = Math.max(22, text.length * 9 + 14);
    
    // Avoid spawning off canvas borders
    const x = Math.random() * (this.canvas.width - radius * 2) + radius;
    const y = -radius;

    // Speed curve scales up with levels (gentler progression for kids)
    const baseSpeed = 0.4 + this.level * 0.04;
    const vy = Math.random() * 0.3 + baseSpeed;

    let astColor = "#33ff33";
    if (this.theme === "retro") {
      const retroColors = ["#ffff00", "#ff00ff", "#00ffff", "#ff9900", "#33ff33", "#ff3333"];
      astColor = retroColors[Math.floor(Math.random() * retroColors.length)];
    } else {
      astColor = this.theme === "cartoon" ? "#ffd32a" : "#ff007f";
    }

    this.asteroids.push({
      x: x,
      y: y,
      vy: vy,
      text: text,
      radius: radius,
      color: astColor,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() * 0.02 - 0.01),
      maxPulse: Math.random() * 0.05 + 0.95
    });
  }

  /**
   * Adaptive spelling algorithm. Prioritizes spawning words that contain
   * characters with the lowest hit counts.
   */
  getSpellingContentForLevel() {
    const data = LANGUAGE_DATA[this.lang];
    const vocabulary = data.levelWords[this.level - 1] || data.levelWords[data.levelWords.length - 1];
    
    let totalWeight = 0;
    
    // Map words to priority weights
    const weights = vocabulary.map(word => {
      let minHits = 5;
      for (let char of word) {
        minHits = Math.min(minHits, this.letterHits[char] || 0);
      }
      // Unpracticed letters (< 5 hits) get exponential high spawn weights
      let weight = Math.max(1, (5 - minHits) * 5);
      totalWeight += weight;
      return weight;
    });

    // Roulette selection
    let randomValue = Math.random() * totalWeight;
    let chosenWord = vocabulary[0];
    for (let i = 0; i < vocabulary.length; i++) {
      randomValue -= weights[i];
      if (randomValue <= 0) {
        chosenWord = vocabulary[i];
        break;
      }
    }
    return chosenWord;
  }

  /**
   * Highlights virtual keyboard touch keys on screen.
   */
  flashVirtualKey(char, isError = false) {
    const key = document.getElementById(`vkey-${char}`);
    if (!key) return;

    key.classList.remove("pressed");
    
    if (isError) {
      key.style.background = "#ff3838";
      key.style.color = "#ffffff";
      setTimeout(() => {
        key.style.background = "";
        key.style.color = "";
      }, 250);
    } else {
      key.classList.add("pressed");
      setTimeout(() => {
        key.classList.remove("pressed");
      }, 150);
    }
  }

  /**
   * Triggers shield collapse effects, halts game loop, updates high scores.
   */
  damageShield(amount) {
    if (this.mode === "practice") return;

    this.shield = Math.max(0, this.shield - amount);
    this.updateShieldBar();
    audio.playShieldDamage();

    if (this.shield <= 0) {
      this.triggerGameOver();
    }
  }

  updateShieldBar() {
    const bar = document.getElementById("shield-bar");
    if (!bar) return;
    
    bar.style.width = `${this.shield}%`;
    
    if (this.shield > 50) {
      bar.style.background = "var(--accent-success)";
    } else if (this.shield > 25) {
      bar.style.background = "var(--accent-secondary)";
    } else {
      bar.style.background = "var(--accent-color)";
    }
  }

  /**
   * Main game state switches
   */
  startGame() {
    this.state = "playing";
    document.getElementById("start-screen").classList.remove("visible");
    this.buildVirtualKeyboard();
    
    // Clear active buffers
    this.asteroids = [];
    this.particles = [];
    this.lasers = [];
    this.score = 0;
    this.level = this.startLevel; // Load starting level chosen by user
    this.shield = 100;
    this.spawnInterval = Math.max(3000, 3500 - this.level * 100);
    this.levelUpBannerTimer = 0;
    this.slowMotionFactor = 1.0;
    
    this.initLevelLetterHits();
    
    document.getElementById("score-val").innerText = "0000";
    document.getElementById("level-val").innerText = this.level;
    this.updateShieldBar();
    this.updateHUDVisibility();
  }

  openSettings() {
    this.state = "settings";
    const speechSlider = document.getElementById("sett-speech-speed");
    if (speechSlider) {
      speechSlider.value = audio.speechRate;
    }
    document.getElementById("settings-screen").classList.add("visible");
  }

  closeSettings() {
    this.state = "playing";
    document.getElementById("settings-screen").classList.remove("visible");
  }

  /**
   * Unifies Victory and GameOver screens into a single layout card.
   */
  triggerGameEnd(isVictory = false) {
    this.state = "gameover";
    
    const dict = TRANSLATIONS[this.lang];
    const titleEl = document.getElementById("go-title");
    const subtitleEl = document.getElementById("go-subtitle");

    if (isVictory) {
      titleEl.innerText = dict.victoryTitle;
      subtitleEl.innerText = dict.victorySubtitle;
      audio.playLevelUp(); // victory fanfare sound
    } else {
      titleEl.innerText = dict.goTitle;
      subtitleEl.innerText = dict.goSubtitle;
    }

    document.getElementById("go-score-val").innerText = String(this.score).padStart(4, "0");
    document.getElementById("go-level-val").innerText = Math.min(7, this.level);
    
    document.getElementById("game-over-screen").classList.add("visible");
  }

  triggerGameOver() {
    this.triggerGameEnd(false);
  }

  restartGame() {
    document.getElementById("game-over-screen").classList.remove("visible");
    this.startGame();
  }

  /* ==========================================================================
     CORE RENDERING & MATH GAME LOOP
     ========================================================================== */
  loop(timestamp) {
    const elapsed = timestamp - this.lastTime;
    this.lastTime = timestamp;

    if (this.state === "playing") {
      this.update(elapsed);
    }
    
    this.render();

    requestAnimationFrame((t) => this.loop(t));
  }

  /**
   * Calculates object movements, collisions, laser travel paths.
   */
  update(elapsed) {
    // 0. Practice mode speed dampener (Slow Motion) based on closest threat proximity
    this.slowMotionFactor = 1.0;
    
    if (this.mode === "practice" && this.asteroids.length > 0) {
      let lowestY = -999;
      this.asteroids.forEach(ast => {
        if (ast.y > lowestY) lowestY = ast.y;
      });

      const startY = this.canvas.height * 0.4;
      const endY = this.ship.y - 45;

      if (lowestY >= startY) {
        let ratio = (lowestY - startY) / (endY - startY);
        ratio = Math.max(0, Math.min(1, ratio));
        // Slow down overall clock ticks to a minimum of 0.15x speed
        this.slowMotionFactor = 1.0 - ratio * 0.85;
      }
    }

    // Apply slow motion factors
    const delta = elapsed * this.slowMotionFactor;

    // 1. Spawning (slowed down quadratically during time dilation to prevent overwhelming)
    this.spawnTimer += delta * this.slowMotionFactor;
    if (this.spawnTimer >= this.spawnInterval) {
      this.spawnTimer = 0;
      if (this.asteroids.length < 5) {
        this.spawnAsteroid();
      }
    }

    // 2. Stars animation
    this.stars.forEach(star => {
      star.y += star.speed * this.slowMotionFactor;
      if (star.y > this.canvas.height) {
        star.y = -5;
        star.x = Math.random() * 500;
      }
    });

    // 3. Laser sweeps
    this.lasers.forEach((laser, idx) => {
      laser.progress += laser.speed * this.slowMotionFactor;
      if (laser.progress >= 1.0) {
        this.lasers.splice(idx, 1);
      }
    });

    // 4. Particle drift
    this.particles.forEach((part, idx) => {
      part.x += part.vx * this.slowMotionFactor;
      part.y += part.vy * this.slowMotionFactor;
      part.life -= part.decay * this.slowMotionFactor;
      if (part.life <= 0) {
        this.particles.splice(idx, 1);
      }
    });

    // 5. Active Asteroids moves
    this.asteroids.forEach((ast, idx) => {
      ast.y += ast.vy * this.slowMotionFactor;
      ast.rotation += ast.rotSpeed * this.slowMotionFactor;

      // Handle ground collision: asteroid reaches bottom screen border
      if (ast.y - ast.radius > this.canvas.height) {
        this.asteroids.splice(idx, 1);
        
        // Clear locked targets if they slip past the shield
        if (this.typingTarget === ast) {
          this.typingTarget = null;
          this.typedBuffer = "";
        }

        // Apply shield damage
        this.damageShield(20);

        // Visual flash overlay on screen (simple burst particles on base)
        for (let i = 0; i < 15; i++) {
          this.particles.push({
            x: ast.x,
            y: this.canvas.height - 5,
            vx: Math.random() * 4 - 2,
            vy: -Math.random() * 3 - 1,
            size: Math.random() * 3 + 2,
            color: this.theme === "retro" ? "#ff3333" : "#ff007f",
            life: 1.0,
            decay: 0.05
          });
        }
      }
    });

    // 6. Spaceship Ease Recoil and Rotation
    if (this.ship.recoil > 0) this.ship.recoil *= 0.85;

    // Smooth lerp rotation towards targeted target angle
    const diff = this.ship.targetAngle - this.ship.angle;
    this.ship.angle += diff * 0.2;
  }

  /**
   * Primary Canvas drawing loop coordinating theme graphics.
   */
  render() {
    // Clear canvas
    this.ctx.fillStyle = this.theme === "retro" ? "#000000" : (this.theme === "cartoon" ? "#1e0f33" : "#080911");
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw Parallax Scrolling Stars
    this.stars.forEach(star => {
      const canvasX = (star.x / 500) * this.canvas.width;
      
      if (this.theme === "cartoon") {
        // Twinkling cartoon bubbles/circles
        this.ctx.fillStyle = `rgba(255, 204, 0, ${0.4 + Math.sin(star.twinkle + this.lastTime * 0.003) * 0.3})`;
        this.ctx.beginPath();
        this.ctx.arc(canvasX, star.y, star.size * 1.5, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Sharp futuristic vector stars
        this.ctx.fillStyle = this.theme === "retro" ? "#33ff33" : `rgba(0, 240, 255, ${0.3 + Math.sin(star.twinkle + this.lastTime * 0.002) * 0.3})`;
        this.ctx.fillRect(canvasX, star.y, star.size, star.size);
      }
    });

    // Draw particles
    this.particles.forEach(p => {
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      
      if (this.theme === "cartoon") {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Glowing neon particle blocks
        if (this.theme === "neon") {
          this.ctx.shadowColor = p.color;
          this.ctx.shadowBlur = 8;
        }
        this.ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
        this.ctx.shadowBlur = 0;
      }
    });
    this.ctx.globalAlpha = 1.0;

    // Draw active lasers
    this.lasers.forEach(laser => {
      this.ctx.strokeStyle = laser.color;
      this.ctx.lineWidth = this.theme === "cartoon" ? 6 : (this.theme === "retro" ? 2 : 4);
      this.ctx.lineCap = "round";

      if (this.theme === "neon") {
        this.ctx.shadowColor = laser.color;
        this.ctx.shadowBlur = 12;
      }

      this.ctx.beginPath();
      // Draw straight vectors along linear progression paths
      const startX = laser.x + (laser.targetX - laser.x) * (laser.progress * 0.5);
      const startY = laser.y + (laser.targetY - laser.y) * (laser.progress * 0.5);
      const endX = laser.x + (laser.targetX - laser.x) * Math.min(1.0, laser.progress * 1.5);
      const endY = laser.y + (laser.targetY - laser.y) * Math.min(1.0, laser.progress * 1.5);

      this.ctx.moveTo(startX, startY);
      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();

      this.ctx.shadowBlur = 0;
    });

    // Draw active falling Asteroids or spaceships
    this.asteroids.forEach(ast => {
      this.renderAsteroidTheme(ast);
      this.renderAsteroidText(ast);
    });

    // Draw Spaceship
    this.renderSpaceship();

    // Draw Slow-Motion Vignette and status alerts in Practice Mode
    this.renderSlowMotionIndicator();

    // Draw dynamic Level Up banner text overlays
    if (this.levelUpBannerTimer > 0) {
      this.levelUpBannerTimer--;
      this.renderLevelUpBanner();
    }
  }

  /**
   * Renders the falling spelling targets based on active theme graphics.
   * Draw classic retro vector saucers (UFOs) in Retro theme.
   */
  renderAsteroidTheme(ast) {
    this.ctx.save();

    if (this.theme === "retro") {
      // Shift invader slightly UP inside its container
      this.ctx.translate(ast.x, ast.y - ast.radius * 0.4);
      // Cute wobble/sway effect as it falls
      const wobble = Math.sin(ast.y * 0.05) * 0.12;
      this.ctx.rotate(wobble);
      
      // Draw pixel space invader
      const cols = 11;
      const rows = 8;
      const invaderW = ast.radius * 1.6;
      const invaderH = ast.radius * 1.1;
      const startX = -invaderW / 2;
      const startY = -invaderH / 2;
      
      const px = invaderW / cols;
      const py = invaderH / rows;

      this.ctx.fillStyle = ast.color || "#33ff33";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (INVADER_MATRIX[r][c] === 1) {
            this.ctx.fillRect(startX + c * px, startY + r * py, px + 0.6, py + 0.6);
          }
        }
      }
    } else {
      this.ctx.translate(ast.x, ast.y);
      this.ctx.rotate(ast.rotation);

      if (this.theme === "cartoon") {
        // Playful colored bubble planets (NO alien eyes, as requested!)
        const grad = this.ctx.createRadialGradient(-5, -5, 2, 0, 0, ast.radius);
        grad.addColorStop(0, "#ff7675");
        grad.addColorStop(1, "#d63031");

        this.ctx.fillStyle = grad;
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.lineWidth = 4;
        
        this.ctx.beginPath();
        const points = 7;
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const r = ast.radius * (1 + (i % 2 === 0 ? 0.08 : -0.06));
          const px = Math.cos(angle) * r;
          const py = Math.sin(angle) * r;
          if (i === 0) this.ctx.moveTo(px, py);
          else this.ctx.lineTo(px, py);
        }
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
      } 
      else {
        // Neon Cyberpunk glowing crystals
        this.ctx.shadowColor = "#ff007f";
        this.ctx.shadowBlur = 10;
        this.ctx.strokeStyle = "#ff007f";
        this.ctx.lineWidth = 3;
        
        this.ctx.beginPath();
        const points = 6;
        const outerVerts = [];
        for (let i = 0; i < points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const r = ast.radius * (1 + (i % 2 === 0 ? 0.12 : -0.08));
          const px = Math.cos(angle) * r;
          const py = Math.sin(angle) * r;
          outerVerts.push({x: px, y: py});
          if (i === 0) this.ctx.moveTo(px, py);
          else this.ctx.lineTo(px, py);
        }
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.strokeStyle = "rgba(255, 0, 127, 0.3)";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        for (let i = 0; i < outerVerts.length; i++) {
          this.ctx.moveTo(outerVerts[i].x, outerVerts[i].y);
          this.ctx.lineTo(0, 0);
        }
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
      }
    }

    this.ctx.restore();
  }

  /**
   * Renders target text with glowing dynamic character highlights for typed prefixes.
   */
  renderAsteroidText(ast) {
    this.ctx.save();
    
    // High legibility font selection
    const fontSize = this.theme === "retro" ? 18 : (this.theme === "cartoon" ? 22 : 19);
    const fontName = this.theme === "retro" ? "'Montserrat'" : (this.theme === "cartoon" ? "'Comfortaa'" : "'Montserrat'");
    this.ctx.font = `bold ${fontSize}px ${fontName}`;
    this.ctx.textBaseline = "middle";

    const text = ast.text;
    const isTargeted = this.typingTarget === ast;
    const typedLength = isTargeted ? this.typedBuffer.length : 0;

    // Calculate total text width for background clearing
    const totalWidth = this.ctx.measureText(text).width;

    // Clear the background behind the text to ensure 100% legibility (crucial for retro mode saucer lines!)
    const padX = 7;
    const padY = 4;
    
    const textY = this.theme === "retro" ? ast.y + ast.radius * 0.75 : ast.y;

    if (this.theme === "retro") {
      this.ctx.fillStyle = "#000000";
      this.ctx.fillRect(ast.x - totalWidth / 2 - padX, textY - fontSize / 2 - padY, totalWidth + padX * 2, fontSize + padY * 2);
    }

    if (typedLength > 0) {
      const completedText = text.substring(0, typedLength);
      const remainingText = text.substring(typedLength);

      const compWidth = this.ctx.measureText(completedText).width;
      let startX = ast.x - totalWidth / 2;

      // Completed letters (green highlight)
      this.ctx.fillStyle = this.theme === "retro" ? "#33ff33" : (this.theme === "cartoon" ? "#4cd137" : "#39ff14");
      this.ctx.textAlign = "left";
      if (this.theme === "neon") {
        this.ctx.shadowColor = "#39ff14";
        this.ctx.shadowBlur = 10;
      }
      this.ctx.fillText(completedText, startX, textY);
      this.ctx.shadowBlur = 0;

      // Remaining letters
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText(remainingText, startX + compWidth, textY);
    } else {
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = this.theme === "retro" ? ast.color || "#33ff33" : "#ffffff";
      if (this.theme === "neon") {
        this.ctx.shadowColor = "#00f0ff";
        this.ctx.shadowBlur = 8;
      } else if (this.theme === "cartoon") {
        this.ctx.strokeStyle = "#2b1842";
        this.ctx.lineWidth = 5;
        this.ctx.strokeText(text, ast.x, textY);
      }
      this.ctx.fillText(text, ast.x, textY);
      this.ctx.shadowBlur = 0;
    }

    this.ctx.restore();
  }

  /**
   * Renders the spaceship with beautiful matching theme assets.
   */
  renderSpaceship() {
    this.ctx.save();
    
    const recoilY = this.ship.y + this.ship.recoil;
    this.ctx.translate(this.ship.x, recoilY);
    this.ctx.rotate(this.ship.angle);

    if (this.theme === "retro") {
      // Draw premium pixel art spaceship as shown in user's image
      const cols = 11;
      const rows = 16;
      const shipW = this.ship.width * 1.1;
      const shipH = this.ship.height * 1.1;
      const startX = -shipW / 2;
      const startY = -shipH / 2;

      const px = shipW / cols;
      const py = shipH / rows;

      this.ctx.fillStyle = "#33ff33";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (RETRO_SHIP_MATRIX[r][c] === 1) {
            this.ctx.fillRect(startX + c * px, startY + r * py, px + 0.5, py + 0.5);
          }
        }
      }
    } 
    else if (this.theme === "cartoon") {
      this.ctx.fillStyle = "#ff3366";
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.lineWidth = 4;

      this.ctx.beginPath();
      this.ctx.moveTo(0, -this.ship.height/2);
      this.ctx.quadraticCurveTo(this.ship.width/2, -10, this.ship.width/2, this.ship.height/2);
      this.ctx.lineTo(-this.ship.width/2, this.ship.height/2);
      this.ctx.quadraticCurveTo(-this.ship.width/2, -10, 0, -this.ship.height/2);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = "#ffcc00";
      this.ctx.beginPath();
      this.ctx.moveTo(this.ship.width/2, 10);
      this.ctx.lineTo(this.ship.width/2 + 12, this.ship.height/2);
      this.ctx.lineTo(this.ship.width/2, this.ship.height/2);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(-this.ship.width/2, 10);
      this.ctx.lineTo(-this.ship.width/2 - 12, this.ship.height/2);
      this.ctx.lineTo(-this.ship.width/2, this.ship.height/2);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = "#00ccff";
      this.ctx.beginPath();
      this.ctx.arc(0, -2, 8, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();

      const flameHeight = 10 + Math.sin(this.lastTime * 0.04) * 5;
      this.ctx.fillStyle = "#ff9f43";
      this.ctx.beginPath();
      this.ctx.moveTo(-10, this.ship.height/2);
      this.ctx.lineTo(0, this.ship.height/2 + flameHeight);
      this.ctx.lineTo(10, this.ship.height/2);
      this.ctx.closePath();
      this.ctx.fill();
    } 
    else {
      this.ctx.shadowColor = "#00f0ff";
      this.ctx.shadowBlur = 12;
      this.ctx.strokeStyle = "#00f0ff";
      this.ctx.fillStyle = "rgba(0, 240, 255, 0.15)";
      this.ctx.lineWidth = 3;

      this.ctx.beginPath();
      this.ctx.moveTo(0, -this.ship.height/2 - 4);
      this.ctx.lineTo(this.ship.width/2, this.ship.height/2);
      this.ctx.lineTo(10, this.ship.height/4);
      this.ctx.lineTo(-10, this.ship.height/4);
      this.ctx.lineTo(-this.ship.width/2, this.ship.height/2);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.strokeStyle = "#ff007f";
      this.ctx.shadowColor = "#ff007f";
      this.ctx.beginPath();
      this.ctx.moveTo(-8, this.ship.height/4);
      this.ctx.lineTo(0, this.ship.height/4 + 8 + Math.random() * 4);
      this.ctx.lineTo(8, this.ship.height/4);
      this.ctx.stroke();
      this.ctx.shadowBlur = 0;
    }

    this.ctx.restore();
  }

  /**
   * Renders the dynamic level up celebration overlays.
   */
  renderLevelUpBanner() {
    this.ctx.save();
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2.5);
    
    let scale = 1.0;
    if (this.levelUpBannerTimer > 150) {
      scale = (180 - this.levelUpBannerTimer) / 30;
    } else if (this.levelUpBannerTimer < 30) {
      scale = this.levelUpBannerTimer / 30;
    }
    this.ctx.scale(scale, scale);

    const dict = TRANSLATIONS[this.lang];
    const text = dict.levelUpText;
    const fontName = this.theme === "retro" ? "'Montserrat'" : (this.theme === "cartoon" ? "'Comfortaa'" : "'Montserrat'");
    this.ctx.font = `800 32px ${fontName}`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    if (this.theme === "cartoon") {
      this.ctx.strokeStyle = "#2b1842";
      this.ctx.lineWidth = 8;
      this.ctx.strokeText(text, 0, -20);
      this.ctx.fillStyle = "#ffcc00";
      this.ctx.fillText(text, 0, -20);

      this.ctx.font = `bold 24px ${fontName}`;
      this.ctx.strokeText(`${this.level}`, 0, 20);
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText(`${this.level}`, 0, 20);
    } 
    else if (this.theme === "retro") {
      this.ctx.fillStyle = "#33ff33";
      this.ctx.fillText(text, 0, -20);
      this.ctx.fillText(`LEVEL ${this.level}`, 0, 20);
      
      this.ctx.strokeStyle = "#33ff33";
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(-160, -45, 320, 90);
    } 
    else {
      this.ctx.shadowColor = "#00f0ff";
      this.ctx.shadowBlur = 20;
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText(text, 0, -20);

      this.ctx.fillStyle = "#00f0ff";
      this.ctx.fillText(`LEVEL ${this.level}`, 0, 20);
      this.ctx.shadowBlur = 0;
    }

    this.ctx.restore();
  }

  /**
   * Draw pulsing red/blue visual vignette when slow motion is active in Practice Mode.
   */
  renderSlowMotionIndicator() {
    if (this.state !== "playing" || this.mode !== "practice" || !this.slowMotionFactor || this.slowMotionFactor > 0.95) return;

    this.ctx.save();
    
    // Draw soft warning vignette
    const pulse = 0.22 + Math.sin(this.lastTime * 0.005) * 0.12;
    
    const grad = this.ctx.createRadialGradient(
      this.canvas.width / 2, this.canvas.height / 2, this.canvas.height * 0.15,
      this.canvas.width / 2, this.canvas.height / 2, this.canvas.height * 0.75
    );
    
    const color = this.theme === "retro" ? "rgba(51, 255, 51," : (this.theme === "cartoon" ? "rgba(255, 51, 102," : "rgba(0, 240, 255,");
    
    grad.addColorStop(0, "rgba(0, 0, 0, 0)");
    grad.addColorStop(1, `${color} ${pulse})`);
    
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw central warning text alert
    const fontName = this.theme === "retro" ? "'Montserrat'" : (this.theme === "cartoon" ? "'Comfortaa'" : "'Montserrat'");
    this.ctx.font = `bold 12px ${fontName}`;
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = this.theme === "retro" ? "#33ff33" : (this.theme === "cartoon" ? "#ff3366" : "#00f0ff");
    
    const warningText = this.lang === "ru" ? "⏳ ВРЕМЯ ЗАМЕДЛЕНО" : "⏳ TIME DILATED";
    this.ctx.fillText(warningText, this.canvas.width / 2, this.canvas.height - 95);

    this.ctx.restore();
  }
}

// Autostart game engine when file loaded
window.addEventListener("DOMContentLoaded", () => {
  window.gameEngine = new Game();
});
