import React from 'react';
import Star from './Star';

interface RatingProps {
    name: string;
    title: string;
}

const Rating: React.FC<RatingProps> = ({ name, title }) => {
    return (
        <div className='rating__rating'>
            <p>{title}</p>
            <div className="star-container">
                <Star id={`${name}1`} name={name} value={5} title="5 stars" />
                <Star id={`${name}2`} name={name} value={4} title="4 stars" />
                <Star id={`${name}3`} name={name} value={3} title="3 stars" />
                <Star id={`${name}4`} name={name} value={2} title="2 stars" />
                <Star id={`${name}5`} name={name} value={1} title="1 star" />
            </div>
        </div>
    );
}

export default Rating;
