import React from 'react';
import { Line } from 'react-chartjs-2';

class DerivativeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Default function: f(x) = x^2
      expression: 'x^2',
      minX: -10,
      maxX: 10,
      numPoints: 100,
    };
  }

  calculateDerivative = (x) => {
    // Calculate derivative of the function here
    // For simplicity, let's say the derivative of x^2 is 2x
    return 2 * x;
  };

  generateData = () => {
    const { minX, maxX, numPoints } = this.state;
    const step = (maxX - minX) / numPoints;
    let data = [];
    for (let x = minX; x <= maxX; x += step) {
      data.push({ x, y: this.calculateDerivative(x) });
    }
    return data;
  };

  render() {
    const data = {
      datasets: [
        {
          label: 'Derivative',
          data: this.generateData(),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    return (
      <div>
        <h2>Graph of Derivative</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default DerivativeGraph;
