import React from 'react';
import {Link, Route, useRouteMatch, useHistory} from 'react-router-dom';
import Category from '../Category/Category';

const Categories = ({categories, goBack}) => {
    let { path, url } = useRouteMatch();
    let history = useHistory();
    console.log(path)

    const links = categories.map(category => {
        return (
            <Link to={`${url}/:${category.url}`} key={Math.random()}>
                <Category name={category.name} className={`category-${category.url}`} />
            </Link>
        )
    })

    const routes = categories.map(category => {
        return (
            <Route path={`${path}/:${category.url}`} key={category.url}>
                {category.name}
            </Route>
        )
    })

    return (
        <div className="categories">
            <Route exact path={path} >
                {links}
                {goBack ? <Link><button className="categories__button" onClick={history.goBack} >Powrót</button></Link> : ''}
            </Route>

            {routes}
        </div>
    )
}

export default Categories;
