import React from 'react';
import Plot from 'react-plotly.js';

class DerivativeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: [],
      originalFunction: [],
      derivativeFunction: []
    };
  }

  componentDidMount() {
    this.calculateFunctions();
  }

  calculateFunctions = () => {
    const xValues = [];
    const originalFunction = [];
    const derivativeFunction = [];

    for (let x = -10; x <= 10; x += 0.1) {
      xValues.push(x);
      originalFunction.push(Math.pow(x, 4));
      derivativeFunction.push(4 * Math.pow(x, 3));
    }

    this.setState({ x: xValues, originalFunction, derivativeFunction });
  };

  render() {
    const { x, originalFunction, derivativeFunction } = this.state;

    const data = [
      {
        x: x,
        y: originalFunction,
        type: 'scatter',
        mode: 'lines',
        name: 'f(x) = x^4'
      },
      {
        x: x,
        y: derivativeFunction,
        type: 'scatter',
        mode: 'lines',
        name: "f'(x) = 4x^3"
      }
    ];

    const layout = {
      title: 'Graph of f(x) = x^4 and its derivative',
      xaxis: { title: 'x' },
      yaxis: { title: 'f(x)' }
    };

    return <Plot data={data} layout={layout} />;
  }
}

export default DerivativeGraph;
