import { FaAngleDoubleRight, FaLink } from 'react-icons/fa';
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { SiApplearcade } from "react-icons/si";
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
                            className="text-4xl lg:text-6xl mb-10 font-bold text-center"
                            >A website builder for bars and small vendors
                            </h1>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mb-24'>
                        <div className='max-w-xs text-center mx-auto'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-center'>
                                    <a
                                    href='https://app.tavernstack.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                        <button
                                        className='btn btn-neutral rounded-full justify-center'
                                        >Create account<FaAngleDoubleRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </section>
            </div>

            <div className='flex item-center justify-center mb-12'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center'>
                        <div className='max-w-xs'>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <p className="mb-24 text-center text-lg lg:text-xl pl-0 ml-0"
                                    >Create a digital menu with photos, icons, and themes
                                    </p>
                                    <div className='flex items-center justify-center'>
                                        <div className="absolute top-1/2 h-[120px] border-[4px] border-base-300 rounded-full"></div>
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-20 mb-32'>
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

                    <div className='flex items-center justify-center mt-20 mb-32'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row items-center justify-end rounded-full lg:max-w-[470px] p-5'>
                                    <p className='text-lg lg:text-xl lg:font-medium mr-3 lg:mr-5'
                                    >Customizable pages
                                    </p>
                                    
                                    <HiOutlineDocumentAdd className='text-2xl lg:text-4xl text-secondary' />
                                </div>

                                <div className='flex flex-row lg:mt-5 justify-end items-center rounded-full lg:max-w-[470px] p-5'>
                                    <p className='text-lg lg:text-xl lg:font-medium mr-3 lg:mr-5'
                                    >Add a home page and features section
                                    </p>
                                    
                                    <SiApplearcade className='text-2xl lg:text-4xl text-secondary' />                                 
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-center'>
                                <DemoAbout />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-20 mb-32'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
                            <div className='flex flex-col'>
                                <div className='flex flex-row mt-5 items-center justify-end rounded-full lg:max-w-[470px] p-5'>
                                    <p className='text-lg lg:text-xl lg:font-medium mr-3 lg:mr-5'
                                    >Get inquiries sent to your email
                                    </p>
                                    
                                    <IoMdSend className='text-2xl lg:text-4xl text-secondary' />
                                </div>

                                <div className='flex flex-row lg:mt-5 items-center justify-end rounded-full lg:max-w-[470px] p-5'>
                                    <p className='text-lg lg:text-xl lg:font-medium tracking-tight mr-3 lg:mr-5'
                                    >Or use the link to your bookings service
                                    </p>
                                    
                                    <FaLink className='text-2xl lg:text-4xl text-secondary' />
                                </div>
                            </div>
                            
                            <div className='flex items-center justify-center'>
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