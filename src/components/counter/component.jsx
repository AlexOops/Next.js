import React from 'react';

import s from "./style.module.scss";
import {Button} from "@/components/button/component";

export const Counter = ({value, increment, decrement, min = 0, max = 5}) => {
    return (
        <div className={s.buttons}>
            <Button
                children={'-'}
                onClick={decrement}
                disabled={value === min}
                viewVariant={'amount'}
            />

            <div className={s.amount}>
                {value}
            </div>

            <Button
                children={'+'}
                onClick={increment}
                disabled={value === max}
                viewVariant={'amount'}
            />
        </div>
    );
};