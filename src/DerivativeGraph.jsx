import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const DerivativeGraph = () => {
  const [inputValue, setInputValue] = useState(0); // State to hold input value

  // Function to calculate the derivative
  const calculateDerivative = (x) => {
    // For f(x) = 3x, the derivative is always 3
    return 3;
  };

  // Function to generate data for the derivative graph
  const generateGraphData = () => {
    const data = [];
    for (let x = -10; x <= 10; x += 0.1) {
      const y = calculateDerivative(x);
      data.push({ x, y });
    }
    return data;
  };

  // Event handler for input change
  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    setInputValue(value);
  };

  // Generate data for the derivative graph
  const data = {
    datasets: [{
      label: 'f\'(x) = 3',
      data: generateGraphData(),
      borderColor: 'blue',
      borderWidth: 2,
      pointRadius: 0,
      fill: false
    }]
  };

  // Chart options
  const options = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        type: 'linear',
        position: 'left'
      }]
    }
  };

  return (
    <div>
      <h2>Graph of the Derivative Function</h2>
      <label>
        Enter value for x:
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </label>
      <Line data={data} options={options} />
    </div>
  );
};

export default DerivativeGraph;
