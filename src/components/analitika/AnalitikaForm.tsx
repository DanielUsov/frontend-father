import React, { useState } from 'react';
import MultipleSelectCheckmarks from '../iuLib/InputBox';
import './analitika.css';
const AnalitikaForm: React.FC = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div id="analitika-section">
      <h2 onClick={() => setFormVisible(!isFormVisible)}>
      Аналитика
      <img src="/Check.svg" alt="" />

      </h2>
      {isFormVisible && (
        <form id="analitika-form" className="analitika-form">
          <div className="form__anal">
          <label htmlFor="analitika-name">ФИО</label>
          <MultipleSelectCheckmarks />
          <label htmlFor="analitika-description">Должность</label>
          <MultipleSelectCheckmarks />
          <label className='ll__1' htmlFor="form__contain">Доп фильтры</label>
          </div>
<div id="form__c">
        <div className="check__c">
          <div className="check__for">
          <input type="checkbox" id="assign-all" />
          <label htmlFor="assign-all">Решенные тесты</label>
          </div>
          <div className="check__for">
          <input type="checkbox" id="assign-all" />
          <label htmlFor="assign-all">Выполненные цели</label>
          </div>
          <div className="check__for">
          <input type="checkbox" id="assign-all" />
          <label htmlFor="assign-all">Пройденные курсы</label>
          </div>
          <div className="check__for">
          <input type="checkbox" id="assign-all" />
          <label htmlFor="assign-all">Просроченные курсы</label>
          </div>
          <div className="check__for">
          <input type="checkbox" id="assign-all" />
          <label htmlFor="assign-all">Верные ответы</label>
          </div>
          </div>
          <div className="analitika__fo">
            <div className="form__a">
            <p>от</p>
            <input type="text" className='anal__input' />
            </div>
            <div className="form__a">
            <p>от</p>
            <input type="text" className='anal__input'/>
            </div>
          </div>

          </div>
          <div className="btn__cors">
          <button id="create-buttone">Аналитика</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AnalitikaForm;
