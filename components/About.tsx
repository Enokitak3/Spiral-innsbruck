
import React from 'react';
import { Leaf, Users, Zap, Coffee, Utensils } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 mb-8 leading-[1.1] tracking-tighter uppercase italic font-playfair">
              Truly, more than <span className="text-amber-800">coffee.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              At Spiral, our motto is our mission. While we take our specialty coffee seriously—sourcing the finest beans from chocolatey trios to fruity Ethiopian roasts—we’ve built a sanctuary for the curious palate. 
              <br /><br />
              Whether you're here for our <strong>famous pink-foam Matcha</strong>, a slow-fermented <strong>Sourdough Brunch</strong>, or our signature <strong>Sicilian Pistachio Açai Bowls</strong>, every detail is crafted to elevate your Innsbruck morning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700">
                  <Zap size={20} />
                </div>
                <h3 className="font-black text-stone-900 uppercase text-[10px] tracking-widest">The Matcha Ritual</h3>
                <p className="text-stone-500 text-sm leading-snug">From ceremonial grade classics to raspberry-infused lemonade blends. A vibrant obsession.</p>
              </div>
              <div className="space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-700">
                  <Utensils size={20} />
                </div>
                <h3 className="font-black text-stone-900 uppercase text-[10px] tracking-widest">Artisan Brunch</h3>
                <p className="text-stone-500 text-sm leading-snug">Sourdough spreads, yeast snails, and açai bowls that define Innsbruck's breakfast culture.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full text-[10px] font-black uppercase tracking-widest text-stone-500">
                <Leaf size={12} className="text-green-600" /> Vegan Options
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full text-[10px] font-black uppercase tracking-widest text-stone-500">
                <Users size={12} className="text-blue-600" /> Walk-ins Only
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full text-[10px] font-black uppercase tracking-widest text-stone-500">
                <Coffee size={12} className="text-amber-800" /> Specialty Roast
              </div>
            </div>
          </div>

          <div className="relative scroll-reveal pb-12 md:pb-0">
             <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1200" 
                 alt="Spiral's Aesthetic Offerings"
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
               />
             </div>
             {/* Floating Badge - Now visible on all screens with adjusted positioning for mobile */}
             <div className="absolute -bottom-4 left-4 right-4 md:right-auto md:-bottom-8 md:-left-8 bg-stone-900 text-white p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl md:max-w-xs z-10">
                <div className="mb-3 md:mb-4 flex gap-1">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-xs md:text-sm">★</span>)}
                </div>
                <p className="text-lg md:text-2xl font-bold mb-1 italic font-playfair leading-tight">&ldquo;Not just a cafe, it's a full sensory experience.&rdquo;</p>
                <p className="text-stone-400 uppercase tracking-widest text-[8px] md:text-[9px] font-black mt-3 md:mt-4">Andreas-Hofer-Straße 7</p>
             </div>
             
             {/* Subtle Spiral Design Element */}
             <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
                  <path 
                    d="M 50 50 A 5 5 0 0 0 40 50 A 10 10 0 0 0 60 50 A 15 15 0 0 0 30 50 A 20 20 0 0 0 70 50 A 25 25 0 0 0 20 50 A 30 30 0 0 0 80 50" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
