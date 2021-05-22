import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Hamburger = ({openMenuHandler, menuActive}) => {

    return(
        <div className="nav__hamburger">
            <button onClick={openMenuHandler} aria-label="menu" >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}

export default Hamburger;