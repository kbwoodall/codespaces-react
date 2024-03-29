import React from 'react';
import { Line } from 'react-chartjs-2';

class DerivativeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [], // X values
        datasets: [
          {
            label: 'Original Function',
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
            data: [], // Y values of the original function
          },
          {
            label: 'Derivative',
            borderColor: 'rgba(255,99,132,1)',
            backgroundColor: 'rgba(255,99,132,0.2)',
            data: [], // Y values of the derivative
          },
        ],
      },
    };
  }

  componentDidMount() {
    this.plotGraph();
  }

  plotGraph = () => {
    const { originalFunction, derivativeFunction, minX, maxX, step } = this.props;
    const labels = [];
    const originalData = [];
    const derivativeData = [];

    for (let x = minX; x <= maxX; x += step) {
      labels.push(x);
      originalData.push(originalFunction(x));
      derivativeData.push(derivativeFunction(x));
    }

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Original Function',
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          data: originalData,
        },
        {
          label: 'Derivative',
          borderColor: 'rgba(255,99,132,1)',
          backgroundColor: 'rgba(255,99,132,0.2)',
          data: derivativeData,
        },
      ],
    };

    this.setState({ data });
  };

  render() {
    return (
      <div>
        <h2>Derivative Graph</h2>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default DerivativeGraph;
