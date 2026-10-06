import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      color: 'text-[#E25327] dark:text-[#E8734B]',
      icon: <Code2 className="w-4 h-4" />,
      skills: ['React 18 & Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Framer Motion', 'Responsive UI/UX'],
    },
    {
      title: 'Backend & APIs',
      color: 'text-[#1B5DEF] dark:text-[#4A7FF7]',
      icon: <Cpu className="w-4 h-4" />,
      skills: ['Node.js & Express', 'Python & FastAPI', 'RESTful Architecture', 'MongoDB & SQL', 'API Integration'],
    },
    {
      title: 'Workflow & Tools',
      color: 'text-emerald-500',
      icon: <Wrench className="w-4 h-4" />,
      skills: ['Git & GitHub', 'VS Code', 'Vercel Deployment', 'Postman API Testing', 'AI Companion Bots'],
    },
  ];

  return (
    <>
      {/* ==================== 01 // ABOUT SECTION ==================== */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-black/10 dark:border-white/10">
        <div className="space-y-4 max-w-3xl">
          <div className="font-mono text-xs text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold tracking-wider uppercase">
            01 // BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Engineering with precision & personality.
          </h2>
          <div className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
            <p>
              I am a final-year Computer Science Engineering student (2022–2026). Over the past four years, I've developed a deep focus on creating resilient full-stack web applications that combine robust backend logic with clean, tactile frontends.
            </p>
            <p>
              My peers and online collaborators know me by my handle <strong className="text-black dark:text-white font-medium">Star-Lord</strong>. It’s a reflection of my curiosity, appreciation for great music, and a desire to build software with a distinctive creative voice.
            </p>
            <p>
              During my internship at <strong className="text-black dark:text-white font-medium">FuturePoint Technologies</strong>, I built responsive client portals, optimized frontend rendering performance, and collaborated on clean UI architectures.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#1B5DEF] dark:text-[#4A7FF7]" />
              <span>B.Tech in Computer Science (2022–2026)</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#E25327] dark:text-[#E8734B]" />
              <span>Internship @ FuturePoint Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 02 // SKILLS SECTION ==================== */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-black/10 dark:border-white/10">
        <div className="mb-8">
          <div className="font-mono text-xs text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold tracking-wider uppercase mb-1">
            02 // CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Technologies I rely on.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-interactive bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className={cat.color}>{cat.icon}</span>
                <h3 className={`font-mono text-xs uppercase font-bold tracking-wider ${cat.color}`}>
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-2.5 text-sm text-black dark:text-white font-medium">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 dark:text-gray-600">›</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
