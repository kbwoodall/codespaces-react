// src/Widget.js
import React from 'react';
import './Widget.css';

const Widget = ({ title, content }) => {
  return (
    <div className="widget">
      <h2>{title}</h2>
      <div className="widget-content">{content}</div>
    </div>
  );
};

export default Widget;
