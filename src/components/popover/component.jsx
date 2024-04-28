import React from 'react';
import s from "./style.module.scss";

export const Popover = ({children, x, y, onClose}) => {

    const positionStyle = {
        left: x,
        top: y
    }

    return (
        <>
            <div className={s.overlay} onClick={onClose}>
                <div className={s.popover} style={positionStyle}>
                    {children}
                </div>
            </div>
        </>
    );
};