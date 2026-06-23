import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { personalData } from '../data';
import GlowWrapper from './GlowWrapper';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate premium pipeline delivery queue
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-900 bg-slate-950/25">
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">
            Get in touch to discuss internships, junior roles, or technical collaborations.
          </p>
          <div className="h-1 w-12 bg-blue-500 rounded mt-3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          
          {/* Quick Details List Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-200">
                Direct Channels
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Feel free to reach out via direct phone or email. I actively check alerts and will respond within 24 working hours.
              </p>

              <div className="space-y-4">
                {/* Email Display */}
                <GlowWrapper className="!p-4 bg-[#0a1122]/80 group flex items-center gap-4">
                  <div className="p-3.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Email Address</span>
                    <a 
                      id="contact_email"
                      href={`mailto:${personalData.email}`} 
                      className="text-base font-bold text-slate-100 hover:text-blue-400 transition-colors block mt-0.5"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </GlowWrapper>

                {/* Phone Display */}
                <GlowWrapper className="!p-4 bg-[#0a1122]/80 group flex items-center gap-4">
                  <div className="p-3.5 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Call / Phone</span>
                    <a 
                      id="contact_phone"
                      href={`tel:${personalData.phone}`} 
                      className="text-base font-bold text-slate-100 hover:text-indigo-400 transition-colors block mt-0.5"
                    >
                      +91 {personalData.phone}
                    </a>
                  </div>
                </GlowWrapper>

                {/* Location Reference */}
                <GlowWrapper className="!p-4 bg-[#0a1122]/80 group flex items-center gap-4">
                  <div className="p-3.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Base Location</span>
                    <span className="text-base font-bold text-slate-200 block mt-0.5">
                      {personalData.location}
                    </span>
                  </div>
                </GlowWrapper>
              </div>
            </div>

            {/* Cryptographic check/security disclaimer */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-900 flex items-center gap-3">
              <ShieldCheck className="text-green-500 w-5 h-5 shrink-0" />
              <span className="text-[11px] font-mono text-slate-500">
                All communications handled securely according to corporate workspace environment specs.
              </span>
            </div>
          </div>

          {/* Interactive Message Hub Form */}
          <div className="lg:col-span-7">
            <GlowWrapper className="h-full bg-slate-900/50 border-slate-800/80 p-6 sm:p-8">
              <h3 className="text-lg font-bold font-display text-slate-100 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Transmission Terminal
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text"
                      id="form_name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="e.g. Recruiter Lead"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 text-sm transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email"
                      id="form_email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="recruiter@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Topic / Subject</label>
                  <input 
                    type="text"
                    id="form_subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    placeholder="e.g. B.E CSE Internship Interview Offer"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 text-sm transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Detailed Message *</label>
                  <textarea 
                    id="form_message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Describe job requirements, project scopes, or custom queries here..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 text-sm transition-colors resize-none"
                  />
                </div>

                {submitSuccess && (
                  <div className="p-4 bg-emerald-950/40 border border-emerald-900/60 text-emerald-400 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold font-mono uppercase tracking-wider">Transmission Succeeded</p>
                      <p className="text-emerald-500/80 mt-0.5">Ashwin's portfolio state received your contact trace. Simulating gateway reply.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  id="form_submit_btn"
                  disabled={isSubmitting}
                  className="glow-button w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded-xl font-medium flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 text-sm tracking-wide"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Queuing Stream...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Dispatch Message
                    </>
                  )}
                </button>
              </form>
            </GlowWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}
