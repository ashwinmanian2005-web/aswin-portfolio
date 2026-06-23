import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Languages, Clock, Sparkles, Building2 } from 'lucide-react';
import { personalData } from '../data';
import GlowWrapper from './GlowWrapper';

export default function About() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    // Sync clock with Indian Standard Time (+5.30)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeStr(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 relative border-t border-slate-900 bg-slate-950/25">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Vibe check & Background
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded mt-2.5 mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Professional Introduction Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 lg:p-8 bg-slate-900/50 border border-slate-800/85 rounded-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />
              <p className="text-slate-300 text-lg leading-relaxed font-sans first-letter:text-4xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-2 first-letter:float-left">
                I am a final-year Computer Science Engineering student at <strong className="text-white hover:text-blue-400 transition-colors">Narayanaguru College of Engineering</strong>. 
                I am passionate about technology, programming, and continuous learning. 
                I am focused on improving my technical skills and building a successful career as a <span className="text-blue-400 font-semibold underline decoration-wavy decoration-indigo-500 underline-offset-4">software developer</span> in the IT industry.
              </p>
              
              <div className="mt-6 bg-blue-950/20 border border-blue-900/40 p-4 rounded-xl">
                <p className="text-[10px] text-blue-400 uppercase font-bold tracking-widest mb-1 font-mono">Career Objective</p>
                <p className="text-xs text-blue-100 italic">"To join a reputed IT company as a software developer, improve technical expertise, and contribute to innovative software solutions."</p>
              </div>
            </div>

            {/* Visual indicators of current status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Education Status</h4>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">4th Year (B.E. CSE)</p>
                  <p className="text-xs text-slate-400 mt-0.5">Narayanaguru College</p>
                </div>
              </div>

              <div className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Local Time (IST)</h4>
                  <p className="text-sm font-mono font-medium text-blue-300 mt-0.5" id="realtime_timestamp">
                    {timeStr || 'Connecting...'}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Tirunelveli, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info Grid Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-mono text-slate-400 tracking-wide uppercase px-1">
              Personal Information
            </h3>

            <div className="space-y-4">
              {/* DOB Card */}
              <GlowWrapper className="!p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-900/50 text-blue-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-400/80 uppercase tracking-widest block">Date of Birth</span>
                  <span className="text-base font-semibold text-slate-100 mt-0.5 block">{personalData.dob}</span>
                </div>
              </GlowWrapper>

              {/* Location Card */}
              <GlowWrapper className="!p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-900/50 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-indigo-400/80 uppercase tracking-widest block">Location</span>
                  <span className="text-base font-semibold text-slate-100 mt-0.5 block">{personalData.location}</span>
                </div>
              </GlowWrapper>

              {/* Languages Card */}
              <GlowWrapper className="!p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-900/50 text-emerald-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest block">Languages Known</span>
                  <div className="flex items-center gap-2 mt-1">
                    {personalData.languages.map((lang, index) => (
                      <span 
                        key={lang} 
                        className="px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-mono text-xs font-semibold"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
