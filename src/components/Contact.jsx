import { motion } from 'framer-motion'; 
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import { useState } from 'react';

const Contact = () => {
  const formspreeEndpoint = 'mpwrdwek';
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 5000);
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      Icon: SiGithub,
      url: 'https://github.com/HarshaTalatala',
      label: 'GitHub',
    },
    {
      Icon: SiLinkedin,
      url: 'https://linkedin.com/in/HarshaTalatala',
      label: 'LinkedIn',
    },
    {
        Icon: SiX,
        url: 'https://x.com/HarshaTalatala',
        label: 'X',
    },
    {
      Icon: SiInstagram,
      url: 'https://instagram.com/harsha._reddy._',
      label: 'Instagram',
      },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="contact" className="text-white py-20 md:py-28 bg-gray-900/40">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Let's Talk!
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I’m open to collaboration, freelance projects, or just a good tech conversation. Feel free to drop a message!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={itemVariants} className="max-w-lg mx-auto w-full">
            <h3 className="text-2xl font-bold mb-6 text-gray-100">Contact Me Directly</h3>
            <a
              href="mailto:harsha.talatala@gmail.com" 
              className="inline-flex items-center gap-4 p-4 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-orange-500 transition-colors duration-300 w-full mb-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail className="text-orange-400 text-2xl flex-shrink-0" />
              <span className="font-medium text-gray-200 flex-1 text-center text-sm tracking-normal md:text-lg md:tracking-widest">
                harsha.talatala@gmail.com
              </span>
            </a>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-100">Find Me On Socials</h3>
            <div className="flex flex-row flex-wrap gap-6 sm:gap-8 justify-center items-center mb-2">
              {socialLinks.map(({ Icon, url, label }, idx) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  style={{ cursor: "pointer" }}
                >
                  <span className="rounded-full bg-gray-800 p-2 shadow-lg border-2 border-gray-700 group-hover:border-orange-400 transition-colors duration-300">
                    <Icon className="text-2xl text-gray-300 group-hover:text-orange-400 transition-colors duration-300" />
                  </span>
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-orange-400 transition-colors duration-300 font-medium">
                    {url
                      ? url.replace(/https?:\/\/(www\.)?(github\.com|linkedin\.com\/in|instagram\.com|x\.com|twitter\.com)\//, '')
                      : label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  placeholder="Hi, I'd like to talk about..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.05, backgroundColor: isSubmitting ? "#EA580C" : "#F97316" }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Success Toast */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-bold">Message Sent Successfully!</p>
              <p className="text-sm text-green-100">I'll get back to you soon.</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;