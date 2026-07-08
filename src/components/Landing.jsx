import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  {
    id: 'resume',
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1fvN6ldD5Yaa4Akexv1VaENh28Nl0VyoO/view?usp=sharing',
  },
  { id: 'experience', name: 'Experience', url: '#experience' },
  { id: 'projects', name: 'Projects', url: '#projects' },
  { id: 'skills', name: 'Skills', url: '#skills' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/HarshaTalatala' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/HarshaTalatala' },
];

const Landing = () => {
  const [activeLink, setActiveLink] = useState('resume');

  return (
    <section id="home" className="relative w-full">
      <nav className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 flex items-center p-1 sm:p-2 bg-zinc-900/80 border border-zinc-700 rounded-full z-20 max-w-[95vw] overflow-x-auto">
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
            className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full z-10 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 whitespace-nowrap ${
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
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        ))}
        <a
          href="#contact"
          className="relative ml-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium bg-white text-black rounded-full transition-transform duration-300 ease-in-out hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 whitespace-nowrap"
        >
          Contact
        </a>
      </nav>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-52 pb-14 md:pb-20">
        <header className="text-left mb-14 max-w-5xl">
          <motion.p
            className="text-xs sm:text-sm tracking-[0.22em] text-neutral-500 uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            harshabuilds.tech
          </motion.p>
          <motion.h1
            className="break-words text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent tracking-tight leading-tight"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            Backend Engineer Intern shipping Spring Boot APIs to production
          </motion.h1>
          <motion.p
            className="pt-5 text-lg md:text-xl text-neutral-300 max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.38, ease: 'easeOut' }}
          >
            I currently build production backend systems at Neeyat AI, working across authentication, CRUD workflows, Gemini API integration, Dockerized deployment on AWS EC2, Jenkins CI automation, and PostgreSQL-backed services.
          </motion.p>
          <motion.p
            className="pt-4 text-sm md:text-base text-neutral-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.32, ease: 'easeOut' }}
          >
            Based in Andhra Pradesh, India • B.Tech IT (Expected 2027)
          </motion.p>
        </header>

        <motion.div
          id="about"
          className="rounded-2xl border border-white/10 bg-zinc-900/45 backdrop-blur-sm p-6 md:p-10 text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-4">About</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <p className="text-base md:text-lg text-neutral-200 leading-relaxed">
              My backend work is centered on Spring Boot service design, request validation, layered controller-service-repository architecture, and API behavior that stays predictable in production.
            </p>
            <p className="text-base md:text-lg text-neutral-200 leading-relaxed">
              Across internship and project builds, I focus on shipping complete systems: API implementation, data modeling in PostgreSQL, containerization with Docker, and deployment workflows that keep delivery reliable.
            </p>
          </div>
        </motion.div>

        <div className="w-full flex justify-center pt-16">
          <motion.a
            href="#experience"
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex flex-col items-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-4 rounded"
            aria-label="Scroll down"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
          >
            <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
