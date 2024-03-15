import { FaAngleDoubleRight } from 'react-icons/fa';
import DemoMenu from './DemoMenu';
import DemoAbout from './DemoAbout';
import ackblue from '../assets/ackblue.png';

const HeroAbout = () => {
    return (
    <>
    <div className='flex items-center justify-center'>
        <div className='w-full'>
            
            <div className='flex items-center justify-center'>
                <section className='w-full'>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col mt-10 p-2 max-w-md lg:max-w-2xl'>
                            <img
                            src={ackblue}
                            className='w-24 lg:w-32 mx-auto mb-5'
                            alt='tavernstack logo'
                            />

                            <h1 
                            className="text-4xl lg:text-6xl mb-10 font-bold text-center"
                            >A website platform for bars & restaurants
                            </h1>

                            <p className='text-lg lg:text-xl mb-5 lg:mb-10 mx-10 text-center'
                            >Get a high end solution with minimal set up 
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mb-32'>
                        <div className='max-w-xs text-center mx-auto'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-center'>
                                    <a
                                    href='https://app.tavernstack.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                        <button
                                        className='btn btn-neutral rounded-full justify-center w-40 lg:w-52 lg:btn-lg'
                                        >Get started<FaAngleDoubleRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </section>
            </div>

            <div className='flex item-center justify-center mb-12'>
                <div className='flex flex-col gap-16'>
                    <div className='flex items-center justify-center'>
                        <div className='max-w-xs'>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <p className="mb-16 text-center text-lg lg:text-xl pl-0 ml-0"
                                    >What is Tavernstack?
                                    </p>
                                    <div className='flex items-center justify-center'>
                                        <div className="absolute top-1/2 h-[120px] lg:h-[220px] border-[4px] border-base-300 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className='mt-[100px] lg:mt-[200px] text-center text-lg lg:text-xl pl-0 ml-0'
                                    >Tavernstack is a website builder for pubs and small vendors
                                    </p>
                                </div>                    
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mt-40 p-5'>
                        <div className='flex items-center justify-center'>
                            <div className='flex flex-col justify-center max-w-md gap-16 mb-20'>
                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-bold text-center lg:text-left'
                                    >Menu builder
                                    </h1>

                                    <p className='text-lg mt-4 text-center lg:text-left'
                                    >A digital menu with photos, icons, and themes
                                    </p>
                                </div>
                                    
                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-bold text-center lg:text-left'
                                    >PDF export
                                    </h1>

                                    <p className='text-lg mt-4 text-center lg:text-left'
                                    >Print out your menu as a PDF
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className='max-w-sm'>
                                <div className="mockup-phone mt-5 mb-20">
                                    <div className="camera"></div> 
                                    <div className="display">
                                        <div className="artboard artboard-demo phone-1">
                                            <div className="flex justify-center px-4 py-16 bg-base-300">
                                                <DemoMenu />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 p-5'>
                        <div className='flex flex-col justify-center max-w-md mb-10'>
                            <div className='flex items-center justify-center'>
                                <div className='flex flex-col justify-center max-w-md gap-16 mb-20'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-2xl font-bold text-center lg:text-left'
                                        >Bookings pipeline
                                        </h1>

                                        <p className='text-lg mt-4 text-center lg:text-left'
                                        >Use your bookings provider, or get inquiries sent to your email
                                        </p>
                                    </div>
                                        
                                    <div className='flex flex-col'>
                                        <h1 className='text-2xl font-bold text-center lg:text-left'
                                        >Features section
                                        </h1>

                                        <p className='text-lg mt-4 text-center lg:text-left'
                                        >Customizable cover page to easily display key information
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mt-10 mb-40'>
                                <DemoAbout />
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