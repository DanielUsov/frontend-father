import { GoalProps, SectionProps } from '../../pages/mainPage/mainPage';
import Sidebar from '../document/Sidebar';
import Goals from '../goal/goals';
import Header from '../header/header';
import './style.css';

export const MainWrapper = ({ children }: any) => {
  const handleQuestionClick = () => {};
  const sections: SectionProps[] = [
    {
      title: 'Важные документы',
      items: ['Документ 1', 'Документ 2', 'Документ 3'],
    },
    { title: 'FAQ', items: ['Вопрос 1', 'Вопрос 2', 'Вопрос 3'] },
  ];

  const goals: GoalProps[] = [
    {
      title: 'Провести встречу с HR после первой недели',
      completedTasks: 0,
      totalTasks: 1,
    },
    {
      title: 'Пройти 10 курсов за 3 дня',
      completedTasks: 6,
      totalTasks: 10,
    },
  ];

  return (
    <>
      <Header />
      <div className="our-block">
        <div className="sector-left">
          <Goals goals={goals} />
          <Sidebar sections={sections} onQuestionClick={handleQuestionClick} />
        </div>
        {children}
      </div>
    </>
  );
};
