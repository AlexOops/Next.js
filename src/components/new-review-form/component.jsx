"use client"

import React, {useState} from 'react';
import s from "./style.module.scss";
import {Button} from "@/components/button/component";
import {v4 as uuidv4} from 'uuid';

import {createReview} from "@/services/api";
import {NewReviewSkeletonLoading} from "@/components/new-review-form/skeleton";

export const NewReviewForm = ({restaurantId, setReviews}) => {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        const newReview = {
            id: uuidv4(), // для того, чтобы на клиенте при обновлении добавлялся сразу id для key
            text,
            rating
        };

        try {
            await createReview(restaurantId, newReview);

            setText('');
            setRating(null);

            // наверх одием, чтобы сразу обновить локально
            setReviews(prevReviews => [...prevReviews, newReview]);

        } catch (error) {
            console.error("Failed to create review:", error);
            setError('Не удалось отправить отзыв. Попробуйте позже.');

            // Откатываем изменения при ошибке
            setReviews(prevReviews => prevReviews.filter(review => review !== newReview));

        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <NewReviewSkeletonLoading/>
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>

            <input className={s.input}
                   type="text"
                   value={text}
                   onChange={(e) => setText(e.target.value)}
                   placeholder={'Текст...'}
            />

            <input className={s.input}
                   type="number"
                   value={rating || ''}
                   onChange={(e) => setRating(Number(e.target.value))}
                   placeholder={'Рейтинг от 0 до 5'}
            />

            <Button
                type="submit"
                children={'Оставьть отзыв'}
                viewVariant={'base'}
                size={'m'}
            />

            {error && <div className={s.error}>{error}</div>}
        </form>
    );
};