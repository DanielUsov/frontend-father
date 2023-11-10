import React from 'react';
import Header from '../../components/header/header';
import EmployeeSection from '../../components/employeeSection/EmployeeSection';
import CourseForm from '../../components/createCourse/CourseForm';
import ProfileForm from '../../components/createProf/ProfileForm';
import './admin.css';

const AdminPage: React.FC = () => {
  return (
    <>
      <Header />
    <ProfileForm />
      <EmployeeSection />
      <CourseForm />
    </>
  );
};

export default AdminPage;
