import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, ExternalLink, Globe, Code2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const apiUrl = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api/contact' : '/api/contact');

    try {
      if (web3Key) {
        // Direct Web3Forms delivery to user's inbox (jiyakhanpathan45@gmail.com)
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formState.name,
            email: formState.email,
            message: formState.message,
            from_name: `${formState.name} (Portfolio Inquiry)`,
            subject: `🚀 Portfolio Message from ${formState.name}`,
            replyto: formState.email,
          }),
        });

        const data = await res.json();
        if (data.success) {
          setSubmitted(true);
          setFormState({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 6000);
        } else {
          setErrorMessage(data.message || 'Transmission rejected. Please connect via direct email.');
        }
      } else if (formspreeId) {
        // Formspree delivery
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
          }),
        });

        if (res.ok) {
          setSubmitted(true);
          setFormState({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 6000);
        } else {
          setErrorMessage('Could not deliver transmission. Please use direct email below.');
        }
      } else {
        // Fallback to local / server backend endpoint
        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        });

        if (res.ok) {
          setSubmitted(true);
          setFormState({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 6000);
        } else {
          const data = await res.json().catch(() => ({}));
          setErrorMessage(data.error || 'Transmission rejected by server. Please connect via direct email.');
        }
      }
    } catch {
      setErrorMessage('Direct transmission endpoint currently offline. Click below to send direct email via your mail client!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-hairline">
      
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
          <div className="card-interactive bg-white dark:bg-[#1C1C1E] border border-hairline rounded-xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-black dark:text-white mb-2">Direct Channels</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Feel free to initiate transmission through any frequency below:
            </p>

            <div className="space-y-3 text-xs font-mono">
              <a
                href="mailto:contact@jiya.dev"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-[#242426] border border-hairline hover:border-[var(--blue-accent)] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)]"
              >
                <Mail className="w-4 h-4 text-[#1B5DEF] dark:text-[#4A7FF7]" />
                <div className="flex-1">
                  <div className="text-[10px] text-gray-400 uppercase">Email Frequency</div>
                  <div className="text-black dark:text-white font-medium group-hover:text-[var(--blue-accent)] transition-colors">
                    contact@jiya.dev
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[var(--blue-accent)] transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/jiya-khan-pathan-799827423"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-[#242426] border border-hairline hover:border-[var(--blue-accent)] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)]"
              >
                <Globe className="w-4 h-4 text-[#E25327] dark:text-[#E8734B]" />
                <div className="flex-1">
                  <div className="text-[10px] text-gray-400 uppercase">Professional Network</div>
                  <div className="text-black dark:text-white font-medium group-hover:text-[var(--blue-accent)] transition-colors">
                    LinkedIn Profile
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[var(--blue-accent)] transition-colors" />
              </a>

              <a
                href="https://github.com/StarLord-I"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-[#242426] border border-hairline hover:border-[var(--blue-accent)] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)]"
              >
                <Code2 className="w-4 h-4 text-emerald-500" />
                <div className="flex-1">
                  <div className="text-[10px] text-gray-400 uppercase">Code Repository</div>
                  <div className="text-black dark:text-white font-medium group-hover:text-[var(--blue-accent)] transition-colors">
                    github.com/StarLord-I
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[var(--blue-accent)] transition-colors" />
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-hairline bg-gray-50/50 dark:bg-[#1C1C1E] text-[11px] font-mono text-gray-500 dark:text-gray-400 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-500 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              <span>Available for Opportunities</span>
            </div>
            <p>Responding within 24 hours to engineering inquiries & technical challenges.</p>
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
          <div className="card-interactive bg-white dark:bg-[#1C1C1E] border border-hairline rounded-xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-3"
              >
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-black dark:text-white">Transmission Delivered!</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                  Thank you for reaching out. Jiya has received your transmission and will reply shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{errorMessage}</p>
                      <a
                        href={`mailto:jiyakhanpathan45@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formState.name || 'Recruiter')}&body=${encodeURIComponent(formState.message || '')}`}
                        className="underline text-[11px] mt-1 inline-block text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold hover:opacity-85"
                      >
                        Click here to dispatch directly to jiyakhanpathan45@gmail.com ↗
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase">
                    Your Name <span className="text-[#E25327] dark:text-[#E8734B]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    maxLength={100}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-[#242426] border border-hairline text-base sm:text-sm text-black dark:text-white focus:outline-none focus:border-[var(--blue-accent)] focus:ring-1 focus:ring-[var(--blue-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase">
                    Your Email <span className="text-[#E25327] dark:text-[#E8734B]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    autoComplete="email"
                    maxLength={120}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-[#242426] border border-hairline text-base sm:text-sm text-black dark:text-white focus:outline-none focus:border-[var(--blue-accent)] focus:ring-1 focus:ring-[var(--blue-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase">
                    Message <span className="text-[#E25327] dark:text-[#E8734B]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    maxLength={2000}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Let's discuss full-stack engineering opportunities or ideas..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 dark:bg-[#242426] border border-hairline text-base sm:text-sm text-black dark:text-white focus:outline-none focus:border-[var(--blue-accent)] focus:ring-1 focus:ring-[var(--blue-accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden w-full py-3.5 rounded-lg bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white font-mono text-xs font-semibold hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all flex items-center justify-center shadow-sm group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {/* Taste Skill Directional Micro-sheen Sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION →'}</span>
                  </div>
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
