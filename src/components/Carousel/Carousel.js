import React from 'react';
import image1 from '../../img/home/1.jpg';
import image2 from '../../img/home/2.jpg';
import image3 from '../../img/home/3.jpg';

import ImageGallery from 'react-image-gallery';

import './Carousel.scss';

const images = [
    {
        original: image1,
        thumbnail: image1,
        description: `Tytuł
            rok, technika`,
        originalClass: "carousel__img",
        originalLabel: "sasdasdsad"
    },
    {
        original: image2,
        thumbnail: image2,
        description: `adasda
        x`
    },
    {
        original: image3,
        thumbnail: image3,
        description: "asdasdasd"
    }
];


const Carousel = () => {
    return(
        <div className="carousel">
            <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                autoPlay={true}
                showPlayButton={false}
                lazyLoad={true}
                slideDuration={450}
                slideInterval={5000}

            />
        </div>
    )
}

export default Carousel;