import React, {useState} from 'react';
import Button from './Button/Button';
import './Navigation.scss';
import Hamburger from './Hamburger/Hamburger';

const buttons = [{id: "start", url: "/", exact: true}, {id: "portfolio", url: "/portfolio"}, {id: "o mnie", url: "/about"}, {id: "kontakt", url: "/contact"}];

const Navigation = () => {

    const [menuActive, setMenuActive] = useState(false);

    const openMenuHandler = () => {
        setMenuActive(!menuActive);
    }

    const buttonsList = buttons.map(button => {
        return(
            <Button key={button.url} text={button.id} exact={button.exact} url={button.url} openMenuHandler={openMenuHandler} />
        )
    })

    const handleScreenSize = () => {
        setMenuActive(false);
    }

    window.addEventListener('resize', handleScreenSize);

    return(
        <div className="nav-container">
            <nav className="nav">
                <div className="nav__logo"></div>

                <div className={menuActive ? "nav__buttons nav__buttons-active" : "nav__buttons"}>
                    {buttonsList}
                </div>

                <Hamburger openMenuHandler={openMenuHandler} menuActive={menuActive} />
            </nav>
        </div>
    )
}

export default Navigation;