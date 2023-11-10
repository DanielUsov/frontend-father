import React from 'react';

interface CardDetailsProps {
  card: {
    title: string;
    author: string;
    image: string;
    deadline: string;
    description: string;
    document: string;
  };
  onBack: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({ card, onBack }) => {
  return (
    <div className="card-details">
      <button className="back-button" onClick={onBack}>
        Назад
      </button>
      <h1>{card.title}</h1>
      <p>Дедлайн: {card.deadline}</p>
      <p>{card.description}</p>
      <a href={card.document} download>
        Скачать документ
      </a>
      <button className="submit-button">Отправить</button>
    </div>
  );
};

export default CardDetails;
