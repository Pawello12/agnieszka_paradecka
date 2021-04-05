import React from 'react';

const Footer = ({year, name}) => {
    return (
        <footer>
            <p>
             &copy;{year} {name}
            </p>
        </footer>
    )
}

export default Footer;