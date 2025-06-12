import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

const AnimatedText = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.025, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="mt-2 h-5 overflow-hidden font-mono text-md text-neutral-300"
      variants={container}
      initial="hidden"
      animate="visible"
      key={text}
    >
      {text.split('').map((char, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {char}
        </motion.span>
      ))}
      <motion.span
        className="ml-1 inline-block h-4 w-1 bg-neutral-400"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </motion.div>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const commitData = {
    message: '//Standby:AwaitingNewCommits',
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <footer className="relative text-neutral-400">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="h-px bg-gradient-to-r from-orange-400 to-yellow-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{
            transformOrigin: 'center',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
          animate={{
            scaleX: [1, 0.7, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            scaleX: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            },
            default: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                repeatDelay: 0.5,
            }
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <div>
              <p className="text-lg font-light">Designed & Built by</p>
              <p className="text-xl font-semibold text-white">Harsha Vardhan Reddy</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-sm font-light text-neutral-500">Live from `main`</p>
              </div>
              <AnimatedText text={commitData.message} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
             <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="nodeGradient"><stop offset="0%" stopColor="#FBBF24" /><stop offset="100%" stopColor="#F97316" /></radialGradient>
                <path id="pathA" d="M 20 40 Q 50 10, 80 40" /><path id="pathB" d="M 80 40 Q 110 70, 140 40" /><path id="pathC" d="M 20 40 Q 80 75, 140 40" /><path id="pathD" d="M 140 40 Q 160 20, 180 40" />
              </defs>
              <g stroke="currentColor" strokeWidth="0.5" className="text-orange-400/20">
                <path d="M 20 40 Q 50 10, 80 40" fill="none" /><path d="M 80 40 Q 110 70, 140 40" fill="none" /><path d="M 20 40 Q 80 75, 140 40" fill="none" /><path d="M 140 40 Q 160 20, 180 40" fill="none" />
              </g>
              <g fill="url(#nodeGradient)">
                <circle cx="20" cy="40" r="5" /><circle cx="80" cy="40" r="5" /><circle cx="140" cy="40" r="5" /><circle cx="180" cy="40" r="5" />
              </g>
              <g fill="currentColor" className="text-yellow-300">
                <circle r="3.5"><animateMotion dur="4s" repeatCount="indefinite" begin="0s"><mpath xlinkHref="#pathA" /></animateMotion><animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" dur="4s" repeatCount="indefinite" begin="0s" /></circle>
                <circle r="3.5"><animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s"><mpath xlinkHref="#pathB" /></animateMotion><animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" dur="3.5s" repeatCount="indefinite" begin="0.5s" /></circle>
                <circle r="3.5"><animateMotion dur="4.5s" repeatCount="indefinite" begin="1.2s"><mpath xlinkHref="#pathC" /></animateMotion><animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" dur="4.5s" repeatCount="indefinite" begin="1.2s" /></circle>
                <circle r="3.5"><animateMotion dur="3s" repeatCount="indefinite" begin="2.5s"><mpath xlinkHref="#pathD" /></animateMotion><animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.1; 0.9; 1" dur="3s" repeatCount="indefinite" begin="2.5s" /></circle>
              </g>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-gradient-to-br from-orange-500 to-yellow-400 text-white rounded-lg p-3 shadow-lg z-50" aria-label="Back to top" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, ease: 'easeOut' }} whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 0px 15px rgba(249, 115, 22, 0.5)" }} whileTap={{ scale: 0.9, rotate: -5 }}>
            <HiArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;