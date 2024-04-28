import React from 'react';
import s from "./style.module.scss";
import classNames from "classnames";

export const LoadingSkeleton = ({className}) => {
    return (
        <div className={classNames(
            s.loading,
            className
        )}>
            Загрузка данных ...
        </div>
    );
};