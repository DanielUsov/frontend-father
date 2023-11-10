import React from 'react';
import './employeeProfile.css'

interface EmployeeProps {
    name: string;
    position: string;
    img: string;
    email: string;
    phone: string;
}

const EmployeeProfile: React.FC<EmployeeProps> = ({ name, position, img, email, phone }) => (
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
            <div className='action-card'>
                <div className="action__container">
                Поставить цели
                </div>
            </div>
            <div className='action-card'>
            <div className="action__container">
                Посмотреть аналитику
                </div>
            </div>
            <div className='action-card'>
            <div className="action__container">
            Редактировать курсы
                </div>
                
            </div>
            <div className='action-card'>
            <div className="action__container">
            Редактировать тестирования
                </div>
            </div>
            <div className='action-card'>
            <div className="action__container">
            Оставить обратную связь
                </div>
            </div>
            <div className='action-card'>
            <div className="action__container">
            Поблагодарить
                </div>
            </div>
        </div>
    </div>
);

export default EmployeeProfile;
