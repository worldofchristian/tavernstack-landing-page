import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette } from 'react-icons/fa';
import DemoAbout from './DemoAbout';
import DemoMenu from './DemoMenu';
import { HiOutlineDocumentAdd } from "react-icons/hi";
import PropTypes from 'prop-types';

const HeroAbout = ({ margarit, of, wing, fry}) => {
    const options = useMemo(() => ['caterers and pop-ups', 'bars and restaurants'], []);
    const [currentOption, setCurrentOption] = useState(options[2]);
    const [direction, setDirection] = useState(1); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOption(prevOption => {
                const currentIndex = options.indexOf(prevOption);
                const nextIndex = (currentIndex + 1) % options.length;
                setDirection(1); // slide to the left
                return options[nextIndex];
            });
        }, 2500); 

        return () => clearInterval(interval);
    }, [options]);

    const slideVariants = {
        enter: (direction) => ({
          x: direction > 0 ? '100%' : '-100%',
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (direction) => ({
          x: direction > 0 ? '-100%' : '100%',
          opacity: 0,
        }),
      };

    return (
    <>
    <div className='flex items-center justify-center'>
        <div className='w-full'>
            <div className='flex items-center justify-center'>
                <section className='w-full'>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-colm mt-20 lg:mt-32 p-2 max-w-[380px] items-center lg:max-w-2xl'>
                            <h1 
                            className="text-4xl lg:text-6xl font-bold text-center"
                            >A website builder for
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentOption}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className='gradient-text text-transition'> {currentOption}</span>
                                    </motion.div>
                                </AnimatePresence>
                            </h1>
                        </div>
                    </div>
                </section>
            </div>

            <div className='flex item-center justify-center mt-20 lg:mt-32 mb-20'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center'>
                        <div className='max-w-xs'>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <p className="mb-24 text-center text-lg lg:text-xl pl-0 ml-0"
                                    >Turn traffic into customers with a searchable menu
                                    </p>
                                    <div className='flex items-center justify-center'>
                                        <div className="absolute top-1/2 h-[120px] border-[4px] border-base-300 rounded-full"></div>
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-20 mb-10'>
                        <DemoMenu margarit={margarit} of={of} wing={wing} fry={fry} />
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

                    <div className='flex items-center justify-center mt-32 mb-5 mx-4'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-32 items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <div className='flex flex-col text-center w-80'>
                                    <div className='flex flex-col gap-3 justify-center items-center rounded-full lg:max-w-[470px] p-4'>
                                        <HiOutlineDocumentAdd className='text-3xl lg:text-4xl text-secondary' />
                                        
                                        <h2 className='text-2xl lg:text-3xl font-bold'
                                        >Cover page
                                        </h2>
                                    </div>
                                    
                                    <div className='flex items-center justify-center'>
                                        <p className='text-lg lg:text-xl'
                                        >Add extra sections with photo and text
                                        </p>  
                                    </div>   

                                    <div className='flex flex-col gap-3 mt-20 justify-center items-center rounded-full lg:max-w-[470px] p-4'>
                                        <FaPalette className='text-3xl lg:text-4xl text-secondary' />
                                        
                                        <h2 className='text-2xl lg:text-3xl font-bold'
                                        >Design-free
                                        </h2>
                                    </div>
                                    
                                    <div className='flex items-center justify-center'>
                                        <p className='text-lg lg:text-xl'
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

HeroAbout.propTypes = {
    margarit: PropTypes.string.isRequired,
    of: PropTypes.string.isRequired,
    wing: PropTypes.string.isRequired,
    fry: PropTypes.string.isRequired,
};

export default HeroAbout;