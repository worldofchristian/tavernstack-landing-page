import { useEffect, useState } from 'react';
import { FaAngleRight, FaLeaf } from 'react-icons/fa';
import cupcake from '../assets/cupcake.jpg';

const DemoMenu = () => {
    const [activeCategory, setActiveCategory] = useState('Cupcakes');

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCategory(prevCategory => prevCategory === 'Cupcakes' ? 'Ice Cream' : 'Cupcakes');
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    const menuItems = [
        {
            category: 'Cupcakes',
            items: [
            { name: 'Chocolate', image: cupcake, description: '', price: '$6.99' },
            { name: 'Vanilla', description: '', price: '$5.99' },
            { name: 'Red Velvet', description: '', price: '$6.99' },
            ],
        },
        {
            category: 'Ice Cream',
            items: [
            { name: 'Rocky Road', description: '', price: '$5.99' },
            { name: 'Chocolate Fudge', vegan: true, description: '', price: '$4.99' },
            { name: 'Vanilla Bean', description: '', price: '$4.99' },
            { name: 'Strawberry Swirl', description: '', price: '$5.99' },
            ],
        },
    ];

    const toggleCategory = (category) => {
        setActiveCategory((prevCategory) => (prevCategory === category ? '' : category));
    };

    return (
    <>
    <div className='flex items-center justify-center'>
        <div className="container">
        {menuItems.map((category, index) => (
            <div 
            key={index} 
            className="mb-6">
                <button
                className={`flex items-center justify-between w-full bg-base-100 px-4 py-4 mb-5 rounded-md 
                ${activeCategory === category.category ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => toggleCategory(category.category)}
                >
                    <span 
                    className="text-md font-medium"
                    >{category.category}
                    </span>
                    
                    <FaAngleRight
                    className={`w-6 h-6 transition-transform duration-300 transform ${
                        activeCategory === category.category ? 
                        'rotate-90' : 'rotate-0'
                        }`}
                    />
                </button>

                {activeCategory === category.category && (
                <div 
                className="mt-2">
                    {category.category === 'Ice Cream' && (
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-row'>
                                <FaLeaf
                                className='text-xl text-green-400'
                                />
    
                                <p className='text-sm ml-2'
                                >Vegan</p>
                            </div>
                        </div>
                    )}

                    {category.items.map((item, index) => (
                    <>
                    <div className='max-w-[270px]'>
                        <div className='flex items-center justify-center'>
                            <img
                            src={item.image}
                            className='w-2/6 rounded-3xl'
                            />
                        </div>
                    </div>

                    <div 
                    key={index} 
                    className="flex my-2 items-center justify-between gap-14">
                        <div className='flex flex-row'>
                            <h3 
                            className="text-md"
                            >{item.name}</h3>

                            <p 
                            className="text-gray-600"
                            >{item.description}</p>

                            {item.vegan && 
                            <FaLeaf className='text-2xl text-green-400 ml-4' />}
                        </div>

                        <p 
                        className="text-lg font-medium"
                        >{item.price}</p>
                    </div>
                    </>
                    ))}

                </div>
                )}

            </div>

        ))}
        </div>
    </div>
    </>
  )
}

export default DemoMenu