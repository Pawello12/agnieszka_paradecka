import React from 'react';
import {NavLink} from 'react-router-dom';

const Button = ({text, url}) => {
    return(
        <button className="nav__button">
            <NavLink className="nav__link" to={url} >{text}</NavLink>
        </button>
    )
}

export default Button;