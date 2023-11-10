// Goals.tsx
import React from 'react';
import Goal from './goal';
import './goals.css';

interface GoalProps {
  title: string;
  completedTasks: number;
  totalTasks: number;
}

interface GoalsProps {
  goals: GoalProps[];
}

const Goals: React.FC<GoalsProps> = ({ goals }) => {
  return (
    <div className="goals">
      {goals.map((goal, index) =>
        index !== 3 ? <Goal key={index} goal={goal} /> : null
      )}
    </div>
  );
};

export default Goals;
