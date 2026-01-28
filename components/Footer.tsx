
import React from 'react';

const Footer: React.FC = () => {
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
    <footer className="py-24 px-6 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex items-center gap-5 group">
          <div className="w-12 h-12 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path 
                d={generateSpiralPath()} 
                stroke="#1c1917" 
                strokeWidth="3.2" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-3xl font-extrabold tracking-tight text-stone-950 uppercase">Spiral</span>
        </div>

        <div className="text-stone-900 text-[12px] font-semibold tracking-[0.3em] uppercase text-center md:text-left">
          &copy; {new Date().getFullYear()} Spiral Innsbruck &bull; Andreas-Hofer-Straße 7
        </div>

        <div className="flex gap-12">
          {['Instagram', 'Facebook', 'TikTok'].map((platform) => (
            <a 
              key={platform} 
              href="#" 
              className="hover:text-amber-900 transition-colors uppercase tracking-[0.2em] text-[12px] font-semibold text-stone-700"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
