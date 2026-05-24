/**
 * Audio Engine for the Space Spelling game.
 * Synthesizes retro arcade SFX using the Web Audio API (no assets needed!)
 * Integrates Web Speech Synthesis (TTS) for pronouncing letters, syllables, and words.
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.voices = [];
    this.speechRate = 1.0; // Average speech speed by default
    this.speechPitch = 1.0;
    this.soundEnabled = true;
    this.voiceEnabled = true;

    // Load speech voices
    this.initSpeech();
  }

  /**
   * Initializes the AudioContext on first user interaction.
   * Required due to browser autoplay restrictions.
   */
  initContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  /**
   * Loads Speech Synthesis voices and sets up listeners.
   */
  initSpeech() {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const loadVoices = () => {
      this.voices = window.speechSynthesis.getVoices();
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  /**
   * Finds the best voice for a given language code (e.g. "ru", "en", "es").
   */
  getVoiceForLanguage(langCode) {
    if (this.voices.length === 0) {
      this.voices = window.speechSynthesis.getVoices();
    }

    const code = langCode.toLowerCase();
    
    // First try: exact match or starts with lang code and is a premium/google voice (often high quality)
    let matchedVoices = this.voices.filter(v => 
      v.lang.toLowerCase().startsWith(code) || v.lang.toLowerCase().replace('_', '-').startsWith(code)
    );

    if (matchedVoices.length === 0) return null;

    // Try to find a local voice or Google voice
    const googleVoice = matchedVoices.find(v => v.name.toLowerCase().includes("google"));
    if (googleVoice) return googleVoice;

    const localVoice = matchedVoices.find(v => v.localService);
    if (localVoice) return localVoice;

    return matchedVoices[0];
  }

  /**
   * Speaks the provided text using the Web Speech Synthesis API.
   * Cancels any ongoing speech for high responsiveness.
   */
  speak(text, langCode) {
    if (!this.voiceEnabled || !window.speechSynthesis) return;

    try {
      // Cancel previous speech to allow immediate pronunciation of next characters
      window.speechSynthesis.cancel();

      // Small delay on speech to make sure cancel executes cleanly in Chrome
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Find best voice
        const voice = this.getVoiceForLanguage(langCode);
        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang;
        } else {
          // Fallback to basic language code mapping
          const langMap = {
            ru: "ru-RU",
            en: "en-US",
            es: "es-ES",
            de: "de-DE",
            fr: "fr-FR",
            it: "it-IT"
          };
          utterance.lang = langMap[langCode] || langCode;
        }

        utterance.rate = this.speechRate;
        utterance.pitch = this.speechPitch;
        
        window.speechSynthesis.speak(utterance);
      }, 10);
    } catch (e) {
      console.warn("Speech Synthesis error:", e);
    }
  }

  /**
   * Plays a synthesized laser shot sound.
   */
  playLaser() {
    if (!this.soundEnabled) return;
    this.initContext();

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    // Laser properties
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(880, this.ctx.currentTime); // Start pitch
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.15); // End sweep

    gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.15);
  }

  /**
   * Plays a synthesized asteroid explosion sound.
   */
  playExplosion() {
    if (!this.soundEnabled) return;
    this.initContext();

    const duration = 0.45;
    const osc = this.ctx.createOscillator();
    const noiseOsc = this.createNoiseNode();
    const filter = this.ctx.createBiquadFilter();
    const gainNode = this.ctx.createGain();

    // Setup low rumble oscillator
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + duration);

    // Setup noise connection for the crunch/debris sound if noise generated successfully
    if (noiseOsc) {
      noiseOsc.connect(filter);
    }
    osc.connect(filter);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(300, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(10, this.ctx.currentTime + duration);

    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    gainNode.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + duration);

    if (noiseOsc) {
      noiseOsc.start(this.ctx.currentTime);
      noiseOsc.stop(this.ctx.currentTime + duration);
    }
  }

  /**
   * Helper to create a noise node using an AudioBuffer for vintage explosion crunch.
   */
  createNoiseNode() {
    if (!this.ctx) return null;
    
    try {
      const bufferSize = this.ctx.sampleRate * 0.5; // 0.5 seconds of noise
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noiseNode = this.ctx.createBufferSource();
      noiseNode.buffer = buffer;
      return noiseNode;
    } catch (e) {
      console.warn("Noise buffer generation failed:", e);
      return null;
    }
  }

  /**
   * Plays a synthesized level up sound (cheerful, ascending arpeggio).
   */
  playLevelUp() {
    if (!this.soundEnabled) return;
    this.initContext();

    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C4, E4, G4, C5, E5, G5, C6
    const noteLength = 0.07;

    notes.forEach((freq, idx) => {
      const time = this.ctx.currentTime + idx * noteLength;
      
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, time);

      gainNode.gain.setValueAtTime(0.12, time);
      gainNode.gain.exponentialRampToValueAtTime(0.001, time + noteLength * 1.5);

      osc.start(time);
      osc.stop(time + noteLength * 1.5);
    });
  }

  /**
   * Plays a synthesized shield damage sound (distorted deep alarm buzz).
   */
  playShieldDamage() {
    if (!this.soundEnabled) return;
    this.initContext();

    const osc = this.ctx.createOscillator();
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    const gainNode = this.ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    // Deep modulating buzz
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    
    lfo.frequency.setValueAtTime(15, this.ctx.currentTime); // LFO frequency
    lfoGain.gain.setValueAtTime(40, this.ctx.currentTime); // Frequency modulation depth

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    gainNode.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);

    lfo.start(this.ctx.currentTime);
    osc.start(this.ctx.currentTime);

    lfo.stop(this.ctx.currentTime + 0.35);
    osc.stop(this.ctx.currentTime + 0.35);
  }

  /**
   * Plays a quick UI click sound (high-frequency organic click).
   */
  playClick() {
    if (!this.soundEnabled) return;
    this.initContext();

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(900, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.05);
  }

  /**
   * Plays a gentle, descending error buzz (triangle-wave sweep).
   */
  playError() {
    if (!this.soundEnabled) return;
    this.initContext();

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    // As requested: a very clean and soft triangle wave smoothly falling from 250 Hz to 140 Hz
    osc.type = "triangle";
    osc.frequency.setValueAtTime(250, this.ctx.currentTime); 
    osc.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 0.15); // Descending sweep

    gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime); // Soft volume
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.15);
  }

  /**
   * Toggles sound effects on/off.
   */
  toggleSound(enabled) {
    this.soundEnabled = enabled;
  }

  /**
   * Toggles TTS speech on/off.
   */
  toggleVoice(enabled) {
    this.voiceEnabled = enabled;
  }

  /**
   * Sets TTS speech speed rate (0.5 to 2.0).
   */
  setSpeechRate(rate) {
    this.speechRate = rate;
  }
}

// Export for ES modules and standard script inclusion compatibility
const audio = new AudioEngine();
if (typeof module !== "undefined" && module.exports) {
  module.exports = { audio };
}
