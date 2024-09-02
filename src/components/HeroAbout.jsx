import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaRegFilePdf } from 'react-icons/fa';
import DemoAbout from './DemoAbout';
import DemoMenu from './DemoMenu';
import { HiOutlineDocumentAdd } from "react-icons/hi";
import PropTypes from 'prop-types';
import DemoPDF from './DemoPDF';

const HeroAbout = ({ cosmo, margarit, of, wing, fry, mule, ipa, corona, guiness, brus }) => {
    const options = useMemo(() => ['bars and restaurants', 'catering services', 'nightclubs and venues'], []);
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
        }, 2500); 

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
        <div className='flex flex-col mt-20 lg:mt-32 p-2 max-w-[370px] items-center justify-center lg:max-w-3xl'>
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
                        <span className='gradient-text font-bold text-transition'> {currentOption}</span>
                    </motion.div>
                </AnimatePresence>
            </h1>

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
                        cosmo={cosmo} margarit={margarit} of={of} wing={wing} fry={fry} mule={mule} brus={brus}
                        />
                    </div>

                    <div className='flex items-center justify-center mt-32 mx-4'>
                        <div className='flex flex-col lg:flex-row gap-32 items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <div className='flex flex-col text-center w-80'>
                                    <div className='flex flex-col gap-2 justify-center items-center lg:items-end rounded-full p-4'>
                                        <FaRegFilePdf className='text-4xl lg:text-5xl text-secondary' />
                                        
                                        <h2 className='text-3xl font-bold text-center lg:text-right'
                                        >PDF export
                                        </h2>

                                        <p className='text-lg text-center lg:text-right'
                                        >Download your menu as a printable document
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex z-1 items-center justify-center'>
                                <DemoPDF
                                cosmo={cosmo} margarit={margarit} of={of} wing={wing} fry={fry} mule={mule} brus={brus}
                                />
                            </div>
                        </div>      
                    </div>

                    <div className='flex items-center justify-center mt-32 mx-4'>
                        <div className='flex flex-col lg:flex-row gap-32 items-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <div className='flex flex-col text-center w-80'>
                                    <div className='flex flex-col gap-2 justify-center items-center lg:items-end rounded-full p-4'>
                                        <HiOutlineDocumentAdd className='text-4xl lg:text-5xl text-secondary' />
                                        
                                        <h2 className='text-3xl lg:text-right font-bold'
                                        >Cover page
                                        </h2>

                                        <p className='text-lg lg:text-xl lg:text-right'
                                        >Add photos, links, and widgets
                                        </p>  
                                    </div>

                                    <div className='flex flex-col gap-2 mt-20 justify-center items-center lg:items-end rounded-full p-4'>
                                        <FaPalette className='text-4xl lg:text-5xl text-secondary' />
                                        
                                        <h2 className='text-3xl lg:text-3xl lg:text-right font-bold'
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