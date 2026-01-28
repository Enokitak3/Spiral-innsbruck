
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

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

  const reviewsUrl = "https://www.google.com/search?q=Spiral+-+More+than+coffee+Reviews";

  return (
    <section id="main-content" className="relative h-screen flex flex-col overflow-hidden bg-charcoal outline-none" tabIndex={-1}>
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: `linear-gradient(rgba(18,17,16,0.6), rgba(18,17,16,0.85)), url('https://i.imgur.com/gycEtO8.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />
      
      <div className="h-20 md:h-32 w-full relative z-10" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <div ref={contentRef} className="flex flex-col items-center w-full max-w-4xl gap-4 md:gap-6">
          
          <div className="group relative mb-2">
            <svg 
              width="100" 
              height="100" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="relative drop-shadow-[0_0_20px_rgba(253,252,249,0.3)] transition-transform duration-[15s] hover:rotate-[360deg] ease-linear md:w-[120px] md:h-[120px]"
              aria-hidden="true"
            >
              <path 
                d={generateSpiralPath()} 
                stroke="#fdfcf9" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h2 className="text-[13px] md:text-[15px] font-bold uppercase tracking-[0.8em] text-stone-200 pl-[0.8em]">Innsbruck</h2>
            <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-display font-extrabold tracking-tight leading-none text-stone-50 select-none drop-shadow-2xl">SPIRAL</h1>
            <p className="text-2xl md:text-5xl font-display font-medium italic text-stone-100 drop-shadow-lg leading-tight mt-2">
              &ldquo;More than coffee&rdquo;
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center mt-10 md:mt-12 justify-center w-full">
            <button 
               onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-12 md:px-16 py-4 md:py-6 bg-alabaster text-charcoal rounded-full font-bold tracking-widest hover:bg-stone-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase text-lg w-full sm:w-auto font-serif">
              Explore Menu
            </button>
            <a 
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-bold tracking-widest px-8 py-5 bg-charcoal rounded-full border border-stone-100/30 uppercase text-stone-50 shadow-xl hover:bg-stone-900 transition-all focus-visible:ring-2 focus-visible:ring-amber-500 w-full sm:w-auto justify-center font-serif"
            >
              <span className="text-amber-400" aria-label="4.7 stars">4.7 ★</span>
              <span className="text-stone-100 underline decoration-stone-500 underline-offset-4">200+ Reviews</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at absolute bottom (pb-0) */}
      <div className="relative z-10 h-24 md:h-32 flex flex-col items-center justify-end pb-0">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 opacity-90 transition-opacity p-4 group"
          aria-label="Scroll to content"
        >
          <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-stone-200 pl-[0.6em] transition-transform group-hover:translate-y-1 drop-shadow-md">Scroll</span>
          <div className="w-px h-10 md:h-14 bg-gradient-to-b from-stone-200 to-transparent transition-all group-hover:h-16"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
