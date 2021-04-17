import React from 'react';

const Category = ({name, className}) => {
    return (
        <div className={`category ${className}`}>
            <h2 className="category__name">{name}</h2>
        </div>
    )
}

export default Category;