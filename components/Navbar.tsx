
import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Identical perfect Archimedean spiral generation logic
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
        gsap.to(mobileMenuRef.current, {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 0.8,
          ease: "power4.inOut"
        });
      } else {
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
        className="fixed top-0 left-0 w-full h-10 z-[60] hidden md:block"
        onMouseEnter={() => setIsHovered(true)}
      />

      <nav 
        ref={navRef} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed w-full z-50 bg-[#fdfcf9]/95 backdrop-blur-xl border-b border-stone-100 transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-[-100%] md:-translate-y-full'
        } ${!isScrolled && !isHovered && !isMobileMenuOpen ? 'md:-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-1000 group-hover:rotate-[360deg]">
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d={generateSpiralPath()} 
                  stroke="#1c1917" 
                  strokeWidth="3.2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tighter text-stone-900 uppercase">Spiral</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.25em] text-stone-400">
            <button onClick={() => scrollTo('about')} className="hover:text-stone-900 transition-colors relative group">
              Our Story
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollTo('menu')} className="hover:text-stone-900 transition-colors relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-stone-900 transition-colors relative group">
              Vibe
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-stone-900 transition-colors relative group">
              Visit
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all group-hover:w-full"></span>
            </button>
          </div>

          <div className="flex gap-4 items-center">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Andreas-Hofer-Straße+7+6020+Innsbruck+Austria" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hidden sm:flex items-center gap-3 bg-stone-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-stone-800 transition-all shadow-lg">
              <MapPin size={12} />
              DIRECTIONS
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-stone-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[45] bg-stone-900 flex flex-col items-center justify-center lg:hidden"
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        <div className="flex flex-col gap-12 text-center">
          {['about', 'menu', 'gallery', 'contact'].map((id) => (
            <button 
              key={id}
              onClick={() => scrollTo(id)}
              className="text-4xl font-playfair italic text-white hover:text-stone-400 transition-colors capitalize"
            >
              {id === 'about' ? 'Our Story' : id === 'gallery' ? 'Vibe' : id}
            </button>
          ))}
          <a href="https://www.google.com/maps/dir/?api=1&destination=Andreas-Hofer-Straße+7+6020+Innsbruck+Austria" 
             className="text-amber-500 font-black tracking-widest uppercase text-xs mt-4">
             Get Directions
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
