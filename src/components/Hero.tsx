import { motion } from 'motion/react';
import { Download, ArrowRight, UserCheck, Orbit } from 'lucide-react';
import { personalData } from '../data';

// Using reference to generated image asset
const avatarPath = '/src/assets/images/developer_avatar_1782104588326.jpg';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onDownloadResume: () => void;
}

export default function Hero({ onScrollToSection, onDownloadResume }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text columns */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/40 border border-blue-800/60 text-blue-400 font-mono text-xs tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              Final-Year Engineering Student Portfolio
            </motion.div>

            <div className="space-y-2">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-gray-400 font-medium text-lg lg:text-xl tracking-tight"
              >
                Hello, I am
              </motion.h3>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="text-5xl lg:text-7xl font-bold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-400"
              >
                {personalData.name}
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl lg:text-3xl font-semibold text-blue-400 font-display"
              >
                {personalData.degree}
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-300 text-lg max-w-xl leading-relaxed font-sans"
            >
              Passionate about learning technology and building a successful career in software development. Currently studying at {personalData.college} in my {personalData.year}.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => onScrollToSection('contact')}
                className="glow-button px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium flex items-center gap-2 cursor-pointer transition-all duration-200 text-sm tracking-wide"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onScrollToSection('skills')}
                className="px-6 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-200 rounded-xl font-medium flex items-center gap-2 cursor-pointer transition-colors duration-200 text-sm"
              >
                View Portfolio
              </button>

              <button
                onClick={onDownloadResume}
                className="px-5 py-3.5 bg-indigo-950/40 border border-indigo-900/60 hover:bg-indigo-900/50 text-indigo-300 rounded-xl font-medium flex items-center gap-2 cursor-pointer transition-colors duration-200 text-sm"
                title="Generate Resume PDF/JSON Summary"
              >
                <Download className="w-4 h-4" />
                Resume Spec
              </button>
            </motion.div>
          </div>

          {/* Profile Image & Tech circle illustration Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96"
            >
              {/* Outer decorative orbits */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/20 animate-[spin_40s_linear_infinite] p-4">
                <div className="absolute top-2 left-1/2 w-2 h-2 rounded-full bg-blue-500/80" />
              </div>
              <div className="absolute inset-4 rounded-full border border-slate-800/40 animate-[spin_25s_linear_infinite]" />
              
              {/* Glow effects around container */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              
              {/* Image Frame */}
              <div className="absolute inset-3 bg-[#0d1527] rounded-2xl border border-slate-700/60 overflow-hidden flex items-center justify-center shadow-2xl">
                <img 
                  id="avatar_img_ashwin"
                  src={avatarPath}
                  alt="Ashwin AI Avatar" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none filter brightness-95 contrast-105"
                  onError={(e) => {
                    // Fallback to high tech CSS icon
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = "flex flex-col items-center justify-center p-8 text-center text-slate-500 space-y-4";
                      fallbackDiv.innerHTML = `
                        <div class="p-6 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M12 18h.01"/><path d="M17 12h.01"/><path d="m8 10 3 3-3 3"/></svg>
                        </div>
                        <p class="font-display font-bold text-lg text-slate-200">Ashwin</p>
                        <p class="font-mono text-xs text-blue-400/80"> Naraynaguru CSE Dev </p>
                      `;
                      parent.appendChild(fallbackDiv);
                    }
                  }}
                />
                
                {/* Embedded dynamic overlay watermark */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[10px] font-mono font-medium text-slate-300">SYSTEM STABLE</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[9px] font-mono text-green-400 uppercase tracking-widest font-bold">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
