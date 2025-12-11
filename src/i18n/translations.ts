export type Language = 'en' | 'no';

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    githubButton: string;
  };
  navigation: {
    analyzer: string;
    leaderboard: string;
  };
  codeInput: {
    title: string;
    placeholder: string;
    analyzeButton: string;
    analyzing: string;
    selectSample: string;
    githubUrl: string;
    githubPlaceholder: string;
    fetchingCode: string;
    fetchError: string;
  };
  horrorMeter: {
    title: string;
    scoreLabel: string;
    overload: string;
    severityLevels: {
      low: string;
      medium: string;
      high: string;
      critical: string;
    };
    criticalWarning: string;
    criticalMessage: string;
    overloadMessage: string;
  };
  analysisPanel: {
    title: string;
    noIssuesTitle: string;
    noIssuesMessage: string;
    suggestionTitle: string;
    showButton: string;
    hideButton: string;
    suggestionLabel: string;
    suggestionNote: string;
    countLabel: string;
    severityLabel: string;
    chartTitle: string;
  };
  ghostMascot: {
    messages: {
      low: string;
      medium: string;
      high: string;
      critical: string;
    };
  };
  placeholder: {
    title: string;
    subtitle: string;
  };
  footer: string;
  shareButton: string;
  perfectCode: {
    title: string;
    subtitle: string;
    message: string;
  };
  fireExplosion: {
    title: string;
    subtitle: string;
    detail: string;
  };
  leaderboard: {
    title: string;
    loading: string;
    error: string;
    noData: string;
    author: string;
    rank: string;
    score: string;
    viewCode: string;
    close: string;
  };
  submitForm: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    titleLabel: string;
    titlePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    viewLeaderboard: string;
    skipButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: 'Legacy Code Horror Meter™',
      subtitle: 'Dare to discover how terrifying your legacy tax code really is...',
      githubButton: 'View on GitHub'
    },
    navigation: {
      analyzer: 'Horror Analyzer',
      leaderboard: 'Hall of Shame'
    },
    codeInput: {
      title: 'Paste Your Legacy Tax Code',
      placeholder: '// Paste your horrifying legacy tax calculation code here...\n// The meter will analyze and rate its horror level!',
      analyzeButton: 'Unleash the Horror Meter!',
      analyzing: 'Analyzing Horror Level...',
      selectSample: 'Or select a sample',
      githubUrl: 'Or fetch from GitHub',
      githubPlaceholder: 'https://github.com/user/repo/blob/main/file.js',
      fetchingCode: 'Fetching...',
      fetchError: 'Failed to fetch code from GitHub. Check the URL and try again.'
    },
    horrorMeter: {
      title: 'Horror Score',
      scoreLabel: 'Score',
      overload: 'OVERLOAD!',
      severityLevels: {
        low: 'Relatively Clean',
        medium: 'Needs Attention',
        high: 'Code Horror!',
        critical: 'CRITICAL MELTDOWN!'
      },
      criticalWarning: '🚨 CRITICAL HORROR LEVEL DETECTED 🚨',
      criticalMessage: 'This code has achieved legendary horror status! Recommend immediate refactoring before it gains sentience.',
      overloadMessage: 'SYSTEM OVERLOAD! This code breaks the horror scale! Immediate deletion recommended!'
    },
    analysisPanel: {
      title: 'Horror Factor Analysis',
      noIssuesTitle: 'No major horror factors detected.',
      noIssuesMessage: 'Your code is relatively clean!',
      suggestionTitle: 'Refactoring Suggestions',
      showButton: 'Show',
      hideButton: 'Hide',
      suggestionLabel: 'Modernized Code',
      suggestionNote: 'Note: This is a mock suggestion. Real refactoring should be context-specific.',
      countLabel: 'Count',
      severityLabel: 'Severity',
      chartTitle: 'Severity Distribution'
    },
    ghostMascot: {
      messages: {
        low: 'Not too bad!',
        medium: 'Getting spooky...',
        high: 'This is horrifying!',
        critical: 'SYSTEM MELTDOWN!'
      }
    },
    placeholder: {
      title: 'Awaiting Analysis...',
      subtitle: 'Paste or select code, then click "Unleash the Horror Meter!"'
    },
    footer: 'Built with React + TypeScript + Tailwind CSS | Deployed on Vercel | Made with 💀 for legacy code survivors',
    shareButton: '🏆 Share to Hall of Shame',
    perfectCode: {
      title: '✨ PERFECTION ACHIEVED! ✨',
      subtitle: '🏆 Zero Horror Points! 🏆',
      message: 'Your code is cleaner than a whistle! 🎉'
    },
    fireExplosion: {
      title: '💀 CRITICAL MELTDOWN! 💀',
      subtitle: '🔥 SYSTEM FAILURE! 🔥',
      detail: '💥 140% HORROR OVERLOAD! 💥'
    },
    leaderboard: {
      title: '🔥 Hall of Shame',
      loading: 'Loading horrifying code...',
      error: 'Failed to load leaderboard',
      noData: 'No horror snippets yet. Be the first to submit!',
      author: 'Author',
      rank: 'Rank',
      score: 'Score',
      viewCode: 'View Code',
      close: 'Close'
    },
    submitForm: {
      title: 'Immortalize Your Horror!',
      subtitle: 'Share your terrifying code with the world',
      nameLabel: 'Your Name / Team',
      namePlaceholder: 'e.g., Anonymous Developer',
      titleLabel: 'Code Horror Title',
      titlePlaceholder: 'e.g., The Infinite Loop of Doom',
      submitButton: 'Submit to Hall of Shame',
      submitting: 'Submitting...',
      successMessage: '🎉 Your horror has been immortalized!',
      errorMessage: 'Failed to submit. Please try again.',
      viewLeaderboard: 'View Hall of Shame',
      skipButton: 'Skip'
    }
  },
  no: {
    header: {
      title: 'Arv-Kode Grøssomåleren™',
      subtitle: 'Tør du å oppdage hvor skremmende din gamle skattekode egentlig er...',
      githubButton: 'Se på GitHub'
    },
    navigation: {
      analyzer: 'Grøssomåler',
      leaderboard: 'Skammens Hall'
    },
    codeInput: {
      title: 'Lim Inn Din Gamle Skattekode',
      placeholder: '// Lim inn din skrekkelige gamle skatteberegningskode her...\n// Måleren vil analysere og vurdere grøssomhetsnivået!',
      analyzeButton: 'Slipp Løs Grøssomåleren!',
      analyzing: 'Analyserer Grøssomhetssnivå...',
      selectSample: 'Eller velg et eksempel',
      githubUrl: 'Eller hent fra GitHub',
      githubPlaceholder: 'https://github.com/bruker/repo/blob/main/fil.js',
      fetchingCode: 'Henter...',
      fetchError: 'Kunne ikke hente kode fra GitHub. Sjekk URL-en og prøv igjen.'
    },
    horrorMeter: {
      title: 'Grøssom-Poeng',
      scoreLabel: 'Poeng',
      overload: 'OVERBELASTNING!',
      severityLevels: {
        low: 'Relativt Ryddig',
        medium: 'Trenger Oppmerksomhet',
        high: 'Kode-Grøss!',
        critical: 'KRITISK NEDSMELTING!'
      },
      criticalWarning: '🚨 KRITISK GRØSSOMHETSNIVÅ OPPDAGET 🚨',
      criticalMessage: 'Denne koden har oppnådd legendarisk grøssomhetsstatus! Anbefaler umiddelbar refaktorering før den får bevissthet.',
      overloadMessage: 'SYSTEMOVERBELASTNING! Denne koden sprenger grøssomhetsskalaen! Umiddelbar sletting anbefales!'
    },
    analysisPanel: {
      title: 'Analyse av Grøssomfaktorer',
      noIssuesTitle: 'Ingen store grøssomfaktorer oppdaget.',
      noIssuesMessage: 'Koden din er relativt ryddig!',
      suggestionTitle: 'Forslag til Refaktorering',
      showButton: 'Vis',
      hideButton: 'Skjul',
      suggestionLabel: 'Modernisert Kode',
      suggestionNote: 'Merk: Dette er et eksempelforslag. Ekte refaktorering bør være kontekstspesifikk.',
      countLabel: 'Antall',
      severityLabel: 'Alvorlighet',
      chartTitle: 'Alvorlighetsfordeling'
    },
    ghostMascot: {
      messages: {
        low: 'Ikke så verst!',
        medium: 'Blir spøkelsesaktig...',
        high: 'Dette er forferdelig!',
        critical: 'SYSTEMSAMMENBRUDD!'
      }
    },
    placeholder: {
      title: 'Venter på Analyse...',
      subtitle: 'Lim inn eller velg kode, klikk deretter "Slipp Løs Grøssomåleren!"'
    },
    footer: 'Bygget med React + TypeScript + Tailwind CSS | Deployet på Vercel | Laget med 💀 for overlevende av gammel kode',
    shareButton: '🏆 Del til Skammens Hall',
    perfectCode: {
      title: '✨ PERFEKSJON OPPNÅDD! ✨',
      subtitle: '🏆 Null Grøssompoeng! 🏆',
      message: 'Koden din er renere enn rent! 🎉'
    },
    fireExplosion: {
      title: '💀 KRITISK NEDSMELTING! 💀',
      subtitle: '🔥 SYSTEMFEIL! 🔥',
      detail: '💥 140% GRØSSOM-OVERBELASTNING! 💥'
    },
    leaderboard: {
      title: '🔥 Skammens Hall',
      loading: 'Laster forferdelig kode...',
      error: 'Kunne ikke laste topplisten',
      noData: 'Ingen grøssomme kodebiter ennå. Bli den første!',
      author: 'Forfatter',
      rank: 'Rangering',
      score: 'Poeng',
      viewCode: 'Vis Kode',
      close: 'Lukk'
    },
    submitForm: {
      title: 'Forevige Din Skrekkode!',
      subtitle: 'Del din skremmende kode med verden',
      nameLabel: 'Ditt Navn / Team',
      namePlaceholder: 'f.eks., Anonym Utvikler',
      titleLabel: 'Skrekkode Tittel',
      titlePlaceholder: 'f.eks., Den Evige Løkken av Undergang',
      submitButton: 'Send til Skammens Hall',
      submitting: 'Sender inn...',
      successMessage: '🎉 Din skrekkode er nå foreviget!',
      errorMessage: 'Kunne ikke sende inn. Prøv igjen.',
      viewLeaderboard: 'Se Skammens Hall',
      skipButton: 'Hopp over'
    }
  }
};

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
