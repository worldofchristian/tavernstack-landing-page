import { useState } from "react";
import { FaAngleDoubleRight, FaCheck } from "react-icons/fa";
import emailjs from 'emailjs-com';
import SentSupportNotification from "./SentSupportNotification";

const Pricing = () => {
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
    <div className='flex items-center justify-center p-2 my-48'>
        <div className='max-w-6xl'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col max-w-xs">
                        <h2 className="text-5xl lg:text-6xl text-center font-semibold"
                        >$30<span className="text-lg lg:text-xl ml-1">/month</span>
                        </h2>

                        <div className="flex flex-row items-center mt-6 gap-2">
                            <FaCheck className="text-xl" />

                            <p className="text-lg"
                            >Month to month
                            </p>
                        </div>

                        <div className="flex flex-row items-center mt-2 gap-2">
                            <FaCheck className="text-xl" />

                            <p className="text-lg"
                            >Cancel anytime
                            </p>
                        </div>

                        <button className="btn btn-outline bt-sm lg:btn-md rounded-full mt-6"
                        >Sign up
                        </button>
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <div className="flex flex-col max-w-xs">
                        <h2 className="text-5xl lg:text-6xl font-semibold text-center"
                        >$240<span className="text-lg lg:text-xl ml-1">/year</span>
                        </h2>

                        <div className="flex items-center justify-center mb-4 mt-1">
                            <div className="badge badge-primary badge-lg mt-2"
                            >Save $120
                            </div>
                        </div>

                        <div className="flex flex-row mt-2 gap-2">
                            <FaCheck className="text-xl items-center justify-left" />

                            <p className="text-lg"
                            >$30 domain credit
                            </p>
                        </div>

                        <button className="btn btn-outline bt-sm lg:btn-md rounded-full w-full mt-6"
                        >Sign up
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-center mt-40">
                <div className="max-w-sm">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center"
                    >Get started
                    </h1>

                    <p className="text-lg lg:text-xl text-center mt-5 mx-8"
                    >We&apos;ll get you set up for free. Upgrade whenever you&apos;re ready
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center mb-20">
                <div className="form-control mt-10">
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
                        className="text-slate-700"
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
                            className='btn btn-primary mt-5 rounded-full'
                            onClick={handleSend}
                            >Send <FaAngleDoubleRight className='ml-2' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Pricing