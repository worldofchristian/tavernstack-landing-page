import { FaAngleRight, FaCheck, FaPalette } from 'react-icons/fa';
import DemoAbout from './DemoAbout';
import ackblue from '../assets/ackblue.png';
import DemoMenu from './DemoMenu';

const HeroAbout = () => {
    return (
    <>
    <div className='flex items-center justify-center'>
        <div className='w-full'>
            <div className='flex items-center justify-center'>
                <section className='w-full'>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col mt-10 p-2 max-w-[380px] lg:max-w-2xl'>
                            <img
                            src={ackblue}
                            className='w-24 lg:w-32 mx-auto mb-5'
                            alt='tavernstack logo'
                            />

                            <h1 
                            className="text-4xl lg:text-6xl font-bold text-center"
                            >A website builder for
                            <span className='gradient-text'> bars and restaurants</span>
                            </h1>
                        </div>
                    </div>
                </section>
            </div>

            <div className='flex item-center justify-center mt-20 mb-20'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center'>
                        <div className='max-w-xs'>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <p className="mb-24 text-center text-lg lg:text-xl pl-0 ml-0"
                                    >Create a digital menu with photos, icons, and tabbed navigation
                                    </p>
                                    <div className='flex items-center justify-center'>
                                        <div className="absolute top-1/2 h-[120px] border-[4px] border-base-300 rounded-full"></div>
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-20 mb-10'>
                        <DemoMenu />
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col mb-10 lg:mb-20'>
                            <div className='relative'>
                                <div className='flex items-center justify-center'>
                                    <div className="absolute top-0 h-[120px] border-[4px] border-base-300 rounded-full"></div>
                                </div>

                                <div className='flex flex-col items-center mt-36'>
                                    <p className='text-lg lg:text-xl ml-3'
                                    >Export as a ready-to-print PDF
                                    </p>

                                    <p className='text-lg lg:text-xl mt-5 ml-3'
                                    >Fits a standard 8.5x11 menu cover
                                    </p>
                                </div>
                            </div>
                        </div>      
                    </div>

                    <div className='flex items-center justify-center my-20'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-center'>
                            <div className='flex items-center justify-center'>
                            <div className='flex flex-col text-center w-80'>
                                <div className='flex flex-col gap-2 justify-center items-center rounded-full lg:max-w-[470px] p-4'>
                                    <FaPalette className='text-3xl lg:text-4xl text-secondary' />
                                    
                                    <h2 className='text-2xl lg:text-3xl font-bold'
                                    >Design-free
                                    </h2>
                                </div>
                                
                                <div className='flex items-center justify-center'>
                                    <p className='text-lg lg:text-xl lg:font-medium'
                                    >Your site grows automatically as you fill out your profile
                                    </p>  
                                </div>                              
                            </div>
                            </div>
                            
                            <div className='flex z-1 items-center justify-center'>
                                <DemoAbout />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
    );
};

export default HeroAbout;