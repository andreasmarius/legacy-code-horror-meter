import React from 'react';
import { motion } from 'framer-motion';
import { FaGhost } from 'react-icons/fa';

interface GhostMascotProps {
  severity: 'low' | 'medium' | 'high' | 'extreme';
  isVisible: boolean;
}

export const GhostMascot: React.FC<GhostMascotProps> = ({ severity, isVisible }) => {
  if (!isVisible) return null;

  const getGhostExpression = () => {
    switch (severity) {
      case 'low':
        return {
          emoji: '😊',
          message: 'Not too bad!',
          color: 'text-green-400'
        };
      case 'medium':
        return {
          emoji: '😰',
          message: 'Getting spooky...',
          color: 'text-yellow-400'
        };
      case 'high':
        return {
          emoji: '😱',
          message: 'This is horrifying!',
          color: 'text-orange-400'
        };
      case 'extreme':
        return {
          emoji: '💀',
          message: 'I CANNOT EVEN!',
          color: 'text-red-400'
        };
    }
  };

  const expression = getGhostExpression();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: severity === 'extreme' ? [0, -10, 10, -10, 0] : 0
      }}
      transition={{
        duration: 0.8,
        rotate: {
          repeat: severity === 'extreme' ? Infinity : 0,
          duration: 0.5
        }
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Ghost Icon */}
        <div className="relative">
          <motion.div
            animate={{
              scale: severity === 'extreme' ? [1, 1.1, 1] : 1
            }}
            transition={{
              duration: 0.5,
              repeat: severity === 'extreme' ? Infinity : 0
            }}
          >
            <FaGhost className={`text-8xl ${expression.color} drop-shadow-2xl animate-float`} />
          </motion.div>

          {/* Face Expression */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-4xl">
            {expression.emoji}
          </div>
        </div>

        {/* Speech Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 -translate-y-full"
        >
          <div className="relative bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl font-bold whitespace-nowrap">
            {expression.message}
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
            </div>
          </div>
        </motion.div>

        {/* Glow effect for extreme horror */}
        {severity === 'extreme' && (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 bg-red-500 rounded-full blur-3xl -z-10"
          />
        )}
      </motion.div>
    </motion.div>
  );
};
