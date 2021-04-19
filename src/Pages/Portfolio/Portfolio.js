import React from 'react';
import {Route, Switch, NavLink, Link, useRouteMatch} from 'react-router-dom';
import Painting from './Painting/Painting';
import {motion} from 'framer-motion';
import pageTransition from '../../config/pageTransition';
import Category from '../../components/Category/Category';
import Categories from '../../components/Categories/Categories';
import {categoriesList, paintingCategoriesList, fabricCategoriesList, otherCategoriesList} from '../../data/categoriesList';

const Portfolio = () => {

    let { path, url } = useRouteMatch();

    return(
        <motion.main className="main main-portfolio" initial={pageTransition.initial} animate={pageTransition.animate} exit={pageTransition.exit} transition={pageTransition.duration}>

            <Switch>
                <Route exact path={'/portfolio'}>
                    <Categories categories={categoriesList} path={path} url={url} />
                </Route>

                <Route path={'/portfolio/painting'}>
                    <Categories categories={paintingCategoriesList} path={path} url={url} goBack={true} />
                </Route>

                <Route path={'/portfolio/fabric'}>
                    <Categories categories={fabricCategoriesList} path={path} url={url} goBack={true} />
                </Route>

                <Route path={'/portfolio/other'}>
                    <Categories categories={otherCategoriesList} path={path} url={url} goBack={true} />
                </Route>


            </Switch>

        </motion.main>
    )
}

export default Portfolio;