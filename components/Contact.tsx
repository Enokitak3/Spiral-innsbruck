
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <div className="scroll-reveal order-2 lg:order-1">
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-12 tracking-tight italic uppercase text-white">Visit Us</h2>
            
            <div className="space-y-16">
              <div className="flex items-start gap-8">
                <div className="p-5 bg-stone-900 rounded-3xl shrink-0 border border-stone-800 shadow-xl">
                  <MapPin className="text-amber-400" size={32} />
                </div>
                <div>
                  <h3 className="text-[12px] font-bold mb-4 uppercase tracking-[0.4em] text-stone-300">Location</h3>
                  <p className="text-2xl md:text-3xl leading-snug font-bold text-white">
                    Andreas-Hofer-Straße 7<br />
                    6020 Innsbruck, Austria
                  </p>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=Andreas-Hofer-Straße+7+6020+Innsbruck+Austria" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-block mt-8 text-amber-400 hover:text-white font-bold border-b-2 border-amber-400/50 text-[13px] transition-colors uppercase tracking-widest">
                    Google Maps Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="p-5 bg-stone-900 rounded-3xl shrink-0 border border-stone-800 shadow-xl">
                  <Clock className="text-amber-400" size={32} />
                </div>
                <div className="w-full">
                  <h3 className="text-[12px] font-bold mb-8 uppercase tracking-[0.4em] text-stone-300">Opening Hours</h3>
                  <div className="grid grid-cols-1 gap-x-12 gap-y-5 text-white text-base">
                    {[
                      { day: "Monday", time: "12:00 – 18:00" },
                      { day: "Tuesday", time: "09:30 – 17:00" },
                      { day: "Wednesday", time: "09:30 – 17:00" },
                      { day: "Thursday", time: "09:30 – 17:00" },
                      { day: "Friday", time: "09:30 – 17:00" },
                      { day: "Saturday", time: "09:30 – 17:00" },
                      { day: "Sunday", time: "09:30 – 17:00" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between border-b border-stone-800 pb-4">
                        <span className="font-bold text-stone-300 uppercase tracking-widest text-[11px]">{item.day}:</span>
                        <span className="font-bold tracking-tight text-white">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal h-[450px] md:h-[700px] rounded-[3rem] overflow-hidden grayscale contrast-[1.1] border border-stone-800 shadow-2xl order-1 lg:order-2">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.382276532431!2d11.389710376722247!3d47.25875291196328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d69493f060787%3A0x673a553086938923!2sAndreas-Hofer-Stra%C3%9Fe%207%2C%206020%20Innsbruck%2C%20Austria!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="Interactive Map to Spiral Cafe"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
