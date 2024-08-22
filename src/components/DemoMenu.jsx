import React, { useState } from 'react';
import { FaPepperHot, FaSearch } from 'react-icons/fa';

const MenuItem = ({ name, description, price, image, spicy }) => (
  <div className="flex flex-row items-center justify-between gap-5 w-72 py-4 border-base-200">
    <div className="flex flex-col w-72">
      <div className='flex flex-row items-center gap-2'>
        <p className="text-lg font-semibold">{name}</p>
        {spicy && <FaPepperHot className="text-xl text-red-500" />}
      </div>
      <p className="text-md overflow-wrap break-word mt-1">{description}</p>
      {image && <p className="text-xl mt-2 font-semibold">{price}</p>}
    </div>
    {image ?
      <img src={image} alt={name} className="h-32 w-32 rounded-2xl object-cover" /> :
      <p className="text-xl mt-2 font-semibold">{price}</p>
    }
  </div>
);

const DemoMenu = ({ of, wing }) => {
  const [activeCategory, setActiveCategory] = useState('cocktails');
  const barMenu = [
    { name: 'Old Fashioned', description: 'Bourbon, sugar, angostura bitters', price: 12, category: 'cocktails', image: of },
    { name: 'Moscow Mule', description: 'Vodka, ginger beer, lime', price: 9, category: 'cocktails' },
    { name: 'Margarita', description: 'Blanco tequila, triple sec, lime, sugar, salt', price: 10, category: 'cocktails' },
    { name: 'Original 16', description: 'IPA, 5% ABV', price: 8, category: 'draft' },
    { name: 'Stella', description: 'Pale lager, 4.6% ABV', price: 9, category: 'draft' },
    { name: 'Guiness', description: 'Stout, 4.2% ABV', price: 9, category: 'draft' },
    { name: 'Fries', description: 'Hand-cut fries, sea salt, ketchup', price: 5, category: 'snacks' },
    { name: 'Wings', description: 'Buffalo, BBQ, Spicy, or honey garlic', price: 9, category: 'snacks', image: wing, spicy: true },
    { name: 'Steak bites', description: 'Sirloin, garlic butter, parsley', price: 14, category: 'snacks' },
  ];

  // Get the list of categories
  const categories = [...new Set(barMenu.map(item => item.category))];
0
  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  return (
    <div className='flex flex-col mt-5 items-center justify-center'>
      <div className="mockup-browser border-slate-600 bg-base-300 w-[370px] lg:w-[450px] rounded-3xl">
        <div className="mockup-browser-toolbar"></div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-row justify-between gap-4 mt-10 items-center w-72 overflow-hidden'>
            <FaSearch className='text-2xl' />
            <select 
              className="select select-bordered w-full max-w-xs"
              value={activeCategory}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex flex-col p-8 items-center justify-center'>
          <div className="flex items-center justify-center">
            <div className="container">
              <div className="flex flex-col w-full">
                <div className="mt-5 space-y-4">
                  {barMenu
                    .filter(item => activeCategory === 'all' || item.category === activeCategory)
                    .map((item, index) => (
                      <MenuItem
                        key={index}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        spicy={item.spicy}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoMenu;