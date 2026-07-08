import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <footer className="relative text-neutral-400 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-orange-400/80 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ transformOrigin: 'center' }}
          transition={{ duration: 0.45 }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between"
        >
          <div className="text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">harshabuilds.tech</p>
            <p className="text-lg font-semibold text-white mt-1">Harsha Vardhan Reddy Talatala</p>
            <p className="text-sm text-neutral-400 mt-1">Backend Engineering Intern • Spring Boot • AWS • PostgreSQL</p>
          </div>

          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gradient-to-br from-orange-500 to-yellow-400 text-white rounded-lg p-3 shadow-lg z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
