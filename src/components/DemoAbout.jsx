import asteroid from '../assets/asteroid.jpg';

const DemoAbout = () => {
    return (
    <>
    <div className="mockup-browser border-slate-600 bg-base-300 h-[580px] lg:h-[680px] max-w-[350px] md:max-w-sm lg:max-w-lg rounded-3xl">
        <div className="mockup-browser-toolbar">
            <div className="input">https://asteroid.tavernstack.com</div>
        </div>
        
        <div className='flex flex-col'>
            <div className="flex justify-center items-center">
                <div className='flex flex-col'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <div className='max-w-2xl'>
                                <div className="flex flex-col items-center">
                                    <div className='flex items-center justify-center'>
                                        <img
                                        className='w-64 rounded-2xl mt-8' 
                                        src={asteroid}
                                        alt="Asteroid storefront"
                                        />
                                    </div>

                                    <h1 className="text-3xl font-bold mb-5 mt-8 text-center"
                                    >Asteroid Burger
                                    </h1>

                                    <p className="text-md text-center mx-6"
                                    >Premium burgers, hand cut fries, handmade chicken tenders, 
                                    and ice cream. Ask for a complimentary doggie cone or some fresh water.
                                    </p>

                                    <button className='btn btn-primary rounded-2xl mt-8'
                                    >View menu
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

export default DemoAbout