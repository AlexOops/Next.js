import React from 'react';

import s from './style.module.scss';

// index временно
export const Ingredients = ({ingredients}) => {
    return (
        <>
            {ingredients.map((ingredient, index) => <p key={index} className={s.ingredient}>{ingredient}</p>)}
        </>
    );
};