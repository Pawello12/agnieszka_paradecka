import React from 'react';
import SocialMediaLink from './SocialMediaLink/SocialMediaLink';
import './SocialMedia.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;

const facebookUrl = "https://www.facebook.com/aparadecka";
const instagramUrl = "https://www.instagram.com/kitkacy";
const mailToUrl = "mailto:kontaktkitkacy@gmail.com";

const SocialMedia = () => {
    return(
        <div className="social-media">
            <SocialMediaLink name="facebook" icon={facebookIcon} type="link" url={facebookUrl} />
            <SocialMediaLink name="instagram" icon={instagramIcon} type="link" url={instagramUrl} />
            <SocialMediaLink mail1="aparadecka93" mail2="@gmail.com" icon={mailIcon} type="mail" url={mailToUrl} />
        </div>
    )
}

export default SocialMedia;

