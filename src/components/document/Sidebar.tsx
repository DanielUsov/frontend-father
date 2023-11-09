import React, { useState } from 'react';
import Section from './Section';
import './sideBar.css'
// import FAQ from './FAQ';

interface SectionProps {
    title: string;
    items: string[];
}

interface SidebarProps {
    sections: SectionProps[];
    onQuestionClick: (question: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, onQuestionClick }) => {
    return (
        <div className="sidebar">
            {sections.map((section, index) => (
                <Section key={index} section={section} onQuestionClick={onQuestionClick} />
            ))}
        </div>
    );
};

export default Sidebar;
