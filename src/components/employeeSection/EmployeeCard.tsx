import React from 'react';

interface EmployeeProps {
  name: string;
  position: string;
  img: string;
  email: string;
  phone: string;
  onClick: () => void;
}

const EmployeeCard: React.FC<EmployeeProps> = ({
  name,
  position,
  img,
  onClick,
}) => (
  <div className="employee-card" onClick={onClick}>
    <img src={img} />
    <div>
      <p className="name">{name}</p>
      <p className="position">{position}</p>
    </div>
  </div>
);

export default EmployeeCard;
