import React from 'react';
import {Link, Route, useRouteMatch, useHistory} from 'react-router-dom';
import Category from '../Category/Category';

const Categories = ({categories, goBack, path, url}) => {
    // let { path, url } = useRouteMatch();
    let history = useHistory();
    console.log(history)

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

    return (
        <div className="categories">
                {links}
                {goBack ? <Link><button className="categories__button" onClick={history.goBack} >Powrót</button></Link> : ''}
        </div>
    )
}

export default Categories;
