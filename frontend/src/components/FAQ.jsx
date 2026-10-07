import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is your primary frontend engineering tech stack?',
    answer:
      'My primary stack centers on React.js, modern JavaScript (ES6+), Tailwind CSS, Framer Motion, and Vite for lightning-fast builds. On the full-stack layer, I work with Node.js, Express.js, REST APIs, and Python.',
  },
  {
    question: 'Are you actively available for engineering roles?',
    answer:
      'Yes! I am open to full-time Frontend Engineer, UI Engineer, or Full-Stack Developer roles. I am available for immediate start, open to remote opportunities, and ready to relocate for compelling engineering teams.',
  },
  {
    question: 'How do you approach UI performance and micro-animations?',
    answer:
      'I prioritize 60fps buttery-smooth interactions by leveraging hardware-accelerated CSS transforms, minimal re-renders, accessible contrast tokens, and Framer Motion spring physics. I also respect prefers-reduced-motion for user accessibility.',
  },
  {
    question: 'How can recruiters or collaborators get in direct contact?',
    answer:
      'You can dispatch a transmission using the contact form below, email me directly at jiyakhanpathan45@gmail.com, or connect on LinkedIn (linkedin.com/in/jiya-khan-pathan-799827423). I reply within 24 hours.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-hairline">
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className="font-mono text-xs text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold tracking-wider uppercase mb-1">
          04.5 // FREQUENTLY ASKED
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white flex items-center justify-center gap-2">
          <HelpCircle className="w-7 h-7 text-[#1B5DEF] dark:text-[#4A7FF7]" />
          <span>Visitor &amp; Recruiter Briefing</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2">
          Key answers regarding engineering availability, tech stack, and collaboration.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="card-interactive bg-white dark:bg-[#1C1C1E] border border-hairline rounded-xl overflow-hidden shadow-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-btn-${index}`}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] cursor-pointer"
              >
                <span className="font-medium text-sm sm:text-base text-black dark:text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#1B5DEF] dark:text-[#4A7FF7]' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-hairline/50 font-sans">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
