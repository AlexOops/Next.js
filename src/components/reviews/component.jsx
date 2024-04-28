"use client"

import React, {useMemo, useState} from 'react';
import {Review} from "../review/component.jsx";
import s from "./style.module.scss";
import {NewReviewForm} from "@/components/new-review-form/component";

export const Reviews = ({data, users, restaurantId}) => {

    if (!data || !users) {
        return null;
    }

    const [reviews, setReviews] = useState(data);

    const reviewsWithUsers = useMemo(() => {
        return reviews?.map((review) => {
            const user = users?.find((user) => user.id === review.userId)
            return {...review, user}
        })
    }, [reviews, users]);

    return (
        <div>
            <div className={s.reviews}>

                {
                    reviewsWithUsers?.map((review) =>
                        <Review key={review.id} review={review} user={review.user}/>
                    )
                }

            </div>

            <div className={s.newReview}>
                <NewReviewForm restaurantId={restaurantId} setReviews={setReviews}/>
            </div>

        </div>

    );
};