import React from 'react';
import PhotoMosaic from './Mosaic';
import bar1 from '../assets/bar1.jpg';
import bar2 from '../assets/bar2.jpg';
import bar3 from '../assets/bar3.jpg';
import bar4 from '../assets/bar4.jpg';
import bar5 from '../assets/bar5.jpg';
import bar6 from '../assets/bar6.jpg';

const DemoMosaic = () => {
    const images = [bar1, bar2, bar3, bar4, bar5, bar6];

    return (
        <>
            <div className="mockup-phone w-[350px] h-[600px]">
                <div className="camera"></div>
                <div className="display">
                    <PhotoMosaic 
                    images={images} 
                    />
                </div>
            </div>
        </>
    );
}

export default DemoMosaic;