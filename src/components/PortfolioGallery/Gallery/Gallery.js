import React from 'react';
import ImageGallery from 'react-image-gallery';
import imagesGallery from '../../../data/imagesGallery';

const Gallery =({name, group}) => {

    const images = imagesGallery.[group].[name];



    return(
        <div className="portfolio-gallery__gallery">
            <h2 className="portfolio-gallery__title">{images[0].category}</h2>
            <ImageGallery
            items={images}
            lazyLoad={true}
            originalClass={'portfolio-gallery__image'}
            thumbnailPosition={'bottom'}
            showPlayButton={images[0].showPlayButton}
            showFullscreenButton={images[0].showPlayButton}
            />
        </div>
    )
}

export default Gallery;