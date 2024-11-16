import { useState, useEffect, useRef } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleUp, FaCog } from 'react-icons/fa';
import DemoMenu from './DemoMenu';
import PropTypes from 'prop-types';
import ack3 from '../assets/ack3.png';
import ack22 from '../assets/ack22.png';
import ack1 from '../assets/ack1.png';
import { FaMartiniGlass } from 'react-icons/fa6';
import DemoAbout from './DemoAbout';
import Speedometer from './Speedometer';

const HeroAbout = ({ cosmo, margarit, of, wing, fry, mule, brus, chescak, churro, donut, emartini, wsour, martin }) => {
    //const options = useMemo(() => ['bars and nightclubs', 'event services', 'mixologists'], []);
    //const [currentOption, setCurrentOption] = useState(options[0]);
    //const [direction, setDirection] = useState(1);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [showMoreInfo2, setShowMoreInfo2] = useState(false);
    const [showMoreInfo3, setShowMoreInfo3] = useState(false);
    const [currentStack, setCurrentStack] = useState(ack3);
    
    const aboutRef = useRef(null);

    const handleGo2About = () => {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    // Slider animation
    {/*
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
    */}

    // Stack animation
    useEffect(() => {
        const sequence = [
            { image: ack3, delay: 200 },
            { image: ack22, delay: 500 },
            { image: ack1, delay: 800 }
        ];

        sequence.forEach(({ image, delay }) => {
            setTimeout(() => {
                setCurrentStack(image);
            }, delay);
        });
    }, []);

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
        <div className='flex flex-col p-2 max-w-[370px] items-center justify-center lg:max-w-7xl'>
            <div className='flex flex-col items-center min-h-screen justify-center'>
            <img 
                src={currentStack} 
                alt="Stack animation" 
                className="transition-all duration-150 ease-in-out w-20 h-20 lg:w-32 lg:h-32 lg:mb-8 mb-6"
            />

                <h1 
                className="text-3xl lg:text-6xl font-bold text-center"
                >A website platform for<br /> <span className='gradient-text font-bold'>bars and nightclubs</span>    
                    {/*
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentOption}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35 }}
                            className='mt-1 lg:mt-2'
                        >
                            <span className='gradient-text font-bold text-transition'> {currentOption}</span>
                        </motion.div>
                    </AnimatePresence>
                    */}
                </h1>

                <p className='text-center mt-8 lg:mt-12 text-lg lg:text-2xl pl-0 ml-0 w-80 lg:w-[600px]'>
                Skip the hassle of building a website, while keeping the ability to manage your own content
                </p>

                <button 
                className='btn btn-neutral mt-8 lg:mt-12 mb-20 rounded-2xl'
                onClick={handleGo2About}
                >
                    Learn more
                    <FaAngleDoubleRight className='text-md mt-[1px]' />
                </button>
            </div>

            <div 
            className='flex item-center justify-center mb-20'
            ref={aboutRef}
            >
                <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row items-center min-h-screen mt-20 lg:mt-10 gap-10 lg:gap-32'>
                        <div className="flex flex-col items-center lg:items-end">
                            <FaMartiniGlass className='text-3xl lg:text-4xl text-slate-500 mb-2' />
                            
                            <h2 className='text-xl lg:text-3xl font-bold text-center mb-2'
                            >Searchable menu
                            </h2>

                            <p className="text-center lg:text-right text-lg lg:text-xl pl-0 ml-0 w-80 lg:w-96"
                            >Turn online traffic into customers
                            </p>

                            <button
                            className='btn btn-sm btn-outline rounded-full mt-4'
                            onClick={() => setShowMoreInfo(!showMoreInfo)}
                            >
                                More info
                                {!showMoreInfo ? 
                                <FaAngleDoubleRight className='text-md mt-[1px]' /> 
                                : <FaAngleDoubleUp className='text-md mt-[1px]' />
                                }
                            </button>

                            {showMoreInfo && (
                                <div className='flex flex-col items-center justify-center mt-4'>
                                    <p className='text-center lg:text-right text-base lg:text-lg pl-0 ml-0 w-96'
                                    >Nightlife consumers typically window shop on Google before they go out<br /><br />
                                    
                                    They usually move on if they can&apos;t find what they&apos;re looking for 
                                    within a few seconds<br /><br />
                                    
                                    A well-optimized menu is often the difference between a sale and a lost customer</p>
                                </div>
                            )}
                        </div>

                        <div className='flex items-center justify-center'>
                            <DemoMenu 
                            cosmo={cosmo} margarit={margarit} of={of} wing={wing} fry={fry} mule={mule} brus={brus} chescak={chescak} 
                            churro={churro} donut={donut} emartini={emartini} wsour={wsour} martin={martin}
                            />
                        </div>
                    </div>
     
                    <div className='flex flex-col lg:flex-row items-center min-h-screen mt-32 lg:mt-10 gap-10 lg:gap-32'>
                        <div className="flex flex-col items-center lg:items-end">
                            <FaCog className='text-3xl lg:text-4xl text-slate-500 mb-2' />
                            
                            <h2 className='text-xl lg:text-3xl font-bold text-center mb-2'
                            >You&apos;re in control
                            </h2>

                            <p className="text-center lg:text-right text-lg lg:text-xl pl-0 ml-0 w-80 lg:w-96"
                            >Make changes easily for no extra cost
                            </p>

                            <button
                            className='btn btn-sm btn-outline rounded-full mt-4'
                            onClick={() => setShowMoreInfo2(!showMoreInfo2)}
                            >
                                More info
                                {!showMoreInfo2 ? 
                                <FaAngleDoubleRight className='text-md mt-[1px]' /> 
                                : <FaAngleDoubleUp className='text-md mt-[1px]' />
                                }
                            </button>

                            {showMoreInfo2 && (
                                <div className='flex flex-col items-center justify-center mt-4'>
                                    <p className='text-center lg:text-right text-base lg:text-lg pl-0 ml-0 w-96'
                                    >Hiring someone to build your site often involves giving up a lot of control<br /><br />
                                    
                                    Many developers take advantage of this by nickle and diming you for minor changes<br /><br />
                                    
                                    Tavernstack builds your site and lets you change the content yourself, giving you the best of both worlds</p>
                                </div>
                            )}
                        </div>

                        <div className='flex items-center justify-center'>
                            <DemoAbout
                            cosmo={cosmo}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='flex items-center justify-center'>
                    <Speedometer />
                </div>

                <h1 className='text-3xl lg:text-6xl font-bold text-center w-[370px] lg:w-full'
                >Top shelf performance<br/><span className='gradient-text font-bold'>built for you</span>
                </h1>   
                
                <div className='flex flex-col items-center justify-center mt-8'>
                    <p className="text-center text-lg lg:text-xl pl-0 ml-0 w-80 lg:w-96"
                    >Page speeds in the top 10% of all websites
                    </p>

                    <button
                    className='btn btn-sm btn-outline rounded-full mt-4'
                    onClick={() => setShowMoreInfo3(!showMoreInfo3)}
                    >
                        More info
                        {!showMoreInfo3 ? 
                        <FaAngleDoubleRight className='text-md mt-[1px]' /> 
                        : <FaAngleDoubleUp className='text-md mt-[1px]' />
                        }
                    </button>
                    
                    {showMoreInfo3 &&
                    <p className='text-center text-base lg:text-lg pl-0 ml-0 mt-4 w-80 lg:w-[500px]'
                    >Google did a 
                    <a 
                    className='underline mx-1' 
                    href='https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/?_gl=1*152dcr1*_up*MQ..*_ga*MTIwNjgxMDgwNi4xNzMxMjk2Njgx*_ga_BXYLHC2HPB*MTczMTI5NjY4MS4xLjAuMTczMTI5NjY4MS4wLjAuMA..' 
                    target='_blank' 
                    rel='noreferrer'
                    >study</a> 
                    
                    on 11 million websites<br /><br />
                        
                    They found that a site will lose up to 50% of its traffic if it takes longer than 3 seconds to load<br /><br />

                    Most sites load between 2.5 and 6 seconds<br /><br />
                    
                    
                    Tavernstack websites have an average speed of 1.4 seconds
                    </p>
                    }
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