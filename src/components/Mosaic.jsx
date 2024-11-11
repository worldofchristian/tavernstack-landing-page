import React from 'react';
import PropTypes from 'prop-types';
import './MosaicStyles.css'; 

const PhotoMosaic = ({ images }) => {
    return (
        <div className="photo-mosaic mt-10">
            {images.map((imgSrc, index) => (
                <div key={index} className="mosaic-item">
                    <img src={imgSrc} alt={`Mosaic ${index + 1}`} loading="lazy" />
                </div>
            ))}
        </div>
    );
}

PhotoMosaic.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoMosaic;