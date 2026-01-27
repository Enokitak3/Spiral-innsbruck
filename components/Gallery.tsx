
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 scroll-reveal">
          <div>
            <h2 className="text-6xl font-black text-stone-900 mb-4 italic font-playfair tracking-tighter uppercase">Visual Story</h2>
            <p className="text-stone-400 tracking-[0.4em] uppercase text-xs font-black">Capturing the spiral vibe</p>
          </div>
          <div className="hidden md:block">
            <span className="text-stone-100 text-9xl font-playfair font-black select-none">SPIRAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl scroll-reveal bg-stone-100 shadow-sm hover:shadow-2xl transition-shadow duration-500"
              style={{ transitionDelay: `${(idx % 4) * 150}ms` }}
            >
              <img 
                src={img} 
                alt={`Gallery detail ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                 <div className="w-14 h-14 border border-white/50 rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center scroll-reveal">
           <a 
             href="https://www.instagram.com/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 hover:text-stone-900 transition-colors border-b border-stone-200 pb-2"
           >
             Follow the journey @SpiralInnsbruck
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
