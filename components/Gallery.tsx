
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://i.imgur.com/mnWfsZp.jpeg",
    "https://i.imgur.com/ST9H1jO.jpeg",
    "https://i.imgur.com/zguzNot.jpeg",
    "https://i.imgur.com/CIlbecs.jpeg",
    "https://i.imgur.com/MlDnSu9.jpeg",
    "https://i.imgur.com/lETfT5S.jpeg",
    "https://i.imgur.com/oOYv15H.jpeg",
    "https://i.imgur.com/2sv6nrb.jpeg",
    "https://i.imgur.com/JleeAoo.jpeg",
    "https://i.imgur.com/J3jwCP4.jpeg",
    "https://i.imgur.com/VC0aeFd.jpeg",
    "https://i.imgur.com/GaK3yGI.jpeg"
  ];

  return (
    <section id="gallery" className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 scroll-reveal">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-extrabold text-stone-950 mb-6 italic tracking-normal uppercase">Visual Story</h2>
            <p className="text-stone-800 tracking-[0.4em] uppercase text-xs font-bold">Capturing the spiral aesthetic</p>
          </div>
          <div className="hidden md:block">
            <span className="text-stone-100 text-[10rem] font-display font-extrabold select-none pointer-events-none leading-none">SPIRAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`group relative aspect-[4/5] overflow-hidden rounded-[2rem] scroll-reveal bg-stone-100 shadow-md hover:shadow-2xl transition-shadow duration-500 ${idx >= 6 ? 'hidden sm:block' : 'block'}`}
              style={{ transitionDelay: `${(idx % 4) * 150}ms` }}
            >
              <img 
                src={img} 
                alt={`Spiral vibe detail ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[3px]">
                 <div className="w-16 h-16 border-2 border-white/80 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center scroll-reveal">
           <a 
             href="https://www.instagram.com/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-block text-sm font-bold uppercase tracking-[0.4em] text-stone-950 hover:text-amber-900 transition-colors border-b-2 border-stone-300 pb-3 font-serif"
           >
             Join the vibe @SpiralInnsbruck
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
