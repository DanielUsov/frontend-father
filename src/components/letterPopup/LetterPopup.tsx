import React from 'react';
import './letter.css'
interface PopupProps {
    name: string;
    onClose: () => void;
}

const LetterPopup: React.FC<PopupProps> = ({ name, onClose }) => (
    <div className='letter-popup'>
        <h2>Написать письмо</h2>
        <h3>Кому</h3>
        <p>{name}</p>
        <textarea id="letter-content"></textarea>
        <div className="letter__pop">
        <button onClick={onClose}>Вернуться назад</button>
        <button onClick={onClose}>Отправить</button>
        </div>
    </div>
);

export default LetterPopup;
