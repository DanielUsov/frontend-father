import React, { useState } from 'react';
import { useFormSelect } from '../../hooks/formSelect';
import './profile.css';
import { objectIsEmptyCheck } from '../../utils/objectIsEmpty';

const ProfileForm: React.FC = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const { selectData, updateField } = useFormSelect({
    name: '',
    lastName: '',
    patronymic: '',
    role_title: '',
    dateOfBirth: '',
  });

  const handleClick = () => {
    if (objectIsEmptyCheck(selectData, Object.keys(selectData))) {
    }
  };

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
              <div className="prof__i"></div>
              <button className="prof__btn">Загрузить фото</button>
            </div>
            <form id="prof-form" className="prof-form">
              <div className="prof__conts">
                <label htmlFor="prof-name">Фамилия</label>
                <input
                  type="text"
                  id="prof-name"
                  placeholder="|Петров"
                  value={selectData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div className="prof__conts">
                <label htmlFor="prof-name">Отчество (при наличии)</label>
                <input
                  type="text"
                  id="prof-name"
                  placeholder="|Петрович"
                  value={selectData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                />
              </div>
              <div className="prof__conts">
                <label htmlFor="prof-name">Имя</label>
                <input
                  type="text"
                  id="prof-name"
                  placeholder="|Петр"
                  value={selectData.patronymic}
                  onChange={(e) => updateField('patronymic', e.target.value)}
                />
              </div>
              <div className="prof__conts">
                <label htmlFor="prof-name">Дата рождения</label>
                <input
                  type="text"
                  id="prof-name"
                  placeholder="|29.02.2004"
                  value={selectData.dateOfBirth}
                  onChange={(e) => updateField('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="prof__conts">
                <label htmlFor="prof-name">Должность</label>
                <input
                  type="text"
                  id="prof-name"
                  placeholder="|Дизайнер"
                  value={selectData.role_title}
                  onChange={(e) => updateField('role_title', e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="btn__pro">
            <button id="create-button" type="button" onClick={handleClick}>
              Создать курс
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileForm;
