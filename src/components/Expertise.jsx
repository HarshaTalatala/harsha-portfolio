import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiSpringboot,
  SiTailwindcss,
  SiDocker,
  SiPostman,
  SiIntellijidea,
  SiGithub,
  SiGithubactions,
  SiMaven,
  SiJenkins,
  SiPostgresql,
  SiFirebase,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FaJava, FaGitAlt } from 'react-icons/fa';
import { TbBrandVscode, TbApi, TbBrandAws } from 'react-icons/tb';

const skillGroups = [
  {
    title: 'Backend',
    description: 'Production API development and integration workflows in Java-focused backend services.',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'OAuth2', 'PostgreSQL', 'Firebase Firestore', 'Maven'],
  },
  {
    title: 'Frontend',
    description: 'Client-side interfaces for project dashboards and operational web applications.',
    skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    title: 'Cloud & CI/CD',
    description: 'Deployment and automation workflows used in internship and project delivery.',
    skills: ['AWS (EC2, VPC, Elastic Load Balancer)', 'Docker', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'Tools',
    description: 'Development and debugging stack used across backend and frontend workflows.',
    skills: ['IntelliJ IDEA', 'VS Code', 'Git', 'GitHub', 'Postman'],
  },
];

const toolsData = [
  { icon: <FaJava size={26} />, name: 'Java' },
  { icon: <SiSpringboot size={26} />, name: 'Spring Boot' },
  { icon: <TbApi size={26} />, name: 'REST APIs' },
  { icon: <SiPostgresql size={26} />, name: 'PostgreSQL' },
  { icon: <SiFirebase size={26} />, name: 'Firestore' },
  { icon: <SiMaven size={26} />, name: 'Maven' },
  { icon: <SiReact size={26} />, name: 'React' },
  { icon: <SiJavascript size={26} />, name: 'JavaScript' },
  { icon: <SiTailwindcss size={26} />, name: 'Tailwind CSS' },
  { icon: <SiHtml5 size={26} />, name: 'HTML5' },
  { icon: <SiCss3 size={26} />, name: 'CSS3' },
  { icon: <TbBrandAws size={26} />, name: 'AWS' },
  { icon: <SiDocker size={26} />, name: 'Docker' },
  { icon: <SiJenkins size={26} />, name: 'Jenkins' },
  { icon: <SiGithubactions size={26} />, name: 'GitHub Actions' },
  { icon: <FaGitAlt size={26} />, name: 'Git' },
  { icon: <SiGithub size={26} />, name: 'GitHub' },
  { icon: <SiPostman size={26} />, name: 'Postman' },
  { icon: <SiIntellijidea size={26} />, name: 'IntelliJ IDEA' },
  { icon: <TbBrandVscode size={26} />, name: 'VS Code' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

const Expertise = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Skills
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.1, duration: 0.35, ease: 'easeOut' }}
          >
            Technical stack used in production internship work and backend-driven project development.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              className="p-6 md:p-7 rounded-2xl flex flex-col items-start bg-gray-900/45 border border-white/10"
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'rgba(251, 146, 60, 0.45)' }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{group.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2.5 py-1.5 bg-gray-800/70 text-gray-300 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
        >
          {toolsData.map((tool) => (
            <motion.div
              key={tool.name}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="group"
            >
              <div
                title={tool.name}
                className="h-14 rounded-xl bg-gray-900/45 border border-white/10 text-gray-400 group-hover:text-orange-300 group-hover:border-orange-400/60 transition-colors duration-200 flex items-center justify-center"
              >
                {tool.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
