import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSkull, FaFire, FaTrophy, FaGhost, FaCrown } from 'react-icons/fa';
import { horrorLeaderboardApi, HorrorSnippet } from '@/lib/supabase';
import { soundEffects } from '@/utils/soundEffects';
import Editor from '@monaco-editor/react';

interface HorrorLeaderboardProps {
  mockData?: HorrorSnippet[];
  translations?: {
    title: string;
    loading: string;
    error: string;
    noData: string;
    rank: string;
    score: string;
    viewCode: string;
    close: string;
  };
}

const MOCK_SNIPPETS: HorrorSnippet[] = [
  {
    id: '1',
    title: 'Ancient Tax Calculator',
    author: 'Anonymous',
    horror_score: 125,
    factors: ['eval() usage', 'Deep nesting', 'Magic numbers', 'No types'],
    code_snippet: 'var x=eval("calculateTax()");for(var i=0;i<100;i++){if(i>50){if(i<75){tax=x*0.25;}}}',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'The Callback Hell',
    author: 'John Doe',
    horror_score: 98,
    factors: ['Callback pyramid', 'No error handling', 'Unclear logic'],
    code_snippet: 'callback(function(){callback(function(){callback(function(){return true;});});});',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Global Variable Disaster',
    author: 'Jane Smith',
    horror_score: 87,
    factors: ['Global pollution', 'Mutable state', 'No encapsulation'],
    code_snippet: 'var globalTax=0;var rate=0.25;function calc(){globalTax=income*rate;}',
    created_at: new Date().toISOString()
  }
];

