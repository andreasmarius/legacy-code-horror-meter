import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { motion } from 'framer-motion';
import { FaSkull, FaFire, FaGhost } from 'react-icons/fa';

interface HorrorMeterProps {
  score: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  translations: {
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
}

export const HorrorMeter: React.FC<HorrorMeterProps> = ({ score, severity, translations }) => {
  const getColorScheme = () => {
    switch (severity) {
      case 'low':
        return {
          colors: ['#00ff41', '#ffff00', '#ff9900'],
          text: translations.severityLevels.low,
          emoji: '😊',
          icon: null
        };
      case 'medium':
        return {
          colors: ['#ffff00', '#ff9900', '#ff0000'],
          text: translations.severityLevels.medium,
          emoji: '😰',
          icon: <FaGhost className="text-yellow-400" />
        };
      case 'high':
        return {
          colors: ['#ff9900', '#ff0000', '#8b0000'],
          text: translations.severityLevels.high,
          emoji: '💀',
          icon: <FaSkull className="text-red-500" />
        };
      case 'critical':
        return {
          colors: ['#ff0000', '#8b0000', '#4b0000'],
          text: translations.severityLevels.critical,
          emoji: '💥',
          icon: <FaFire className="text-orange-500 animate-pulse" />
        };
    }
  };

  const theme = getColorScheme();
  // Allow score to exceed 100% and display up to 140%
  const normalizedScore = Math.min(score / 140, 1);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className={`horror-card text-center ${
        severity === 'critical' ? 'animate-shake blood-glow' : ''
      } ${severity === 'high' ? 'spooky-glow' : ''}`}
    >
      <motion.div
        animate={severity === 'critical' ? { rotate: [0, -5, 5, -5, 0] } : {}}
        transition={{ duration: 0.5, repeat: severity === 'critical' ? Infinity : 0 }}
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
          {translations.title}
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
              severity === 'critical'
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
            {translations.scoreLabel}: <span className={`font-mono text-white ${score > 100 ? 'text-red-400 text-xl font-bold' : ''}`}>{score}/140</span>
            {score > 100 && (
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-2 text-red-500 font-bold"
              >
                {translations.overload}
              </motion.span>
            )}
          </div>
        </motion.div>

        {severity === 'critical' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
            transition={{ delay: 0.8, scale: { duration: 1, repeat: Infinity } }}
            className="mt-6 p-4 bg-red-900/50 border-2 border-red-500 rounded-lg animate-pulse"
          >
            <p className="text-red-200 font-bold text-lg">
              🚨 {translations.criticalWarning} 🚨
            </p>
            <p className="text-sm text-red-300 mt-2">
              {score > 100 ? (
                <span className="font-bold">{translations.overloadMessage}</span>
              ) : (
                translations.criticalMessage
              )}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
