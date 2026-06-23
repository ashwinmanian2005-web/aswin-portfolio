import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Github, User, Heart, MessageSquare, Menu, X, Code, Copy, Check, Download, Stars } from 'lucide-react';

import { personalData } from './data';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Tracking active section with IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'skills', 'projects', 'certifications', 'career-interests', 'contact'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, { threshold: 0.25 });

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  // Handle printing resume style format
  const handleDownloadStructuredResume = () => {
    setResumeModalOpen(true);
  };

  const resumeJsonString = JSON.stringify({
    applicant: personalData.name,
    dob: personalData.dob,
    currentLocation: personalData.location,
    academicSummary: {
      college: personalData.college,
      degree: personalData.degree,
      status: personalData.year
    },
    dreamCareerRole: personalData.dreamRole,
    skills: {
      programming: ["Python (Certified)", "OOPs", "Logic basics"],
      strengths: ["Continuous Learning", "Self Motivated", "Adaptability"],
      communication: ["Tamil", "English"]
    },
    directContacts: {
      tele: personalData.phone,
      mail: personalData.email
    }
  }, null, 2);

  const handleCopyResumeJson = () => {
    navigator.clipboard.writeText(resumeJsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Premium Ambient Stars Particles overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,24,48,0.4),rgba(0,0,0,0))] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Top Glassmorphism Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/75 backdrop-blur-md border-b border-slate-900">
        <div className="container mx-auto px-4 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand/Signature */}
          <div 
            onClick={() => handleScrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/25">A</div>
            <span className="text-xl font-bold font-display tracking-tight text-white">
              {personalData.name.toUpperCase()}
              <span className="text-blue-500 underline decoration-2 underline-offset-4 font-black">.</span>
            </span>
          </div>

          {/* Desktop Links Grid */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { id: 'about', label: 'Bio' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'career-interests', label: 'Career-Goals' },
              { id: 'contact', label: 'Contact' }
            ].map(item => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    active 
                      ? 'text-blue-400 bg-blue-950/40 border border-blue-900/40 shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Download Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleDownloadStructuredResume}
              className="glow-button px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-mono font-bold rounded-lg text-white cursor-pointer transition-all flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              Export Resume.json
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleDownloadStructuredResume}
              className="p-1 text-slate-400 hover:text-slate-200"
              title="Resume data spec"
            >
              <Code className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Dynamic Mobile Nav Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-18 z-40 bg-[#030712] border-b border-slate-900 lg:hidden shadow-2xl overflow-y-auto max-h-[calc(100vh-4.5rem)]"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {[
                { id: 'about', label: 'About/Bio' },
                { id: 'education', label: 'Education Milestones' },
                { id: 'skills', label: 'Skills Grid' },
                { id: 'projects', label: 'Projects Focus' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'career-interests', label: 'Goals & Hobbies' },
                { id: 'contact', label: 'Contact Ashwin' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className="w-full text-left font-mono text-sm py-2.5 px-4 rounded-lg bg-slate-950/55 border border-slate-900 text-slate-300 hover:bg-blue-950/20 hover:text-blue-400 transition-all flex items-center justify-between"
                >
                  {item.label}
                  <span className="text-xs text-slate-600">/{item.id}</span>
                </button>
              ))}

              <div className="pt-4 border-t border-slate-900">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDownloadStructuredResume();
                  }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Structured Resume Metadata
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Container Layout */}
      <main className="relative z-10">
        
        {/* Sections Listing */}
        <Hero 
          onScrollToSection={handleScrollToSection} 
          onDownloadResume={handleDownloadStructuredResume} 
        />
        
        <About />
        
        <Education />
        
        <Skills />
        
        <SoftSkills />
        
        <Projects />
        
        <Certification />
        
        <Interests />
        
        <Contact />

      </main>

      {/* Structural Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Resume Data JSON Export Modal Drawer Drawer overlay */}
      <AnimatePresence>
        {resumeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-[#090f1e] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Stars className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-display font-bold text-lg text-slate-100">
                    Ashwin's Structured Resume JSON
                  </h3>
                </div>
                <button 
                  onClick={() => setResumeModalOpen(false)}
                  className="p-1 px-2.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-mono text-xs cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              {/* Code visual block */}
              <div className="p-6 bg-slate-950 font-mono text-xs text-blue-300 relative max-h-[350px] overflow-y-auto">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={handleCopyResumeJson}
                    className="p-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-850 text-slate-300 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                    title="Copy full JSON"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="whitespace-pre-wrap select-all leading-relaxed p-2 text-indigo-300">
                  {resumeJsonString}
                </pre>
              </div>

              {/* Bottom footer bar description */}
              <div className="p-5 border-t border-slate-900/60 bg-[#070c17]/90 text-xs text-slate-400 leading-relaxed font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
                <p>This export conforms to modern tech system developer application protocols.</p>
                <button
                  onClick={() => {
                    // Trigger native text download
                    const blob = new Blob([resumeJsonString], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `ashwin_cse_resume_spec.json`;
                    link.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-[10px] rounded shrink-0 cursor-pointer"
                >
                  Download .JSON
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
