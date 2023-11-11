import React, { useState } from 'react';
import LetterPopup from '../letterPopup/LetterPopup';
import './employeeProfile.css'

interface EmployeeProps {
    name: string;
    position: string;
    img: string;
    email: string;
    phone: string;
}

const EmployeeProfile: React.FC<EmployeeProps> = ({ name, position, img, email, phone }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    return (
        <div className='employee-profile'>
            <div className="employee__container">
                <img className='employ__img' src={img} />
                <div>
                    <p className="name">{name}</p>
                    <p className="position">{position}</p>
                    <p className="email">{email}</p>
                    <p className="phone">{phone}</p>
                </div>
            </div>
            <h1 className='h__act'>Возможные действия</h1>
            <div className='actions'>
                <div className='action-card' onClick={() => setPopupVisible(true)}>
                    <div className="action__container">
                        Написать письмо
                    </div>
                </div>
            </div>
            {isPopupVisible && <LetterPopup name={name} onClose={() => setPopupVisible(false)} />}
        </div>
    );
};

export default EmployeeProfile;
