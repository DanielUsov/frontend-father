import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="project-name">Для адаптации</div>
      <div className="header-container">
        <div className="right-cont">
          <div className="notifications">🔔</div>
          <div className="profile">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg"
              alt="Profile"
            />
            {/* <div className="dropdown">Dropdown content...</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
