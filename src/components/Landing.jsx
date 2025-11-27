import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'resume', name: 'Resume', url: 'https://drive.google.com/file/d/1fvN6ldD5Yaa4Akexv1VaENh28Nl0VyoO/view?usp=sharing' },
  { id: 'projects', name: 'Projects', url: '#projects' },
  { id: 'linkedin', name: 'Linkedin', url: 'https://www.linkedin.com/in/HarshaTalatala' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/HarshaTalatala' },
];

const Landing = () => {
  const [activeLink, setActiveLink] = useState('resume');

  return (
    <section id="home" className="relative w-full">
      <nav className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 flex items-center p-1 sm:p-2 bg-zinc-900/80 border border-zinc-700 rounded-full z-20">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            onClick={(e) => {
              setActiveLink(item.id);
                if (item.url) {
                  if (item.url.startsWith('#')) {
                    e.preventDefault();
                    const targetId = item.url.replace('#', '');
                    document.getElementById(targetId)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  } else {
                    e.preventDefault();
                    window.open(item.url, '_blank', 'noopener,noreferrer');
                  }
                }
            }}
            className={`relative px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full z-10 transition-colors duration-300 ${
              activeLink === item.id
                ? 'text-orange-500'
                : 'text-neutral-400 hover:text-white'
            }`}
            target={item.url && !item.url.startsWith('#') ? '_blank' : undefined}
            rel={item.url && !item.url.startsWith('#') ? 'noopener noreferrer' : undefined}
          >
            {activeLink === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-zinc-800 rounded-full"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        ))}
        <a
          href="#contact"
          className="relative ml-2 px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium bg-white text-black rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Contact
        </a>
      </nav>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-56 pb-16 md:pb-20">
        <header className="text-left mb-16 min-h-[120px] max-w-full">
          <motion.h1
            className="break-words text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Harsha Vardhan Reddy Talatala
          </motion.h1>
          <motion.p
            className="pt-1 text-lg md:text-xl text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          >
            Backend-Focused Full Stack Developer
          </motion.p>
        </header>

        <motion.div
          id="about"
          className="w-full flex items-start text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-5xl text-neutral-600 mr-4 md:mr-8 mt-1 select-none">↳</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            <p className="text-md md:text-lg lg:text-xl text-neutral-300 leading-relaxed">
              I specialize in backend-focused full-stack development using Java Spring Boot and React, designing APIs, services, and data flows that scale.
            </p>
            <p className="text-md md:text-lg lg:text-xl text-neutral-300 leading-relaxed">
              I care about clean architecture, performance, and user-centric design, and I deploy reliable systems to Azure with robust CI/CD.
            </p>
          </div>
        </motion.div>

        <div className="w-full flex justify-center pt-20">
          <motion.a
            href="#expertise"
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: [0, 16, 0], opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center cursor-pointer"
            aria-label="Scroll down"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('expertise')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
          >
            <svg
              className="w-8 h-8 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-xs text-neutral-400 mt-1">Scroll</span>
          </motion.a>
        </div>
      </main>
    </section>
  );
};

export default Landing;