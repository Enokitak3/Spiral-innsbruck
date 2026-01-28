
import React from 'react';

const MENU_DATA = {
  coffee: {
    beans: ["Organic Trio (Chocolate)", "Ät Home - Ethiopia (Nutty-Caramel)", "Roasters Selection (Fruity-Light)", "Take it Easy (Caffeine-Free)"],
    items: [
      { name: "Espresso / Double", price: "2.90 / 3.90" },
      { name: "Americano / Long Black", price: "3.30" },
      { name: "Espresso Macchiato", price: "3.30" },
      { name: "Cappuccino", price: "3.80" },
      { name: "Latte / Iced Latte", price: "4.50" },
      { name: "Flat White", price: "4.80" },
      { name: "Lupin Cappuccino", price: "4.50" },
      { name: "Dirty Chai", price: "5.90" },
    ]
  },
  filter: [
    { name: "Origami Ceramic (300ml)", price: "6.80" },
    { name: "V40 Orea Flat Bottom", price: "7.50", desc: "Sibarist Filter made in Barcelona" }
  ],
  matchaAndFancy: [
    { name: "Matcha Cino", price: "4.80", desc: "*Iced available" },
    { name: "Spiral Matcha Lemonade", price: "4.80" },
    { name: "Hibiscus Latte", price: "4.80", desc: "*Iced available" },
    { name: "Chai Latte", price: "4.80", desc: "*Iced available" },
    { name: "Iced Matcha - Homemade Sirup", price: "5.40" },
    { name: "Iced Matcha - Raspberry", price: "5.90" },
    { name: "Iced Matcha - Pink Foam", price: "6.30" },
  ],
  cocoaAndTea: [
    { name: "Sonnentor Cocoa", price: "4.80" },
    { name: "Velvaere Vital Cocoa", price: "4.80", desc: "From Innsbruck" },
    { name: "Glass of Herbal Tea", price: "3.80" },
    { name: "Pure Chinese Green Tea", price: "5.40" },
    { name: "Lucky Tea - Herbs", price: "5.40" },
    { name: "Fruit Tea", price: "5.40" },
  ],
  coldDrinks: [
    { name: "Spiral Homemade Limo", price: "4.50" },
    { name: "Foxes", price: "4.20" },
    { name: "Fritz Organic Cola", price: "4.50" },
    { name: "Fritz Rhubarb / Apple Spritzer", price: "4.50" },
    { name: "Pona Orange / Red Grape Spritzer", price: "4.50" },
    { name: "Soda Lemon", price: "3.60" },
    { name: "Glass of House Prosecco", price: "4.20" },
    { name: "White Wine Spritzer", price: "4.90" },
    { name: "Aperol", price: "5.20" },
    { name: "Beer (0.33)", price: "3.90" },
  ],
  brunch: [
    { name: "Spiral Brunch (1 Person)", price: "18.00", desc: "Acai in martini glass, sourdough bread with homemade spreads, yeast snail" },
    { name: "Spiral Brunch (2 People)", price: "33.00", desc: "The full shareable experience" }
  ],
  bowls: {
    sizes: [
      { name: "Students (150g)", price: "10.00" },
      { name: "Cash Flow (200g)", price: "12.00" },
      { name: "Big Boys/Girls (300g)", price: "14.00" }
    ],
    creams: [
      { name: "Peanut My Butter", desc: "Homemade peanut butter, peanuts" },
      { name: "Kiss My Pistachio", desc: "Pistachio cream from Sicily, pistachios" }
    ]
  }
};

const MenuSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-24 scroll-reveal">
    <h3 className="text-4xl font-display font-extrabold text-stone-950 mb-12 flex items-center gap-8">
      <span className="w-16 h-2 bg-amber-800 rounded-full"></span>
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
      {children}
    </div>
  </div>
);

