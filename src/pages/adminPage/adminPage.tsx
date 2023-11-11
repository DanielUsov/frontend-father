import React from 'react';
import Header from '../../components/header/header';
import EmployeeSection from '../../components/employeeSection/EmployeeSection';
import CourseForm from '../../components/createCourse/CourseForm';
import ProfileForm from '../../components/createProf/ProfileForm';
import GoalForm from '../../components/createGoal/GoalForm';
import AnalitikaForm from '../../components/analitika/AnalitikaForm';
// import AdminPanel from '../../components/letterPanel/AdminPanel';
import './admin.css';

const AdminPage: React.FC = () => {
  return (
    <>
      <Header />
      {/* <AdminPanel /> */}
    <ProfileForm />
      <EmployeeSection />
      <CourseForm />
      <GoalForm />
      <AnalitikaForm />
    </>
  );
};

export default AdminPage;
