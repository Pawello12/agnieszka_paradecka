import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Hamburger = () => {
    return(
        <div className="nav__hamburger">
            <button>
                <FontAwesomeIcon icon={faCoffee}/>
            </button>
        </div>
    )
}

export default Hamburger;