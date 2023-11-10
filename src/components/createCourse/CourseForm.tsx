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
        <div id="course-form" className="course-form">
          <label htmlFor="course-name">Название курса:</label>
          <input type="text" id="course-name" />
          <label htmlFor="course-category">Категория курса:</label>
          <input type="checkbox" id="course-category" />
          <label htmlFor="course-description">Описание курса:</label>
          <textarea id="course-description"></textarea>
          <label htmlFor="employee-name">ФИО работника:</label>
          <input type="text" id="employee-name" />
          <input type="checkbox" id="assign-all" />{' '}
          <label htmlFor="assign-all">Назначить всем сотрудникам</label>
          <label htmlFor="employee-position">Должность:</label>
          <input type="text" id="employee-position" />
          <label htmlFor="work-format">Формат работы:</label>
          <input type="text" id="work-format" />
          <button id="create-button">Создать</button>
        </div>
      )}
    </div>
  );
};

export default CourseForm;
