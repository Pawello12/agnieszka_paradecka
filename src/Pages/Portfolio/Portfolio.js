import React from 'react';
import {Route, Switch, NavLink, Link, useRouteMatch} from 'react-router-dom';
import Painting from './Painting/Painting';
import {motion} from 'framer-motion';
import pageTransition from '../../config/pageTransition';

const Portfolio = () => {

    let { path, url } = useRouteMatch();

    return(
        <motion.main className="main main-portfolio" initial={pageTransition.initial} animate={pageTransition.animate} exit={pageTransition.exit}>


lorem


        </motion.main>
    )
}

export default Portfolio;