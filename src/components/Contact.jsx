import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useState } from 'react';

const Contact = () => {
  const formspreeEndpoint = 'mpwrdwek';
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatusType('success');
        setStatusMessage('Message sent successfully. I usually reply within 24–48 hours.');
        form.reset();
      } else {
        setStatusType('error');
        setStatusMessage('There was a problem submitting your message. Please try again.');
      }
    } catch {
      setStatusType('error');
      setStatusMessage('There was a network issue while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const professionalLinks = [
    {
      Icon: SiGithub,
      url: 'https://github.com/HarshaTalatala',
      label: 'GitHub',
      handle: 'HarshaTalatala',
    },
    {
      Icon: SiLinkedin,
      url: 'https://linkedin.com/in/HarshaTalatala',
      label: 'LinkedIn',
      handle: 'harshatalatala',
    },
  ];

  return (
    <section id="contact" className="text-white py-20 md:py-28 bg-gray-900/40">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Contact
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Open to backend internship and software engineering opportunities.
          </p>
          <p className="text-sm text-gray-500 mt-2">Usually responds within 24–48 hours.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="max-w-lg mx-auto w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-5 text-gray-100">Direct Contact</h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:harsha.talatala@gmail.com"
                className="inline-flex items-center gap-4 p-4 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-orange-500 transition-colors duration-300 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              >
                <FiMail className="text-orange-400 text-xl flex-shrink-0" />
                <span className="font-medium text-gray-200 text-sm md:text-base">harsha.talatala@gmail.com</span>
              </a>
              <a
                href="tel:+919618096234"
                className="inline-flex items-center gap-4 p-4 rounded-lg bg-gray-800/60 border border-gray-700 hover:border-orange-500 transition-colors duration-300 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              >
                <FiPhone className="text-orange-400 text-xl flex-shrink-0" />
                <span className="font-medium text-gray-200 text-sm md:text-base">+91 9618096234</span>
              </a>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-5 text-gray-100">Profiles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalLinks.map(({ Icon, url, label, handle }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex flex-col items-center justify-center rounded-xl bg-gray-800/60 border border-gray-700 hover:border-orange-400 p-4 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-2xl text-gray-300 mb-2" />
                  <span className="text-sm text-gray-200 font-medium">{label}</span>
                  <span className="text-xs text-gray-400 mt-1">{handle}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
                  placeholder="Share role details, project context, or collaboration goals..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
                whileHover={{ scale: isSubmitting ? 1 : 1.01, backgroundColor: isSubmitting ? '#EA580C' : '#F97316' }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            <p className={`mt-4 text-sm ${statusType === 'error' ? 'text-red-400' : 'text-green-400'}`} role="status" aria-live="polite">
              {statusMessage}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
