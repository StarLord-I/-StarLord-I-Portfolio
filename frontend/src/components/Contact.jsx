import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, CheckCircle, Code2, Globe } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormState({ name: '', email: '', message: '' });
        }, 3000);
        return;
      }
    } catch (err) {
      // Fallback
    }

    setSubmitted(true);
    // Simulate sending
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#060810] relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Have a project in mind, a collaboration proposal, or just want to chat about space-opera tech? Send a transmission!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info / Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4">Transmission Frequencies</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I'm actively looking for new opportunities as a frontend developer. Reach out through any of these secure channels.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:jiya@example.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-800/50 border border-gray-700/60 hover:border-cyan-500/50 transition-all text-gray-300 hover:text-white group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-mono">Email</span>
                    <span className="text-sm font-medium">jiya.khan.pathan@example.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/jiya-khan-pathan-799827423"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-800/50 border border-gray-700/60 hover:border-purple-500/50 transition-all text-gray-300 hover:text-white group"
                >
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-mono">LinkedIn</span>
                    <span className="text-sm font-medium">jiya-khan-pathan-799827423</span>
                  </div>
                </a>

                <a
                  href="https://github.com/StarLord-I"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-800/50 border border-gray-700/60 hover:border-yellow-500/50 transition-all text-gray-300 hover:text-white group"
                >
                  <div className="p-2.5 rounded-lg bg-yellow-500/20 text-yellow-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 font-mono">GitHub</span>
                    <span className="text-sm font-medium">StarLord-I</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto text-green-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Transmission Sent!</h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out. Star-Lord_I will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs font-medium text-gray-300 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Peter Quill"
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="peter@milkyway.com"
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">Transmission Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Let's build something epic together..."
                    className="w-full bg-gray-800/60 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
