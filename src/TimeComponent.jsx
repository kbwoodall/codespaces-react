import React, { useState, useEffect } from 'react';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeComponent;
