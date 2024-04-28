import React from 'react';
import s from "./style.module.scss";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={"container-color"}>
                <div className={"container"}>

                    <div className={s.logo}>
                            <p>Tammy<span>Food</span></p>
                    </div>

                </div>
            </div>
        </footer>
    );
};