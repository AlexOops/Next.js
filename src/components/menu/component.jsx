import React from 'react';
import s from './style.module.scss';
import {Dish} from "@/components/dish/component";

export const Menu = ({dishes}) => {

    return (
        <div className={s.menu}>
            {
                dishes?.map((dish) => <Dish key={dish.id} dish={dish}/>)
            }
        </div>
    );
};