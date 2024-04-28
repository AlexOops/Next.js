'use client'

import React from 'react';
import Image from "next/image";
import s from "./style.module.scss";
import {Ingredients} from "@/components/ingredients/components";
import {Counter} from "@/components/counter/component";
import {useDispatch, useSelector} from "react-redux";
import {selectDishAmount} from "@/redux/ui/cart/selectors";
import {decrementDish, incrementDish} from "@/redux/ui/cart";

export const DishFullDescription = ({dish}) => {

    if (!dish) {
        return null;
    }

    const dispatch = useDispatch();

    const amount = useSelector((state) => selectDishAmount(state, dish.id));

    const increment = () => dispatch(incrementDish(dish.id));
    const decrement = () => dispatch(decrementDish(dish.id));

    return (
        <div className={s.dish}>

            <div className={s.dishWrapper}>

                <Image className={s.img}
                       alt={"/dish"}
                       src={'/bigDish.png'}
                       width={500}
                       height={500}
                />

                <div className={s.name}>
                    <p>{dish.name}</p>
                </div>

                <div className={s.ingredients}>
                    <Ingredients ingredients={dish.ingredients}/>
                </div>

                <div className={s.quantityControl}>

                    <div className={s.price}>
                        <p>{dish.price} $</p>
                    </div>

                    <div className={s.buttons}>
                        <Counter value={amount} increment={increment} decrement={decrement}/>
                    </div>
                </div>
            </div>
        </div>
    );
};