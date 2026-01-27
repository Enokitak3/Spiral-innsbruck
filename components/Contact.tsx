
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="scroll-reveal order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">Visit Us</h2>
            
            <div className="space-y-10 md:space-y-12">
              <div className="flex items-start gap-5 md:gap-6">
                <div className="p-3 bg-stone-800 rounded-lg shrink-0">
                  <MapPin className="text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-2 uppercase tracking-widest text-stone-400">Location</h3>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Andreas-Hofer-Straße 7<br />
                    6020 Innsbruck, Austria
                  </p>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=Andreas-Hofer-Straße+7+6020+Innsbruck+Austria" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-block mt-4 text-amber-500 hover:text-amber-400 font-medium border-b border-amber-500/30 text-sm">
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 md:gap-6">
                <div className="p-3 bg-stone-800 rounded-lg shrink-0">
                  <Clock className="text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-stone-400">Opening Hours</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-stone-300 text-sm">
                    <div className="flex justify-between sm:block">
                      <span className="font-semibold sm:block">Monday:</span>
                      <span className="sm:block">12:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between sm:block">
                      <span className="font-semibold sm:block">Tuesday:</span>
                      <span className="sm:block">09:30 – 17:00</span>
                    </div>
                    <div className="flex justify-between sm:block">
                      <span className="font-semibold sm:block">Wednesday:</span>
                      <span className="sm:block">09:30 – 17:00</span>
                    </div>
                    <div className="flex justify-between sm:block">
                      <span className="font-semibold sm:block">Thursday:</span>
                      <span className="sm:block">09:30 – 17:00</span>
                    </div>
                    <div className="flex justify-between sm:block">
                      <span className="font-semibold sm:block">Friday:</span>
                      <span className="sm:block">09:30 – 17:00</span>
                    </div>
                    <div className="flex justify-between sm:block">
                      <span className="font-semibold sm:block">Saturday:</span>
                      <span className="sm:block">09:30 – 17:00</span>
                    </div>
                    <div className="flex justify-between sm:block">
                      <span className="font-semibold sm:block">Sunday:</span>
                      <span className="sm:block">09:30 – 17:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal h-[350px] md:h-[500px] rounded-2xl overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 order-1 lg:order-2">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.382276532431!2d11.389710376722247!3d47.25875291196328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d69493f060787%3A0x673a553086938923!2sAndreas-Hofer-Stra%C3%9Fe%207%2C%206020%20Innsbruck%2C%20Austria!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="Spiral Cafe Map"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
