// Card.tsx
import React from 'react';

interface CardProps {
  card: {
    title: string;
    author: string;
    image: string;
    buttonText: string;
    deadline: string;
    isOverdue: boolean;
  };
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ card, onSelect }) => {
  let buttonClass = '';
  let buttonDisabled = false;

  switch (card.buttonText) {
    case 'начать':
      buttonClass = 'blue-button';
      break;
    case 'продолжить':
      buttonClass = 'black-button';
      break;
    case 'пока рановато':
      buttonClass = 'grey-button';
      buttonDisabled = true;
      break;
    default:
      break;
  }

  return (
    <div className="card" onClick={onSelect}>
      <div className="thumb" style={{ backgroundImage: `url(${card.image})` }}>
        <div className="icon">🔔</div>
        <h1>{card.title}</h1>
        {card.isOverdue && (
          <div className="overdue">Просроченный дедлайн: {card.deadline}</div>
        )}
      </div>
      <article>
        <span>{card.author}</span>
      </article>
      <button
        className={`details-button ${buttonClass}`}
        disabled={buttonDisabled}
      >
        {card.buttonText}
      </button>
    </div>
  );
};

export default Card;
