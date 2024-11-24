import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { LuWheatOff } from "react-icons/lu";
import { FaSeedling, FaPepperHot } from "react-icons/fa";

const DemoAbout = ({ cosmo }) => {
    const [photo, setPhoto] = useState([cosmo]); 
    const [title, setTitle] = useState('Cosmo');
    const [price, setPrice] = useState(9);
    const [description, setDescription] = useState('Vodka, triple sec, lime, cranberry juice');
    const [isSpicy, setIsSpicy] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [activeTab, setActiveTab] = useState('image');
    const [indicator, setIndicator] = useState('');

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newPhoto = files.map(file => URL.createObjectURL(file));
        setPhoto(prevPhoto => [...prevPhoto, ...newPhoto]);
    };

    const handleDelete = (index) => {
        setPhoto(prevPhoto => prevPhoto.filter((_, i) => i !== index));
    };

    return (
        <div className="mockup-browser border-slate-600 bg-base-300 mb-20 w-full rounded-2xl mx-auto">
            <div className="mockup-browser-toolbar"></div>
        
            <div className="flex flex-col items-center justify-center w-[370px] lg:w-[500px] mb-10">
                {/* Preview */}
                <div className="flex flex-row items-center justify-center px-8 gap-5 my-10">
                    {photo.length > 0 && (
                        <div className='flex items-center justify-center'>
                            <div className="relative flex w-32 lg:w-40">
                                <img 
                                    src={photo[0]} alt={`Menu photo`} 
                                    className="rounded-2xl w-32 h-32 object-cover" 
                                />
                                {indicator && (
                                    <span className="badge badge-primary absolute top-[-10px] right-[-5px]">
                                        {indicator}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    <div className='flex flex-col'>
                        <h1 className="text-lg lg:text-xl mt-5 font-semibold text-left">
                            {title}
                        </h1>

                        <div className='flex flex-row items-center gap-2 mt-1'>
                            {isSpicy && <FaPepperHot className="text-md text-red-500 inline mr-2" />}
                            {isGlutenFree && <LuWheatOff className="text-md text-yellow-500 inline mr-2" />}
                            {isVegan && <FaSeedling className="text-md text-green-500 inline mr-2" />}
                        </div>

                        <p className="text-left mt-2 lg:mb-5 overflow-wrap text-left break-word overflow-hidden lg:w-64">
                            {description}
                        </p>

                        <p className="text-left text-xl lg:text-2xl font-semibold mt-2 lg:mb-5 overflow-hidden">
                            {price}
                        </p>
                    </div>   
                </div>

                {/* Divider */}
                <div className="divider divider-primary">Try it out!</div>

                <div className="h-[410px]">
                <div className='flex items-center justify-center gap-2 my-5 w-72'>
                    {['image', 'text', 'icons'].map((tab) => (
                        <div 
                            key={tab} 
                            value={tab}
                            className={
                                `rounded-2xl py-1 bg-base-300 w-32 h-9 text-center border-2 cursor-pointer
                                ${activeTab === tab ? 'border-primary' : 'border-base-100'}`
                            }
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </div>
                    ))}
                </div>

                {/* Images Tab */}
                {activeTab === 'image' && (
                    <div className="flex flex-col items-center justify-center w-72"> 
                        <input
                            type="file"
                            className="file-input file-input-bordered mt-5 file-input-neutral w-full rounded-2xl max-w-xs"
                            multiple
                            onChange={handleFileChange}
                        />

                        <div className="mt-5 w-full">
                            <div className="flex flex-wrap gap-4">
                                {photo.map((imgSrc, index) => (
                                    <div key={index} className="relative w-24 lg:w-32">
                                        <img 
                                            src={imgSrc} alt={`Menu photo preview ${index + 1}`} 
                                            className="w-full h-full object-cover rounded-2xl" 
                                        />

                                        <TiDelete
                                            className="absolute -top-1 -right-1 text-red-500 text-2xl cursor-pointer"
                                            onClick={() => handleDelete(index)}
                                            title="Delete Photo"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Text Tab */}
                {activeTab === 'text' && (
                    <div className="flex flex-col items-center lg:items-start justify-center gap-10 mb-10">
                        <div className="w-72">
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-lg font-bold text-left">Title</p>

                                <input
                                    className="input input-bordered w-full rounded-2xl mt-2"
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col items-start justify-start">
                                <p className="text-lg font-bold text-left mt-4">Price</p>

                                <input
                                    className="input input-bordered w-full rounded-2xl mt-2"
                                    type="number"
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            
                            <div className="flex flex-col items-start">
                                <p className="text-lg font-bold text-left mt-4">Description</p>
                                <textarea
                                    className="textarea textarea-bordered rounded-2xl w-full mt-2"
                                    type="text"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    maxLength={200} // Enforce maximum characters
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    {200 - description.length} characters remaining
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Styles Tab */}
                {activeTab === 'icons' && (
                    <div className="flex flex-col items-center lg:items-start justify-center gap-10 p-4 mb-10">
                        <div className="w-72">
                            <div className="form-control w-full">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Spicy</span>
                                    <input 
                                        type="checkbox" 
                                        checked={isSpicy}
                                        onChange={(e) => setIsSpicy(e.target.checked)} 
                                        className="checkbox checkbox-primary" 
                                    />
                                </label>

                                <label className="label cursor-pointer">
                                    <span className="label-text">Gluten Free</span>
                                    <input 
                                        type="checkbox" 
                                        checked={isGlutenFree}
                                        onChange={(e) => setIsGlutenFree(e.target.checked)} 
                                        className="checkbox checkbox-primary" 
                                    />
                                </label>

                                <label className="label cursor-pointer">
                                    <span className="label-text">Vegan</span>
                                    <input 
                                        type="checkbox" 
                                        checked={isVegan}
                                        onChange={(e) => setIsVegan(e.target.checked)} 
                                        className="checkbox checkbox-primary" 
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start w-full">
                            <p className="text-lg font-bold text-left mb-4">Indicator</p>

                            <select 
                                className="select select-bordered rounded-2xl w-full max-w-xs"
                                value={indicator}
                                onChange={(e) => setIndicator(e.target.value)}
                            >
                                <option value="">None</option>
                                <option value="Popular">Popular</option>
                                <option value="Special">Special</option>
                                <option value="New">New</option>
                                <option value="Sold Out">Sold Out</option>
                            </select>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default DemoAbout
