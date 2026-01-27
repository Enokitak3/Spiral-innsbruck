
import React from 'react';

const Footer: React.FC = () => {
  // Identical perfect Archimedean spiral generation logic from Hero.tsx
  const generateSpiralPath = () => {
    const points = [];
    const center = 50;
    const b = 1.45; 
    const steps = 200; 
    const rotations = 4.2; 
    
    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * rotations * 2 * Math.PI;
      const r = b * theta;
      const x = center + r * Math.cos(theta);
      const y = center + r * Math.sin(theta);
      points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(3)} ${y.toFixed(3)}`);
    }
    return points.join(' ');
  };

  return (
    <footer className="py-20 px-6 bg-[#fdfcf9] border-t border-stone-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-1000 group-hover:rotate-[360deg]">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d={generateSpiralPath()} 
                stroke="#1c1917" 
                strokeWidth="3.2" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-stone-900 uppercase">Spiral</span>
        </div>

        <div className="text-stone-400 text-[10px] font-black tracking-[0.4em] uppercase">
          &copy; {new Date().getFullYear()} Spiral Innsbruck &bull; Andreas-Hofer-Straße 7
        </div>

        <div className="flex gap-8 text-stone-500">
          <a href="#" className="hover:text-stone-900 transition-colors uppercase tracking-[0.25em] text-[10px] font-black">Instagram</a>
          <a href="#" className="hover:text-stone-900 transition-colors uppercase tracking-[0.25em] text-[10px] font-black">Facebook</a>
          <a href="#" className="hover:text-stone-900 transition-colors uppercase tracking-[0.25em] text-[10px] font-black">TikTok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
