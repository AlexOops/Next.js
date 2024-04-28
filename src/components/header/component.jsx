import React from 'react';
import s from './style.module.scss';

import {Links} from "@/components/nav/nav-links";
import {Button} from "@/components/button/component";

export const Header = () => {
    return (
        <header>
            <div className={"container-color"}>
                <div className={"container"}>

                    <div className={s.content}>
                        <div className={s.logo}>
                            <p>Tammy<span>Food</span></p>
                        </div>

                        <div className={s.control}>

                            <Links/>

                            <Button
                                children={'Личный кабинет'}
                                viewVariant={'base'}
                                size={'m'}
                            />

                        </div>
                    </div>

                </div>
            </div>

        </header>
    );
};