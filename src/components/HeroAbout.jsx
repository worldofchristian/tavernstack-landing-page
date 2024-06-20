import { FaPalette } from 'react-icons/fa';
import { IoMdSend } from "react-icons/io";
import DemoAbout from './DemoAbout';
import ackblue from '../assets/ackblue.png';
import DemoBook from './DemoBook';
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

            <div className='flex item-center justify-center mt-20 mb-12'>
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

                    <div className='flex items-center justify-center my-20'>
                        <DemoMenu />
                    </div>

                    {/*
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[370px] lg:max-w-lg'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row'>
                                    <FaCheck className='text-lg lg:text-xl' />

                                    <p className='text-lg lg:text-xl ml-3'
                                    >Export as a ready-to-print PDF
                                    </p>
                                </div>

                                <div className='flex flex-row mt-5'>
                                    <FaCheck className='text-md lg:text-xl' />

                                    <p className='text-lg lg:text-xl ml-3'
                                    >Fits a standard 8.5x11 menu cover
                                    </p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    */}

                    <div className='flex items-center justify-center my-20'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-center'>
                            <div className='flex flex-col text-center'>
                                <div className='flex flex-row gap-2 justify-center items-center rounded-full lg:max-w-[470px] p-4'>
                                    <FaPalette className='text-2xl lg:text-3xl text-secondary' />
                                    
                                    <h2 className='text-2xl lg:text-3xl font-bold mt-2'
                                    >Design-free
                                    </h2>
                                </div>
                                
                                <div className='flex items-center justify-center'>
                                    <p className='text-lg  lg:text-xl lg:font-medium w-72'
                                    >Your site grows automatically as you fill out your profile
                                    </p>  
                                </div>                              
                            </div>
                            
                            <div className='flex z-1 items-center justify-center'>
                                <DemoAbout />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center my-20'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-center'>
                            <div className='flex flex-col text-center'>
                                <div className='flex flex-row gap-2 justify-center items-center rounded-full lg:max-w-[470px] p-4'>
                                    <IoMdSend className='text-2xl lg:text-3xl text-secondary' />
                                    
                                    <h2 className='text-2xl lg:text-3xl font-bold mt-2'
                                    >User actions
                                    </h2>
                                </div>
                                
                                <div className='flex items-center justify-center'>
                                    <p className='text-lg  lg:text-xl lg:font-medium w-72'
                                    >Add links and let users send messages directly to your email
                                    </p>  
                                </div>                              
                            </div>
                            
                            <div className='flex z-1 items-center justify-center'>
                                <DemoBook />
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