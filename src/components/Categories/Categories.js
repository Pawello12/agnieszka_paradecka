import React from 'react';
import {Link, Route, Switch, useRouteMatch, useHistory} from 'react-router-dom';
import Category from '../Category/Category';
import PortfolioGallery from '../PortfolioGallery/PortfolioGallery';

const Categories = ({categories, goBack, path, url}) => {
    // let { path, url } = useRouteMatch();
    let history = useHistory();
    console.log(history)
    console.log(categories)

    const links = categories.map(category => {
        if (goBack === false){
            return (
                <Link to={`${url}/${category.url}`} key={category.url}>
                    <Category name={category.name} className={`category-${category.url}`} />
                </Link>
            )
        } else {
            return(
                <Link to={`${history.location.pathname}/${category.url}`} key={category.url}>
                    <Category name={category.name} className={`category-${category.url}`} />
                </Link>
            )
        }
    })

    const routes = categories.map(category => {
        return(
            <Route exact path={`/portfolio/${categories[0].group}/${category.url}`} key={category.url}>
                <PortfolioGallery name={category.url} />
            </Route>
        )

    })

    return (
        <div className="categories">

            <Route exact path={goBack ? `/portfolio/${categories[0].group}` : `/portfolio`}>
                {links}
                {goBack ? <button className="categories__button" onClick={history.goBack} >Powrót</button> : ''}
            </Route>

            {routes}

        </div>
    )
}

export default Categories;
