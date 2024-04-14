import { HiMenuAlt2 } from 'react-icons/hi';

const DemoBook = () => {
    return (
    <>
    <div className="mockup-browser border-slate-600 bg-base-300 h-[500px] max-w-[350px] md:max-w-md lg:max-w-lg rounded-3xl">
        <div className="mockup-browser-toolbar">
            <div className="input">https://asteroid.tavernstack.com</div>
        </div>

        <div className='flex flex-col'>
            <div className="h-14 w-full bg-base-300 rounded-3xl">
                <div className="flex justify-between items-center mx-auto p-4">
                    <HiMenuAlt2
                    className="text-2xl cursor-pointer" 
                    />

                    <button
                    className="btn btn-primary rounded-2xl"
                    >Book
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center mt-10 z-10 bg-base-300'>
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
                                    >Send
                                    </button>
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

export default DemoBook