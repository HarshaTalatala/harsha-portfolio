import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Backend Engineering Intern',
    organization: 'Neeyat AI',
    duration: 'Dec 2025 – Present',
    location: 'India',
    impact: [
      'Extended production Spring Boot REST APIs across authentication, CRUD, and third-party integration flows by updating controllers, service logic, and repository queries.',
      'Integrated Gemini API into the Spring Boot service layer for automated test file generation, including API configuration, model selection, response parsing, and workflow execution.',
      'Deployed production backend services on AWS EC2 by containerizing with Docker, configuring runtime variables and port mappings, and handling live deployments independently.',
      'Modified Jenkins CI to detect and run backend test files automatically and generate post-build reports to surface build failures earlier in the development cycle.',
    ],
    stack: ['Spring Boot', 'REST APIs', 'Authentication', 'Gemini API', 'Docker', 'AWS EC2', 'Jenkins CI', 'PostgreSQL'],
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
            Production backend engineering ownership from API development through deployment and CI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experienceData.map((experience) => (
            <motion.article
              key={`${experience.role}-${experience.organization}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">{experience.role}</h3>
                  <p className="text-base text-orange-400 font-semibold mt-1">{experience.organization}</p>
                </div>
                <div className="text-sm text-gray-400 text-left lg:text-right">
                  <p>{experience.duration}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-3 leading-relaxed mb-7">
                {experience.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span key={item} className="text-xs px-3 py-1.5 bg-gray-800/70 text-gray-300 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
