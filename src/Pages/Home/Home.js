import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import {motion} from 'framer-motion';
import pageTransition from '../../config/pageTransition';


const Home = () => {
    return(
        <motion.main className="main main-home" initial={pageTransition.initial} animate={pageTransition.animate} exit={pageTransition.exit}>
            <Carousel />
        </motion.main>
    )
}

export default Home;