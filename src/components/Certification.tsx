import { Award, ShieldCheck, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { certificatesData } from '../data';
import GlowWrapper from './GlowWrapper';

export default function Certification() {
  return (
    <section id="certifications" className="py-20 relative border-t border-slate-900 bg-slate-950/25">
      <div className="absolute right-10 bottom-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Capabilities
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
            Certifications
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded mt-3 mx-auto" />
        </div>

        {/* Certificate Display Grid */}
        <div className="max-w-3xl mx-auto">
          {certificatesData.map((cert) => (
            <GlowWrapper key={cert.title} className="relative group border-blue-950/60 overflow-hidden bg-[#0a1122]/80">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  {/* Premium Gold/Teal Medal Badge */}
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 shadow-lg shadow-amber-500/5">
                    <Award className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-100 font-display">
                        {cert.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 font-mono text-[9px] uppercase tracking-wider font-bold">
                        Python 3
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 font-medium font-sans">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 pt-2 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </span>
                      <span className="text-slate-600">|</span>
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Credential Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto text-right">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-400 flex flex-col items-center md:items-end justify-center">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Security Key</span>
                    <span className="text-emerald-400 font-mono mt-0.5 select-none tracking-tight text-[11px]">
                      PY-ACC-924-ASHWIN
                    </span>
                  </div>
                </div>
              </div>
            </GlowWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
