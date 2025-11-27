import { motion } from 'framer-motion';
import { Code, Layers, Cloud, GitBranch } from 'lucide-react';
import {
  SiReact, SiJavascript, SiSpringboot,
  SiTailwindcss, SiNodedotjs, SiGit,
  SiApachemaven, SiDocker, SiPostman,
  SiIntellijidea, SiGithub,
} from 'react-icons/si';
import { TbBrandVscode, TbBrandAzure } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';

const expertiseData = [
  {
    icon: <Code size={36} className="text-orange-400" />,
    title: "Backend Development",
    description:
      "I develop robust REST APIs and secure backend systems using Java, Spring Boot, and Maven, focusing on clean architecture, performance, and database design.",
  },
  {
    icon: <Layers size={36} className="text-orange-400" />,
    title: "Full-Stack Web Applications",
    description:
      "I build end-to-end web apps using React with Spring Boot or Node.js, focusing on clean architecture, smooth data flow, and responsive performance.",
  },
  {
    icon: <Cloud size={36} className="text-orange-400" />,
    title: "Cloud & Deployment",
    description:
      "I deploy and manage applications on Microsoft Azure using CI/CD pipelines, containerize with Docker, and design systems for scalability and reliability.",
  },
  {
    icon: <GitBranch size={36} className="text-orange-400" />,
    title: "Tools & Workflow",
    description:
      "I use IntelliJ IDEA, VS Code, Git, and GitHub Actions for efficient development, version control, and CI/CD automation — streamlining teamwork and ensuring consistent, reliable delivery.",
  },
];

const toolsData = [
  // Backend Core
  { icon: <FaJava size={32} />, name: "Java" },
  { icon: <SiSpringboot size={32} />, name: "Spring Boot" },
  { icon: <SiApachemaven size={32} />, name: "Maven" },

  // Frontend
  { icon: <SiReact size={32} />, name: "React" },
  { icon: <SiJavascript size={32} />, name: "JavaScript" },
  { icon: <SiTailwindcss size={32} />, name: "Tailwind" },
  { icon: <SiNodedotjs size={32} />, name: "Node.js" },

  // Cloud & DevOps
  { icon: <TbBrandAzure size={32} />, name: "Azure" },
  { icon: <SiDocker size={32} />, name: "Docker" },
  { icon: <SiGit size={32} />, name: "Git" },
  { icon: <SiGithub size={32} />, name: "GitHub" },
  { icon: <SiPostman size={32} />, name: "Postman" },

  // Development Environments
  { icon: <SiIntellijidea size={32} />, name: "IntelliJ IDEA" },
  { icon: <TbBrandVscode size={32} />, name: "VS Code" },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const toolVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const Expertise = () => {
  return (
    <motion.section
      id="expertise"
      className="py-24 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              What I Do
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            Building scalable, high-performance web applications with modern technologies.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {expertiseData.map((item) => (
            <motion.div
              key={item.title}
              className="p-8 rounded-2xl flex flex-col items-start bg-gray-900/40 backdrop-blur-sm"
              variants={cardVariants}
              style={{ willChange: 'transform, opacity' }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 32px rgba(255,165,0,0.13)",
                transition: { type: "spring", stiffness: 120, damping: 14 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-100">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Tech Stack &amp; Tools</span>
          </h3>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 md:gap-x-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {toolsData.map((tool) => (
              <motion.div
                key={tool.name}
                className="relative group flex flex-col items-center"
                variants={toolVariants}
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <div
                  title={tool.name}
                  className="p-4 bg-gray-900/40 rounded-xl text-gray-400 group-hover:text-orange-400 transition-colors duration-300"
                >
                  {tool.icon}
                </div>
                <span className="absolute -bottom-8 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Expertise;