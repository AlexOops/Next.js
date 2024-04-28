'use client'

import React from 'react';
import s from "./style.module.scss";
import {usePathname} from 'next/navigation';
import classNames from "classnames";
import Link from "next/link";

const Tab = ({path, name, navigate=""}) => {
    const pathname = usePathname();

    const completePath = `${path}${navigate}`; // Полный путь с подразделом

    const getLinkClassName = (targetPath) => classNames(
        s.tab,
        {[s.active]: pathname === targetPath}
    );

    return (
        <Link className={getLinkClassName(path)} href={completePath} prefetch={false}>
            {name}
        </Link>
    );
};

export default Tab;