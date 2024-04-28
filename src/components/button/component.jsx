 import React, {forwardRef} from 'react';
import classNames from "classnames";
import s from './style.module.scss';

export const Button = forwardRef(function Button({children, onClick, disabled, viewVariant, size, className}, ref) {
    return (
        <button className={
            classNames(
                s.button,
                s[viewVariant],
                s[size],
                className
            )}
                ref={ref}
                onClick={onClick}
                disabled={disabled}
        >
            {children}

        </button>
    );
});