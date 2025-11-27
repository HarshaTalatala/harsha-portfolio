import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 'devpulsex',
    title: 'DevPulseX',
    type: 'Developer Productivity Dashboard',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Azure', 'REST API', 'GitHub API'],
    description:
      'Developer productivity dashboard with performance and CI/CD insights featuring RESTful APIs for commit, issue, and deployment analytics with secure role-based architecture.',
    live: 'https://devpulsex-gold.vercel.app',
    github: 'https://github.com/HarshaTalatala/DevPulseX-Backend',
    status: 'Live',
    date: 'Oct 2025',
    highlights: ['RESTful APIs', 'Role-based Access', 'CI/CD Analytics'],
  },
  {
    id: 'notaverse',
    title: 'NotaVerse',
    type: 'Student Collaboration & Alumni Hub',
    stack: ['React', 'Tailwind', 'Node.js', 'Firebase', 'Azure'],
    description:
      'Student-alumni collaboration and mentorship platform with alumni management, shared student vaults, notes upload with tagging, and personalized dashboards.',
    live: 'https://www.notaverse.linkpc.net/',
    github: 'https://github.com/HarshaTalatala/NotaVerse',
    status: 'Live',
    date: 'Jul 2025 – Aug 2025',
    highlights: ['Alumni Management', 'Mentorship Features', 'Automated CI/CD'],
  },
  {
    id: 'stylesync',
    title: 'StyleSync',
    type: 'Smart Style Companion',
    stack: ['React', 'Tailwind', 'Node.js', 'Firebase', 'Azure Blob'],
    description:
      'Smart platform for browsing and organizing outfit collections with Firebase Firestore for real-time sync, Azure Blob Storage for secure images, and seamless authentication.',
    live: 'https://www.stylesync.gleeze.com/',
    github: 'https://github.com/HarshaTalatala/StyleSync',
    status: 'Live',
    date: 'May 2025 – Jun 2025',
    highlights: ['Real-time Sync', 'Azure Blob Storage', 'Image Processing'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Card = ({ project, index }) => {
  return (
    <motion.div
      className="p-8 rounded-2xl flex flex-col bg-gray-900/40 backdrop-blur-sm h-full"
      variants={cardVariants}
      style={{ willChange: 'transform, opacity' }}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 12px 32px rgba(255,165,0,0.13)",
        transition: { type: "spring", stiffness: 120, damping: 14 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      }}
    >
      {/* Header */}
      <div className="mb-3 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-1 font-medium">{project.type}</p>
        {project.date && (
          <p className="text-xs text-gray-500">{project.date}</p>
        )}
      </div>

      {/* Key highlights */}
      {project.highlights && (
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.highlights.map((highlight, i) => (
            <span 
              key={i}
              className="text-xs px-2.5 py-1 bg-gray-800/60 text-gray-300 rounded-md"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-400 text-base leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 text-center">Tech Stack</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 bg-gray-800/60 text-gray-300 rounded-lg whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-5 border-t border-gray-800/50">
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 text-sm font-medium text-center bg-gradient-to-r from-orange-500 to-amber-400 text-black rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Live
          </motion.a>
        )}
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.live ? 'flex-1' : 'w-full'} px-4 py-3 text-sm font-medium text-center border border-gray-700 text-gray-200 rounded-lg hover:bg-gray-800/50 transition-all duration-300`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Source Code
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = ({ limit = 0 }) => {
  const items = limit > 0 ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            Building scalable full-stack applications with modern cloud-native architecture
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {items.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
