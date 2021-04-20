import React from 'react';
import Gallery from './Gallery/Gallery';

const PortfolioGallery = ({name}) => {
    return (
        <div className="portfolio-gallery">
            <Gallery name={name} />
        </div>
    )
}

export default PortfolioGallery;