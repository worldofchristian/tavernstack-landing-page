import { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaCheck, FaPlus } from "react-icons/fa";
import ack1 from '../assets/ack1.png';
import ack22 from '../assets/ack22.png';
import ack3 from '../assets/ack3.png';
import './Pricing.css';

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
    const originalPrice = 17;
    const [price, setPrice] = useState(originalPrice);
    const currencies = [
        { code: 'CAD', flag: '🇨🇦', exchangeRate: 1 },
        { code: 'USD', flag: '🇺🇸', exchangeRate: 0.73 },
        { code: 'GBP', flag: '🇬🇧', exchangeRate: 0.57 },
        { code: 'AUD', flag: '🇦🇺', exchangeRate: 1.09 },
    ];
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [locationCount, setLocationCount] = useState(3);
    const [enterprisePrice, setEnterprisePrice] = useState();

    const changeCurrency = (newCurrencyCode) => {
        const newCurrency = currencies.find(curr => curr.code === newCurrencyCode);
        if (newCurrency) {
            setSelectedCurrency(newCurrency);
            const newPrice = originalPrice * newCurrency.exchangeRate;
            setPrice(Math.ceil(newPrice));
        }
    };

    const handleLocationCountChange = (newCount) => {
        setLocationCount(newCount);
    };

    const updateEnterprisePrice = () => {
        if (locationCount <= 2) {
            setEnterprisePrice('--');
        } else {
            const baseEnterprisePrice = locationCount * (originalPrice * 0.75);
            const adjustedEnterprisePrice = baseEnterprisePrice * selectedCurrency.exchangeRate;
            setEnterprisePrice(Math.floor(adjustedEnterprisePrice));
        }
    };

    useEffect(() => {
        updateEnterprisePrice();
    }, [price, locationCount, selectedCurrency]);

  return (
    <>
    <div className='flex items-center justify-center min-h-screen p-2'>
        <div className='max-w-6xl'>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl lg:text-6xl font-bold text-center mt-20 mb-5"
                >Pricing</h1>
                
                <div className="max-w-sm">
                    <p className="text-lg lg:text-xl text-center mx-8"
                    >Build your site for free, upgrade when you&apos;re ready to put it online
                    </p>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-3 items-center justify-center gap-20 my-20">
                    <div className="flex flex-col justify-between h-[475px] items-center w-[300px] p-10 bg-base-300 rounded-2xl shadow-md">
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={ack3} alt='small stack icon' className="w-16 mb-5" />
                            </div>

                            <p className="text-lg text-center font-semibold">Starter</p>
                            
                            <h2 className="text-4xl text-center font-bold">Free</h2>
                        </div>

                        <div className="flex items-center justify-center mt-16">
                            <div className="flex flex-col items-center justify-center">
                                <div className="max-w-xs">
                                    <a
                                    href="https://app.tavernstack.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        <button className="btn btn-primary rounded-2xl"
                                        >Create account <FaAngleDoubleRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-left">
                            <div className="flex flex-row items-center gap-2">
                                <FaCheck className="text-xl" />

                                <p className="text-md"
                                >Menu builder
                                </p>
                            </div>

                            <div className="flex flex-row items-center gap-2 mt-2">
                                <FaCheck className="text-xl" />

                                <p className="text-md"
                                >PDF export
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-[475px] items-center w-[300px] p-10 bg-base-300 rounded-2xl shadow-md">
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={ack22} alt='medium stack icon' className="w-16 mb-5" />
                            </div>

                            <p className="text-lg text-center font-semibold">Pro</p>
                                
                            <h2 className="text-4xl text-center font-bold mb-2"
                            >${price}<span className="text-lg font-semibold lg:text-xl ml-1">/month</span></h2>

                            <div className="flex items-center justify-center">
                                <Currency 
                                    currencies={currencies}    
                                    selectedCurrency={selectedCurrency} 
                                    changeCurrency={changeCurrency} 
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center my-5">
                            <div className="flex flex-col items-center justify-center">
                                <div className="max-w-xs">
                                    <a
                                    href="https://app.tavernstack.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        <button className="btn btn-primary rounded-2xl"
                                        >Create account <FaAngleDoubleRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-left">
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <FaPlus className="text-xl" />

                                <p className="text-md"
                                >Website
                                </p>
                            </div>

                            <div className="flex flex-row items-center gap-2 mt-2">
                                <FaPlus className="text-xl" />

                                <p className="text-md"
                                >Cover page
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between h-[475px] w-[300px] p-10 bg-base-300 rounded-2xl shadow-md">
                        <div>
                            <div className="flex items-center justify-center">
                                <img src={ack1} alt='large stack icon' className="w-16 mb-5" />
                            </div>
                            
                            <div>
                                <p className="text-lg text-center font-semibold">Enterprise</p>

                                <h2 className="text-4xl text-center font-bold mb-2">
                                    $
                                    {
                                        enterprisePrice === '--' ? '--' :
                                        enterprisePrice
                                    }
                                    <span className="text-lg font-semibold lg:text-xl ml-1">/month</span>
                                </h2>
                            </div>

                            <div className="flex items-center justify-center">
                                <Currency 
                                    currencies={currencies} 
                                    selectedCurrency={selectedCurrency} 
                                    changeCurrency={changeCurrency} 
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center my-5">
                            <div className="flex flex-col items-center justify-center">
                                <div className="max-w-xs">
                                    <a
                                    href="https://app.tavernstack.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        <button className="btn btn-primary rounded-2xl"
                                        >Create account <FaAngleDoubleRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center mt-1">
                            <div className="flex flex-col items-left">
                                <div className="flex flex-row items-center gap-2">
                                    <FaPlus className="text-xl" />

                                    <p className="text-md"
                                    >Multiple locations
                                    </p>
                                </div>

                                <div className="flex flex-row mt-2 items-center gap-2">
                                    <FaPlus 
                                        className="text-xl cursor-pointer" 
                                        onClick={() => handleLocationCountChange(locationCount + 1)}
                                    />

                                    <input 
                                        type="number" 
                                        className="input input-bordered h-8 no-arrows rounded-md w-12" 
                                        placeholder="3"
                                        value={locationCount} 
                                        onChange={(e) => handleLocationCountChange(Number(e.target.value))}
                                    />

                                    <p className="text-md"
                                    >{locationCount === 1 ? 'location' : 'locations'}
                                    </p>
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

export default Pricing