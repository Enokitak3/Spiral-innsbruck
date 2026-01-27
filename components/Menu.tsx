
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
  <div className="mb-20 scroll-reveal">
    <h3 className="text-3xl font-bold text-stone-900 mb-10 flex items-center gap-6">
      <span className="w-12 h-px bg-stone-300"></span>
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
      {children}
    </div>
  </div>
);

const MenuItem: React.FC<{ name: string, price: string, desc?: string }> = ({ name, price, desc }) => (
  <div className="group border-b border-stone-200 pb-4">
    <div className="flex justify-between items-baseline mb-1">
      <h4 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors uppercase tracking-tight">{name}</h4>
      <span className="text-stone-500 font-semibold text-sm">€{price}</span>
    </div>
    {desc && <p className="text-xs text-stone-400 italic font-medium leading-relaxed">{desc}</p>}
  </div>
);

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 scroll-reveal">
          <h2 className="text-6xl font-black text-stone-900 mb-4 tracking-tighter uppercase">Menu</h2>
          <p className="text-stone-500 uppercase tracking-[0.3em] text-sm">Crafted with care in Innsbruck</p>
          <div className="w-24 h-1 bg-stone-900 mx-auto mt-8"></div>
        </div>

        {/* Coffee Section */}
        <div className="mb-20 scroll-reveal p-10 bg-white shadow-sm rounded-2xl border border-stone-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-stone-400">The Beans</h3>
              <ul className="space-y-4">
                {MENU_DATA.coffee.beans.map((bean, i) => (
                  <li key={i} className="text-sm font-bold text-stone-800 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                    {bean}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-stone-400 uppercase tracking-widest font-bold">Oat or Soy Milk included</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-black mb-10 uppercase tracking-widest text-stone-900 border-b-2 border-stone-900 inline-block pb-1">Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {MENU_DATA.coffee.items.map((item, i) => <MenuItem key={i} {...item} />)}
              </div>
              <div className="mt-12 pt-8 border-t border-dashed border-stone-200">
                <h4 className="text-sm font-black text-stone-400 uppercase tracking-[0.2em] mb-6">Filter Experience</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

        {/* Cocoa & Tea */}
        <MenuSection title="COCOA & TEA">
          {MENU_DATA.cocoaAndTea.map((item, i) => <MenuItem key={i} {...item} />)}
        </MenuSection>

        {/* Food & Bowls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="scroll-reveal p-8 bg-stone-900 text-white rounded-2xl">
            <h3 className="text-3xl font-black mb-8 italic font-playfair">Spiral Brunch</h3>
            <div className="space-y-8">
              {MENU_DATA.brunch.map((item, i) => (
                <div key={i} className="group border-b border-stone-700 pb-6 last:border-0">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-bold text-amber-500">{item.name}</h4>
                    <span className="font-bold">€{item.price}</span>
                  </div>
                  <p className="text-sm text-stone-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-stone-500 font-bold uppercase tracking-widest">A (Gluten) &bull; F (Soya) &bull; H (Nuts)</p>
          </div>

          <div className="scroll-reveal p-8 bg-amber-50 rounded-2xl border border-amber-100">
            <h3 className="text-3xl font-black mb-2 text-stone-900 italic font-playfair">Açai Bowls</h3>
            <p className="text-xs text-stone-500 mb-8 uppercase tracking-widest font-bold">Guarana, granola, bean paste, berries</p>
            
            <div className="space-y-6 mb-10">
              {MENU_DATA.bowls.sizes.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-white px-5 py-3 rounded-full shadow-sm">
                  <span className="font-bold text-stone-800 uppercase tracking-tighter">{item.name}</span>
                  <span className="text-amber-700 font-black">€{item.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black text-amber-800 uppercase tracking-widest mb-2">The Cream:</h4>
              {MENU_DATA.bowls.creams.map((cream, i) => (
                <div key={i}>
                  <p className="font-bold text-stone-900 text-sm">{cream.name}</p>
                  <p className="text-xs text-stone-500 italic">{cream.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-amber-900/40 font-bold uppercase">Extra Topping: +€1.00</p>
          </div>
        </div>

        {/* Cold Drinks */}
        <MenuSection title="COLD DRINKS & SPIRITS">
          {MENU_DATA.coldDrinks.map((item, i) => <MenuItem key={i} {...item} />)}
        </MenuSection>

        <div className="mt-24 text-center scroll-reveal border-t border-stone-200 pt-12">
          <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Important Information</p>
          <p className="text-stone-500 text-xs italic max-w-2xl mx-auto">
            "May contain traces of milk due to production. All prices include VAT. 
            Enjoy our "Take it Easy" caffeine-free options. 100% Vegan options available."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
