import { HorrorResult, HorrorFactor, AnalysisMetrics } from '@/types';

export function calculateHorrorScore(code: string): HorrorResult {
  const metrics = analyzeCode(code);
  const factors = detectHorrorFactors(code, metrics);
  const score = calculateScore(factors);
  const severity = getSeverity(score);
  const refactorSuggestion = generateRefactorSuggestion(factors, metrics);

  return {
    score,
    factors,
    refactorSuggestion,
    severity
  };
}

function analyzeCode(code: string): AnalysisMetrics {
  const lines = code.split('\n');
  
  return {
    magicNumbers: countMagicNumbers(code),
    nestedConditions: countNestedConditions(code),
    todos: countTodos(code),
    hardcodedValues: countHardcodedValues(code),
    longFunctions: countLongFunctions(lines),
    emptyTryCatch: countEmptyTryCatch(code),
    suspiciousNames: countSuspiciousNames(code),
    lineCount: lines.length
  };
}

function detectHorrorFactors(code: string, metrics: AnalysisMetrics): HorrorFactor[] {
  const factors: HorrorFactor[] = [];

  if (metrics.magicNumbers > 0) {
    factors.push({
      name: '🔢 Magic Numbers Detected',
      description: `Found ${metrics.magicNumbers} hardcoded numeric values without explanation`,
      severity: Math.min(metrics.magicNumbers * 3, 20),
      count: metrics.magicNumbers
    });
  }

  if (metrics.nestedConditions > 3) {
    factors.push({
      name: '🌀 Deep Nesting Hell',
      description: `${metrics.nestedConditions} levels of nested conditions - cognitive complexity nightmare`,
      severity: metrics.nestedConditions * 5,
      count: metrics.nestedConditions
    });
  }

  if (metrics.todos > 0) {
    factors.push({
      name: '📝 TODO/FIXME Comments',
      description: `${metrics.todos} abandoned TODOs and FIXMEs haunting the codebase`,
      severity: metrics.todos * 2,
      count: metrics.todos
    });
  }

  if (metrics.hardcodedValues > 0) {
    factors.push({
      name: '💰 Hardcoded Tax Brackets',
      description: `${metrics.hardcodedValues} hardcoded tax values that should be configurable`,
      severity: metrics.hardcodedValues * 4,
      count: metrics.hardcodedValues
    });
  }

  if (metrics.longFunctions > 0) {
    factors.push({
      name: '📏 Monster Functions',
      description: `${metrics.longFunctions} functions exceeding 50 lines - violating Single Responsibility`,
      severity: metrics.longFunctions * 6,
      count: metrics.longFunctions
    });
  }

  if (metrics.emptyTryCatch > 0) {
    factors.push({
      name: '🙈 Silent Error Swallowing',
      description: `${metrics.emptyTryCatch} empty catch blocks hiding errors`,
      severity: metrics.emptyTryCatch * 10,
      count: metrics.emptyTryCatch
    });
  }

  if (metrics.suspiciousNames > 0) {
    factors.push({
      name: '🤔 Cryptic Variable Names',
      description: `${metrics.suspiciousNames} variables with single-letter or meaningless names`,
      severity: metrics.suspiciousNames * 2,
      count: metrics.suspiciousNames
    });
  }

  if (metrics.lineCount > 500) {
    factors.push({
      name: '📚 Monolithic Code File',
      description: `${metrics.lineCount} lines in a single file - needs modularization`,
      severity: Math.floor(metrics.lineCount / 50),
      count: 1
    });
  }

  // Check for specific patterns
  if (code.includes('eval(') || code.includes('Function(')) {
    factors.push({
      name: '💀 Dangerous eval() Usage',
      description: 'Using eval() or Function constructor - major security risk',
      severity: 25,
      count: (code.match(/eval\(|Function\(/g) || []).length
    });
  }

  if (code.match(/var\s+\w+/g)) {
    const varCount = (code.match(/var\s+\w+/g) || []).length;
    factors.push({
      name: '🦖 Ancient var Keyword',
      description: `Using deprecated 'var' ${varCount} times instead of const/let`,
      severity: varCount * 1,
      count: varCount
    });
  }

  return factors;
}

function countMagicNumbers(code: string): number {
  // Remove object literals and array definitions (configuration is OK)
  const withoutConfig = code
    .replace(/\{[^{}]*:[^{}]*\}/g, '') // Remove simple objects
    .replace(/\[[^\[\]]*\]/g, ''); // Remove arrays
  
  // Match standalone numbers that aren't 0, 1, or common constants
  const numberPattern = /\b(?<![\w.])((?!0\b|1\b|2\b|100\b)\d{3,})\b(?![\w.])/g;
  const matches = withoutConfig.match(numberPattern) || [];
  
  // Filter out numbers that are clearly configuration values
  const magicNumbers = matches.filter(num => {
    const n = parseInt(num);
    // Exclude year-like numbers (2000-2099) and common round numbers
    return !(n >= 2000 && n <= 2099) && n % 1000 !== 0;
  });
  
  return magicNumbers.length;
}

function countNestedConditions(code: string): number {
  let maxDepth = 0;
  let currentDepth = 0;

  for (const char of code) {
    if (char === '{') {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (char === '}') {
      currentDepth--;
    }
  }

  return maxDepth;
}

function countTodos(code: string): number {
  const todoPattern = /\/\/\s*(TODO|FIXME|HACK|XXX)/gi;
  return (code.match(todoPattern) || []).length;
}

function countHardcodedValues(code: string): number {
  // Only flag hardcoded values in direct assignments or operations (not in config objects)
  // Remove object/array configurations first
  const withoutConfig = code
    .replace(/\{[^{}]*:[^{}]*\}/g, '')
    .replace(/const\s+\w+\s*=\s*\{[\s\S]*?\};?/g, '');
  
  const patterns = [
    /\btax\w*\s*=\s*\d+/gi,  // Direct tax assignments
    /\brate\s*=\s*\d+/gi,  // Direct rate assignments (not in objects)
  ];
  
  let count = 0;
  patterns.forEach(pattern => {
    count += (withoutConfig.match(pattern) || []).length;
  });
  
  return count;
}

function countLongFunctions(lines: string[]): number {
  let count = 0;
  let inFunction = false;
  let functionLineCount = 0;

  for (const line of lines) {
    if (line.match(/function\s+\w+|=>\s*{|^\s*\w+\s*\([^)]*\)\s*{/)) {
      inFunction = true;
      functionLineCount = 0;
    }

    if (inFunction) {
      functionLineCount++;
      
      if (line.includes('}') && !line.trim().startsWith('//')) {
        if (functionLineCount > 50) {
          count++;
        }
        inFunction = false;
      }
    }
  }

  return count;
}

function countEmptyTryCatch(code: string): number {
  const emptyCatchPattern = /catch\s*\([^)]*\)\s*{\s*}/g;
  return (code.match(emptyCatchPattern) || []).length;
}

function countSuspiciousNames(code: string): number {
  // Single letter variables (excluding common loop variables)
  const singleLetterPattern = /\b(?!i\b|j\b|k\b|x\b|y\b)[a-z]\s*=/gi;
  const single = (code.match(singleLetterPattern) || []).length;
  
  // Common bad names
  const badNames = /\b(temp|tmp|data|foo|bar|baz|thing|stuff|value)\b/gi;
  const bad = (code.match(badNames) || []).length;
  
  return single + bad;
}

function calculateScore(factors: HorrorFactor[]): number {
  const totalSeverity = factors.reduce((sum, factor) => sum + factor.severity, 0);
  // Allow scores to go up to 140% for truly horrific code
  return Math.min(Math.round(totalSeverity), 140);
}

function getSeverity(score: number): 'low' | 'medium' | 'high' | 'critical' {
  if (score === 0) return 'low';
  if (score < 40) return 'low';
  if (score < 70) return 'medium';
  if (score <= 100) return 'high';
  return 'critical';
}

function generateRefactorSuggestion(factors: HorrorFactor[], metrics: AnalysisMetrics): string {
  const suggestions: string[] = [];

  suggestions.push('// ✨ Modernized TypeScript Version\n');
  suggestions.push('// Key improvements:\n');

  if (metrics.magicNumbers > 0) {
    suggestions.push('// 1. Extract magic numbers to named constants');
    suggestions.push('const TAX_RATE = 0.25;');
    suggestions.push('const THRESHOLD = 50000;\n');
  }

  if (metrics.nestedConditions > 3) {
    suggestions.push('// 2. Reduce nesting with early returns and guard clauses');
    suggestions.push('function calculateTax(income: number): number {');
    suggestions.push('  if (income <= 0) return 0;');
    suggestions.push('  if (income < THRESHOLD) return income * 0.1;');
    suggestions.push('  return income * TAX_RATE;');
    suggestions.push('}\n');
  }

  if (metrics.hardcodedValues > 0) {
    suggestions.push('// 3. Move hardcoded values to configuration');
    suggestions.push('interface TaxConfig {');
    suggestions.push('  brackets: Array<{ min: number; max: number; rate: number }>;');
    suggestions.push('}');
    suggestions.push('const config: TaxConfig = loadFromConfig();\n');
  }

  if (metrics.longFunctions > 0) {
    suggestions.push('// 4. Break down long functions into smaller, focused units');
    suggestions.push('const validateIncome = (income: number) => income > 0;');
    suggestions.push('const findTaxBracket = (income: number) => { /* ... */ };\n');
  }

  if (metrics.emptyTryCatch > 0) {
    suggestions.push('// 5. Proper error handling');
    suggestions.push('try {');
    suggestions.push('  processPayment(amount);');
    suggestions.push('} catch (error) {');
    suggestions.push('  logger.error("Payment failed", error);');
    suggestions.push('  throw new PaymentError("Failed to process payment", { cause: error });');
    suggestions.push('}\n');
  }

  suggestions.push('// 6. Use TypeScript for type safety');
  suggestions.push('type TaxBracket = "low" | "medium" | "high";');
  suggestions.push('interface TaxResult {');
  suggestions.push('  amount: number;');
  suggestions.push('  bracket: TaxBracket;');
  suggestions.push('  effectiveRate: number;');
  suggestions.push('}\n');

  return suggestions.join('\n');
}
