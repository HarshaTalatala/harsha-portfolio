import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: 'Built and deployed three production-grade full-stack platforms in one year',
    detail:
      'Delivered DevPulseX, NotaVerse, and StyleSync with cloud deployment pipelines, role-aware access controls, and maintainable architecture.',
  },
  {
    title: 'Maintained 9.0/10.0 CGPA while executing advanced engineering projects',
    detail:
      'Balanced academic performance with practical product delivery, focusing on backend systems and deployment reliability.',
  },
  {
    title: 'Completed advanced learning tracks in Spring Boot and React',
    detail:
      'Applied coursework outcomes directly into production projects, improving API design quality and frontend architecture consistency.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="text-white py-20 md:py-28 bg-gray-900/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Selected outcomes that demonstrate execution quality, learning velocity, and engineering ownership.
          </p>
        </div>

        <div className="space-y-6">
          {achievementsData.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="border border-white/10 bg-black/30 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-3">{achievement.title}</h3>
              <p className="text-gray-300 leading-relaxed">{achievement.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
