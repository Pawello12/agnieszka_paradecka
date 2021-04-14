import React from 'react';
import SocialMediaLink from './SocialMediaLink/SocialMediaLink';
import './SocialMedia.scss';

const SocialMedia = () => {
    return(
        <div className="social-media">
            <SocialMediaLink />
            <SocialMediaLink />
            <SocialMediaLink />
        </div>
    )
}

export default SocialMedia;

