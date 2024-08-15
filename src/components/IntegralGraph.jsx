
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const IntegralGraph = () => {
  // Define the function and its integral
  const boxFunction = (x) => (x >= 2 && x <= 4 ? 1 : 0);
  const integralFunction = (x) => (x < 2 ? 0 : x <= 4 ? x - 2 : 2);

  // Generate data points
  const dataPoints = Array.from({ length: 101 }, (_, i) => i / 10);
  const boxData = dataPoints.map((x) => boxFunction(x));
  const integralData = dataPoints.map((x) => integralFunction(x));

  // Chart data
  const data = {
    labels: dataPoints,
    datasets: [
      {
        label: 'Box Function',
        data: boxData,
        borderColor: 'black',
        
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        borderWidth: 2,
        stepped: true, // Step line style
      },
      {
        label: 'Integral of Box Function',
        data: integralData,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'white',
        fill: false,
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'x',
        },
      },
      y: {
        title: {
          display: true,
          text: 'f(x)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Integral Graph of a Box Function</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default IntegralGraph;
// backgroundColor: 'rgba(75, 192, 192, 0.2)',
// borderColor: 'rgba(153, 102, 255, 1)',