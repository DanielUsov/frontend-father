import React from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  return (
    <div className="faq">
      <h1>{question}</h1>
      <p>{answer}</p>
    </div>
  );
};

export default FAQ;
