import React from 'react';
import { motion } from 'framer-motion';

interface FireExplosionProps {
  isActive: boolean;
  translations: {
    title: string;
    subtitle: string;
    detail: string;
  };
}

export const FireExplosion: React.FC<FireExplosionProps> = ({ isActive, translations }) => {
  if (!isActive) return null;

  const fireParticles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1 + Math.random() * 2
  }));

  const explosions = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    delay: i * 0.2
  }));

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Page Disintegration Effect - Pixelated Breakdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0.7, 1],
          scale: [1, 1.05, 0.95, 1.1]
        }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 0, 0, 0.3) 2px,
              rgba(255, 0, 0, 0.3) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 100, 0, 0.3) 2px,
              rgba(255, 100, 0, 0.3) 4px
            )
          `,
          mixBlendMode: 'multiply'
        }}
      />

      {/* Glitch Overlay Effect */}
      <motion.div
        animate={{
          x: [0, -5, 5, -5, 5, 0],
          opacity: [0, 0.7, 0, 0.7, 0, 0.7, 0]
        }}
        transition={{
          duration: 0.3,
          repeat: 10,
          ease: 'linear'
        }}
        className="absolute inset-0 bg-gradient-to-r from-red-500/50 via-transparent to-blue-500/50"
      />

      {/* Crack Lines Spreading Across Screen */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`crack-${i}`}
          initial={{ 
            pathLength: 0,
            opacity: 0
          }}
          animate={{ 
            pathLength: 1,
            opacity: [0, 1, 0.8]
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: 'easeOut'
          }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 0, 0, 0.8))' }}>
            <motion.line
              x1={`${Math.random() * 50}%`}
              y1={`${Math.random() * 50}%`}
              x2={`${50 + Math.random() * 50}%`}
              y2={`${50 + Math.random() * 50}%`}
              stroke="rgba(255, 0, 0, 0.6)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Page Fragments Breaking Apart */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`fragment-${i}`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 1,
            rotate: 0,
            scale: 1
          }}
          animate={{
            x: `${Math.random() * 200 - 50}vw`,
            y: `${Math.random() * 200 - 50}vh`,
            opacity: [1, 1, 0],
            rotate: Math.random() * 720 - 360,
            scale: [1, 0.5, 0]
          }}
          transition={{
            duration: 2,
            delay: 0.3 + Math.random() * 0.5,
            ease: 'easeOut'
          }}
          className="absolute w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 border border-red-500"
          style={{
            clipPath: 'polygon(20% 0%, 80% 10%, 100% 60%, 70% 100%, 10% 90%, 0% 40%)'
          }}
        />
      ))}
      {/* Red Vignette Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.3] }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, transparent 20%, rgba(139, 0, 0, 0.8) 100%)'
        }}
      />

      {/* Screen Flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 0.5, 0],
          backgroundColor: ['#ff0000', '#ff6600', '#ffff00', '#ff0000']
        }}
        transition={{ duration: 2, times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 1] }}
        className="absolute inset-0"
      />

      {/* Multiple Explosions */}
      {explosions.map((explosion) => (
        <motion.div
          key={explosion.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 3, 5],
            opacity: [1, 0.8, 0]
          }}
          transition={{
            duration: 1.5,
            delay: explosion.delay,
            ease: 'easeOut'
          }}
          style={{
            position: 'absolute',
            left: `${explosion.x}%`,
            top: `${explosion.y}%`,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ffff00 0%, #ff6600 30%, #ff0000 60%, transparent 100%)',
            filter: 'blur(10px)'
          }}
        />
      ))}

      {/* Fire Particles Rising */}
      {fireParticles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: '100vh',
            opacity: 1,
            scale: 0.5
          }}
          animate={{
            y: [null, '-20vh'],
            x: [null, `${particle.x + (Math.random() - 0.5) * 30}vw`],
            opacity: [1, 1, 0],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 360]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'easeOut'
          }}
          className="absolute"
          style={{
            fontSize: '40px'
          }}
        >
          {Math.random() > 0.5 ? '🔥' : '💥'}
        </motion.div>
      ))}

      {/* Shockwave Rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={`ring-${ring}`}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 8],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 2,
            delay: ring * 0.3,
            ease: 'easeOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-8 border-orange-500"
        />
      ))}

      {/* Ember Particles */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`ember-${i}`}
          initial={{
            x: '50vw',
            y: '50vh',
            opacity: 1
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: [1, 1, 0],
            scale: [1, 0]
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: Math.random() * 0.5,
            ease: 'easeOut'
          }}
          className="absolute w-2 h-2 bg-orange-500 rounded-full"
          style={{
            boxShadow: '0 0 10px #ff6600, 0 0 20px #ff0000'
          }}
        />
      ))}

      {/* Screen Shake Effect (parent container) */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, -10, 10, -10, 10, -5, 5, 0],
          y: [0, 10, -10, 10, -10, 5, -5, 0]
        }}
        transition={{
          duration: 0.5,
          repeat: 3,
          ease: 'easeInOut'
        }}
        className="absolute inset-0"
      />

      {/* Dramatic Warning Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          scale: [0, 1.2, 1, 1, 0.8],
          rotate: [null, 0]
        }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.5, 0.8, 1]
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
        style={{
          textShadow: '0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 100, 0, 0.6)'
        }}
      >
        <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 drop-shadow-2xl animate-pulse">
          💀 {translations.title} 💀
        </div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity
          }}
          className="text-5xl font-bold text-red-500 mt-4 drop-shadow-lg"
        >
          🔥 {translations.subtitle} 🔥
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1], y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-yellow-300 mt-4"
        >
          💥 {translations.detail} 💥
        </motion.div>
      </motion.div>

      {/* Falling Skulls */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`skull-${i}`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: '-10vh',
            rotate: 0,
            opacity: 0
          }}
          animate={{
            y: '110vh',
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 1.5,
            ease: 'linear'
          }}
          className="absolute text-6xl"
        >
          💀
        </motion.div>
      ))}
    </div>
  );
};
