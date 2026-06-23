import { Gamepad2, Coins, Cpu, Target, Compass, Sparkles, Building, Rocket } from 'lucide-react';
import { interestsData, personalData } from '../data';
import GlowWrapper from './GlowWrapper';

const iconMap: { [key: string]: typeof Gamepad2 } = {
  Gamepad2: Gamepad2,
  Coins: Coins,
  Cpu: Cpu
};

export default function Interests() {
  return (
    <section id="career-interests" className="py-20 relative border-t border-slate-900 bg-slate-950/25">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Career Goal Section (Section 10) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 font-mono text-xs">
              <Target className="w-3.5 h-3.5" />
              Strategic Ambition
            </div>
            
            <h2 className="text-3xl font-bold font-display text-white tracking-tight">
              Career Goal & Dream Role
            </h2>
            <p className="text-slate-400 text-sm">
              My core mission and value proposition as an upcoming Computer Science Engineer.
            </p>
            <div className="h-1 w-12 bg-blue-500 rounded mt-2" />

            {/* Premium Career Display Card */}
            <div className="relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1630] to-[#070b16] border border-slate-800/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">Dream Role Target</span>
                    <h3 className="text-xl font-bold text-slate-100 font-display mt-0.5">
                      {personalData.dreamRole}
                    </h3>
                  </div>
                </div>

                <blockquote className="border-l-2 border-blue-500 pl-4 py-1 italic text-slate-300 text-lg leading-relaxed font-sans">
                  "To join a reputed IT company as a software developer, improve technical expertise, and contribute to innovative software solutions."
                </blockquote>

                <div className="p-4 bg-slate-950/65 rounded-xl border border-slate-900/60 space-y-3">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold block">Target Attributes</span>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      IT Industry Career
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Technical Expertise
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      Code Innovation
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Value Contribution
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests & Hobbies Section (Section 9) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-900/50 text-indigo-400 font-mono text-xs">
              <Compass className="w-3.5 h-3.5" />
              Creative Interests
            </div>
            
            <h2 className="text-3xl font-bold font-display text-white tracking-tight">
              Interests & Hobbies
            </h2>
            <p className="text-slate-400 text-sm">
              Activities that stimulate critical thinking, analytical logic, and work-life harmony.
            </p>
            <div className="h-1 w-12 bg-indigo-500 rounded mt-2" />

            <div className="space-y-4">
              {interestsData.map((interest) => {
                const SelectedIcon = iconMap[interest.iconName] || Gamepad2;
                return (
                  <GlowWrapper key={interest.name} className="!p-4 hover:border-slate-800 bg-[#070c1b]/60">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-900/40 text-blue-400">
                        <SelectedIcon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-base font-bold text-slate-100 font-display">
                          {interest.name}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </GlowWrapper>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
