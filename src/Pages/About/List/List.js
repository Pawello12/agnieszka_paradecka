import React from 'react';

const List = ({content}) => {

    const list = content.items.map(item => <li key={item } className="about__li">{item}</li>)

    return(
        <div className="about__list">
            <h2 className="about__title">{content.name}:</h2>
            <ul className="about__ul">
                {list}
            </ul>
        </div>
    )
}

export default List;