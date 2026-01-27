
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Generate a perfect Archimedean spiral path
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

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap) {
      const tl = gsap.timeline();
      tl.to(bgRef.current, { scale: 1, duration: 2.5, ease: "power2.out" })
        .from(contentRef.current?.children, {
          y: 30,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out"
        }, "-=1.5");
    }
  }, []);

  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-stone-900">
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 scale-110 opacity-80"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://i.imgur.com/gycEtO8.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="h-28 md:h-48 w-full relative z-10" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-start md:justify-center px-4 sm:px-6 text-center">
        <div ref={contentRef} className="flex flex-col items-center w-full max-w-4xl gap-4 md:gap-6">
          
          <div className="group relative mb-2 md:mb-4">
            <div className="absolute inset-0 blur-3xl bg-white/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <svg 
              width="100" 
              height="100" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="relative drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform duration-[10s] group-hover:rotate-[360deg] ease-linear md:w-[140px] md:h-[140px]"
            >
              <path 
                d={generateSpiralPath()} 
                stroke="white" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="space-y-1 md:space-y-3">
            <h2 className="text-[10px] md:text-[12px] font-black uppercase tracking-[1em] md:tracking-[1.4em] text-stone-100 opacity-90 pl-[1em] md:pl-[1.4em] drop-shadow-lg">Innsbruck</h2>
            <h1 className="text-7xl sm:text-8xl md:text-[11rem] font-black tracking-tighter leading-none text-white select-none drop-shadow-2xl">SPIRAL</h1>
            <p className="text-lg md:text-4xl font-light italic text-stone-100 font-playfair tracking-wide pt-1 md:pt-2 drop-shadow-lg">
              &ldquo;More than coffee&rdquo;
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center mt-6 md:mt-10">
            <button 
               onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-10 md:px-14 py-4 md:py-5 bg-white text-stone-900 rounded-full font-black tracking-[0.2em] hover:bg-stone-200 transition-all transform hover:scale-105 active:scale-95 shadow-2xl uppercase text-[10px] md:text-[11px] w-full sm:w-auto">
              Explore Menu
            </button>
            <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-black tracking-[0.2em] px-5 md:px-6 py-3 md:py-4 bg-black/50 backdrop-blur-xl rounded-full border border-white/30 uppercase text-white shadow-xl">
              <span className="text-yellow-400">4.7 ★</span>
              <span className="opacity-90">200+ Reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-20 md:h-32 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 opacity-70">
          <span className="text-[10px] uppercase tracking-[0.8em] font-black text-white pl-[0.8em]">Scroll</span>
          <div className="w-px h-10 md:h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
