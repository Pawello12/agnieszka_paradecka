import printedImage1 from '../img/portfolio/fabric/printed/images/1.JPG';
import printedImage2 from '../img/portfolio/fabric/printed/images/2.JPG';
import printedImage3 from '../img/portfolio/fabric/printed/images/3.JPG';
import printedImage4 from '../img/portfolio/fabric/printed/images/4.JPG';
import printedImage5 from '../img/portfolio/fabric/printed/images/5.JPG';
import printedImage6 from '../img/portfolio/fabric/printed/images/6.JPG';
import printedImage7 from '../img/portfolio/fabric/printed/images/7.JPG';

import sketchesImage1 from '../img/portfolio/other/sketches/images/1.jpg';
import sketchesImage2 from '../img/portfolio/other/sketches/images/2.jpg';
import sketchesImage3 from '../img/portfolio/other/sketches/images/3.jpg';

import realizationsImage1 from '../img/portfolio/fabric/realizations/images/1.JPG';
import realizationsImage2 from '../img/portfolio/fabric/realizations/images/2.JPG';
import realizationsImage3 from '../img/portfolio/fabric/realizations/images/3.JPG';
import realizationsImage4 from '../img/portfolio/fabric/realizations/images/4.JPG';
import realizationsImage5 from '../img/portfolio/fabric/realizations/images/5.JPG';

const imagesGallery = {
    painting: {
        watercolor: [
            {
                category: 'Akwarela',
                original: printedImage1,
                thumbnail: printedImage1,
                originalTitle: 'Tkanina Geometrica',
                description: 'Tkanina Geometrica \n sitodruk, bawełna, 150 x 300 cm'
            }
        ],
        landscape: [],
        abstraction: []
    },
    fabric: {
        printed: [
            {
                category: 'Tkanina drukowana',
                original: printedImage1,
                thumbnail: printedImage1,
                originalTitle: 'Tkanina Geometrica',
                description: 'Tkanina Geometrica \n sitodruk, bawełna, 150 x 300 cm'
            },
            {
                category: 'Tkanina drukowana',
                original: printedImage2,
                thumbnail: printedImage2,
                originalTitle: 'Tkanina Geometrica',
                description: 'Tkanina Geometrica \n sitodruk, bawełna, 150 x 300 cm'
            },
            {
                category: 'Tkanina drukowana',
                original: printedImage3,
                thumbnail: printedImage3,
                originalTitle: 'Tkanina Ciało',
                description: 'Tkanina Ciało \n sitodruk, bawełna, 120 x 280 cm'
            },
            {
                category: 'Tkanina drukowana',
                original: printedImage4,
                thumbnail: printedImage4,
                originalTitle: 'Tkanina Mozaika',
                description: 'Tkanina Mozaika \n druk sublimacyjny na podłożu poliestrowym, 120 x 280 cm'
            },
            {
                category: 'Tkanina drukowana',
                original: printedImage5,
                thumbnail: printedImage5,
                originalTitle: 'Tkanina Maki',
                description: 'Tkanina Maki \n druk sublimacyjny na podłożu poliestrowym, 120 x 280 cm'
            },
            {
                category: 'Tkanina drukowana',
                original: printedImage6,
                thumbnail: printedImage6,
                originalTitle: 'Tkanina Miasto',
                description: 'Tkanina Miasto \n druk sublimacyjny na podłożu poliestrowym, 120 x 280 cm'
            },
            {
                category: 'Tkanina drukowana',
                original: printedImage7,
                thumbnail: printedImage7,
                originalTitle: 'Tkanina Tygrys',
                description: 'Tkanina Tygrys \n druk sublimacyjny na podłożu poliestrowym, 120 x 280 cm'
            },
        ],
        unique: '',
        realizations: [
            {
                category: 'Realizacje',
                original: realizationsImage1,
                thumbnail: realizationsImage1,
                originalTitle: 'Poduszki Mikro',
                description: 'Poduszki Mikro \n druk sublimacyjny na podłożu poliestrowym'
            },
            {
                category: 'Realizacje',
                original: realizationsImage2,
                thumbnail: realizationsImage2,
                originalTitle: 'Tkanina Geometrica 2',
                description: 'Tkanina Geometrica 2 \n sitodruk'
            },
            {
                category: 'Realizacje',
                original: realizationsImage3,
                thumbnail: realizationsImage3,
                originalTitle: 'Poduszki w motyle',
                description: 'Poduszki w motyle \n druk sublimacyjny na podłożu poliestrowym'
            },
            {
                category: 'Realizacje',
                original: realizationsImage4,
                thumbnail: realizationsImage4,
                originalTitle: 'Poduszki Mikro',
                description: 'Poduszki Mikro \n druk sublimacyjny na podłożu poliestrowym'
            },
            {
                category: 'Realizacje',
                original: realizationsImage5,
                thumbnail: realizationsImage5,
                originalTitle: 'Tkanina Geometrica 2',
                description: 'Tkanina Geometrica 2 \n sitodruk'
            },
        ]
    },
    other: {
        sketches: [
            {
                category: 'Szkice',
                original: sketchesImage1,
                thumbnail: sketchesImage1,
                originalTitle: 'Szkic 1',
                description: 'Szkic 1'
            },
            {
                category: 'Szkice',
                original: sketchesImage2,
                thumbnail: sketchesImage2,
                originalTitle: 'Szkic 2',
                description: 'Szkic 2'
            },
            {
                category: 'Szkice',
                original: sketchesImage3,
                thumbnail: sketchesImage3,
                originalTitle: 'Szkic 3',
                description: 'Szkic 3'
            },
        ],
        drawing: [],
        stepbystep: []
    }

    };

export default imagesGallery;