import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeInput } from '@/components/CodeInput';
import { HorrorMeter } from '@/components/HorrorMeter';
import { AnalysisPanel } from '@/components/AnalysisPanel';
import { GhostMascot } from '@/components/GhostMascot';
import { FireExplosion } from '@/components/FireExplosion';
import { HorrorLeaderboard } from '@/components/HorrorLeaderboard';
import { SubmitToLeaderboard } from '@/components/SubmitToLeaderboard';
import { calculateHorrorScore } from '@/logic/calculateHorrorScore';
import { HorrorResult } from '@/types';
import { FaGithub, FaSkull, FaTrophy } from 'react-icons/fa';
import { soundEffects } from '@/utils/soundEffects';
import { Language, getTranslation } from '@/i18n/translations';
import '@/styles/globals.css';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [result, setResult] = useState<HorrorResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<'analyzer' | 'leaderboard'>('analyzer');
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const t = getTranslation(language);

  const handleAnalyze = async () => {
    if (!code.trim()) return;

    setIsAnalyzing(true);
    
    // Simulate analysis delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const horrorResult = calculateHorrorScore(code);
    setResult(horrorResult);
    setIsAnalyzing(false);

    // Play sound effect based on severity
    soundEffects.playSeveritySound(horrorResult.severity);

    // Trigger explosion effect for critical horror (score >= 100)
    if (horrorResult.score >= 100) {
      setShowExplosion(true);
      setTimeout(() => setShowExplosion(false), 5000);
    }
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // Clear results when code changes
    if (result) {
      setResult(null);
      setShowSubmitForm(false);
    }
  };

  const handleSubmitSuccess = () => {
    setShowSubmitForm(false);
    setCurrentView('leaderboard');
  };

  const handleSkipSubmit = () => {
    setShowSubmitForm(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative"
      >
        {/* Language Toggle */}
        <div className="absolute top-0 right-0">
          <button
            onClick={() => setLanguage(language === 'en' ? 'no' : 'en')}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-semibold"
          >
            <span className="text-2xl">{language === 'en' ? '🇳🇴' : '🇬🇧'}</span>
            <span>{language === 'en' ? 'Norsk' : 'English'}</span>
          </button>
        </div>

        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4"
        >
          <FaSkull className="text-7xl text-purple-500 mx-auto drop-shadow-2xl" />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          {t.header.title}
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {t.header.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href="https://github.com/andreasmarius/legacy-code-horror-meter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm">{t.header.githubButton}</span>
          </a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentView('analyzer')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentView === 'analyzer'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            🔬 {t.navigation.analyzer}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentView('leaderboard')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentView === 'leaderboard'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            🔥 {t.navigation.leaderboard}
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content - Conditional Rendering */}
      {currentView === 'analyzer' ? (
        /* Analyzer View */
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Code Input */}
          <div>
            <CodeInput
              code={code}
              onCodeChange={handleCodeChange}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
              translations={t.codeInput}
            />
          </div>

          {/* Right Column: Results */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              {result ? (
                showSubmitForm ? (
                  /* Submit Form */
                  <SubmitToLeaderboard
                    key="submit"
                    result={result}
                    code={code}
                    translations={t.submitForm}
                    onSuccess={handleSubmitSuccess}
                    onSkip={handleSkipSubmit}
                  />
                ) : (
                  /* Analysis Results */
                  <>
                    <HorrorMeter
                      key="meter"
                      score={result.score}
                      severity={result.severity}
                      translations={t.horrorMeter}
                    />
                    <AnalysisPanel
                      key="panel"
                      factors={result.factors}
                      refactorSuggestion={result.refactorSuggestion}
                      translations={t.analysisPanel}
                    />
                    {/* Share Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowSubmitForm(true)}
                      className="w-full px-6 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-3"
                    >
                      <FaTrophy className="text-2xl" />
                      {t.shareButton}
                    </motion.button>
                  </>
                )
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
                    {t.placeholder.title}
                  </h3>
                  <p className="text-gray-500">
                    {t.placeholder.subtitle}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      ) : (
        /* Leaderboard View */
        <div className="max-w-7xl mx-auto">
          <HorrorLeaderboard translations={t.leaderboard} />
        </div>
      )}

      {/* Ghost Mascot - Only show in analyzer view */}
      {currentView === 'analyzer' && (
        <GhostMascot
          severity={result?.severity || 'low'}
          isVisible={!!result}
          translations={t.ghostMascot}
        />
      )}

      {/* Fire Explosion Effect for Score >= 100 */}
      <FireExplosion isActive={showExplosion} translations={t.fireExplosion} />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16 mb-8 text-gray-500 text-sm"
      >
        <p>
          {t.footer}
        </p>
      </motion.footer>
    </div>
  );
};

export default App;
