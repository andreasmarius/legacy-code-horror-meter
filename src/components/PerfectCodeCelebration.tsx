import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaGem, FaCrown } from 'react-icons/fa';

interface PerfectCodeCelebrationProps {
  isActive: boolean;
  translations: {
    title: string;
    subtitle: string;
    message: string;
  };
}

export const PerfectCodeCelebration: React.FC<PerfectCodeCelebrationProps> = ({ 
  isActive, 
  translations 
}) => {
  if (!isActive) return null;

  // Generate sparkles
  const sparkles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 1 + Math.random() * 2,
    size: 10 + Math.random() * 20
  }));

  // Generate floating stars
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 100 + Math.random() * 20,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Golden Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.2] }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.3), rgba(255, 255, 255, 0.1), transparent)'
        }}
      />

      {/* Sparkle Particles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          initial={{ 
            x: `${sparkle.x}vw`,
            y: `${sparkle.y}vh`,
            scale: 0,
            opacity: 0,
            rotate: 0
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
            y: `${sparkle.y - 20}vh`
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute"
        >
          <FaStar 
            className="text-yellow-400" 
            style={{ 
              width: sparkle.size, 
              height: sparkle.size,
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))'
            }} 
          />
        </motion.div>
      ))}

      {/* Rising Stars from Bottom */}
      {stars.map((star) => (
        <motion.div
          key={`rising-star-${star.id}`}
          initial={{ 
            x: `${star.x}vw`,
            y: `${star.y}vh`,
            opacity: 0,
            scale: 0
          }}
          animate={{
            y: `-20vh`,
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: 'easeOut'
          }}
          className="absolute"
        >
          <FaGem className="text-cyan-400" style={{ filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.8))' }} />
        </motion.div>
      ))}

      {/* Confetti Effect */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={`confetti-${i}`}
          initial={{
            x: `${50}vw`,
            y: `-10vh`,
            opacity: 1,
            rotate: 0
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `120vh`,
            opacity: [1, 1, 0],
            rotate: Math.random() * 720
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 1.5,
            ease: 'easeOut'
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: ['#FFD700', '#00CED1', '#FF69B4', '#98FB98', '#DDA0DD'][i % 5],
            boxShadow: '0 0 10px currentColor'
          }}
        />
      ))}

      {/* Radial Light Beams */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`beam-${i}`}
          initial={{ 
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0, 1.5],
            rotate: [i * 30, i * 30 + 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from ${i * 30}deg, transparent 0deg, rgba(255, 215, 0, 0.3) 5deg, transparent 10deg)`,
            transformOrigin: 'center'
          }}
        />
      ))}

      {/* Crown Animation */}
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1, 
          scale: [0, 1.2, 1],
          rotate: [0, -10, 10, -5, 5, 0]
        }}
        transition={{ 
          duration: 1.5,
          times: [0, 0.3, 0.5, 0.7, 0.9, 1],
          ease: 'easeOut'
        }}
        className="absolute top-10 left-1/2 transform -translate-x-1/2"
      >
        <FaCrown 
          className="text-yellow-400 text-9xl"
          style={{ 
            filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 1))',
          }}
        />
      </motion.div>

      {/* Perfect Trophy */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.3, 1],
          opacity: 1,
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 1,
          times: [0, 0.6, 1],
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          {/* Glow rings */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 -m-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 blur-2xl"
          />
          <FaTrophy 
            className="text-yellow-400 relative z-10"
            style={{ 
              width: 200, 
              height: 200,
              filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 1))'
            }}
          />
        </div>
      </motion.div>

      {/* Text Messages */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-32 text-center"
      >
        <motion.h2
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="text-6xl font-bold mb-4"
          style={{
            background: 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))'
          }}
        >
          {translations.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-3xl font-semibold text-cyan-400 mb-2"
          style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.8)' }}
        >
          {translations.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl text-green-400"
          style={{ textShadow: '0 0 15px rgba(0, 255, 0, 0.6)' }}
        >
          {translations.message}
        </motion.p>
      </motion.div>

      {/* Shimmering Border Effect */}
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(255, 215, 0, 0.3) 10deg,
              transparent 20deg
            )
          `,
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
};
