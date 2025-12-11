// Sound effect utility using Web Audio API
// Creates sound effects without external files

class SoundEffects {
  private audioContext: AudioContext | null = null;

  private getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  // Low horror - soft beep
  playLowHorror() {
    const ctx = this.getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 440;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  }

  // Medium horror - warning beep
  playMediumHorror() {
    const ctx = this.getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 330;
    oscillator.type = 'triangle';
    
    gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.5);
  }

  // High horror - alarm sound
  playHighHorror() {
    const ctx = this.getAudioContext();
    
    for (let i = 0; i < 3; i++) {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = 220 - (i * 20);
      oscillator.type = 'sawtooth';
      
      const startTime = ctx.currentTime + (i * 0.15);
      gainNode.gain.setValueAtTime(0.3, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);

      oscillator.start(startTime);
      oscillator.stop(startTime + 0.2);
    }
  }

  // Maximum horror - dramatic explosion sound
  playMaximumHorror() {
    const ctx = this.getAudioContext();
    
    // Create explosion bass
    const bass = ctx.createOscillator();
    const bassGain = ctx.createGain();
    bass.connect(bassGain);
    bassGain.connect(ctx.destination);
    bass.frequency.setValueAtTime(80, ctx.currentTime);
    bass.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 1);
    bass.type = 'sawtooth';
    bassGain.gain.setValueAtTime(0.8, ctx.currentTime);
    bassGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
    bass.start(ctx.currentTime);
    bass.stop(ctx.currentTime + 1.5);

    // Create explosion noise
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    const noise = ctx.createBufferSource();
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    
    noise.buffer = noiseBuffer;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(1000, ctx.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 1);
    
    noiseGain.gain.setValueAtTime(0.5, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
    
    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + 1.2);

    // Add multiple rising tones
    for (let i = 0; i < 5; i++) {
      const tone = ctx.createOscillator();
      const toneGain = ctx.createGain();
      
      tone.connect(toneGain);
      toneGain.connect(ctx.destination);
      
      const startTime = ctx.currentTime + (i * 0.1);
      tone.frequency.setValueAtTime(100 + (i * 50), startTime);
      tone.frequency.exponentialRampToValueAtTime(2000 + (i * 200), startTime + 0.5);
      tone.type = 'square';
      
      toneGain.gain.setValueAtTime(0.2, startTime);
      toneGain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.6);
      
      tone.start(startTime);
      tone.stop(startTime + 0.6);
    }
  }

  // Play sound based on severity level
  playSeveritySound(severity: 'low' | 'medium' | 'high' | 'critical') {
    switch (severity) {
      case 'low':
        this.playLowHorror();
        break;
      case 'medium':
        this.playMediumHorror();
        break;
      case 'high':
        this.playHighHorror();
        break;
      case 'critical':
        this.playMaximumHorror();
        break;
    }
  }
}

export const soundEffects = new SoundEffects();
