import { Sparkles, Brain, MessageSquare, TrendingUp, Compass, Heart, ShieldAlert } from 'lucide-react';
import GlowWrapper from './GlowWrapper';

export default function SoftSkills() {
  const softSkills = [
    { name: "Problem Solving", icon: Brain, desc: "A logical mindset focused on dividing complex coding bugs into solvable chunks.", color: "text-blue-400 bg-blue-950/50 border-blue-900/60" },
    { name: "Communication", icon: MessageSquare, desc: "Articulating ideas clearly and cooperating effectively with teammates and mentors.", color: "text-indigo-400 bg-indigo-950/50 border-indigo-900/60" },
    { name: "Quick Learning", icon: TrendingUp, desc: "Rapidly consuming technical documentation and turning them into functional code.", color: "text-emerald-400 bg-emerald-950/50 border-emerald-900/60" }
  ];

  const strengths = [
    { name: "Self Motivated", icon: Compass, desc: "Driven by inner passion to explore APIs and stay updated with technology standards.", color: "text-purple-400 bg-purple-950/50 border-purple-900/60" },
    { name: "Hardworking", icon: Heart, desc: "Relentless work ethic, devoted to quality output and detailed system integrations.", color: "text-rose-400 bg-rose-950/50 border-rose-900/60" },
    { name: "Adaptability", icon: ShieldAlert, desc: "Acclimatizing gracefully to diverse platform guidelines, devices, and runtime parameters.", color: "text-amber-400 bg-amber-950/50 border-amber-900/60" }
  ];

  return (
    <section id="soft-skills" className="py-20 relative border-t border-slate-900 bg-slate-950/40">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interpersonal Traits
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
            Soft Skills & Strengths
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded mt-3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Soft Skills Block */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Soft Skills
            </h3>
            
            <div className="space-y-4">
              {softSkills.map((item) => {
                const IconComp = item.icon;
                return (
                  <GlowWrapper key={item.name} className="!p-4 bg-[#0a1024]/50 border-slate-800/80 hover:border-indigo-500/30">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl border ${item.color} shrink-0`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-slate-100 font-display">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </GlowWrapper>
                );
              })}
            </div>
          </div>

          {/* Strengths Block */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Core Strengths
            </h3>
            
            <div className="space-y-4">
              {strengths.map((item) => {
                const IconComp = item.icon;
                return (
                  <GlowWrapper key={item.name} className="!p-4 bg-[#140b17]/40 border-slate-800/80 hover:border-rose-500/30">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl border ${item.color} shrink-0`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-slate-100 font-display">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          {item.desc}
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
