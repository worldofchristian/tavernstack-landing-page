import React, { useState } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleUp, FaPepperHot, FaSearch, FaSeedling } from 'react-icons/fa';
import { LuWheatOff } from 'react-icons/lu';

const MenuItem = ({ name, description, price, image, spicy, gf, vegan, indicator }) => (
  <div className="flex flex-row items-center justify-between gap-5 w-[300px] lg:w-[400px] py-4 border-base-200">
    <div className="relative w-full lg:w-40">
      {image &&
        <img src={image} alt={name} className="h-32 w-32 shadow-lg rounded-2xl object-cover" />
      }
      {indicator && (
        <span className="badge badge-primary absolute top-[-10px] right-[-5px]">
          {indicator}
        </span>
      )}
    </div>
    
    <div className="flex flex-col text-right w-72">
      <div className='flex flex-row text-center items-center gap-3'>
        <p className="text-lg lg:text-xl font-semibold text-right">{name}</p>
      </div>
      <div className='flex flex-row items-center gap-2 my-1'>
        {spicy && <FaPepperHot className="text-md text-red-500" />}
        {gf && <LuWheatOff className="text-md text-yellow-500" />}
        {vegan && <FaSeedling className="text-md text-green-500" />}
      </div>
      <p className="text-base lg:text-base overflow-wrap text-left break-word mt-1">{description}</p>
      <p className="text-xl lg:text-2xl mt-2 text-left font-semibold">{price}</p>
    </div>
  </div>
);

