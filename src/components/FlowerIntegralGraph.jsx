import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { integral, pi, cos, sin } from 'mathjs';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const FlowerIntegralGraph = () => {
  const calculateFlowerPoints = (numPoints) => {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const theta = (2 * pi * i) / numPoints;
      const r = sin(4 * theta);
      const x = r * cos(theta);
      const y = r * sin(theta);
      points.push({ x, y });
    }
    return points;
  };

  const calculateIntegral = (numPoints) => {
    const integralPoints = [];
    for (let i = 0; i <= numPoints; i++) {
      const theta = (2 * pi * i) / numPoints;
      const r = integral('sin(4 * theta)', 'theta');
      const x = r * cos(theta);
      const y = r * sin(theta);
      integralPoints.push({ x, y });
    }
    return integralPoints;
  };

  const numPoints = 100;
  const data = {
    labels: Array.from({ length: numPoints + 1 }, (_, i) => i),
    datasets: [
      {
        label: 'Flower Shape',
        data: calculateFlowerPoints(numPoints).map(point => ({ x: point.x, y: point.y })),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
        showLine: true,
      },
      {
        label: 'Integral Shape',
        data: calculateIntegral(numPoints).map(point => ({ x: point.x, y: point.y })),
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        fill: false,
        showLine: true,
      }
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <h2>Integral of a Flower Function</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FlowerIntegralGraph;
