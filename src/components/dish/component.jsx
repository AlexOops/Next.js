import React from 'react';
import s from './style.module.scss';
import Image from "next/image";
import {Ingredients} from "@/components/ingredients/components";
import Link from "next/link";

export const Dish = ({dish}) => {

    if (!dish) {
        return null;
    }

    return (
        <Link className={s.dish} href={`/dish/${dish.id}`}>

            <Image className={s.img}
                   alt={"dish"}
                   src={'/dish.png'}
                   width={160}
                   height={150}
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
            </div>
        </Link>
    );
};