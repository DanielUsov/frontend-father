import React from 'react';
import Rating from './Rating';
import './starRating.css'

const StarRating: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form id="ratingForm" className="star-rating" onSubmit={handleSubmit}>
            <Rating name="rating1" title="Содержание курса" />
            <Rating name="rating2" title="Актуальность материала" />
            <Rating name="rating3" title="Доступность материала" />
            <Rating name="rating4" title="Насколько сложно для тебя" />
            <div className="comment-section">
                <div>
                    <p>Комментарии</p>
                    <textarea id="comments" placeholder="|Начни вводить..."></textarea>
                </div>
            </div>
            <button type="submit" className="rat__btn">Отправить</button>
        </form>
    );
}

export default StarRating;
