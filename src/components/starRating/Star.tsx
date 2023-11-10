import React from 'react';

interface StarProps {
    id: string;
    name: string;
    value: number;
    title: string;
}

const Star: React.FC<StarProps> = ({ id, name, value, title }) => {
    return (
        <>
            <input type="radio" id={id} name={name} value={value} />
            <label htmlFor={id} title={title}>☆</label>
        </>
    );
}

export default Star;
