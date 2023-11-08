// Goal.tsx
import React from 'react';

interface GoalProps {
    goal: {
        title: string;
        completedTasks: number;
        totalTasks: number;
    };
}

const Goal: React.FC<GoalProps> = ({ goal }) => {
    const progress = (goal.completedTasks / goal.totalTasks) * 100;

    return (
        <div className="goal">
            <div className="goal-title">{goal.title}</div>
            <div className="goal-progress">
                <div className="goal-progress-bar" style={{ width: `${progress}%` }}></div>
                <div className="goal-progress-text">{Math.round(progress)}%</div>
            </div>
        </div>
    );
};

export default Goal;
