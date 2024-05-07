import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    // Fetch datetime from web component
    const fetchDateTime = async () => {
      try {
        const response = await fetch('https://example.com/datetime-web-component');
        const data = await response.json();
        setDateTime(data.datetime);
      } catch (error) {
        console.error('Error fetching datetime:', error);
      }
    };

    fetchDateTime();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  // Function to convert UTC time to New York time
  const convertToNewYorkTime = (utcDateTime) => {
    const utcDate = new Date(utcDateTime);
    const newYorkTime = new Date(utcDate.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    return newYorkTime.toLocaleString();
  };

  return (
    <div>
      <h2>Date and Time in New York:</h2>
      <p>{convertToNewYorkTime(dateTime)}</p>
    </div>
  );
};

export default DateTimeComponent;
