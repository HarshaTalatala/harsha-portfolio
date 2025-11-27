import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import {
  BookOpen, Atom, Code2, Server, Cloud,
} from 'lucide-react';

const journeyData = [
  {
    date: "October–November 2024",
    title: "Foundations in Web Development",
    description: "Started with HTML, CSS, and Tailwind CSS to build responsive websites and understand modern UI design.",
    icon: <BookOpen />,
    status: 'completed',
  },
  {
    date: "May–June 2025",
    title: "React & Portfolio Launch",
    description: "Completed Meta's Advanced React course, built component-based apps, and launched my personal portfolio with React, Vite, and Tailwind CSS.",
    icon: <Atom />,
    status: 'completed',
  },
  {
    date: "July–September 2025",
    title: "Full-Stack Development Journey",
    description: "Built StyleSync and NotaVerse — full-stack applications using React, Firebase, Azure Blob Storage, and Node.js — and transitioned into Java backend development with Spring Boot.",
    icon: <Code2 />,
    status: 'completed',
  },
  {
    date: "October–November 2025",
    title: "Spring Boot & DevPulseX Journey",
    description: "Mastered Spring Boot and developed DevPulseX, a full-stack Developer Productivity Dashboard integrating Spring Boot, React, GitHub APIs, and Azure CI/CD pipelines — marking my transition into strong backend architecture and full-stack systems.",
    icon: <Server />,
    status: 'completed',
  },
  {
    date: "Upcoming",
    title: "Cloud, Deployment & System Design",
    description: "Focusing on Docker, cloud deployment on Azure, and scalable backend architecture — while improving system design and data structures to strengthen my backend engineering foundation.",
    icon: <Cloud />,
    status: 'upcoming',
  },
];

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50, 
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], 
    },
  },
};

const TimelineItem = ({ item, index }) => {
  const isUpcoming = item.status === 'upcoming';
  
  return (
    <div className={`relative flex sm:justify-between items-center w-full ${index % 2 !== 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
      <motion.div
        className="sm:w-[calc(50%-2rem)] ml-12 sm:ml-0 p-10 rounded-lg bg-gray-900/40 backdrop-blur-sm"
        variants={cardVariants}
        custom={index}
        style={{ willChange: 'transform, opacity' }}
        whileHover={{
          scale: 1.05,
          y: -8,
          transition: { type: "spring", stiffness: 120, damping: 14 },
        }}
        whileTap={{
          scale: 0.98,
          y: -2,
          transition: { type: "spring", stiffness: 180, damping: 18 },
        }}
      >
        <p className={`font-semibold text-lg mb-1 ${isUpcoming ? 'text-gray-400' : 'text-orange-400'}`}>{item.date}</p>
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        <p className="text-gray-400">{item.description}</p>
      </motion.div>

      <div className="absolute left-4 sm:left-1/2 top-1/2 w-8 h-8 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center
          ${isUpcoming ? 'bg-gray-700 border-4 border-gray-600' : 'bg-gray-800 border-4 border-orange-500'}`}>
          <span className={`${isUpcoming ? 'text-gray-400' : 'text-orange-400'}`}>
            {item.icon}
          </span>
        </div>
      </div>
      
      <div className="hidden sm:block w-[calc(50%-2rem)]"></div>
    </div>
  );
};

const Journey = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-dot-texture text-white font-sans overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              My Journey
            </span>
          </h2>
          <p className="text-lg text-gray-400">A timeline of my growth as a developer.</p>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute top-0 left-4 sm:left-1/2 w-1 bg-gray-700/80 h-full transform -translate-x-1/2 rounded-full" />
          
          <motion.div
            className="absolute top-0 left-4 sm:left-1/2 w-1 bg-gradient-to-b from-orange-400 to-yellow-300 h-full origin-top rounded-full"
            style={{
              x: "-50%",
              scaleY,
              boxShadow: "0 0 8px rgba(251, 191, 36, 0.9), 0 0 20px rgba(251, 146, 60, 0.6)",
              willChange: 'transform',
            }}
          />

          <motion.div
            className="space-y-16 sm:space-y-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.4,
                }
              }
            }}
          >
            {journeyData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;