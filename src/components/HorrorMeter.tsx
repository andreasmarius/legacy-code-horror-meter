import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { motion } from 'framer-motion';
import { FaSkull, FaFire, FaGhost } from 'react-icons/fa';

interface HorrorMeterProps {
  score: number;
  severity: 'low' | 'medium' | 'high' | 'extreme';
}

export const HorrorMeter: React.FC<HorrorMeterProps> = ({ score, severity }) => {
  const getColorScheme = () => {
    switch (severity) {
      case 'low':
        return {
          colors: ['#00ff41', '#ffff00', '#ff9900'],
          text: 'Relatively Clean',
          emoji: '😊',
          icon: null
        };
      case 'medium':
        return {
          colors: ['#ffff00', '#ff9900', '#ff0000'],
          text: 'Needs Attention',
          emoji: '😰',
          icon: <FaGhost className="text-yellow-400" />
        };
      case 'high':
        return {
          colors: ['#ff9900', '#ff0000', '#8b0000'],
          text: 'Code Horror!',
          emoji: '💀',
          icon: <FaSkull className="text-red-500" />
        };
      case 'extreme':
        return {
          colors: ['#ff0000', '#8b0000', '#4b0000'],
          text: 'BURN IT WITH FIRE!',
          emoji: '🔥',
          icon: <FaFire className="text-orange-500" />
        };
    }
  };

  const theme = getColorScheme();
  const normalizedScore = score / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`horror-card text-center ${
        severity === 'extreme' ? 'animate-shake blood-glow' : ''
      } ${severity === 'high' ? 'spooky-glow' : ''}`}
    >
      <motion.div
        animate={severity === 'extreme' ? { rotate: [0, -5, 5, -5, 0] } : {}}
        transition={{ duration: 0.5, repeat: severity === 'extreme' ? Infinity : 0 }}
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          {theme.icon && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {theme.icon}
            </motion.div>
          )}
          Horror Score
          <span className="text-5xl">{theme.emoji}</span>
        </h2>

        <div className="relative">
          <GaugeChart
            id="horror-gauge"
            nrOfLevels={20}
            percent={normalizedScore}
            colors={theme.colors}
            arcWidth={0.3}
            textColor="#ffffff"
            needleColor="#ffffff"
            needleBaseColor="#ffffff"
            formatTextValue={() => `${score}`}
            animate={true}
            animDelay={0}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4"
        >
          <div
            className={`text-2xl font-bold ${
              severity === 'extreme'
                ? 'text-red-500 animate-pulse'
                : severity === 'high'
                ? 'text-orange-500'
                : severity === 'medium'
                ? 'text-yellow-500'
                : 'text-green-500'
            }`}
          >
            {theme.text}
          </div>

          <div className="mt-2 text-sm text-gray-400">
            Score: <span className="font-mono text-white">{score}/100</span>
          </div>
        </motion.div>

        {severity === 'extreme' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-4 bg-red-900/30 border border-red-500 rounded-lg"
          >
            <p className="text-red-300 font-semibold">
              ⚠️ This code has achieved legendary horror status!
            </p>
            <p className="text-sm text-red-400 mt-2">
              Recommend immediate refactoring before it gains sentience.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
