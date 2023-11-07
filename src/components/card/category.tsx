import React from 'react';

interface CategoryProps {
    category: string;
    isSelected: boolean;
    onSelect: () => void;
}

const Category: React.FC<CategoryProps> = ({ category, isSelected, onSelect }) => {
    return (
        <div
            id={category}
            className={`category-item ${isSelected ? 'selected' : ''}`}
            onClick={onSelect}
        >
            {category}
        </div>
    );
};

export default Category;
