import React from 'react';

const SocialMediaLink = ({name, icon, url, type, mail1, mail2}) => {

    const typeCheck = () => {
        if (type === 'link')  {
            return (
                <>
                    <a className="social-media__a" href={url}><div className="social-media__content">{icon}</div></a>
                    <a className="social-media__a" href={url}><div className="social-media__name"><p>{name}</p></div></a>
                </>
            )
        } else if (type === 'mail') {
            return (
                <>
                    <a className="social-media__a" href={url}><div className="social-media__content">{icon}</div></a>
                    <a className="social-media__a" href={url}><div className="social-media__name social-media__name-mail"><p>{mail1}</p><p>{mail2}</p></div></a>
                </>
            )
        }
    }

    return(
        <div className="social-media__link">
            {typeCheck()}
        </div>

    )
}

export default SocialMediaLink;