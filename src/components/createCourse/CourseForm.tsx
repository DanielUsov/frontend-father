import React, { useState } from 'react';
import './course.css';
const CourseForm: React.FC = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div id="course-section">
      <h2 onClick={() => setFormVisible(!isFormVisible)}>
        Создание образовательного курса
      </h2>
      {isFormVisible && (
        <form id="course-form" className="course-form">
          <label htmlFor="course-name">Название курса:</label>
          <input type="text" id="course-name" placeholder='|Текст'/>
          <label htmlFor="course-description">Описание курса:</label>
          <textarea id="course-description" placeholder='|Текст'></textarea>
          <label className='ll__1' htmlFor="form__contain">Кому назначить курс</label>
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
          <input type="text" id="employee-name" placeholder='|Петр Петрович'/>
          <label htmlFor="course-variant">Выбранные сотрудники</label>
          <div id="course-variant" placeholder='|Текст'></div>
          </div>
          </div>
          <div className="btn__cor">
          <button id="load-button">Загрузить документ</button>
          <button id="create-button">Создать курс</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CourseForm;
