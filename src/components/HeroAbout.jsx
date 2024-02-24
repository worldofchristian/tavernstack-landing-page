import { useState } from 'react';
import emailjs from 'emailjs-com';
import SentSupportNotification from "./SentSupportNotification";
import { FaAngleDoubleRight, FaCheck } from 'react-icons/fa';
import DemoMenu from './DemoMenu';
import DemoAbout from './DemoAbout';
import ackblue from '../assets/ackblue.png';

const HeroAbout = () => {
    // Get started state
    const [getStarted, setGetStarted] = useState(false);

    // email state
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    // notification state
    const [showSentNotification, setShowSentNotification] = useState(false);

    // thanks message state
    const [showThanksMessage, setShowThanksMessage] = useState(false)

    // sanitize email
    const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
    };

    // send email
    const handleSend = () => {
    if (validateEmail(email)) {
        setIsValidEmail(true);

        // Prepare the email data
        const templateParams = {
        to_email: email,
        };

        // Send the email
        emailjs.send('service_nbmbsj7', 'template_2jxjd8f', templateParams, 'xI4iMZc8LE9V9eqtb')
            .then((response) => {
            console.log('Email successfully sent!', response);
            setShowSentNotification(true);  // Show the Sent notification
            setShowThanksMessage(true); // Show the thanks message 
            }, (err) => {
            console.log('Email failed to send:', err);
            // Handle error - show an error message to the user or log the error
            });

    } else {
        setIsValidEmail(false);
    }
    };


    return (
    <>
    <div className='flex items-center justify-center'>
        <div className='w-full'>
            
            <div className='flex items-center justify-center'>
                <section className='w-full'>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col mt-10 p-2 max-w-md lg:max-w-2xl'>
                            <img
                            src={ackblue}
                            className='w-24 lg:w-32 mx-auto mb-5'
                            alt='tavernstack logo'
                            />

                            <h1 
                            className="text-4xl lg:text-6xl mb-10 font-bold text-center"
                            >A website platform for bars & restaurants
                            </h1>

                            <p className='text-lg lg:text-xl mb-5 lg:mb-10 mx-10 text-center'
                            >Get a high end solution with minimal set up 
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mb-32'>
                        <div className='max-w-xs text-center mx-auto'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-center'>
                                <button
                                className='btn btn-neutral rounded-full justify-center w-40 lg:w-52 lg:btn-lg'
                                onClick={() => setGetStarted(!getStarted)}
                                >Get started {<FaAngleDoubleRight className={`${getStarted ? 'rotate-90' : ''}`} />}
                                </button>
                                </div>

                                {getStarted &&
                                <div className="form-control mt-5 bg-base-200 p-8 rounded-3xl">
                                    <label 
                                    className="label">
                                        <span 
                                        className="label-text"
                                        >Email</span>
                                    </label>

                                    <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered rounded-full w-full max-w-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <label 
                                    className="label">
                                        <span 
                                        className="label-text-alt"
                                        >Won&apos;t be used for marketing
                                        </span>
                                    </label>

                                    <div
                                    className="mt-2">
                                        {showSentNotification && <SentSupportNotification />}
                                    </div>

                                    <div
                                    className="my-2">
                                        {showThanksMessage 
                                        &&
                                        <p
                                        className="text-lg"
                                        >Thanks! You&apos;ll get an email soon with more information on getting set up
                                        </p>}
                                    </div>

                                    {!isValidEmail 
                                    && 
                                    <p className="text-red-600"
                                    >Invalid</p>}

                                    <div className="max-w-xs">
                                        <div
                                        className="flex flex-col">
                                            <button
                                            className='btn btn-primary rounded-full mb-5'
                                            onClick={handleSend}
                                            >Send <FaAngleDoubleRight className='ml-2' />
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>                   
                    </div>
                </section>
            </div>

            <div className='flex item-center justify-center mb-12'>
                <div className='flex flex-col gap-16'>
                    <div className='flex items-center justify-center'>
                        <div className='max-w-xs'>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <p className="mb-16 text-center text-lg lg:text-xl pl-0 ml-0"
                                    >What is Tavernstack?
                                    </p>
                                    <div className='flex items-center justify-center'>
                                        <div className="absolute top-1/2 h-[220px] border-[4px] border-base-300 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className='mt-[200px] text-center text-lg lg:text-xl pl-0 ml-0'
                                    >Tavernstack is a website builder for pubs and small vendors
                                    </p>
                                </div>
                            
                                <div className="relative">
                                    <div className='flex items-center justify-center mt-16'>
                                        <div className="absolute top-1/2 h-[220px] border-[4px] border-base-300 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <p className='mt-[216px] text-center text-lg lg:text-xl pl-0 ml-0'
                                    >It comes with a variety of tools that were tailor-made for nightlife and food 
                                    service businesses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mt-40 p-5'>
                        <div className='flex flex-col justify-center max-w-md mb-20'>
                            <div className='flex flex-row gap-10 justify-left items-center'>
                                <FaCheck className='text-xl' />

                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-bold text-left'
                                    >Menu builder
                                    </h1>

                                    <p className='text-lg mt-4 text-left'
                                    >A digital menu with photos, icons, and themes
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row gap-10 mt-10 justify-left items-center'>
                                <FaCheck className='text-xl' />
                                
                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-bold text-left'
                                    >PDF export
                                    </h1>

                                    <p className='text-lg mt-4 text-left'
                                    >Print out your menu as a PDF
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className='max-w-sm'>
                                <div className="mockup-phone mt-5 mb-20">
                                    <div className="camera"></div> 
                                    <div className="display">
                                        <div className="artboard artboard-demo phone-1">
                                            <div className="flex justify-center px-4 py-16 bg-base-300">
                                                <DemoMenu />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 p-5'>
                        <div className='flex flex-col justify-center max-w-md mb-10'>
                            <div className='flex flex-row gap-10 justify-left items-center'>
                                <FaCheck className='text-xl' />

                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-bold text-left'
                                    >Bookings pipeline
                                    </h1>

                                    <p className='text-lg mt-4 text-left'
                                    >Use your bookings provider, or get inquiries sent to your email
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row gap-10 mt-16 justify-left items-center'>
                                <FaCheck className='text-xl' />
                                
                                <div className='flex flex-col'>
                                    <h1 className='text-2xl font-bold text-left'
                                    >Features section
                                    </h1>

                                    <p className='text-lg mt-4 text-left'
                                    >Customizable cover page to easily display key information
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mt-10 mb-40'>
                                <DemoAbout />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    </>
    );
};

export default HeroAbout;