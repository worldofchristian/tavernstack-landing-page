import { useState } from "react";
import { FaAngleDoubleRight, FaCheck } from "react-icons/fa";

const Currency = ({ currencies, changeCurrency, selectedCurrency }) => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn rounded-2xl m-1">
                <span className="flex items-center">
                    {selectedCurrency.flag} {selectedCurrency.code} 
                    <FaAngleDoubleRight className="ml-2 text-neutral-focus"/>
                </span>
            </div>

            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {currencies.map((curr) => (
                    <li key={curr.code}>
                        <a onClick={() => changeCurrency(curr.code)}>
                            <span className="flex items-center">
                                {curr.flag} {curr.code}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Pricing = () => {
    const originalPrice = 50;
    const [price, setPrice] = useState(originalPrice);
    const currencies = [
        { code: 'CAD', flag: '🇨🇦', exchangeRate: 1 },
        { code: 'USD', flag: '🇺🇸', exchangeRate: 0.73 },
        { code: 'GBP', flag: '🇬🇧', exchangeRate: 0.57 },
        { code: 'AUD', flag: '🇦🇺', exchangeRate: 1.09 },
    ];
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    const changeCurrency = (newCurrencyCode) => {
        const newCurrency = currencies.find(curr => curr.code === newCurrencyCode);
        if (newCurrency) {
            setSelectedCurrency(newCurrency);
            const newPrice = originalPrice * newCurrency.exchangeRate;
            setPrice(Math.ceil(newPrice));
        }
    };

  return (
    <>
    <div className='flex items-center justify-center min-h-screen bg-base-300 p-2'>
        <div className='max-w-6xl'>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl lg:text-6xl font-bold text-center mt-20"
                >Pricing</h1>

                <div className="flex flex-col lg:flex-row lg:gap-10 items-center justify-center mt-10">
                    <div className="flex flex-col items-center lg:items-end justify-center">                    
                        <h2 className="text-4xl text-center font-bold"
                        >${price}<span className="text-lg font-semibold lg:text-xl ml-1">/month</span></h2>

                        <div className="flex items-center justify-center">
                            <Currency 
                                currencies={currencies}    
                                selectedCurrency={selectedCurrency} 
                                changeCurrency={changeCurrency} 
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-start lg:ml-0 justify-center">
                            <div className="flex flex-row items-center justify-center mt-5 gap-2">
                                <FaCheck className="text-xl" />
                                <p className="text-lg lg:text-xl text-center"
                                >Free initial build
                                </p>
                            </div>

                            <div className="flex flex-row items-center justify-start mt-1 gap-2">
                                <FaCheck className="text-xl" />
                                <p className="text-lg lg:text-xl text-center"
                                >Unlimited visitors
                                </p>
                            </div>

                            <div className="flex flex-row items-center justify-center mt-1 gap-2">
                                <FaCheck className="text-xl" />
                                <p className="text-lg lg:text-xl text-center"
                                >100GB storage 
                                </p>
                            </div>

                            <div className="flex flex-row items-center justify-center mt-1 gap-2">
                                <FaCheck className="text-xl" />
                                <p className="text-lg lg:text-xl text-center"
                                >10k emails/month
                                </p>
                            </div>

                            <div className="flex flex-row items-center justify-center mt-1 gap-2">
                                <FaCheck className="text-xl" />
                                <p className="text-lg lg:text-xl text-center"
                                >Support included
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm lg:max-w-xl mt-20 mb-5">
                        <p className="text-2xl font-bold text-center"
                        >Get started
                        </p>

                        <p className="text-lg lg:text-xl text-center mt-2"
                        >Get more info and a free demo
                        </p>
                    </div>

                <div className="flex flex-col items-end justify-center w-[330px] lg:max-w-md">
                    <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="input input-bordered w-full rounded-2xl" 
                    />

                    <button className="btn btn-primary rounded-2xl mt-2"
                    >Send
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing