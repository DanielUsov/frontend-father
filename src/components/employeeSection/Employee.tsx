import React from 'react';

type EmployeeProps = {
    name: string;
    position: string;
    img: string;
};

const Employee: React.FC<EmployeeProps> = ({ name, position, img }) => (
    <div className="employee-card">
        <img src={img} />
        <div>
            <p className="name">{name}</p>
            <p className="position">{position}</p>
        </div>
    </div>
);

export default Employee;
