import React from 'react';
import Button from './Button/Button';
import './Navigation.scss';
import Hamburger from './Hamburger/Hamburger';

const buttons = ["start", "portfolio", "o mnie", "kontakt"];

const Navigation = () => {


    const buttonsList = buttons.map(button => {
        return(
            <Button key={button} text={button} />
        )
    })

    return(
        <>
            <div className="nav">
                <div className="nav__logo"></div>
                <div className="nav__buttons">
                    {buttonsList}
                </div>
                <Hamburger />
            </div>
        </>
    )
}

export default Navigation;