import React, { useState } from 'react';

interface SectionProps {
  section: {
    title: string;
    items: string[];
  };
  onQuestionClick: (question: string) => void;
}

const Section: React.FC<SectionProps> = ({ section, onQuestionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="section">
      <div className="section-title" onClick={handleToggle}>
        {section.title}
      </div>
      {isOpen &&
        section.items.map((item, index) => (
          <div
            key={index}
            className="item"
            onClick={() => onQuestionClick(item)}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default Section;
