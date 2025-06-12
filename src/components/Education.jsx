import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'VISHNU INSTITUTE OF TECHNOLOGY',
    degree: 'B.TECH IN COMPUTER SCIENCE',
    duration: '2023 – 2027',
    description:
      'Focused on software development fundamentals, algorithms, and project-based learning. Maintained a strong academic record with a CGPA of 9.0/10.0.',
  },
  {
    institution: 'ARKA EDUCATIONAL INSTITUTION',
    degree: 'INTERMEDIATE (MPC)',
    duration: '2021 – 2023',
    description:
      'Developed a strong foundational understanding of logical problem-solving and analytical thinking in Mathematics, Physics, and Chemistry.',
  },
  {
    institution: "BLUE BELLS HIGH SCHOOL",
    degree: 'SCHOOLING',
    duration: 'GRADUATED 2021',
    description: 'Graduated with distinction, building a solid academic and disciplinary foundation with a GPA of 10/10.',
  },
];

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Education = () => {
  return (
    <section id="education" className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="md:grid md:grid-cols-12 md:gap-16 items-start">
          
          <div className="md:col-span-4 mb-16 md:mb-0 md:sticky md:top-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={titleVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                  My Education
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                My academic background and achievements.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-8"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-8 mb-10 md:mb-12 last:mb-0"
                whileHover={{
                  scale: 1.045,
                  y: -6,
                  transition: { type: "spring", stiffness: 120, damping: 14 },
                }}
                whileTap={{
                  scale: 0.98,
                  y: -2,
                  transition: { type: "spring", stiffness: 180, damping: 18 },
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-3">
                    <h3 className="text-xl md:text-2xl font-bold tracking-normal sm:tracking-wide text-gray-100 mb-1 sm:mb-0">
                      {edu.institution}
                    </h3>
                    <span className="text-sm font-mono text-gray-400 text-right flex-shrink-0 sm:ml-4">
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-md font-semibold uppercase tracking-wider text-orange-400 mb-5">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 leading-relaxed max-w-3xl">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;