import React, {useState} from 'react';
import Button from './Button/Button';
import './Navigation.scss';
import Hamburger from './Hamburger/Hamburger';

const buttons = ["start", "portfolio", "o mnie", "kontakt"];

const Navigation = () => {

    const [menuActive, setMenuActive] = useState(false);

    const buttonsList = buttons.map(button => {
        return(
            <Button key={button} text={button} />
        )
    })


    const openMenuHandler = () => {
        setMenuActive(!menuActive);
    }


    return(
        <>
            <nav className="nav">
                <div className="nav__logo"></div>
                <div className={menuActive ? "nav__buttons nav__buttons-active" : "nav__buttons"}>
                    {buttonsList}
                </div>
                <Hamburger openMenuHandler={openMenuHandler} menuActive={menuActive} />
            </nav>
        </>
    )
}

export default Navigation;