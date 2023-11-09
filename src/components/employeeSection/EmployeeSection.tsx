import React, { useState } from 'react';
import Employee from './Employee';
import FilterForm from './FilterForm';
import './employeeSection.css'

type EmployeeData = {
    name: string;
    position: string;
    img: string;
};

const employees: EmployeeData[] = [
    {name: "Иван Иванов", position: "Менеджер", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg"},
    {name: "Петр Петров", position: "Дизайнер", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg"},
    {name: "Сергей Сергеев", position: "Разработчик", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg"}
];

const EmployeeSection: React.FC = () => {
    const [isFilterVisible, setFilterVisible] = useState(false);

    return (
        <div id="employee-section">
            <div className="sect_t">
            <h2 id="section-title">{isFilterVisible ? 'Подходит по фильтрам' : 'Сотрудники'}</h2>
            <button id="filter-button" onClick={() => setFilterVisible(!isFilterVisible)}>
                {isFilterVisible ? 'Скрыть фильтр' : 'Показать фильтр'}
            </button>
            </div>
            {isFilterVisible && <FilterForm />}
            {employees.map((employee, index) => (
                <Employee key={index} {...employee} />
            ))}
        </div>
    );
};

export default EmployeeSection;
