import React, { useState } from 'react';

import styles from './Reviews.module.css';

function Reviews() {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState(() => {
        // Load existing reviews from localStorage, or initialize as an empty array
        const savedReviews = localStorage.getItem('reviews');
        return savedReviews ? JSON.parse(savedReviews) : [];
    });

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && reviewText) {
            const newReview = {
                name,
                reviewText,
                rating,
                date: new Date().toLocaleString(),
            };
            const updatedReviews = [...reviews, newReview];
            setReviews(updatedReviews);
            // Save reviews to localStorage
            localStorage.setItem('reviews', JSON.stringify(updatedReviews));
            setName('');
            setReviewText('');
            setRating(0);
        }
    };

    const calculateAverageRating = () => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
        return (totalRating / reviews.length).toFixed(1);
    };

    const averageRating = calculateAverageRating();

    return (
        <div className={styles.reviewsContainer}>
            <h1>Відгуки про магазин Game Shop</h1>
            <form onSubmit={handleSubmit} className={styles.reviewsForm}>
                <h2>Додати відгук</h2>
                <label>Якість товару</label>
                <div className={styles.reviewsRating}>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            className={`${styles.reviewsStar} ${value <= rating ? styles.filled : ''}`}
                            onClick={() => handleStarClick(value)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <label>Ваше ім&apos;я</label>
                <input
                    type="text"
                    className={styles.reviewsInput}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label>Ваш відгук</label>
                <textarea
                    className={styles.reviewsTextarea}
                    value={reviewText}
                    onChange={(event) => setReviewText(event.target.value)}
                />
                <button type="submit" className={styles.reviewsButton}>
                    Відправити ваш відгук
                </button>
            </form>
            <div>
                <h2>Відгуки</h2>
                <p>Середній рейтинг: {averageRating} ★</p>
                <ul className={styles.reviewsList}>
                    {reviews.map((review, index) => (
                        <li key={index} className={styles.reviewsItem}>
                            <div className={styles.reviewsHeader}>
                                <span className={styles.reviewsName}>{review.name}</span>
                                <span className={styles.reviewsDate}>{review.date}</span>
                            </div>
                            <div className={styles.reviewsRatingValue}>{'★'.repeat(review.rating)}</div>
                            <p className={styles.reviewsText}>{review.reviewText}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Reviews;
