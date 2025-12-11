import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaSkull, FaSpinner } from 'react-icons/fa';
import { horrorLeaderboardApi } from '@/lib/supabase';
import { HorrorResult } from '@/types';

interface SubmitToLeaderboardProps {
  result: HorrorResult;
  code: string;
  translations: {
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
  onSuccess: () => void;
  onSkip: () => void;
}

export const SubmitToLeaderboard: React.FC<SubmitToLeaderboardProps> = ({
  result,
  code,
  translations,
  onSuccess,
  onSkip
}) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !title.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await horrorLeaderboardApi.submitSnippet({
        title: title.trim(),
        author: name.trim(),
        horror_score: result.score,
        factors: result.factors.map(f => f.description),
        code_snippet: code
      });

      setSubmitStatus('success');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      console.error('Failed to submit to leaderboard:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="horror-card p-8"
    >
      <div className="text-center mb-6">
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block mb-4"
        >
          <FaTrophy className="text-6xl text-yellow-500" />
        </motion.div>
        <h3 className="text-3xl font-bold text-red-600 mb-2">
          {translations.title}
        </h3>
        <p className="text-gray-300 text-lg">
          {translations.subtitle}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              <FaSkull className="text-6xl text-green-500 mx-auto mb-4" />
            </motion.div>
            <p className="text-2xl font-bold text-green-400">
              {translations.successMessage}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {translations.nameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={translations.namePlaceholder}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-red-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                maxLength={50}
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {translations.titleLabel}
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={translations.titlePlaceholder}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-red-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                maxLength={100}
                disabled={isSubmitting}
                required
              />
            </div>

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-400 text-center"
              >
                {translations.errorMessage}
              </motion.div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onSkip}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {translations.skipButton}
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || !title.trim()}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    {translations.submitting}
                  </>
                ) : (
                  translations.submitButton
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
