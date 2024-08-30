import { useState } from "react";
import { FaDownload, FaFacebook, FaInstagram, FaPepperHot, FaSeedling } from "react-icons/fa";
import { LuWheatOff } from "react-icons/lu";
import coolbar from "../assets/coolbar.png";
import { CiGlobe } from "react-icons/ci";

const MenuItem = ({ name, description, price, spicy, gf, vegan }) => (
    <div className="flex flex-row justify-center py-3 gap-2 border-base-200">
        <div className="flex flex-col text-left">
            <div className='flex flex-row justify-start items-center gap-2 my-1'>
                <p className="text-xs lg:text-sm font-semibold text-left">{name}</p>

                {spicy && <FaPepperHot className="text-sm text-red-500" />}
                {gf && <LuWheatOff className="text-sm text-yellow-500" />}
                {vegan && <FaSeedling className="text-sm text-green-500" />}
            </div>

            <p className="text-xs lg:text-base overflow-wrap text-left break-word w-24 lg:w-32">{description}</p>
        </div>
        <p className="text-sm lg:text-sm font-semibold">{price}</p>
    </div>
);

const DemoPDF = ({ of, wing, margarit, fry, cosmo, brus }) => {
    const [titleFont, setTitleFont] = useState("New Amsterdam");
    const [bodyFont, setBodyFont] = useState("Roboto");
    const [divider, setDivider] = useState("None");
    const [isSocials, setIsSocials] = useState(true);
    const [isLogo, setIsLogo] = useState(true);
    const [isLegend, setIsLegend] = useState(true);
    const [isMessage, setIsMessage] = useState(false);

    const fonts = ["Roboto", "Times New Roman", "New Amsterdam", "Ubuntu", "Garamond"];
    const dividers = ["None", "Fancy", "Wavy", "Solid", "Dashed"];
    const barMenu = [
        { name: 'Old Fashioned', description: 'Bourbon, sugar, angostura bitters', price: 12, category: 'cocktails', image: of },
        { name: 'Cosmo', description: 'Vodka, triple sec, lime, cranberry juice', price: 9, category: 'cocktails', image: cosmo, },
        { name: 'Margarita', description: 'Blanco tequila, triple sec, lime, sugar, salt', price: 10, category: 'cocktails', image: margarit },
        { name: 'Fries', description: 'Hand-cut fries, sea salt, ketchup', price: 5, category: 'snacks', image: fry, gf: true },
        { name: 'Wings', description: 'BBQ, spicy, buffalo, or honey garlic', price: 9, category: 'snacks', image: wing, spicy: true },
        { name: 'Bruschetta', description: 'Toasted bread, olive oil, tomatoes, basil, feta', price: 7, category: 'snacks', vegan: true, image: brus },
    ];

    // Get the list of categories
    const categories = [...new Set(barMenu.map(item => item.category))];

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "titleFont") setTitleFont(value);
        else if (name === "bodyFont") setBodyFont(value);
        else if (name === "divider") setDivider(value);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === "isSocials") setIsSocials(checked);
        else if (name === "isLogo") setIsLogo(checked);
        else if (name === "isLegend") setIsLegend(checked);
    };

    const handleMessage = () => {
        setIsMessage(true);
        setTimeout(() => { setIsMessage(false); }, 3000);
    };

    return (
        <>
        <div className="mockup-browser border-slate-600 bg-base-300 w-[370px] lg:w-[1000px] rounded-2xl">
            <div className="mockup-browser-toolbar"></div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 mb-10 lg:gap-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row justify-between items-center w-full mb-5 px-5">
                        <div className="flex flex-col items-center text-center mb-2">
                            <p className="text-base mb-2">Socials</p>

                            <input 
                                type="checkbox" 
                                className="toggle" 
                                name="isSocials" 
                                checked={isSocials} 
                                onChange={handleCheckboxChange} 
                            />
                        </div>

                        <div className="flex flex-col items-center text-center mb-2">
                            <p className="text-base mb-2">Logo</p>

                            <input 
                                type="checkbox" 
                                className="toggle" 
                                name="isLogo" 
                                checked={isLogo} 
                                onChange={handleCheckboxChange} 
                            />
                        </div>

                        <div className="flex flex-col items-center text-center mb-2">
                            <p className="text-base mb-2">Legend</p>
                            <input 
                                type="checkbox" 
                                className="toggle" 
                                name="isLegend" 
                                checked={isLegend} 
                                onChange={handleCheckboxChange} 
                            />
                        </div>
                    </div>

                    <div className='bg-slate-200 rounded-2xl px-5 py-5 shadow-lg text-black h-[470px] lg:h-[550px] w-[320px] lg:w-[385px] overflow-hidden'>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row justify-between items-center mt-2 mb-5 w-full">
                                {isSocials && (
                                    <div className="flex flex-col items-left">
                                        <div className="flex flex-row items-left gap-2">
                                            <FaFacebook className="text-sm" />
                                            <p className="text-xs font-semibold">Coolbar</p>
                                        </div>

                                        <div className="flex flex-row items-left gap-2 mt-1">
                                            <FaInstagram className="text-sm" />
                                            <p className="text-xs font-semibold">Coolbar</p>
                                        </div>

                                        <div className="flex flex-row items-left gap-2 mt-1">
                                            <CiGlobe className="text-sm" />
                                            <p className="text-xs font-semibold">Coolbar</p>
                                        </div>
                                    </div>
                                )}

                                {isLogo && (
                                    <img src={coolbar} alt='bar logo' className="w-32" />
                                )}

                                {isLegend && (
                                    <div className="flex flex-col items-left justify-center">
                                        <div className="flex flex-row items-left gap-2">
                                            <FaPepperHot className="text-sm text-red-500" />
                                            <p className="text-xs font-semibold">Spicy</p>
                                        </div>

                                        <div className="flex flex-row items-left gap-2 mt-1">
                                            <LuWheatOff className="text-sm text-yellow-500" />
                                            <p className="text-xs font-semibold">GF</p>
                                        </div>

                                        <div className="flex flex-row items-left gap-2 mt-1">
                                            <FaSeedling className="text-sm text-green-500" />
                                            <p className="text-xs font-semibold">Vegan</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 justify-center">
                        {categories.map((category, index) => (
                            <div key={index} className="mb-5">
                                <h2 
                                className={`text-2xl text-left px-2 mb-2 font-bold
                                    ${titleFont == 'New Amsterdam' && 'new-amsterdam-regular text-3xl'} 
                                    ${titleFont == 'Roboto' && 'roboto-bold'}
                                    ${titleFont == 'Ubuntu' && 'ubuntu-bold'}
                                `}>{category}
                                </h2>
                                
                                {barMenu.filter(item => item.category === category).map((item, idx) => (
                                    <MenuItem key={idx} {...item} 
                                />
                                ))}
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between h-[400px] lg:h-[500px] w-64">
                    <div>
                        <p className="text-left">Title Font</p>

                        <select 
                        className="select select-bordered rounded-2xl w-full mt-2" 
                        value={titleFont}
                        name="titleFont"
                        onChange={(e) => handleChange(e)}
                        >
                            {fonts.map((font, index) => (
                                <option key={index} value={font}>{font}</option>
                            ))}
                        </select>

                        <p className="text-left mt-5">Body Font</p>

                        <select
                        className="select select-bordered rounded-2xl w-full mt-2"
                        value={bodyFont}
                        name="bodyFont"
                        onChange={(e) => handleChange(e)}
                        >
                            {fonts.map((font, index) => (
                                <option key={index} value={font}>{font}</option>
                            ))}
                        </select>

                        <p className="text-left mt-5">Divider</p>

                        <select
                        className="select select-bordered rounded-2xl w-full mt-2"
                        value={divider}
                        name="divider"
                        onChange={(e) => handleChange(e)}
                        >
                            {dividers.map((divi, index) => (
                                <option key={index} value={divi}>{divi}</option>
                            ))}
                        </select>
                    </div>
                    
                    {isMessage && ( <><p className="text-md text-center font-medium mt-5">That would have downloaded!</p></> )}
                    
                    <button 
                        className="btn btn-primary rounded-2xl w-44"
                        onClick={handleMessage}
                    >
                        Download PDF 
                        <FaDownload />
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default DemoPDF;