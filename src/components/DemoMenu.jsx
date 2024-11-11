import React, { useState } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleUp, FaPepperHot, FaSearch, FaSeedling } from 'react-icons/fa';
import { LuWheatOff } from 'react-icons/lu';

const MenuItem = ({ name, description, price, image, spicy, gf, vegan }) => (
  <div className="flex flex-row items-center justify-between gap-5 w-[300px] lg:w-[400px] py-4 border-base-200">
    {image &&
      <img src={image} alt={name} className="h-32 w-32 shadow-lg rounded-2xl object-cover" />
    }
    
    <div className="flex flex-col text-right w-72">
      <div className='flex flex-row text-center items-center gap-3'>
        <p className="text-lg lg:text-xl font-semibold text-right">{name}</p>
      </div>
      <div className='flex flex-row items-center gap-2 my-1'>
        {spicy && <FaPepperHot className="text-md text-red-500" />}
        {gf && <LuWheatOff className="text-md text-yellow-500" />}
        {vegan && <FaSeedling className="text-md text-green-500" />}
      </div>
      <p className="text-md lg:text-base overflow-wrap text-left break-word mt-1">{description}</p>
      <p className="text-xl lg:text-2xl mt-2 text-left font-semibold">{price}</p>
    </div>
  </div>
);

const DemoMenu = ({ of, wing, margarit, fry, cosmo, brus }) => {
  const [activeCategory, setActiveCategory] = useState('cocktails');
  const barMenu = [
    { name: 'Old Fashioned', description: 'Bourbon, sugar, angostura bitters', price: 12, category: 'cocktails', image: of },
    { name: 'Cosmo', description: 'Vodka, triple sec, lime, cranberry juice', price: 9, category: 'cocktails', image: cosmo, },
    { name: 'Margarita', description: 'Blanco tequila, triple sec, lime, sugar, salt', price: 10, category: 'cocktails', image: margarit },
    { name: 'Fries', description: 'Hand-cut fries, sea salt, ketchup', price: 5, category: 'snacks', image: fry, gf: true },
    { name: 'Wings', description: 'BBQ, spicy, buffalo, or honey garlic', price: 9, category: 'snacks', image: wing, spicy: true },
    { name: 'Bruschetta', description: 'Toasted bread, olive oil, tomatoes, basil, feta', price: 7, category: 'snacks', vegan: true, image: brus },
  ];
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isLegendOpen, setIsLegendOpen] = useState(false);

  // Get the list of categories
  const categories = [...new Set(barMenu.map(item => item.category))];
0
  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
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
      <div className="mockup-browser border-slate-600 bg-base-300 w-[370px] lg:w-[600px] rounded-3xl">
        <div className="mockup-browser-toolbar"></div>
        
        <div className='flex items-center justify-center'>
          <div className='flex flex-col justify-center gap-2 mt-5 w-full items-center w-72 overflow-hidden'>
            <div className='custom-search-wrapper'>
              <input 
                type="text" 
                className="custom-search input text-lg input-bordered h-10 rounded-2xl w-[265px] mt-2" 
                placeholder="Search" 
                value={searchQuery}
                onChange={handleSearchChange}
              />

              <FaSearch className='custom-arrow mr-2 mt-1' onClick={handleSearch} />
            </div>
          </div>
        </div>
        
        <div className='flex items-center justify-center gap-2 mt-4'>
          {categories.map((category) => (
            <div 
            key={category} 
            value={category} 
            className={
              `rounded-2xl py-1 bg-base-300 w-32 h-9 text-center border-2 cursor-pointer
              ${activeCategory == category ? 'border-primary' : 'border-base-100'}`
            }
            onChange={handleCategoryChange}
            onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>
        
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
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="container">
                <div className="flex flex-col px-8 py-8 w-full">
                  <div className="space-y-4">
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
                          gf={item.gf}
                          vegan={item.vegan}
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