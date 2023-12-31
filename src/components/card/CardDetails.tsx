import React from 'react';
import StarRating from '../starRating/StarRating';
import { ImportantDocument } from '../important-document';

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
            <button className="back-button" onClick={onBack}>Назад</button>
            <h1>{card.title}</h1>
            <p>Дедлайн: {card.deadline}</p>
            <p>{card.description}</p>
              < ImportantDocument title='Скачай документ' description='Для того, чтобы верно освоить каждый курс тебе необходимо скачать документ и внимательно прочитать его' />
            {/* <a href={card.document} download>Скачать документ</a> */}
            < StarRating />
        </div>
    );
};

export default CardDetails;
