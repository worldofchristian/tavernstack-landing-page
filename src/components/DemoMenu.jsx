import { FaAngleDown, FaPlus } from 'react-icons/fa';
import tastyburger from '../assets/tastyburger.jpg';

const DemoMenu = () => {
    return (
    <>
    <div className="mockup-browser border-slate-600 bg-base-300 h-[530px] max-w-[350px] lg:max-w-md rounded-3xl">
        <div className="mockup-browser-toolbar"></div>

        <div className='flex items-center justify-center p-8'>
            <div className="container">
                <div className="flex items-center justify-center mb-6">
                    <div className='flex flex-col max-w-[370px]'>
                        <button className='flex items-center justify-between w-full bg-blue-500 px-4 py-4 mb-5 rounded-lg' >
                            <span 
                            className="text-md text-white font-medium"
                            >Drinks
                            </span>
                            
                            <FaAngleDown className='w-6 h-6 text-white' />
                        </button>

                        <div className='flex flex-row mb-5 gap-3 items-center justify-center'>
                            <FaPlus />
                            
                            <p className='text-md text-center'
                            >Add fries & can of pop - $4.95
                            </p>
                        </div>

                        <div className='flex items-center justify-center'>
                            <img
                            src={tastyburger}
                            className='max-w-[230px] lg:max-w-[250px] rounded-3xl'
                            />
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col mt-4'>
                                <p className='text-lg font-medium text-center'
                                >Classic Burger
                                </p>

                                <div className='flex flex-row justify-between mt-1 gap-5 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-xl text-center'
                                        >$5.95
                                        </p>

                                        <p className='text-md text-center'
                                        >3oz
                                        </p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-xl text-center'
                                        >$7.25
                                        </p>

                                        <p className='text-md text-center'
                                        >3oz
                                        </p>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-xl text-center'
                                        >$8.50
                                        </p>

                                        <p className='text-md text-center'
                                        >3oz
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default DemoMenu