import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Development Intern',
      company: 'FuturePoint Technologies',
      period: 'May 2023 – Jun 2023',
      description: 'Gained hands-on experience in modern frontend web development, collaborating with team members to build responsive user interfaces and interactive components.',
      achievements: [
        'Built responsive web pages using HTML5 and CSS3',
        'Enhanced user interactivity using JavaScript',
        'Collaborated with team on UI component structure and design implementation',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-[#090d16] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-gray-400 mt-2">
            Real-world collaboration and frontend engineering experience.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700 w-fit">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
