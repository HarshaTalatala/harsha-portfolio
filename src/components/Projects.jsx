import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 'devpulsex',
    title: 'DevPulseX',
    type: 'Developer Productivity Dashboard',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'GitHub API'],
    date: 'Oct 2025 – Dec 2025',
    summary:
      'Built backend APIs that make authenticated GitHub REST API calls, process developer commit activity, and persist structured records in PostgreSQL for dashboard reporting.',
    contribution:
      'Designed entities and data access with Spring Data JPA to support per-developer filtering and aggregated productivity metrics exposed through REST endpoints.',
    outcomes: [
      'Implemented authenticated integration flow between Spring Boot services and GitHub API.',
      'Structured PostgreSQL data model for commit analytics queries and metric aggregation.',
      'Delivered React dashboard visualization with Spring Boot backend and production deployment setup.',
    ],
    architecture: ['Controller-Service-Repository layering', 'Spring Data JPA + PostgreSQL (NeonDB)', 'GitHub API integration service'],
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
  },
  {
    id: 'tms',
    title: 'TMS – Transport Management System',
    type: 'Backend-Driven Transport Operations App',
    stack: ['Spring Boot', 'REST APIs', 'PostgreSQL'],
    date: 'Sep 2025 – Oct 2025',
    summary:
      'Built Spring Boot APIs for vehicle, driver, and shipment management with full CRUD coverage and structured request/response handling across all modules.',
    contribution:
      'Implemented controller-service-repository separation and endpoint-level request validation with Spring @Valid and null checks to block malformed payloads early.',
    outcomes: [
      'Completed domain coverage for vehicle, driver, and shipment API workflows.',
      'Maintained clean service boundaries between API handling, business rules, and persistence.',
      'Improved endpoint input safety with systematic validation before service execution.',
    ],
    architecture: ['Controller-Service-Repository pattern', 'REST API domain modules', 'Validation-first request handling'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 18,
    },
  },
};

const Card = ({ project }) => {
  return (
    <motion.article
      className="p-7 md:p-8 rounded-2xl flex flex-col bg-gray-900/45 border border-white/10 backdrop-blur-sm h-full"
      variants={cardVariants}
      style={{ willChange: 'transform, opacity' }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(251, 146, 60, 0.5)',
        boxShadow: '0 16px 34px rgba(0, 0, 0, 0.35)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-3 text-left">
        <h3 className="text-2xl sm:text-[1.65rem] font-bold text-white mb-2 leading-tight">{project.title}</h3>
        <p className="text-sm text-orange-300 mb-1 font-medium">{project.type}</p>
        {project.date && <p className="text-xs text-gray-500">{project.date}</p>}
      </div>

      <div className="space-y-4 text-left mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Engineering Scope</p>
          <p className="text-gray-300 text-sm leading-relaxed">{project.summary}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Implementation Focus</p>
          <p className="text-gray-300 text-sm leading-relaxed">{project.contribution}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Key Backend Outcomes</p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 text-left">Architecture</p>
        <div className="flex flex-wrap gap-2">
          {project.architecture.map((highlight) => (
            <span key={highlight} className="text-xs px-2.5 py-1 bg-gray-800/70 text-gray-300 rounded-md">
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 text-left">Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs px-3 py-1.5 bg-gray-800/70 text-gray-300 rounded-lg whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.live || project.repositories?.length) && (
        <div className="flex flex-col gap-3 pt-5 border-t border-gray-800/50 mt-auto">
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-medium text-center bg-gradient-to-r from-orange-500 to-amber-400 text-black rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              View Live Application
            </motion.a>
          )}

          {!!project.repositories?.length && (
            <div className="grid grid-cols-1 gap-2">
              {project.repositories.map((repository) => (
                <motion.a
                  key={repository.url}
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-medium text-center border border-gray-700 text-gray-200 rounded-lg hover:bg-gray-800/50 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {repository.label}
                </motion.a>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.article>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.12, duration: 0.4, ease: 'easeOut' }}
          >
            Backend-first implementations focused on API behavior, data modeling, integration handling, and production deployment flow.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
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
