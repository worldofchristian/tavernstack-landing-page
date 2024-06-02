import { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleUp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenuAlt2 } from 'react-icons/hi';
import { SiDoordash } from 'react-icons/si';

const DemoBook = () => {
    const [isBookOpen, setIsBookOpen] = useState(null);
    const [isLinksOpen, setIsLinksOpen] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const sleep = (seconds) => {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    const handleshowToast = () => {
        setShowToast(true)
        sleep(3).then(() => {
            setShowToast(false)
        })
    }

    return (
    <>
    <svg style={{height: 0, width: 0, position: 'absolute'}}>
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#736EFE', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#5EFCE8', stopOpacity: 1}} />
            </linearGradient>
        </defs>
    </svg>

    <div className="mockup-browser border-slate-600 bg-base-300 max-w-[350px] md:max-w-md lg:max-w-lg rounded-3xl">
        <div className="mockup-browser-toolbar">
            <div className="input">https://asteroid.tavernstack.com</div>
        </div>

        <div className='flex flex-col'>
            <div className="h-10 w-full bg-base-300 rounded-3xl">
                {showToast &&
                <div className="toast toast-top toast-center mt-12">
                    <div className="alert alert-info">
                        <span>That would have sent!</span>
                    </div>
                </div>
                }

                <div className="flex justify-between items-center mx-auto p-4">
                    <div className='flex flex-row items-center gap-4'>
                        <HiMenuAlt2
                        className="text-2xl cursor-pointer" 
                        onClick={() => { 
                            setIsLinksOpen(true) 
                            setIsBookOpen(false)
                        }}
                        />
                        
                        {isBookOpen && 
                        <FaAngleDoubleLeft 
                        style={{fill: 'url(#gradient)'}} 
                        className='text-5xl'
                        />
                        }
                    </div>
                    
                    <button
                    className="btn btn-primary rounded-2xl"
                    onClick={() => { 
                        setIsBookOpen(true) 
                        setIsLinksOpen(false)
                    }}
                    >Book
                    </button>
                </div>
            </div>

            {isLinksOpen &&
            <div className='flex items-center justify-center'>
                <div className='flex flex-col gap-4 mt-12'>
                    <div className='flex flex-row items-center gap-2'>
                        <FaFacebook className='text-lg' />

                        <p className='text-lg underline'
                        >Facebook
                        </p>
                    </div>

                    <div className='flex flex-row items-center gap-2'>
                        <FaInstagram className='text-lg' />

                        <p className='text-lg underline'
                        >Instagram
                        </p>
                    </div>

                    <div className='flex flex-row items-center gap-2'>
                        <SiDoordash className='text-lg' />

                        <p className='text-lg underline'
                        >Doordash
                        </p>
                    </div>

                    <div 
                    className='flex flex-row items-center justify-center mb-8 mt-5 gap-3 cursor-pointer'
                    onClick={() => { setIsLinksOpen(!isLinksOpen) }}
                    >
                        <p className='text-2xl font-bold'
                        >Close
                        </p>

                        <FaAngleDoubleUp className='text-xl' />
                    </div>
                </div>
            </div>
            }

            {isBookOpen &&
            <div className='flex items-center justify-center mt-10 bg-base-300'>
                <div className='flex flex-col'>
                    <div className='max-w-sm'>
                        <div className='flex flex-col'>
                            <p className='text-md mb-1 ml-1'
                            >Email</p>

                            <input 
                            className='input input-bordered'
                            placeholder='Type here'
                            />

                            <p className='text-md mb-1 ml-1 mt-4'
                            >Message</p>

                            <textarea
                            className='textarea textarea-bordered textarea-lg' 
                            placeholder='Type here'
                            />

                            <div className="flex items-center justify-end">
                                <div className="max-w-xs">
                                    <button 
                                    className='btn btn-primary rounded-2xl mt-2'
                                    onClick={handleshowToast}
                                    >Send
                                    </button>
                                </div>
                            </div>

                            <div 
                            className='flex flex-row items-center justify-center mb-8 mt-5 gap-3 cursor-pointer'
                            onClick={() => { setIsBookOpen(!isBookOpen) }}
                            >
                                <p className='text-2xl font-bold'
                                >Close
                                </p>

                                <FaAngleDoubleUp className='text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }

            {!isBookOpen && !isLinksOpen && 
            <div className='flex flex-row items-center justify-center mt-5 mb-20'>
                <p className='text-3xl font-bold gradient-text mt-16'
                >Try it out
                </p>

                <FaAngleDoubleUp 
                className='text-5xl rotate-45' 
                style={{fill: 'url(#gradient)'}}
                />
            </div>
            }
        </div>
    </div>
    </>
  )
}

export default DemoBook