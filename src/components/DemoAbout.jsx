import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";
import { useSwipeable } from 'react-swipeable';
import bar1 from '../assets/bar1.jpg';
import bar2 from '../assets/bar2.jpg';
import bar3 from '../assets/bar3.jpg';
import UserMap from "./UserMap";

const DemoAbout = () => {
    const [featuresPhoto] = useState([bar2, bar1, bar3]);
    const [current, setCurrent] = useState(1);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNextClick(),
        onSwipedRight: () => handlePrevClick(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const handleNextClick = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % featuresPhoto.length);
    };

    const handlePrevClick = () => {
        setCurrent((prevCurrent) => (prevCurrent === 0 ? featuresPhoto.length - 1 : prevCurrent - 1));
    };

    return (
        <div className="mockup-browser border-slate-600 bg-base-300 w-full max-w-lg lg:max-w-2xl rounded-2xl mx-auto">
            <div className="mockup-browser-toolbar"></div>
            
            <nav className="sticky top-0 bg-base">
                <div className="max-w-full lg:max-w-2xl px-4 lg:px-5">
                    <div className="flex items-center justify-between">
                        <HiMenuAlt2 className='text-2xl lg:text-3xl' />
                        
                        <div className="flex flex-row justify-between gap-4 items-center">
                            <FaFacebook className='text-2xl lg:text-3xl' />
                            <FaInstagram className='text-2xl lg:text-3xl' />
                            <button className="btn btn-primary rounded-xl btn-sm">Menu</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center mt-5 p-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 px-4 lg:gap-10">
                        <div className='flex flex-col'>
                            <h1 className="text-3xl lg:text-4xl mt-10 lg:mt-0 font-bold text-center lg:text-right">
                                Your bar
                            </h1>

                            <p className="text-center lg:text-right mt-2 lg:mb-10 overflow-hidden w-full lg:w-52">
                                Add a cool cover page to your cool bar
                            </p>
                        </div>
                    
                        <div className='flex flex-col mt-5 mb-10 mx-2 w-full lg:w-auto'>
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
                                                className="rounded-2xl w-full object-cover" 
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        
                            <div className="flex flex-row gap-5 items-center justify-center mt-3">
                                <FaAngleLeft
                                    className="z-1 text-4xl opacity-60 hover:opacity-100 cursor-pointer"
                                    onClick={handlePrevClick}
                                />

                                <div className='flex items-center justify-center'>
                                    <div className="flex flex-row gap-2">
                                        {[0, 1, 2].map((idx) => (
                                            <div 
                                                key={idx}
                                                className={`badge badge-sm ${current === idx ? 'badge-primary' : 'badge-neutral'}`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                <FaAngleRight 
                                    className="z-1 text-4xl opacity-60 hover:opacity-100 cursor-pointer"
                                    onClick={handleNextClick}
                                />
                            </div>
                        </div>   
                    </div>   
                    
                    <div className='flex flex-col lg:flex-row items-center justify-between mt-10 mb-10 lg:mb-16 gap-5 lg:gap-10 lg:w-full px-4'>
                        <UserMap />

                        <div className='flex flex-col items-center lg:items-start justify-center mt-5 lg:mt-2'>
                            <FaLocationDot className='text-3xl' />

                            <h1 className='text-3xl mt-4 mb-5 font-bold text-center lg:text-left'>
                                Visit us
                            </h1>

                            <p className="w-full lg:w-40 text-center lg:text-left">
                                997 Seymour St<br /> Vancouver, BC
                            </p>
                            
                            <div className='flex flex-row items-center mt-2 mb-5 lg:text-left'>
                                <p className='underline cursor-pointer'>Google maps</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DemoAbout
