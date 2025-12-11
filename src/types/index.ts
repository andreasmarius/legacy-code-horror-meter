export interface HorrorResult {
  score: number;
  factors: HorrorFactor[];
  refactorSuggestion: string;
  severity: 'low' | 'medium' | 'high' | 'extreme';
}

export interface HorrorFactor {
  name: string;
  description: string;
  severity: number;
  count: number;
}

export interface LegacySample {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
}

export interface AnalysisMetrics {
  magicNumbers: number;
  nestedConditions: number;
  todos: number;
  hardcodedValues: number;
  longFunctions: number;
  emptyTryCatch: number;
  suspiciousNames: number;
  lineCount: number;
}
