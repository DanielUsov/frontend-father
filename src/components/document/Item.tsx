import React from 'react';

interface ItemProps {
    item: string;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <div className="item">
            {item}
        </div>
    );
};

export default Item;
