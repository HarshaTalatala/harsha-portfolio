import { motion } from 'framer-motion';
import { SiCoursera, SiUdemy, SiGithub, SiFreecodecamp } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';


const SIcon = (props) => (
  <div
    {...props}
    className={`text-2xl font-bold text-grey-900 w-10 h-10 flex items-center justify-center rounded ${props.className || ''}`}
  >
    S
  </div>
);

const certificationsData = [
  {
    name: 'Java Spring Framework 6 & Spring Boot 3',
    platform: 'Udemy',
    date: 'Completed',
    link: 'https://www.udemy.com/certificate/UC-93f457f1-a1f9-48ed-bdd5-8457c79b9bd3/',
    Icon: SiUdemy,
  },
     {
    name: 'Meta Advanced React',
    platform: 'Coursera',
    date: 'In Progress',
    link: 'https://coursera.org/share/b34510b8718a257c8d3b05aa395b50ad',
    Icon: SiCoursera,
  },
  {
    name: 'GitHub Foundations Certification',
    platform: 'GitHub Education',
    date: 'Active',
    link: 'http://www.github.com/HarshaTalatala',
    Icon: SiGithub,
  },
  {
    name: 'Advanced Javascript',
    platform: 'Scrimba',
    date: 'March 2025',
    link: 'https://scrimba.com/certificate-cert29m6qiCokjQS7zY1jDeVTUgAHHj5YfFd9CYb8mp5AnBXg',
    Icon: SIcon,
  },
  {
    name: 'Tailwind CSS',
    platform: 'Scrimba',
    date: 'NOV 2024',
    link: 'https://scrimba.com/certificate-cert24zAwJ78kYHKSE4ajCScsqyrgJD9ACumH4qgg',
    Icon: SIcon,
  }
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="text-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Learning Highlights
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My commitment to continuous learning and staying current with industry technologies.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificationsData.map((cert, index) => {
            const CardComponent = cert.link ? motion.a : motion.div;

            return (
              <CardComponent
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-lg text-left flex flex-col h-full border border-white/10 transition-colors duration-300 hover:border-orange-400/60"
                whileHover={{ y: -8, scale: 1.03 }}
                style={{ willChange: 'transform' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <cert.Icon className="text-4xl text-gray-400" />
                  <div className="text-right">
                    <p className="font-semibold text-gray-200">{cert.platform}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-100 flex-grow mb-4">
                  {cert.name}
                </h3>

                {cert.link && (
                  <div className="mt-auto pt-2 text-sm font-semibold text-orange-400 flex items-center gap-2">
                    View Credential
                    <FiArrowUpRight />
                  </div>
                )}
              </CardComponent>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;