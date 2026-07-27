import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <img
            src="/images/logo.png"
            alt="Abstrakt Homes"
            className="h-20 w-auto mx-auto mb-8 animate-pulse-soft"
          />
          <h2 className="font-display text-2xl text-white mb-2 tracking-wide">
            Abstrakt Homes
          </h2>
          <p className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-10">
            Premium Windows & Doors
          </p>
        </motion.div>

        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-gray-500 text-xs mt-4 tracking-widest">
          {Math.min(Math.floor(progress), 100)}%
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
