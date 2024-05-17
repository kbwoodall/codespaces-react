// src/components/ContentSection.jsx
import React from 'react';
import './ContentSection.css';

const ContentSection = ({ title }) => {
  return (
    <div className="content-section">
      <h2>{title}</h2>
      <p>This is some content for {title}.</p>
    </div>
  );
};

export default ContentSection;
