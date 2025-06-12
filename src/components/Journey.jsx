import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import {
  BookOpen, Wind, Braces, Atom, GalleryVerticalEnd, Server, Rocket,
} from 'lucide-react';

const journeyData = [
  {
    date: "October 2024",
    title: "Started Learning Web Fundamentals",
    description: "Began my journey with HTML & CSS, building my first static websites.",
    icon: <BookOpen />,
    status: 'completed',
  },
  {
    date: "November 2024",
    title: "Mastered Modern CSS Frameworks",
    description: "Learned Bootstrap for layout and dove deep into Tailwind CSS for utility-first design.",
    icon: <Wind />,
    status: 'completed',
  },
  {
    date: "May 2025",
    title: "Built First React Applications",
    description: "Completed the Meta Advanced React course and started building dynamic, component-based applications.",
    icon: <Atom />,
    status: 'completed',
  },
  {
    date: "June 2025",
    title: "Launched My Portfolio",
    description: "Applied all my skills to build this portfolio website using Vite, React, and Tailwind CSS.",
    icon: <GalleryVerticalEnd />,
    status: 'completed',
  },
  {
    date: "Upcoming",
    title: "Diving into Backend Development",
    description: "My next goal is to learn Java with the Spring and Spring Boot frameworks for full-stack capabilities.",
    icon: <Server />,
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

        <div className="mt-24 text-center">
          <div className="inline-block bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <Rocket className="mx-auto h-12 w-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Projects Coming Soon!</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              I'm currently applying my skills to build new and exciting projects. Check back soon to see them live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;