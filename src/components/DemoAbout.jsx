import asteroid from '../assets/asteroid.jpg';
import { IoPawSharp } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { HiMenuAlt2 } from 'react-icons/hi';

const DemoAbout = () => {
    return (
    <>
    <div className="mockup-browser border-slate-600 bg-base-300 max-w-md rounded-3xl">
        <div className="mockup-browser-toolbar">
            <div className="input">https://asteroid.tavernstack.com</div>
        </div>

        <div className='flex flex-col'>
            <div className="h-16 w-full bg-base-300 rounded-3xl">
                <div className="flex justify-between items-center mx-auto p-4">
                    <HiMenuAlt2
                    className="text-3xl cursor-pointer" 
                    />

                    <button
                    className="btn btn-primary rounded-2xl"
                    >Book
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className='flex flex-col'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <div className='max-w-2xl'>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-3xl font-bold mb-5 mt-10 text-center"
                                    >Asteroid Cheeseburger
                                    </h1>

                                    <div>
                                        <div className="flex justify-center items-center">
                                            <div className='flex flex-col gap-2 mt-4'>
                                                <div className='flex flex-row items-center'>
                                                    <IoIosSunny className="text-xl mr-2" />

                                                    <p className='text-md'
                                                    >Large outdoor area
                                                    </p>
                                                </div>

                                                <div className='flex flex-row items-center'>
                                                    <IoPawSharp className="text-xl mr-2" />

                                                    <p className='text-md'
                                                    >Dog friendly
                                                    </p>
                                                </div>

                                                <div className='flex flex-row items-center'>
                                                    <FaChild className="text-xl mr-2" />

                                                    <p className='text-md'
                                                    >Kid friendly
                                                    </p>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <img
                                        className='w-4/6 rounded-2xl mt-8 mb-12' 
                                        src={asteroid}
                                        alt="Asteroid storefront"
                                        />
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DemoAbout