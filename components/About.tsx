
import React from 'react';
import { Leaf, Users, Zap, Coffee, Utensils } from 'lucide-react';

const About: React.FC = () => {
  const reviewsUrl = "https://www.google.com/search?sca_esv=9dc6e452c0e4b509&sxsrf=ANbL-n6-U4Ndxg9zAw-8hiHDsWIgwpalLA:1769628198161&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTrMU8g1IlYp6gXo3tpLQSvmAPdSDRjyYRVO6GDIH_aItzvxhvt7G0Z71a6BydTLek3_MK6YaWBV_lAfagkUiSuhyBxlQKiyxk5e9GSQmOKUPFz73w%3D%3D&q=Spiral+-+More+than+coffee+%F0%9F%8D%83+Reviews&sa=X&ved=2ahUKEwij-orh-q6SAxWjRWcHHbdPL1oQ0bkNegQIJxAH&biw=1432&bih=768&dpr=2&aic=0";

  return (
    <section id="about" className="py-24 px-6 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="scroll-reveal">
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-stone-950 mb-10 leading-[1.1] tracking-tight uppercase italic">
              Truly, more than <span className="text-amber-900">coffee.</span>
            </h2>
            <p className="text-stone-950 text-lg md:text-xl leading-relaxed mb-12 font-medium">
              At Spiral, our motto is our mission. While we take our specialty coffee seriously—sourcing the finest beans from chocolatey trios to fruity Ethiopian roasts—we’ve built a sanctuary for the curious palate. 
              <br /><br />
              Whether you're here for our <strong>famous pink-foam Matcha</strong>, a slow-fermented <strong>Sourdough Brunch</strong>, or our signature <strong>Sicilian Pistachio Açai Bowls</strong>, every detail is crafted to elevate your Innsbruck morning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-stone-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-950">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-stone-950 uppercase text-[11px] tracking-widest">The Matcha Ritual</h3>
                <p className="text-stone-900 text-sm leading-relaxed font-medium">From ceremonial grade classics to raspberry-infused lemonade blends. A vibrant obsession.</p>
              </div>
              <div className="space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-stone-200">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-950">
                  <Utensils size={24} />
                </div>
                <h3 className="font-bold text-stone-950 uppercase text-[11px] tracking-widest">Artisan Brunch</h3>
                <p className="text-stone-900 text-sm leading-relaxed font-medium">Sourdough spreads, yeast snails, and açai bowls that define Innsbruck's breakfast culture.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[12px] font-bold uppercase tracking-widest text-stone-950 border border-stone-300 shadow-sm">
                <Leaf size={14} className="text-green-800" /> Vegan Options
              </span>
              <span className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[12px] font-bold uppercase tracking-widest text-stone-950 border border-stone-300 shadow-sm">
                <Users size={14} className="text-blue-900" /> Walk-ins Only
              </span>
              <span className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[12px] font-bold uppercase tracking-widest text-stone-950 border border-stone-300 shadow-sm">
                <Coffee size={14} className="text-amber-950" /> Specialty Roast
              </span>
            </div>
          </div>

          <div className="relative scroll-reveal pb-16 md:pb-0">
             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
               <img 
                 src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1200" 
                 alt="Ceremonial Matcha preparation at Spiral Cafe"
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
               />
             </div>
             
             <a 
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 left-6 right-6 md:right-auto md:-bottom-12 md:-left-12 bg-stone-950 text-white p-10 md:p-12 rounded-[2rem] border-2 border-white/20 shadow-2xl md:max-w-md z-10 block transition-transform hover:scale-[1.02] hover:bg-black group"
             >
                <div className="mb-6 flex gap-2" aria-hidden="true">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-lg">★</span>)}
                </div>
                <blockquote className="text-2xl md:text-3xl font-display font-extrabold mb-4 italic leading-tight text-white">
                  &ldquo;Not just a cafe, it's a full sensory experience.&rdquo;
                </blockquote>
                <div className="flex justify-between items-end mt-6">
                  <p className="text-amber-400 uppercase tracking-widest text-xs font-bold">Andreas-Hofer-Straße 7</p>
                </div>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
