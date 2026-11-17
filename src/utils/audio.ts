/**
 * Speech synthesis and audio guidance for Tamil and Malayalam pronunciation.
 */

class AudioTutor {
  private synth: SpeechSynthesis | null = null;
  private tamilVoice: SpeechSynthesisVoice | null = null;
  private malayalamVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    this.tamilVoice = voices.find(v => v.lang.startsWith('ta')) || null;
    this.malayalamVoice = voices.find(v => v.lang.startsWith('ml')) || null;
  }

  public speakTamil(text: string, rate: number = 0.8) {
    if (!this.synth) return;
    this.synth.cancel(); // Stop any pending speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ta-IN';
    if (this.tamilVoice) {
      utterance.voice = this.tamilVoice;
    }
    utterance.rate = rate; // slightly slower for language learners
    utterance.pitch = 1.0;
    this.synth.speak(utterance);
  }

  public speakMalayalam(text: string, rate: number = 0.8) {
    if (!this.synth) return;
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ml-IN';
    if (this.malayalamVoice) {
      utterance.voice = this.malayalamVoice;
    }
    utterance.rate = rate;
    utterance.pitch = 1.0;
    this.synth.speak(utterance);
  }

  public playSuccessChime() {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.35); // C6

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch {
      // AudioContext could be blocked by autoplay policies
    }
  }

  public hasTamilVoice(): boolean {
    return !!this.tamilVoice;
  }

  public hasMalayalamVoice(): boolean {
    return !!this.malayalamVoice;
  }
}

export const audioTutor = new AudioTutor();
