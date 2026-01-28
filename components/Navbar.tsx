
import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap && mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
        gsap.to(mobileMenuRef.current, {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 0.8,
          ease: "power4.inOut"
        });
      } else {
        document.body.style.overflow = 'unset';
        gsap.to(mobileMenuRef.current, {
          clipPath: 'circle(0% at 100% 0%)',
          duration: 0.6,
          ease: "power4.inOut"
        });
      }
    }
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isVisible = isScrolled || isHovered || isMobileMenuOpen;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-1 z-[60] hidden md:block"
        onMouseEnter={() => setIsHovered(true)}
      />

      <nav 
        ref={navRef} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Main Navigation"
        aria-hidden={!isVisible}
        className={`fixed w-full z-50 bg-alabaster border-b border-stone-200 transition-all duration-500 ease-in-out shadow-sm ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Spiral Home"
            tabIndex={isVisible ? 0 : -1}
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path 
                  d={generateSpiralPath()} 
                  stroke="#121110" 
                  strokeWidth="3.2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-charcoal uppercase">Spiral</span>
          </button>

          <div className="hidden lg:flex gap-10 text-[13px] font-bold uppercase tracking-[0.1em] text-stone-700">
            {['about', 'menu', 'gallery', 'contact'].map((id) => (
              <button 
                key={id}
                onClick={() => scrollTo(id)} 
                tabIndex={isVisible ? 0 : -1}
                className="hover:text-charcoal transition-colors relative group"
              >
                {id === 'about' ? 'Story' : id === 'gallery' ? 'Vibe' : id}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-800 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Andreas-Hofer-Straße+7+6020+Innsbruck+Austria" 
               target="_blank" 
               rel="noopener noreferrer"
               tabIndex={isVisible ? 0 : -1}
               className="hidden sm:flex items-center gap-3 bg-charcoal text-alabaster px-6 py-3 rounded-full text-[11px] font-bold tracking-widest hover:bg-stone-800 transition-all shadow-md">
              <MapPin size={12} />
              DIRECTIONS
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              tabIndex={isVisible ? 0 : -1}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div 
        ref={mobileMenuRef}
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-[45] bg-charcoal flex flex-col items-center justify-center lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        <div className="flex flex-col gap-10 text-center">
          {['about', 'menu', 'gallery', 'contact'].map((id) => (
            <button 
              key={id}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={() => scrollTo(id)}
              className="text-4xl font-display font-bold italic text-alabaster hover:text-amber-400 transition-colors capitalize"
            >
              {id === 'about' ? 'Our Story' : id === 'gallery' ? 'Vibe' : id}
            </button>
          ))}
          <a href="https://www.google.com/maps/dir/?api=1&destination=Andreas-Hofer-Straße+7+6020+Innsbruck+Austria" 
             tabIndex={isMobileMenuOpen ? 0 : -1}
             className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mt-6">
             Get Directions
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
