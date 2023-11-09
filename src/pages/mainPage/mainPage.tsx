import React, { useState } from 'react';
import Category from '../../components/card/category';
import Card from '../../components/card/Card';
import Header from '../../components/header/header';
import CardDetails from '../../components/card/CardDetails';
import Goals from '../../components/goal/goals';
import Sidebar from '../../components/document/Sidebar';
import FAQ from '../../components/document/FAQ';
import './style.css'

interface CardProps {
    title: string;
    author: string;
    image: string;
    deadline: string;
    description: string;
    document: string;
}

interface GoalProps {
    title: string;
    completedTasks: number;
    totalTasks: number;
}

interface SectionProps {
    title: string;
    items: string[];
}

const mainPage: React.FC = () => {
    const categories = ['Текущие', 'Просроченные', 'Предстоящие'];
    const cards: Record<string, CardProps[]> = {
        Текущие: [
            { title: 'Карточка 1', author: 'Автор 1', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg', buttonText: 'начать' },
            { title: 'Карточка 2', author: 'Автор 2', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-2.jpg', buttonText: 'начать' },
            { title: 'Карточка 3', author: 'Автор 3', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-3.jpg', buttonText: 'продолжить' }
        ],
        Просроченные: [
            { title: 'Карточка 4', author: 'Автор 4', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-3.jpg', buttonText: 'продолжить', isOverdue: true },
            { title: 'Карточка 5', author: 'Автор 5', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg', buttonText: 'продолжить' },
            { title: 'Карточка 6', author: 'Автор 6', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg', buttonText: 'продолжить' }
        ],
        Предстоящие: [
            { title: 'Карточка 7', author: 'Автор 7', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-2.jpg', buttonText: 'пока рановато' },
            { title: 'Карточка 8', author: 'Автор 8', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-3.jpg', buttonText: 'пока рановато' },
            { title: 'Карточка 9', author: 'Автор 9', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg', buttonText: 'продолжить' }
        ]
    };

    const goals: GoalProps[] = [
        { title: 'Провести встречу с HR после первой недели', completedTasks: 0, totalTasks: 1 },
        { title: 'Пройти 10 курсов за 3 дня', completedTasks: 6, totalTasks: 10 },
    ];

    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [showCards, setShowCards] = useState(true);

    const sections: SectionProps[] = [
        { title: 'Важные документы', items: ['Документ 1', 'Документ 2', 'Документ 3'] },
        { title: 'FAQ', items: ['Вопрос 1', 'Вопрос 2', 'Вопрос 3'] },
    ];

    
    const handleQuestionClick = (question: string) => {
        setSelectedQuestion(question);
        setShowCards(false);
    };

    const handleBackClick = () => {
        setShowCards(true);
    };

    const [selectedCategory, setSelectedCategory] = useState('Текущие');
    const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

    // const [selectedCategory, setSelectedCategory] = useState('Текущие');

    return (
        <>
        < Header />
        <div className="our-block">
            <div className="sector-left">
        <Goals goals={goals} />
        <Sidebar sections={sections} onQuestionClick={handleQuestionClick}/>
        </div>
        {showCards ? (
        <div className='card-container'>
        <div className="category-title">
            <h1>Образовательные курсы</h1>
        </div>
            <div className="category">
                {categories.map(category => (
                    <Category
                        key={category}
                        category={category}
                        isSelected={selectedCategory === category}
                        onSelect={() => {
                            setSelectedCategory(category);
                            setSelectedCard(null);
                        }}
                    />
                ))}
            </div>
            <div className="band">
                {selectedCard ? (
                    <CardDetails card={selectedCard} onBack={() => setSelectedCard(null)} />
                ) : (
                    cards[selectedCategory].map((card, index) => (
                        <Card key={index} card={card} onSelect={() => setSelectedCard(card)} />
                    ))
                )}
            </div>
            
        </div>
                    ) : (
                        <>
                        <FAQ question={selectedQuestion} answer="Ответ на выбранный вопрос" />
                        <button onClick={handleBackClick}>Назад</button>
                        </>
                    )}
        </div>
        </>
    );
};

export default mainPage;
