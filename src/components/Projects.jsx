import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 'devpulsex',
    title: 'DevPulseX',
    type: 'Developer Productivity Intelligence Platform',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Azure', 'GitHub API'],
    summary:
      'Engineering managers and contributors lacked a unified view of delivery quality, release velocity, and deployment stability across repositories.',
    contribution:
      'Designed backend architecture, implemented secure analytics APIs with role-based access, and built the React dashboard used for actionable engineering insights.',
    outcomes: [
      'Consolidated commit, issue, and deployment telemetry into a single operational dashboard.',
      'Enabled role-specific reporting for contributors, reviewers, and maintainers.',
      'Automated CI/CD deployment to keep releases consistent and production-ready.',
    ],
    architecture: ['Layered Spring Boot services', 'REST API integration layer', 'Azure CI/CD automation'],
    live: 'https://devpulsex-gold.vercel.app',
    repositories: [
      {
        label: 'Backend Repository',
        url: 'https://github.com/HarshaTalatala/DevPulseX-Backend',
      },
      {
        label: 'Frontend Repository',
        url: 'https://github.com/HarshaTalatala/DevPulseX-Frontend',
      },
    ],
    status: 'Live',
    date: 'October 2025',
  },
  {
    id: 'notaverse',
    title: 'NotaVerse',
    type: 'Student Collaboration and Alumni Network',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Firebase', 'Azure'],
    summary:
      'Students and alumni needed a reliable collaboration system for mentorship, shared resources, and long-term academic engagement.',
    contribution:
      'Led full-stack implementation, built collaboration workflows, and integrated authentication, content moderation, and deployment pipelines.',
    outcomes: [
      'Improved discoverability of academic resources through tagging and centralized content vaults.',
      'Streamlined alumni-student mentorship interactions with role-aware dashboards.',
      'Maintained stable deployment cadence through automated CI/CD workflows.',
    ],
    architecture: ['React client + Node.js APIs', 'Firebase auth and storage', 'Cloud deployment pipeline'],
    live: 'https://www.notaverse.linkpc.net/',
    repositories: [
      {
        label: 'Source Repository',
        url: 'https://github.com/HarshaTalatala/NotaVerse',
      },
    ],
    status: 'Live',
    date: 'July 2025 – August 2025',
  },
  {
    id: 'stylesync',
    title: 'StyleSync',
    type: 'Smart Outfit Management Platform',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Firebase', 'Azure Blob Storage'],
    summary:
      'Users needed a responsive platform to organize outfit collections with fast image access, secure storage, and seamless account management.',
    contribution:
      'Implemented end-to-end platform features including media workflows, secure authentication, and optimized cloud storage handling.',
    outcomes: [
      'Delivered near real-time synchronization for personalized outfit collections.',
      'Reduced friction in media-heavy workflows through optimized image storage and retrieval.',
      'Established maintainable full-stack architecture for future feature extensions.',
    ],
    architecture: ['Component-driven React UI', 'Node.js service layer', 'Firebase + Azure Blob integration'],
    live: 'https://www.stylesync.gleeze.com/',
    repositories: [
      {
        label: 'Source Repository',
        url: 'https://github.com/HarshaTalatala/StyleSync',
      },
    ],
    status: 'Live',
    date: 'May 2025 – June 2025',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const Card = ({ project }) => {
  return (
    <motion.article
      className="p-8 rounded-2xl flex flex-col bg-gray-900/40 backdrop-blur-sm h-full"
      variants={cardVariants}
      style={{ willChange: 'transform, opacity' }}
      whileHover={{
        scale: 1.03,
        y: -6,
        boxShadow: '0 12px 32px rgba(255,165,0,0.13)',
        transition: { type: 'spring', stiffness: 120, damping: 14 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: 'spring', stiffness: 200, damping: 20 },
      }}
    >
      <div className="mb-3 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-1 font-medium">{project.type}</p>
        {project.date && <p className="text-xs text-gray-500">{project.date}</p>}
      </div>

      <div className="space-y-4 text-left mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Problem</p>
          <p className="text-gray-300 text-sm leading-relaxed">{project.summary}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">My Contribution</p>
          <p className="text-gray-300 text-sm leading-relaxed">{project.contribution}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Outcomes</p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 text-left">Architecture Highlights</p>
        <div className="flex flex-wrap gap-2">
          {project.architecture.map((highlight) => (
            <span
              key={highlight}
              className="text-xs px-2.5 py-1 bg-gray-800/60 text-gray-300 rounded-md"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 text-left">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 bg-gray-800/60 text-gray-300 rounded-lg whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-5 border-t border-gray-800/50 mt-auto">
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 text-sm font-medium text-center bg-gradient-to-r from-orange-500 to-amber-400 text-black rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Live Application
          </motion.a>
        )}

        <div className="grid grid-cols-1 gap-2">
          {project.repositories.map((repository) => (
            <motion.a
              key={repository.url}
              href={repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-medium text-center border border-gray-700 text-gray-200 rounded-lg hover:bg-gray-800/50 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {repository.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.article>
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
            transition={{ duration: 0.7, ease: 'easeOut' }}
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
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            Production-minded full-stack projects with clear problem definition, architecture, and measurable execution value.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {items.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
