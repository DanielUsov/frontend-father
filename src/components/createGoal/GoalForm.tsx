import React, { useState } from 'react';
import MultipleSelectCheckmarks from '../iuLib/InputBox';
import './goal.css';
const GoalForm: React.FC = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div id="course-section">
      <h2 onClick={() => setFormVisible(!isFormVisible)}>
      Поставить цель
      <img src="/Check.svg" alt="" />

      </h2>
      {isFormVisible && (
        <form id="course-form" className="course-form">
          <label htmlFor="course-name">Название цели:</label>
          <MultipleSelectCheckmarks />
          <label htmlFor="course-description">Описание цели:</label>
          <textarea id="course-description" placeholder='|Текст'></textarea>
          <label className='ll__1' htmlFor="form__contain">Кому назначить цель</label>
<div id="form__contain">
        <div className="check__cont">
          <div className="check__for">
          <input type="checkbox" id="assign-all" />{' '}
          <label htmlFor="assign-all">Назначить всем сотрудникам</label>
          </div>
          <div className="check__for">
          <input type="checkbox" id="assign-all" />{' '}
          <label htmlFor="assign-all">Назначить по должности</label>
          </div>
          <div className="check__for">
          <input type="checkbox" id="assign-all" />{' '}
          <label htmlFor="assign-all">Назначить индивидуально</label>
          </div>
          </div>
          <div className="fio_cont">
          <label htmlFor="employee-name">ФИО работника:</label>
          <MultipleSelectCheckmarks />
          {/* <input type="text" id="employee-name" placeholder='|Петр Петрович'/> */}
          {/* <label htmlFor="course-variant">Выбранные сотрудники</label>
          <div id="course-variant" placeholder='|Текст'></div> */}
          </div>
          </div>
          <div className="btn__cors">
          {/* <button id="load-button">Загрузить документ</button> */}
          <button id="create-buttone">Создать цель</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GoalForm;
