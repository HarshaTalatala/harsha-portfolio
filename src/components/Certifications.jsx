import { motion } from 'framer-motion';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';

const certificationsData = [
  {
    name: 'Java Spring Framework 6 with Spring Boot 3',
    platform: 'Telusko (Udemy)',
    date: 'Completed: Sep 2025',
    link: 'https://www.udemy.com/certificate/UC-93f457f1-a1f9-48ed-bdd5-8457c79b9bd3/',
    Icon: SiUdemy,
  },
  {
    name: 'React Basics & Advanced',
    platform: 'Meta (Coursera)',
    date: 'Completed: Jun 2025',
    link: 'https://coursera.org/share/b34510b8718a257c8d3b05aa395b50ad',
    Icon: SiCoursera,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Formal coursework completed in Spring Boot and React.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certificationsData.map((cert) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="bg-gray-900/45 border border-white/10 p-6 md:p-7 rounded-xl text-left flex flex-col h-full hover:border-orange-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <cert.Icon className="text-3xl text-gray-300" />
                <p className="text-xs text-gray-500 text-right">{cert.date}</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-100 mb-3">{cert.name}</h3>
              <p className="text-sm text-orange-300 mb-6">{cert.platform}</p>

              <div className="mt-auto pt-2 text-sm font-semibold text-orange-400 flex items-center gap-2">
                View Credential
                <FiArrowUpRight />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
