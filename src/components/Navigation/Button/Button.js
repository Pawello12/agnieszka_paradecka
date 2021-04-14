import React from 'react';
import {NavLink} from 'react-router-dom';

const Button = ({text, url, openMenuHandler}) => {
    return(
        <button className="nav__button">
            <NavLink onClick={openMenuHandler} className="nav__link" to={url} >{text}</NavLink>
        </button>
    )
}

export default Button;