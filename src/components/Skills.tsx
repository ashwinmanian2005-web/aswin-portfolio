import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Award, Zap, CheckCircle2, Terminal, HelpCircle, Briefcase } from 'lucide-react';
import { skillsData } from '../data';
import GlowWrapper from './GlowWrapper';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'Technical' | 'Soft' | 'Strength'>('Technical');

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  const categories: { key: 'Technical' | 'Soft' | 'Strength'; label: string; icon: typeof Cpu }[] = [
    { key: 'Technical', label: 'Technical Skills', icon: Terminal },
    { key: 'Soft', label: 'Soft Skills', icon: Zap },
    { key: 'Strength', label: 'Strengths', icon: Award }
  ];

  return (
    <section id="skills" className="py-20 relative border-t border-slate-900 bg-slate-950/25">
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-indigo-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-900/50 text-indigo-400 font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            Core Competence Map
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
            Technical Skills & Strengths
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
            A comprehensive mapping of program languages, problem-solving techniques, adaptable traits, and communication assets.
          </p>
          <div className="h-1 w-12 bg-blue-500 rounded mt-3 mx-auto" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900/80 border border-slate-800/65">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium font-display transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/15' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
              >
                <GlowWrapper className="h-full flex flex-col justify-between hover:border-indigo-500/30 group">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans min-h-[36px]">
                          {skill.description}
                        </p>
                      </div>

                      {/* Display numerical progress indicator */}
                      <div className="text-right shrink-0">
                        <span className="text-lg font-bold font-mono text-blue-400">
                          {skill.level}%
                        </span>
                        <span className="text-[10px] font-mono block text-slate-500 uppercase tracking-wider">
                          Fluency
                        </span>
                      </div>
                    </div>

                    {/* Gauge bar track */}
                    <div className="w-full h-2 rounded-full bg-slate-950/80 border border-slate-800/50 overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Bullet badges */}
                  <div className="flex items-center gap-1.5 pt-4 text-[11px] font-mono text-slate-400 border-t border-slate-900/60 mt-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Validated Capability</span>
                  </div>
                </GlowWrapper>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
