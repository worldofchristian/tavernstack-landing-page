import { useState } from "react";
import { FaAngleDoubleRight, FaCheck } from "react-icons/fa";

const Pricing = () => {
    const originalPrice = 10;
    const [price, setPrice] = useState(originalPrice);
    const currencies = [
        { code: 'USD', flag: '🇺🇸', exchangeRate: 1 },
        { code: 'CAD', flag: '🇨🇦', exchangeRate: 1.28 },
        { code: 'GBP', flag: '🇬🇧', exchangeRate: 0.75 },
        { code: 'AUD', flag: '🇦🇺', exchangeRate: 1.36 },
    ];
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    // changes the currency and price
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
    <div className='flex items-center justify-center p-2 mb-40'>
        <div className='max-w-6xl'>
            <div className="flex items-center justify-center">
                <div className="flex flex-col max-w-xs">
                    <div className="flex flex-row items-center gap-2">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">
                                <span className="flex items-center">
                                    {selectedCurrency.flag} {selectedCurrency.code}
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

                        <h2 className="text-5xl lg:text-6xl text-center font-semibold"
                        >${price}<span className="text-lg lg:text-xl ml-1">/month</span>
                        </h2>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col mt-8">
                            <div className="flex flex-row items-center gap-2">
                                <FaCheck className="text-xl lg:text-2xl" />

                                <p className="text-lg lg:text-xl"
                                >Month to month
                                </p>
                            </div>

                            <div className="flex flex-row items-center mt-2 gap-2">
                                <FaCheck className="text-xl lg:text-2xl" />

                                <p className="text-lg lg:text-xl"
                                >Cancel anytime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-center mt-14 lg:mt-20">
                <div className="flex flex-col">
                    <div className="max-w-sm">
                        <p className="text-lg lg:text-xl text-center mx-8"
                        >Start for free, upgrade when you&apos;re ready to launch your site
                        </p>
                    </div>

                    <div className="flex items-center justify-center mt-5">
                        <div className="max-w-xs">
                            <a
                            href="https://app.tavernstack.com"
                            target="_blank"
                            rel="noreferrer"
                            >
                                <button className="btn btn-primary rounded-full mt-5"
                                >Create account <FaAngleDoubleRight />
                                </button>
                            </a>
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