export const HorrorLeaderboard: React.FC<HorrorLeaderboardProps> = ({ 
  mockData,
  translations = {
    title: 'Hall of Shame',
    loading: 'Loading horrifying code...',
    error: 'Failed to load leaderboard',
    noData: 'No horror snippets yet. Be the first!',
    rank: 'Rank',
    score: 'Score',
    viewCode: 'View Code',
    close: 'Close'
  }
}) => {
  const [snippets, setSnippets] = useState<HorrorSnippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSnippet, setSelectedSnippet] = useState<HorrorSnippet | null>(null);
  const [animatingRank, setAnimatingRank] = useState<number | null>(null);

  useEffect(() => {
    loadSnippets();
  }, []);

  const loadSnippets = async () => {
    setLoading(true);
    setError(null);

    try {
      if (mockData) {
        setSnippets(mockData);
      } else {
        const data = await horrorLeaderboardApi.getTopSnippets(10);
        if (data.length === 0) {
          // Use mock data if database is empty
          setSnippets(MOCK_SNIPPETS);
        } else {
          setSnippets(data);
        }
      }
    } catch (err) {
      console.error('Error loading snippets:', err);
      setError('Failed to connect to database. Using mock data.');
      setSnippets(MOCK_SNIPPETS);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <FaCrown className="text-yellow-400 text-3xl" />;
      case 2:
        return <FaTrophy className="text-gray-400 text-2xl" />;
      case 3:
        return <FaTrophy className="text-orange-600 text-2xl" />;
      default:
        return <FaSkull className="text-purple-400 text-xl" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 100) return 'text-red-500';
    if (score >= 80) return 'text-orange-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getScoreGlow = (score: number) => {
    if (score >= 100) return 'blood-glow';
    if (score >= 80) return 'spooky-glow';
    return '';
  };

  const handleSnippetClick = (snippet: HorrorSnippet, rank: number) => {
    setAnimatingRank(rank);
    setSelectedSnippet(snippet);

    // Play sound based on score
    if (snippet.horror_score >= 100) {
      soundEffects.playMaximumHorror();
    } else if (snippet.horror_score >= 80) {
      soundEffects.playHighHorror();
    } else if (snippet.horror_score >= 50) {
      soundEffects.playMediumHorror();
    }

    setTimeout(() => setAnimatingRank(null), 500);
  };

  if (loading) {
    return (
      <div className="horror-card">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="flex justify-center items-center py-16"
        >
          <FaGhost className="text-6xl text-purple-500" />
        </motion.div>
        <p className="text-center text-gray-400 mt-4">{translations.loading}</p>
      </div>
    );
  }

  if (error && snippets.length === 0) {
    return (
      <div className="horror-card">
        <div className="text-center py-16">
          <FaSkull className="text-6xl text-red-500 mx-auto mb-4" />
          <p className="text-red-400">{error}</p>
          <button
            onClick={loadSnippets}
            className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="horror-card"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaFire className="text-4xl text-orange-500" />
            </motion.div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              {translations.title}
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadSnippets}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm"
          >
            Refresh
          </motion.button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-yellow-900/30 border border-yellow-500 rounded-lg text-yellow-300 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* Leaderboard */}
        <div className="space-y-3">
          {snippets.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              {translations.noData}
            </div>
          ) : (
            snippets.map((snippet, index) => {
              const rank = index + 1;
              const isTopThree = rank <= 3;
              
              return (
                <motion.div
                  key={snippet.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    scale: animatingRank === rank ? 1.05 : 1
                  }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleSnippetClick(snippet, rank)}
                  className={`
                    relative p-4 rounded-lg cursor-pointer transition-all
                    ${isTopThree ? 'bg-gradient-to-r from-purple-900/50 to-red-900/50 border-2 border-orange-500' : 'bg-gray-800/50 border border-gray-700'}
                    ${getScoreGlow(snippet.horror_score)}
                    hover:border-purple-500
                  `}
                >
                  <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className="flex-shrink-0 w-16 text-center">
                      {getRankIcon(rank)}
                      <div className="text-sm text-gray-400 mt-1">#{rank}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {snippet.title}
                        </h3>
                        <motion.div
                          animate={snippet.horror_score >= 100 ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                          className={`text-2xl font-black ${getScoreColor(snippet.horror_score)}`}
                        >
                          {snippet.horror_score}
                          {snippet.horror_score >= 100 && <FaFire className="inline ml-1 text-orange-500" />}
                        </motion.div>
                      </div>

                      {snippet.author && (
                        <div className="text-sm text-gray-400 mb-2">
                          by {snippet.author}
                        </div>
                      )}

                      {snippet.factors && snippet.factors.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {snippet.factors.slice(0, 3).map((factor, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-red-900/30 border border-red-700 rounded text-xs text-red-300"
                            >
                              💀 {factor}
                            </span>
                          ))}
                          {snippet.factors.length > 3 && (
                            <span className="px-2 py-1 text-xs text-gray-400">
                              +{snippet.factors.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-purple-400"
                    >
                      →
                    </motion.div>
                  </div>

                  {/* Top 3 glow effect */}
                  {isTopThree && (
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg pointer-events-none"
                    />
                  )}
                </motion.div>
              );
            })
          )}
        </div>
      </motion.div>

      {/* Modal for viewing code */}
      <AnimatePresence>
        {selectedSnippet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSnippet(null)}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="horror-card max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {selectedSnippet.title}
                  </h2>
                  {selectedSnippet.author && (
                    <p className="text-gray-400 text-sm">by {selectedSnippet.author}</p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className={`text-4xl font-black ${getScoreColor(selectedSnippet.horror_score)}`}>
                    {selectedSnippet.horror_score}
                  </div>
                  <button
                    onClick={() => setSelectedSnippet(null)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {translations.close}
                  </button>
                </div>
              </div>

              {/* Factors */}
              {selectedSnippet.factors && selectedSnippet.factors.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Horror Factors:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSnippet.factors.map((factor, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-red-900/30 border border-red-700 rounded text-sm text-red-300"
                      >
                        💀 {factor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Editor */}
              {selectedSnippet.code_snippet && (
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                    Code Preview
                  </div>
                  <Editor
                    height="300px"
                    defaultLanguage="javascript"
                    value={selectedSnippet.code_snippet}
                    theme="vs-dark"
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      fontSize: 14
                    }}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
