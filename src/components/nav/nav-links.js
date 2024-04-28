'use client'

import React from 'react';
import Link from "next/link";
import s from "@/components/nav/style.module.scss";
import {usePathname} from "next/navigation";
import classNames from "classnames";

export function Links() {

    const pathname = usePathname();

    const getLinkClassName = (path) => classNames(
        s.link,
        {[s.active]: pathname === path}
    );

    return (
        <nav className={s.navigation}>
            <div className={s.navList}>
                <Link className={getLinkClassName('/')} href={"/"}>Главная</Link>

                <Link className={getLinkClassName('/restaurants')} href={'/restaurants'}>Рестораны</Link>

                <Link className={getLinkClassName('/about-us')} href={'/about-us'}>О нас</Link>
            </div>
        </nav>
    );
}