const DemoMenu = ({ of, wing, margarit, fry, cosmo, brus, chescak, churro, donut, emartini, wsour, martin }) => {
  const [activeCategory, setActiveCategory] = useState('drinks');
  const [activeSubcategory, setActiveSubcategory] = useState('modern');
  
  const barMenu = [
    { name: 'Old Fashioned', description: 'Bourbon, sugar, angostura bitters', price: 12, category: 'drinks', subcategory: 'classic', image: of },
    { name: 'Cosmo', description: 'Vodka, triple sec, lime, cranberry juice', price: 9, category: 'drinks', subcategory: 'modern', image: cosmo },
    { name: 'Margarita', description: 'Blanco tequila, triple sec, lime, sugar, salt', price: 10, category: 'drinks', subcategory: 'modern', image: margarit },
    { name: 'Espresso Martini', description: 'Vodka, espresso, sugar, kahlua', price: 15, category: 'drinks', subcategory: 'modern', image: emartini, indicator: 'popular' },
    { name: 'Whiskey Sour', description: 'Whiskey, lemon, sugar, egg white', price: 10, category: 'drinks', subcategory: 'classic', image: wsour },
    { name: 'Martini', description: 'Gin, dry vermouth, olive', price: 10, category: 'drinks', subcategory: 'classic', image: martin },
    { name: 'Fries', description: 'Hand-cut fries, sea salt, ketchup', price: 5, category: 'food', subcategory: 'snacks', image: fry, gf: true },
    { name: 'Wings', description: 'BBQ, spicy, buffalo, or honey garlic', price: 9, category: 'food', subcategory: 'snacks', image: wing, spicy: true },
    { name: 'Bruschetta', description: 'Toasted bread, olive oil, tomatoes, basil, feta', price: 7, category: 'food', subcategory: 'snacks', vegan: true, image: brus },
    { name: 'Cheesecake', description: 'Cheese, bread, butter', price: 7, category: 'food', subcategory: 'dessert', image: chescak },
    { name: 'Churros', description: 'Fried dough, cinnamon, sugar', price: 5, category: 'food', subcategory: 'dessert', image: churro, indicator: 'new' },
    { name: 'Mini Donuts', description: 'Fried dough, sugar, glaze', price: 5, category: 'food', subcategory: 'dessert', image: donut },
  ];
  
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  // Get the list of categories
  const categories = [...new Set(barMenu.map(item => item.category))];

  // Get subcategories for food items
  const subcategories = [...new Set(barMenu
    .filter(item => item.category === activeCategory)
    .map(item => item.subcategory))];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    // Get subcategories for the new category
    const newSubcategories = [...new Set(barMenu
      .filter(item => item.category === category)
      .map(item => item.subcategory))];
    
    // Set the active subcategory to the first one in the list
    if (newSubcategories.length > 1) {
      setActiveSubcategory(newSubcategories[1]);
    } else if (newSubcategories.length > 0) {
      setActiveSubcategory(newSubcategories[0]);
    }
  };

  const handleSearch = () => {
    setIsSearching(!isSearching);
    if (isSearching) {
      setSearchQuery('');
      setShowSearchResults(false);
    } else {
      setShowSearchResults(true); 
    }
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(true);
  };
  
  // get search results
  const filteredMenu = barMenu.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });  

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="mockup-browser border-slate-600 bg-base-300 w-[370px] lg:w-[500px] rounded-3xl">
        <div className="mockup-browser-toolbar"></div>
        
        <div className='flex items-center justify-center'>
          <div className='flex flex-col justify-center gap-2 mt-5 w-full items-center w-72 overflow-hidden'>
            <div className='custom-search-wrapper'>
              <input 
                type="text" 
                className="custom-search input text-lg input-bordered h-10 rounded-2xl w-[265px] lg:w-[400px] mt-2" 
                placeholder="Search" 
                value={searchQuery}
                onChange={handleSearchChange}
              />

              <FaSearch className='custom-arrow cursor-pointer mr-2 mt-1' onClick={handleSearch} />
            </div>
          </div>
        </div>
        
        <div className='flex items-center justify-center gap-2 mt-4'>
          {categories.map((category) => (
            <div 
            key={category} 
            value={category} 
            className={
              `rounded-2xl py-1 bg-base-300 w-32 h-9 text-center border-[3px] cursor-pointer
              ${activeCategory === category ? 'border-primary' : 'border-base-100'}`
            }
            onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>

        <div className="divider"></div>
        
        {(activeCategory === 'food' || activeCategory === 'drinks') && (
          <div className='flex items-center justify-center gap-2 mt-2'>
            {subcategories.map((subcategory) => (
              <div
                key={subcategory}
                className={`rounded-2xl py-1 bg-base-300 w-32 h-9 text-center border-[3px] cursor-pointer
                ${activeSubcategory === subcategory ? 'border-cyan-500' : 'border-base-100'}`}
                onClick={() => setActiveSubcategory(subcategory)}
              >
                {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
              </div>
            ))}
          </div>
        )}

        <div className='flex items-center justify-center mt-2'>
          <div 
          className={`rounded-2xl bg-base-200 px-4 py-1 shadow-md ${!isLegendOpen ? 'w-32' : 'w-[180px]'} cursor-pointer`}
          onClick={() => setIsLegendOpen(!isLegendOpen)} 
          >
            <div className='flex flex-row gap-5 items-center mx-auto justify-between'>
              <div className='flex flex-col gap-1'>
                {isLegendOpen ? (
                  <>
                    <div className='flex flex-row gap-2'>
                      <FaPepperHot className='text-lg mt-1 text-red-500' />
                      <p className='font-semibold'>Spicy</p>
                    </div>

                    <div className='flex flex-row gap-2'>
                      <FaSeedling className='text-lg mt-1 text-green-500' />
                      <p className='font-semibold'>Vegan</p>
                    </div>

                    <div className='flex flex-row gap-2'>
                      <LuWheatOff className='text-lg mt-1 text-yellow-500' />
                      <p className='font-semibold'>Gluten-free</p>
                    </div>
                  </> 
                  ) : (
                  <p className='font-semibold mb-1'>Legend</p>
                )}
              </div>
              
              {isLegendOpen ? (
                <FaAngleDoubleUp className='text-lg' /> ) : (
                <FaAngleDoubleRight className='text-lg' />
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            {showSearchResults && searchQuery ? (
              <div className="flex flex-col px-8 py-8 w-full">
                <div className="space-y-4">
                  {filteredMenu.map((item, index) => (
                    <MenuItem
                      key={index}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      spicy={item.spicy}
                      gf={item.gf}
                      vegan={item.vegan}
                      indicator={item.indicator}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="container">
                <div className="flex flex-col px-8 py-8 w-full">
                  <div className="space-y-4">
                    {barMenu
                      .filter(item => {
                        if (showSearchResults && searchQuery) {
                          return item.name.toLowerCase().includes(searchQuery.toLowerCase());
                        }
                        return item.category === activeCategory && 
                               item.subcategory === activeSubcategory;
                      })
                      .map((item, index) => (
                        <MenuItem
                          key={index}
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          image={item.image}
                          spicy={item.spicy}
                          gf={item.gf}
                          vegan={item.vegan}
                          indicator={item.indicator}
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
            )}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoMenu;