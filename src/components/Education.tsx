import { GraduationCap, Award, Calendar, BookOpen, MapPin } from 'lucide-react';
import { educationData } from '../data';
import GlowWrapper from './GlowWrapper';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-slate-900 bg-slate-950/40">
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Milestones of Excellence
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
            A track record of consistent learning and academic foundation in Computer Science Engineering.
          </p>
          <div className="h-1 w-12 bg-blue-500 rounded mt-3 mx-auto" />
        </div>

        {/* Timeline structure for educational cards */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800/80 space-y-10">
          {educationData.map((edu, index) => {
            const isDegree = index === 0;
            return (
              <div key={edu.stage} className="relative">
                {/* Visual bullet indicator */}
                <span className={`absolute -left-10 sm:-left-12 top-1 w-8 h-8 rounded-full flex items-center justify-center border ${
                  isDegree 
                    ? 'bg-blue-600/20 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}>
                  {isDegree ? <Award className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                </span>

                <GlowWrapper className="hover:border-blue-500/40 relative">
                  {/* Premium corner accent */}
                  {isDegree && (
                    <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-400/30 text-[10px] font-mono tracking-widest uppercase font-bold text-white shadow-md">
                      Current Milestone
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-100 font-display">
                          {edu.stage}
                        </h3>
                        {index === 0 && (
                          <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-900 font-mono text-[10px]">
                            Final Year
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-300">
                        <span className="flex items-center gap-1 font-medium text-slate-200">
                          <BookOpen className="w-4 h-4 text-slate-400 text-blue-400" />
                          {edu.institution}
                        </span>
                        
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.yearRange}
                        </span>
                      </div>
                    </div>

                    <div className="md:text-right shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {edu.score}
                      </div>
                      
                      <div className="mt-1.5 text-xs text-indigo-400 font-medium">
                        Status: {edu.status}
                      </div>
                    </div>
                  </div>
                </GlowWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
