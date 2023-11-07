import React from 'react';

interface CardProps {
    card: {
        title: string;
        author: string;
        image: string;
    };
}

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className="card">
            <div className="thumb" style={{ backgroundImage: `url(${card.image})` }}>
                <h1>{card.title}</h1>
            </div>
            <article>
                <span>{card.author}</span>
            </article>
        </div>
    );
};

export default Card;
