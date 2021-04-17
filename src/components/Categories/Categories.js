import React from 'react';
import {Link, useRouteMatch, useHistory} from 'react-router-dom';
import Category from '../Category/Category';

const Categories = ({categories, goBack}) => {
    let { path, url } = useRouteMatch();
    let history = useHistory();

    const links = categories.map(category => {
        return (
            <Link to={`${url}/:${category.url}`} key={category.url}>
                <Category name={category.name} className={`category-${category.url}`} />
            </Link>
        )
    })

    return (
        <div className="categories">
            {links}
            {goBack ? <Link><button className="categories__button" onClick={history.goBack} >Powrót</button></Link> : ''}
        </div>
    )
}

export default Categories;
