import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeInput } from '@/components/CodeInput';
import { HorrorMeter } from '@/components/HorrorMeter';
import { AnalysisPanel } from '@/components/AnalysisPanel';
import { GhostMascot } from '@/components/GhostMascot';
import { calculateHorrorScore } from '@/logic/calculateHorrorScore';
import { HorrorResult } from '@/types';
import { FaGithub, FaSkull } from 'react-icons/fa';
import '@/styles/globals.css';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [result, setResult] = useState<HorrorResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!code.trim()) return;

    setIsAnalyzing(true);
    
    // Simulate analysis delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const horrorResult = calculateHorrorScore(code);
    setResult(horrorResult);
    setIsAnalyzing(false);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // Clear results when code changes
    if (result) {
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4"
        >
          <FaSkull className="text-7xl text-purple-500 mx-auto drop-shadow-2xl" />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Legacy Code Horror Meter™
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Dare to discover how terrifying your legacy tax code really is...
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href="https://github.com/andreasmarius/legacy-code-horror-meter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm">View on GitHub</span>
          </a>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Code Input */}
          <div>
            <CodeInput
              code={code}
              onCodeChange={handleCodeChange}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
            />
          </div>

          {/* Right Column: Results */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {result ? (
                <>
                  <HorrorMeter
                    key="meter"
                    score={result.score}
                    severity={result.severity}
                  />
                  <AnalysisPanel
                    key="panel"
                    factors={result.factors}
                    refactorSuggestion={result.refactorSuggestion}
                  />
                </>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="horror-card text-center py-16"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaSkull className="text-6xl text-gray-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">
                    Awaiting Analysis...
                  </h3>
                  <p className="text-gray-500">
                    Paste or select code, then click "Unleash the Horror Meter!"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Ghost Mascot */}
      <GhostMascot
        severity={result?.severity || 'low'}
        isVisible={!!result}
      />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16 mb-8 text-gray-500 text-sm"
      >
        <p>
          Built with React + TypeScript + Tailwind CSS | 
          Deployed on Vercel | 
          Made with 💀 for legacy code survivors
        </p>
      </motion.footer>
    </div>
  );
};

export default App;
