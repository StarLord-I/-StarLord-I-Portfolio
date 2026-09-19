import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, Sparkles, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    },
    {
      title: 'Backend & APIs',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Python (AI Service)', 'MongoDB (Learning)'],
    },
    {
      title: 'Tools & Workflow',
      icon: <Wrench className="w-5 h-5 text-yellow-400" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Responsive Design', 'UI/UX Polish', 'Team Collaboration'],
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-[#090d16] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mission Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Star-Lord_I
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Computer Science graduate, frontend enthusiast, and space-opera aficionado building delightful web apps.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Education & Background</h3>
                <p className="text-xs text-purple-400 font-mono">B.Tech in Computer Science (2022–2026)</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              I am Jiya Khan Pathan, coding under the persona <strong className="text-white">Star-Lord_I</strong>. I specialize in turning creative concepts into polished, responsive user interfaces with smooth interactions.
            </p>
            <div className="pt-4 border-t border-gray-800 text-xs text-gray-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Frontend Intern experience at FuturePoint Technologies</span>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md hover:border-gray-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-800/80 border border-gray-700">
                    {cat.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-gray-800/60 border border-gray-700/50 text-gray-300 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
