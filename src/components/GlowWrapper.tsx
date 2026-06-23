import { ReactNode, useRef, MouseEvent } from 'react';

interface GlowWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  key?: string | number | null;
}

export default function GlowWrapper({ children, className = '', id }: GlowWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      id={id}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`glow-card bg-slate-900/50 backdrop-blur-xl border border-slate-800/85 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700/80 hover:shadow-xl hover:shadow-blue-950/20 ${className}`}
    >
      {children}
    </div>
  );
}
