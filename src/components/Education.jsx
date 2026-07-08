import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Vishnu Institute of Technology (Autonomous), Bhimavaram',
    degree: 'B.Tech in Information Technology',
    duration: 'Sep 2024 – May 2027 (Expected)',
    description: 'CGPA: 9.0/10',
  },
  {
    institution: 'Arka Educational Institution, Guntur',
    degree: 'Intermediate (MPC)',
    duration: 'Jun 2021 – Apr 2023',
    description: 'Score: 973/1000',
  },
];

const Education = () => {
  return (
    <section id="education" className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Academic track aligned with backend engineering and software delivery.
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.article
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="bg-gray-900/45 border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <h3 className="text-lg md:text-2xl font-semibold text-gray-100">{edu.institution}</h3>
                <span className="text-sm text-gray-400 md:text-right">{edu.duration}</span>
              </div>
              <h4 className="text-sm md:text-base font-medium text-orange-300 mb-2">{edu.degree}</h4>
              <p className="text-gray-300">{edu.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
