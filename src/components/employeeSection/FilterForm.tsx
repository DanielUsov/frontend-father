import React from 'react';

const FilterForm: React.FC = () => (
    <div id="filter-form">
        <div className="form-group">
        <label htmlFor="name">ФИО</label>
        <input type="text" id="name" placeholder="ФИО" />
    </div>
    <div className="form-group">
        <label htmlFor="position">Должность</label>
        <input type="text" id="position" placeholder="Должность" />
        </div>
        <button id="apply-button">Применить</button>
        <div className="form-group">
        <label htmlFor="work-format">Формат работы</label>
        <input type="text" id="work-format" placeholder="Формат работы" />
        </div>
    </div>
);

export default FilterForm;
