import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, ExternalLink, Globe, Code2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 4500);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-black/10 dark:border-white/10">
      
      {/* Section Header */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="font-mono text-xs text-[#E25327] dark:text-[#E8734B] font-semibold tracking-wider uppercase mb-1">
          05 // REACH OUT
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
          Let's build something great together.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
          Open for full-time engineering roles, freelance builds, or tech collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
        
        {/* Left: Contact Channels */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="card-interactive bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-black dark:text-white mb-2">Direct Channels</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-mono">
              Feel free to connect directly through LinkedIn or GitHub.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <a
                href="https://linkedin.com/in/jiya-khan-pathan-799827423"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-zinc-800/40 text-gray-700 dark:text-gray-300 hover:text-[#1B5DEF] dark:hover:text-[#4A7FF7] transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-[#1B5DEF] dark:text-[#4A7FF7]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/StarLord-I"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-zinc-800/40 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4" />
                  <span>github.com/StarLord-I</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:contact@jiya.dev"
                className="flex items-center justify-between p-3 rounded-lg border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-zinc-800/40 text-gray-700 dark:text-gray-300 hover:text-[#E25327] dark:hover:text-[#E8734B] transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#E25327] dark:text-[#E8734B]" />
                  <span>contact@jiya.dev</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7"
        >
          <div className="card-interactive bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 rounded-xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-black dark:text-white">Message Transmitted!</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                  Thank you for reaching out. Jiya will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-zinc-800/60 border border-black/10 dark:border-white/10 text-sm text-black dark:text-white focus:outline-none focus:border-[#1B5DEF] dark:focus:border-[#4A7FF7] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-zinc-800/60 border border-black/10 dark:border-white/10 text-sm text-black dark:text-white focus:outline-none focus:border-[#1B5DEF] dark:focus:border-[#4A7FF7] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Let's talk about full-stack engineering opportunities or ideas..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-zinc-800/60 border border-black/10 dark:border-white/10 text-sm text-black dark:text-white focus:outline-none focus:border-[#1B5DEF] dark:focus:border-[#4A7FF7] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION →'}</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
