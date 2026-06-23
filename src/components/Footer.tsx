import { personalData } from '../data';
import { ArrowUp, Terminal, Star, Code, Heart, Orbit } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-slate-900 bg-[#040916]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Title Area */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-900/50 text-blue-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black tracking-tight text-white">{personalData.name}</span>
              <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">BE CSE Developer</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <button 
              onClick={() => onScrollToSection('hero')} 
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              Top
            </button>
            <span className="text-slate-800">•</span>
            <button 
              onClick={() => onScrollToSection('about')} 
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              Bio
            </button>
            <span className="text-slate-800">•</span>
            <button 
              onClick={() => onScrollToSection('education')} 
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              Education
            </button>
            <span className="text-slate-800">•</span>
            <button 
              onClick={() => onScrollToSection('skills')} 
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              Skills
            </button>
            <span className="text-slate-800">•</span>
            <button 
              onClick={() => onScrollToSection('projects')} 
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              Projects
            </button>
          </div>

          {/* Floating Actions / Scroll to Top */}
          <div>
            <button
              onClick={() => onScrollToSection('hero')}
              className="p-3 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl cursor-pointer transition-all flex items-center justify-center"
              title="Return to topmost header"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copywright details */}
        <div className="mt-8 pt-8 border-t border-slate-900/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {personalData.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <Code className="w-3.5 h-3.5 text-blue-500" /> 
            Crafted for Narayanaguru College of Engineering CSE division
          </p>
        </div>

      </div>
    </footer>
  );
}
