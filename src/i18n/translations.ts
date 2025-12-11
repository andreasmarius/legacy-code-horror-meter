export type Language = 'en' | 'no';

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    githubButton: string;
  };
  codeInput: {
    title: string;
    placeholder: string;
    analyzeButton: string;
    analyzing: string;
    selectSample: string;
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
  fireExplosion: {
    title: string;
    subtitle: string;
    detail: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: 'Legacy Code Horror Meter™',
      subtitle: 'Dare to discover how terrifying your legacy tax code really is...',
      githubButton: 'View on GitHub'
    },
    codeInput: {
      title: 'Paste Your Legacy Tax Code',
      placeholder: '// Paste your horrifying legacy tax calculation code here...\n// The meter will analyze and rate its horror level!',
      analyzeButton: 'Unleash the Horror Meter!',
      analyzing: 'Analyzing Horror Level...',
      selectSample: 'Or select a sample'
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
    fireExplosion: {
      title: '💀 CRITICAL MELTDOWN! 💀',
      subtitle: '🔥 SYSTEM FAILURE! 🔥',
      detail: '💥 140% HORROR OVERLOAD! 💥'
    }
  },
  no: {
    header: {
      title: 'Arv-Kode Grøssomåleren™',
      subtitle: 'Tør du å oppdage hvor skremmende din gamle skattekode egentlig er...',
      githubButton: 'Se på GitHub'
    },
    codeInput: {
      title: 'Lim Inn Din Gamle Skattekode',
      placeholder: '// Lim inn din skrekkelige gamle skatteberegningskode her...\n// Måleren vil analysere og vurdere grøssomhetsnivået!',
      analyzeButton: 'Slipp Løs Grøssomåleren!',
      analyzing: 'Analyserer Grøssomhetsnivå...',
      selectSample: 'Eller velg et eksempel'
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
    fireExplosion: {
      title: '💀 KRITISK NEDSMELTING! 💀',
      subtitle: '🔥 SYSTEMFEIL! 🔥',
      detail: '💥 140% GRØSSOM-OVERBELASTNING! 💥'
    }
  }
};

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