const MenuItem: React.FC<{ name: string, price: string, desc?: string, inverse?: boolean }> = ({ name, price, desc, inverse }) => (
  <div className={`group border-b pb-6 transition-colors ${inverse ? 'border-stone-800' : 'border-stone-200'}`}>
    <div className="flex justify-between items-baseline mb-2">
      <h4 className={`text-[19px] font-bold tracking-tight uppercase ${inverse ? 'text-amber-400' : 'text-stone-950 group-hover:text-amber-900'}`}>{name}</h4>
      <span className={`font-bold text-lg ${inverse ? 'text-white' : 'text-stone-950'}`}>€{price}</span>
    </div>
    {desc && <p className={`text-[15px] italic font-medium leading-relaxed ${inverse ? 'text-stone-200' : 'text-stone-900'}`}>{desc}</p>}
  </div>
);

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-[#fcfbf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-28 scroll-reveal">
          <h2 className="text-6xl md:text-8xl font-display font-extrabold text-stone-950 mb-6 tracking-tight uppercase italic">The Menu</h2>
          <p className="text-stone-950 uppercase tracking-[0.4em] text-[13px] font-bold">Crafted with precision in Innsbruck</p>
          <div className="w-24 h-2 bg-stone-950 mx-auto mt-10 rounded-full"></div>
        </div>

        {/* Coffee Section */}
        <div className="mb-28 scroll-reveal p-10 md:p-16 bg-white shadow-2xl rounded-[3rem] border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div>
              <h3 className="text-[12px] font-bold mb-10 uppercase tracking-[0.2em] text-stone-950 border-b-2 border-stone-100 pb-3">The Bean Selection</h3>
              <ul className="space-y-6">
                {MENU_DATA.coffee.beans.map((bean, i) => (
                  <li key={i} className="text-lg font-bold text-stone-950 flex items-center gap-4">
                    <span className="w-3 h-3 bg-amber-800 rounded-full shrink-0"></span>
                    {bean}
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-8 bg-stone-50 rounded-2xl border border-stone-200">
                <p className="text-[11px] text-stone-950 uppercase tracking-[0.2em] font-bold leading-relaxed">
                  Oat or Soy Milk included at no extra charge. Specialty roast excellence.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-[11px] font-bold mb-12 uppercase tracking-[0.3em] bg-stone-950 text-white px-8 py-3 rounded-full inline-block shadow-lg">Espresso & Milk</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {MENU_DATA.coffee.items.map((item, i) => <MenuItem key={i} {...item} />)}
              </div>
              <div className="mt-20 pt-12 border-t-2 border-dashed border-stone-200">
                <h4 className="text-[11px] font-bold text-stone-950 uppercase tracking-[0.3em] mb-10">Manual Filter Experience</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  {MENU_DATA.filter.map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Matcha & Fancy */}
        <MenuSection title="MATCHA & FANCY">
          {MENU_DATA.matchaAndFancy.map((item, i) => <MenuItem key={i} {...item} />)}
        </MenuSection>

        {/* Food & Bowls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
          <div className="scroll-reveal p-12 md:p-16 bg-stone-950 text-white rounded-[3rem] shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-display font-extrabold mb-12 italic text-amber-400">Spiral Brunch</h3>
              <div className="space-y-12 text-white">
                {MENU_DATA.brunch.map((item, i) => (
                  <MenuItem key={i} {...item} inverse />
                ))}
              </div>
            </div>
            <p className="mt-16 text-[11px] text-stone-200 font-bold uppercase tracking-[0.4em] border-t border-stone-800 pt-8">
              Allergens: A (Gluten) &bull; F (Soya) &bull; H (Nuts)
            </p>
          </div>

          <div className="scroll-reveal p-12 md:p-16 bg-amber-50 rounded-[3rem] border border-amber-300 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-display font-extrabold mb-4 text-stone-950 italic">Açai Bowls</h3>
              <p className="text-[12px] text-amber-950 mb-12 uppercase tracking-[0.2em] font-bold">Guarana, granola, bean paste, fresh berries</p>
              
              <div className="space-y-5 mb-12">
                {MENU_DATA.bowls.sizes.map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-white px-8 py-6 rounded-2xl border-2 border-amber-200 shadow-sm">
                    <span className="font-bold text-stone-950 uppercase tracking-tight text-lg">{item.name}</span>
                    <span className="text-amber-950 font-bold text-2xl">€{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <h4 className="text-[11px] font-bold text-amber-950 uppercase tracking-[0.3em]">Our Signature Creams</h4>
                <div className="grid grid-cols-1 gap-6">
                  {MENU_DATA.bowls.creams.map((cream, i) => (
                    <div key={i} className="bg-amber-100 p-6 rounded-2xl border border-amber-300">
                      <p className="font-bold text-stone-950 text-lg mb-2 uppercase tracking-tight">{cream.name}</p>
                      <p className="text-base text-stone-950 font-medium italic leading-relaxed">{cream.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-16 text-xs text-amber-950 font-bold uppercase tracking-widest text-center">Extra Toppings: +€1.00 each</p>
          </div>
        </div>

        {/* Cocoa & Tea */}
        <MenuSection title="COCOA & TEA">
          {MENU_DATA.cocoaAndTea.map((item, i) => <MenuItem key={i} {...item} />)}
        </MenuSection>

        {/* Cold Drinks */}
        <MenuSection title="COLD & SPIRITS">
          {MENU_DATA.coldDrinks.map((item, i) => <MenuItem key={i} {...item} />)}
        </MenuSection>

        <div className="mt-28 text-center scroll-reveal border-t-2 border-stone-300 pt-20">
          <p className="text-stone-950 text-xs font-bold uppercase tracking-[0.5em] mb-6">Service Notes</p>
          <p className="text-stone-950 text-lg font-medium italic max-w-3xl mx-auto leading-relaxed">
            "May contain traces of milk due to production. All prices include Austrian VAT. 
            Enjoy our caffeine-free selection. 100% Vegan options always available."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
