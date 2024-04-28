import React from 'react';
import s from './style.module.scss';

export const Review = ({review, user}) => {

    const {text, rating} = review;
    const userName = user ? user.name : "Anonymous";

    return (
        <div className={s.review}>
            <p className={s.user}>{userName}</p>
            <p className={s.text}>{text}</p>
            <p className={s.rating}>{rating}</p>
        </div>
    );
};