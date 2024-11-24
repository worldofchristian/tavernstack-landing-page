import { useState } from "react";
import { FaAngleDoubleRight, FaCheck } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

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
    const originalPrice = 25;
    const currencies = [
        { code: 'CAD', flag: '🇨🇦', exchangeRate: 1 },
        { code: 'USD', flag: '🇺🇸', exchangeRate: 0.73 },
        { code: 'GBP', flag: '🇬🇧', exchangeRate: 0.57 },
        { code: 'AUD', flag: '🇦🇺', exchangeRate: 1.09 },
    ];

    const [price, setPrice] = useState(originalPrice);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [state, handleSubmit] = useForm("xwpkbwwz");

    const changeCurrency = (newCurrencyCode) => {
        const newCurrency = currencies.find(curr => curr.code === newCurrencyCode);
        if (newCurrency) {
            setSelectedCurrency(newCurrency);
            const newPrice = originalPrice * newCurrency.exchangeRate;
            setPrice(Math.ceil(newPrice));
        }
    };

    if (state.succeeded) {
        return <div className="text-center mt-4">Thanks for your submission!</div>;
    }

    return (
        <>
        <div className='flex items-center justify-center min-h-screen bg-base-300 p-2'>
            <div className='max-w-6xl'>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col lg:flex-row lg:gap-40 items-center justify-center mt-20">
                        <div>
                            <div className="flex flex-col items-center lg:items-end justify-center">
                                <h1 className="text-3xl lg:text-6xl font-bold text-center lg:text-right"
                                >Pricing</h1>

                                <p className="text-lg lg:text-xl text-center lg:text-right mt-4 lg:mb-10"
                                >Pay monthly, get value immediately
                                </p>

                                <div className="lg:w-[350px] mt-10">
                                    <div className="flex flex-col items-center lg:items-end justify-center lg:justify-between">
                                        <div className="flex flex-col items-center lg:items-end justify-center">                    
                                            <h2 className="text-3xl text-center font-bold"
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
                                            <div className="flex flex-col items-start lg:items-end justify-center">
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
                                                    >Support included
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   

                        <div>
                            <div className="max-w-sm lg:max-w-xl mb-5 mt-16">
                                <p className="text-3xl font-bold text-center lg:text-left"
                                >Get started
                                </p>

                                <p className="text-lg lg:text-xl text-center lg:text-left mt-2"
                                >Preview your bar on our platform
                                </p>
                            </div>

                            <div className="flex flex-col items-start justify-center w-[350px] lg:max-w-md">
                                <form onSubmit={handleSubmit} className="w-full">
                                    <p className="text-base text-left mb-2">Business name</p>
                                    <input 
                                        id="businessName"
                                        type="text" 
                                        name="businessName"
                                        placeholder="Type here" 
                                        className="input input-bordered w-full rounded-2xl mb-2" 
                                        required
                                    />
                                    <ValidationError 
                                        prefix="Business Name" 
                                        field="businessName"
                                        errors={state.errors}
                                    />

                                    <p className="text-base text-left mb-2">Location</p>
                                    <div className="flex flex-row items-center justify-center gap-2 w-full">
                                        <input 
                                            id="city"
                                            type="text" 
                                            name="city"
                                            placeholder="Type here" 
                                            className="input input-bordered w-full rounded-2xl mb-2" 
                                            required
                                        />
                                        <ValidationError 
                                            prefix="City" 
                                            field="city"
                                            errors={state.errors}
                                        />

                                        <select 
                                            id="country"
                                            name="country"
                                            className="select select-bordered w-28 rounded-2xl mb-2"
                                            required
                                        >
                                            <option value="Canada">Canada</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Australia">Australia</option>
                                        </select>
                                        <ValidationError 
                                            prefix="Country" 
                                            field="country"
                                            errors={state.errors}
                                        />
                                    </div>
                                    
                                    <p className="text-base text-left mb-2">Email</p>
                                    <div className="flex flex-col items-end justify-center w-full">
                                        <input 
                                            id="email"
                                            type="email" 
                                            name="email"
                                            placeholder="Type here" 
                                            className="input input-bordered w-full rounded-2xl"
                                            required
                                        />
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                        />

                                        <button 
                                            type="submit" 
                                            disabled={state.submitting}
                                            className="btn btn-primary rounded-2xl mt-2 mb-20 lg:mb-0"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
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