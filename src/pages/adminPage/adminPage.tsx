import React from 'react';
import Header from '../../components/header/header';
import EmployeeSection from '../../components/employeeSection/EmployeeSection';
import CourseForm from '../../components/createCourse/CourseForm';
import './admin.css';

const AdminPage: React.FC = () => {
  return (
    <>
      <Header />
      <EmployeeSection />
      <CourseForm />
    </>
  );
};

export default AdminPage;
