import { FaAngleDown, FaAngleRight, FaLeaf, FaPepperHot } from 'react-icons/fa';
import { useState } from 'react';

const DemoMenu = ({ margarit, of, wing, fry }) => {
    const [isCocktail, setIsCocktail] = useState(null);
    const [isSnack, setIsSnack] = useState(null);
        
    return (
    <>
    <div className="mockup-browser border-slate-600 bg-base-300 w-[350px] lg:w-[450px] rounded-3xl">
        <div className="mockup-browser-toolbar"></div>

        <div className='flex items-center justify-center p-8'>
            <div className="container">
                <div className="flex items-center justify-center mb-6">
                    <div className='flex flex-col w-full'>
                        <button 
                        className={`flex items-center justify-between w-full ${isCocktail ? 'bg-blue-500' : 'bg-base-100'} px-4 py-4 mb-5 rounded-lg`}
                        onClick={() =>  {
                            setIsCocktail(!isCocktail)
                            setIsSnack(false)
                        }}
                        >
                            <span 
                            className="text-xl text-white font-medium"
                            >Cocktails
                            </span>
                            
                            {isCocktail ?
                                <FaAngleDown className='w-6 h-6 text-white' /> :
                                <FaAngleRight className='w-6 h-6 text-white' />
                            }
                        </button>

                        {isCocktail && 
                        <>
                            <div className='flex flex-row w-full gap-5 mt-2 lg:mt-5'>
                                <div className='flex items-center justify-center'>
                                    <img
                                    src={margarit}
                                    className='w-full object-cover rounded-3xl'
                                    />
                                </div>
                                
                                <div className='flex flex-row gap-5 lg:gap-20 mt-4'>
                                    <div className='flex flex-col'>
                                        <p className='text-lg lg:text-xl font-semibold'
                                        >Margarita
                                        </p>

                                        <p className='text-md mt-1 w-[120px]'
                                        >Blanco tequila, triple sec, lime, sugar, salt
                                        </p>
                                    </div>

                                    <p className='text-lg lg:text-xl font-semibold'
                                    >$10
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row w-full gap-4 my-10'>
                                <div className='flex items-center justify-center'>
                                    <img
                                    src={of}
                                    className='w-full object-cover rounded-3xl'
                                    />
                                </div>
                                
                                <div className='flex flex-row gap-5 lg:gap-20 mt-4'>
                                    <div className='flex flex-col'>
                                        <p className='text-lg lg:text-xl font-semibold'
                                        >Old Fashioned
                                        </p>

                                        <p className='text-md w-[120px] mt-1'
                                        >Bourbon, sugar, angostura bitters
                                        </p>
                                    </div>

                                    <p className='text-lg lg:text-xl font-semibold'
                                    >$12
                                    </p>
                                </div>
                            </div>
                        </>
                        }

                        <button 
                        className={`flex items-center justify-between w-full ${isSnack ? 'bg-blue-500' : 'bg-base-100'} px-4 py-4 mb-5 rounded-lg`}
                        onClick={() => {
                            setIsSnack(!isSnack)
                            setIsCocktail(false)
                        }}
                        >
                            <span 
                            className="text-xl text-white font-medium"
                            >Snacks
                            </span>
                            
                            {isSnack ?
                                <FaAngleDown className='w-6 h-6 text-white' /> :
                                <FaAngleRight className='w-6 h-6 text-white' />
                            }
                        </button>

                        {isSnack &&
                        <>
                            <div className='flex flex-row w-full gap-4 mt-2 lg:mt-5'>
                                <div className='flex items-center justify-center'>
                                    <img
                                    src={fry}
                                    className='w-full object-cover rounded-3xl'
                                    />
                                </div>
                                
                                <div className='flex flex-row gap-5 lg:gap-20 mt-4'>
                                    <div className='flex flex-col'>
                                        <p className='text-lg lg:text-xl font-semibold'
                                        >Fries
                                        </p>

                                        <p className='text-md mt-1 w-[107px]'
                                        >Hand cut fries, sea salt, ketchup
                                        </p>
                                    </div>

                                    <p className='text-lg lg:text-xl font-semibold'
                                    >$8
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row w-full gap-4 my-10'>
                                <div className='flex items-center justify-center'>
                                    <img
                                    src={wing}
                                    className='w-full object-cover rounded-3xl'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <div className='flex flex-row gap-5 lg:gap-20 justify-between mt-4'>
                                        <div className='flex flex-row gap-2'>
                                            <p className='text-lg lg:text-xl font-semibold'
                                            >Wings
                                            </p>
  
                                            <FaPepperHot className='w-4 h-4 mt-1 text-red-500' />
                                            <FaLeaf className='w-4 h-4 mt-1 text-green-500' />
                                        </div>

                                        <p className='text-lg lg:text-xl font-semibold'
                                        >$17
                                        </p>
                                    </div>

                                    <p className='text-md mt-1 w-[120px]'
                                    >BBQ, lemon pepper, hot, or plant-based
                                    </p>
                                </div>
                            </div>
                        </>
                        }
                        
                        {!isSnack && !isCocktail &&
                            <h1 className='text-2xl font-bold text-center mt-5'
                            >Try it out!
                            </h1>
                        }
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default DemoMenu