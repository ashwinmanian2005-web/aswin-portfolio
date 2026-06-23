import { FolderGit2, Code, ArrowUpRight, CheckCircle, Flame, Star } from 'lucide-react';
import { projectsData } from '../data';
import GlowWrapper from './GlowWrapper';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative border-t border-slate-900 bg-slate-950/40">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 font-mono text-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Engineering Showrooms
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
            Projects & Practical Work
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded mt-3 mx-auto" />
        </div>

        {/* Current Focus Banner Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/50 to-indigo-950/30 border border-slate-800/80 backdrop-blur-md overflow-hidden shadow-2xl">
            {/* Ambient indicator lights */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                <Code className="w-10 h-10 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono text-amber-300 uppercase tracking-widest font-bold">Current Development Focus</span>
                </div>
                <p className="text-slate-200 text-lg font-sans leading-relaxed">
                  "Currently focused on strengthening programming skills and building practical knowledge through academic learning, coding practice, and self-learning."
                </p>
                <p className="text-xs text-slate-400 font-mono italic">
                  — Actively maintaining weekly scripts, problem-solving files, and learning tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modular Project Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, idx) => (
            <GlowWrapper key={project.title} className="flex flex-col justify-between h-full hover:border-slate-700">
              <div className="space-y-4">
                {/* Meta status */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {project.status}
                  </span>
                  <span className="text-xs text-blue-400 font-mono font-medium flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-500" /> Active Dev
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100 font-display flex items-center gap-2 group-hover:text-blue-400">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6 mt-6 border-t border-slate-900/60">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 text-xs font-mono text-blue-400 bg-blue-950/40 rounded-md border border-blue-900/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Simulated repository link */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Repository State: Clean</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Compiles OK
                  </span>
                </div>
              </div>
            </GlowWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
