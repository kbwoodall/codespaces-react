// src/components/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ContentSection from './ContentSection';
import './Dashboard.css'; // Import some basic styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-sections">
          <ContentSection title="Section 1" />
          <ContentSection title="Section 2" />
          <ContentSection title="Section 3" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
