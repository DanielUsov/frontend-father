// App.tsx
import React, { useState } from 'react';
import Category from '../../components/card/category';
import Card from '../../components/card/Card';
import Header from '../../components/header/header';
import './style.css'

interface CardProps {
    title: string;
    author: string;
    image: string;
}

const mainPage: React.FC = () => {
    const categories = ['Текущие', 'Просроченные', 'Предстоящие'];
    const cards: Record<string, CardProps[]> = {
        Текущие: [
            { title: 'Карточка 1', author: 'Автор 1', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg' },
            { title: 'Карточка 2', author: 'Автор 2', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-2.jpg' },
            { title: 'Карточка 3', author: 'Автор 3', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-3.jpg' }
        ],
        Просроченные: [
            { title: 'Карточка 4', author: 'Автор 4', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg' },
            { title: 'Карточка 5', author: 'Автор 5', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg' },
            { title: 'Карточка 6', author: 'Автор 6', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-6.jpg' }
        ],
        Предстоящие: [
            { title: 'Карточка 7', author: 'Автор 7', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-7.jpg' },
            { title: 'Карточка 8', author: 'Автор 8', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-8.jpg' },
            { title: 'Карточка 9', author: 'Автор 9', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-9.jpg' }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('Текущие');

    return (
        <>
        < Header />
        <div className='card-container'>
            <div className="category">
                {categories.map(category => (
                    <Category
                        key={category}
                        category={category}
                        isSelected={selectedCategory === category}
                        onSelect={() => setSelectedCategory(category)}
                    />
                ))}
            </div>
            <div className="band">
                {cards[selectedCategory].map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </div>
        </>
    );
};

export default mainPage;
