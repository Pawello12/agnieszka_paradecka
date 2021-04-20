import React from 'react';
import Gallery from './Gallery/Gallery';
import './PortfolioGallery.scss';

const PortfolioGallery = ({name, group}) => {
    return (
        <div className="portfolio-gallery">
            <Gallery name={name} group={group} />
        </div>
    )
}

export default PortfolioGallery;