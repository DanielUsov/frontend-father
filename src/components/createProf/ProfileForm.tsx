import React, { useState } from 'react';
import './profile.css';
const ProfileForm: React.FC = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div id="prof-section">
      <h2 onClick={() => setFormVisible(!isFormVisible)}>
      Создать новую учетную запись
      </h2>
      {isFormVisible && (
        <>
        <h1>Создать новую учетную запись</h1>
        <div className="profile__contain">
        <div className="prof__img">
            <div className='prof__i'></div>
            <button className='prof__btn'>Загрузить фото</button>
          </div>
        <form id="prof-form" className="prof-form">
          <div className="prof__conts">
          <label htmlFor="prof-name">Фамилия</label>
          <input type="text" id="prof-name" placeholder='|Петров'/>
          </div>
          <div className="prof__conts">
          <label htmlFor="prof-name">Отчество (при наличии)</label>
          <input type="text" id="prof-name" placeholder='|Петрович'/>
          </div>
          <div className="prof__conts">
          <label htmlFor="prof-name">Имя</label>
          <input type="text" id="prof-name" placeholder='|Петр'/>
          </div>
          <div className="prof__conts">
          <label htmlFor="prof-name">Дата рождения</label>
          <input type="text" id="prof-name" placeholder='|29.02.2004'/>
          </div>
          <div className="prof__conts">
          <label htmlFor="prof-name">Должность</label>
          <input type="text" id="prof-name" placeholder='|Дизайнер'/>
          </div>
         
        </form>
        </div>
        <div className="btn__pro">
          <button id="create-button">Создать курс</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileForm;
