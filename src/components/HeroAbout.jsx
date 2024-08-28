import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette } from 'react-icons/fa';
import DemoAbout from './DemoAbout';
import DemoMenu from './DemoMenu';
import { HiOutlineDocumentAdd } from "react-icons/hi";
import PropTypes from 'prop-types';

const HeroAbout = ({ cosmo, margarit, of, wing, fry, mule, ipa, corona, guiness, brus }) => {
    const options = useMemo(() => ['bars and restaurants', 'catering services', 'food trucks and pop-ups'], []);
    const [currentOption, setCurrentOption] = useState(options[0]);
    const [direction, setDirection] = useState(1); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOption(prevOption => {
                const currentIndex = options.indexOf(prevOption);
                const nextIndex = (currentIndex + 1) % options.length;
                setDirection(1); // slide to the left
                return options[nextIndex];
            });
        }, 2900); 

        return () => clearInterval(interval);
    }, [options]);

    const slideVariants = {
        enter: (direction) => ({
          x: direction > 0 ? '20%' : '-20%',
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (direction) => ({
          x: direction > 0 ? '-20%' : '20%',
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
                        <div className='flex flex-colm mt-20 lg:mt-32 p-2 max-w-[370px] items-center lg:max-w-3xl'>
                            <h1 
                            className="text-3xl lg:text-6xl font-bold text-center"
                            >A website builder for
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentOption}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.35 }}
                                    >
                                        <span className='gradient-text text-transition'> {currentOption}</span>
                                    </motion.div>
                                </AnimatePresence>
                            </h1>
                        </div>
                    </div>
                </section>
            </div>

            <div className='flex item-center justify-center mt-32 mb-20'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center'>
                        <div className='max-w-xs'>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <p className="mb-32 text-center text-lg lg:text-xl pl-0 ml-0"
                                    >Start with a searchable menu that turns website traffic into customers
                                    </p>
                                    <div className='flex items-center justify-center'>
                                        <div className="absolute top-1/2 h-[100px] border-[4px] border-base-300 rounded-full"></div>
                                    </div>
                                </div>                
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center my-5'>
                        <DemoMenu 
                        cosmo={cosmo} margarit={margarit} of={of} wing={wing} fry={fry} mule={mule} 
                        guiness={guiness} corona={corona} ipa={ipa} brus={brus}
                        />
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col w-80'>
                            <div className='relative'>
                                <div className='flex items-center justify-center'>
                                    <div className="absolute top-0 h-[100px] border-[4px] border-base-300 rounded-full"></div>
                                </div>

                                <div className='flex flex-col items-center justify-start mt-32'>
                                    <p className='text-lg lg:text-xl ml-3'
                                    >Export as a ready-to-print PDF
                                    </p>

                                    <p className='text-lg lg:text-xl text-center mt-5'
                                    >Automatically converts your menu to a 8.5x11 or 11x17 sized document</p>
                                </div>
                            </div>
                        </div>      
                    </div>

                    <div className='flex items-center justify-center mt-32 mb-5 mx-4'>
                        <div className='flex flex-col lg:flex-row gap-32 items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <div className='flex flex-col text-center w-80'>
                                    <div className='flex flex-col gap-2 justify-center items-center lg:items-end rounded-full p-4'>
                                        <HiOutlineDocumentAdd className='text-4xl lg:text-5xl text-secondary' />
                                        
                                        <h2 className='text-2xl lg:text-3xl lg:text-right font-bold'
                                        >Cover page
                                        </h2>

                                        <p className='text-lg lg:text-xl lg:text-right'
                                        >Add extra photos, text, and links
                                        </p>  
                                    </div>   

                                    <div className='flex flex-col gap-3 mt-20 justify-center items-center lg:items-end rounded-full p-4'>
                                        <FaPalette className='text-4xl lg:text-5xl text-secondary' />
                                        
                                        <h2 className='text-2xl lg:text-3xl lg:text-right font-bold'
                                        >Design-free
                                        </h2>

                                        <p className='text-lg lg:text-xl lg:text-right'
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