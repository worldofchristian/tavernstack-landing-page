import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { useSwipeable } from 'react-swipeable';
import bar1 from '../assets/bar1.avif';
import bar2 from '../assets/bar2.avif';
import bar3 from '../assets/bar3.avif';

const DemoAbout = () => {
    const [featuresPhoto] = useState([bar2,bar1,bar3]);
    const [current, setCurrent] = useState(1);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNextClick(),
        onSwipedRight: () => handlePrevClick(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });

    const handleNextClick = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % featuresPhoto.length);  // Move to the next photo, looping back to start
    };

    const handlePrevClick = () => {
        setCurrent((prevCurrent) => (prevCurrent === 0 ? featuresPhoto.length - 1 : prevCurrent - 1));  // Move to the previous photo, looping to the end if necessary
    };

    return (
    <>
    <div className="mockup-browser border-slate-600 bg-base-300 h-[500px] lg:h-[600px] max-w-[350px] md:max-w-sm lg:max-w-2xl rounded-3xl">
        <div className="mockup-browser-toolbar"></div>
        
        <nav className="sticky top-0 z-50 backdrop-filter bg-opacity-30 backdrop-blur-lg bg-base">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    <HiMenuAlt2 className='text-2xl lg:text-3xl' />
                    
                    <div className="flex flex-row justify-between gap-4 items-center">
                        <FaFacebook className='text-2xl lg:text-3xl text-primary' />
                        <FaInstagram className='text-2xl lg:text-3xl text-primary' />
                    </div>
                </div>
            </div>
        </nav>

        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center">
                <div className='flex flex-col mt-10'>
                    <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-right"
                    >Your bar
                    </h1>

                    <p className="text-center lg:text-right mt-2 overflow-hidden"
                    >Add a cool cover page to your cool bar
                    </p>
                </div>
            
                <div className='flex flex-col mt-10'>
                    <div className="overflow-hidden w-full flex">
                        <div 
                        className="flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${current * 100}%)` }}
                        {...handlers}
                        >
                            {featuresPhoto.map((photo, index) => (
                                <div 
                                className="flex flex-none z-1 items-center justify-center w-full h-full relative"
                                key={index}
                                >
                                    <img 
                                    src={photo} alt={`Feature ${index + 1}`} 
                                    className="rounded-2xl object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                
                    <div className="flex flex-row gap-5 items-center justify-center mt-3">
                        <FaAngleLeft
                        className="z-1 text-4xl opacity-60 hover:opacity-100"
                        onClick={() => handlePrevClick()}
                        />

                        <div className='flex items-center justify-center'>
                            <div className="flex flex-row gap-2">
                                <div className={`badge badge-sm ${current === 0 ? 'badge-primary' : 'badge-neutral'}`}></div>
                                <div className={`badge badge-sm ${current === 1 ? 'badge-primary' : 'badge-neutral'}`}></div>
                                <div className={`badge badge-sm ${current === 2 ? 'badge-primary' : 'badge-neutral'}`}></div>
                            </div>
                        </div>

                        <FaAngleRight 
                        className="z-1 text-4xl opacity-60 hover:opacity-100"
                        onClick={() => handleNextClick()}
                        />
                    </div>
                </div>   
            </div>    
        </div>
    </div>
    </>
  )
}

export default DemoAbout