import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Backend and Full-Stack Developer',
    organization: 'Independent Projects',
    duration: '2024 – Present',
    location: 'Remote, India',
    impact: [
      'Designed and shipped production-grade APIs with Java Spring Boot and Node.js for analytics and collaboration platforms.',
      'Implemented secure authentication and role-based access patterns across multi-user systems.',
      'Established CI/CD-first delivery workflows using GitHub Actions and Azure deployments.',
    ],
  },
  {
    role: 'Technical Lead, Student Product Builds',
    organization: 'University and Community Collaborations',
    duration: '2025 – Present',
    location: 'Andhra Pradesh, India',
    impact: [
      'Led project scoping, architecture decisions, and execution for student-focused full-stack applications.',
      'Improved team delivery consistency through Git-based workflows and clear sprint-level ownership.',
      'Mentored peers on React fundamentals, API integration, and deployment readiness.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional experience building backend-first, cloud-ready software systems and leading delivery from idea to production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((experience) => (
            <motion.article
              key={`${experience.role}-${experience.organization}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-100">{experience.role}</h3>
                  <p className="text-sm text-orange-400 font-medium">{experience.organization}</p>
                </div>
                <div className="text-sm text-gray-400 text-left sm:text-right">
                  <p>{experience.duration}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
                {experience.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
