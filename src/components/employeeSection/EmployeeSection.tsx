import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import FilterForm from './FilterForm';
import EmployeeProfile from '../employeeProfile/EmployeeProfile';
import './employeeSection.css';

type EmployeeData = {
  name: string;
  position: string;
  img: string;
  email: string;
  phone: string;
};

const employees: EmployeeData[] = [
  {
    name: 'Иван Иванов',
    position: 'Менеджер',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg',
    email: 'ivanov@example.com',
    phone: '+1234567890',
  },
  {
    name: 'Петр Петров',
    position: 'Дизайнер',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg',
    email: 'ivanov@example.com',
    phone: '+1234567890',
  },
  {
    name: 'Сергей Сергеев',
    position: 'Разработчик',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg',
    email: 'ivanov@example.com',
    phone: '+1234567890',
  },
];

const EmployeeSection: React.FC = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(
    null
  );

  return (
    <div id="employee-section">
      <div className="sect_t">
        <h2 id="section-title">
          {isFilterVisible ? 'Подходит по фильтрам' : 'Сотрудники'}
        </h2>
        <button
          id="filter-button"
          onClick={() => setFilterVisible(!isFilterVisible)}
        >
          {isFilterVisible ? 'Скрыть фильтр' : 'Показать фильтр'}
        </button>
      </div>
      {selectedEmployee ? (
        <EmployeeProfile {...selectedEmployee} />
      ) : (
        <>
          {isFilterVisible && <FilterForm />}
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              {...employee}
              onClick={() => setSelectedEmployee(employee)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default EmployeeSection;
