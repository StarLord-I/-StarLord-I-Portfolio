import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Development Intern',
      company: 'FuturePoint Technologies',
      period: 'May 2023 – Jun 2023',
      description: 'Built responsive web interfaces and interactive components, collaborating with senior developers on clean page delivery and performance optimization.',
      achievements: [
        'Engineered modular, responsive web pages using HTML5, CSS3, and modern JavaScript',
        'Enhanced UI interactivity and client-side data handling for key portal views',
        'Participated in cross-functional sprint reviews to ensure cross-browser consistency',
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-hairline">
      
      {/* Section Header */}
      <div className="mb-8">
        <div className="font-mono text-xs text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold tracking-wider uppercase mb-1">
          04 // CAREER JOURNEY
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
          Work Experience
        </h2>
      </div>

      {/* Experience Timeline Card */}
      <div className="space-y-6 max-w-3xl">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="card-interactive bg-white dark:bg-[#1C1C1E] border border-hairline p-6 sm:p-8 rounded-xl shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">{exp.role}</h3>
                <p className="text-[#1B5DEF] dark:text-[#4A7FF7] font-medium text-sm mt-0.5">{exp.company}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#242426] px-3 py-1 rounded-md border border-hairline w-fit">
                <Calendar className="w-3.5 h-3.5 text-[#E25327] dark:text-[#E8734B]" />
                <span className="tabular-nums">{exp.period}</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 max-w-[65ch]">
              {exp.description}
            </p>

            <div className="space-y-2 border-t border-hairline pt-4">
              {exp.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-[#1B5DEF] dark:text-[#4A7FF7] mt-0.5 font-bold">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
