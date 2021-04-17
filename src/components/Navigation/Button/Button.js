import React from 'react';
import {NavLink} from 'react-router-dom';

const Button = ({text, url, openMenuHandler, exact}) => {
    return(
        <button className="nav__button">
            <NavLink onClick={openMenuHandler} className="nav__link" exact={exact} to={url} activeClassName={"current-route"} >{text}</NavLink>
        </button>
    )
}

export default Button;