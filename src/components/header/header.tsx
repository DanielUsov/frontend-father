import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './style.css'

const Header: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value: string) => {
        setSearchValue(value);
        // Здесь вы можете добавить логику поиска
    };

    return (
        <div className="header">
            <div className="project-name">Для адаптации</div>
            <div className="header-container">
                <SearchBar onSearch={handleSearch} />
                <div className="right-cont">
                    <div className="notifications">🔔</div>
                    <div className="profile">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-4.jpg" alt="Profile" />
                        <div className="dropdown">Dropdown content...</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
