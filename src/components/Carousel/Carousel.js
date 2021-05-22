import React from 'react';
import image1 from '../../img/home/1.jpg';
import image2 from '../../img/home/2.jpg';
import image3 from '../../img/home/3.jpg';
import image4 from '../../img/home/4.jpg';
import image5 from '../../img/home/5.jpg';

import ImageGallery from 'react-image-gallery';

import './Carousel.scss';

const images = [
    {
        original: image1,
        thumbnail: image1,
        description: `Pejzaż jesienny
            2018, 50x70`,
        originalClass: "carousel__img",
        originalAlt: 'Pejzaż jesienny'
    },
    {
        original: image2,
        thumbnail: image2,
        description: `Czeczotka`,
        originalAlt: 'Czeczotka'
    },
    {
        original: image3,
        thumbnail: image3,
        description: `Tkanina Maki
        druk sublimacyjny na podłożu poliestrowym`,
        originalAlt: 'Tkanina Maki'
    },
    {
        original: image4,
        thumbnail: image4,
        description: `Fantasmagoria
        2019, 70x50`,
        originalAlt: 'Fantasmagoria'
    },
    {
        original: image5,
        thumbnail: image5,
        description: `Futrzak`,
        originalAlt: 'Futrzak'
    },
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