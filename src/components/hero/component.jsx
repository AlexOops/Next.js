'use client'

import React, {useRef, useState} from 'react';

import {createPortal} from "react-dom";

import s from './style.module.scss';
import {Button} from "@/components/button/component";
import {Popover} from "@/components/popover/component";

import Link from "next/link";
import Image from "next/image";

export const Hero = () => {

    const buttonRef = useRef();

    const [cartPosition, setCartPosition] = useState();

    // Обработать !!!
    const container = document.getElementById("popover-container");

    const openHits = () => {

        if (buttonRef.current) {
            const {x, y, width, height} = buttonRef.current.getBoundingClientRect();
            setCartPosition({x: x + width, y: y + height});
        }
    }

    return (
        <div>
            <div className={"container-color"}>
                <div className={"container"}>

                    <div className={s.content}>
                        <div className={s.info}>

                            <Button
                                children={"Быстрая Доставка"}
                                viewVariant={'light'}
                                size={'l'}
                            />

                            <h1 className={s.title}>Откройте для себя свое любимое блюдо
                                и <span>пробуйте его вечно</span></h1>
                            <p className={s.text}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>

                            <Button
                                ref={buttonRef}
                                onClick={() => openHits()}
                                children={"Вкусно покушать"}
                                viewVariant={'base'}
                                size={'l'}
                            />

                            {
                                cartPosition &&
                                container &&

                                createPortal(
                                                /* позиция */
                                    <Popover {...cartPosition} onClose={() => setCartPosition(null)}>
                                        <div>Ты можешь вкусно покушайть перейдя по ссылке
                                            <Link className={s.link} href={"/restaurant"}>RESTAURANTS</Link>
                                        </div>
                                    </Popover>,

                                    container
                                )
                            }

                        </div>

                        <Image className={s.image}
                               alt={"bgk"}
                               src={'/mainDish.png'}
                               width={885}
                               height={527}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};