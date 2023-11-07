import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(value);
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <label className="search__label" htmlFor="search">Search</label>
            <div className="search__input-wrap">
                <input
                    className="search__input"
                    id="search"
                    type="text"
                    name="search"
                    placeholder="Search…"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <button className="search__button" type="submit" name="search-submit" aria-label="Search">
                    <svg className="search__icon" viewBox="0 0 36 36" width="36px" height="36px" aria-hidden="true">
                        <g className="search__icon-g" stroke="currentcolor" stroke-linecap="round" stroke-width="4" transform="translate(6,6)">
                            <ellipse className="search__icon-ellipse" fill="none" cx="9" cy="9" rx="7" ry="7" transform="rotate(45,9,9)" />
                            <line className="search__icon-line1" x1="15" y1="15" x2="21" y2="21" />
                            <line className="search__icon-line2" x1="21" y1="21" x2="15" y2="15" />
                            <line className="search__icon-line3" x1="21" y1="21" x2="15" y2="15" />
                        </g>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
