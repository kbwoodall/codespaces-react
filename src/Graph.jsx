import React from 'react';
import Plot from 'react-plotly.js';

class Graph extends React.Component {
  render() {
    const xValues = [];
    const originalValues = [];
    const derivativeValues = [];
    const integralValues = [];
    
    // Generating data points for x, original function, derivative, and integral
    for (let x = -10; x <= 10; x += 0.1) {
      xValues.push(x);
      originalValues.push(Math.pow(x, 3));
      derivativeValues.push(3 * Math.pow(x, 2));
      integralValues.push(0.25 * Math.pow(x, 4));
    }

    const data = [
      {
        type: 'scatter',
        mode: 'lines',
        name: 'Original Function (x^3)',
        x: xValues,
        y: originalValues,
        line: {color: 'blue'}
      },
      {
        type: 'scatter',
        mode: 'lines',
        name: 'Derivative (3x^2)',
        x: xValues,
        y: derivativeValues,
        line: {color: 'red'}
      },
      {
        type: 'scatter',
        mode: 'lines',
        name: 'Integral (1/4 x^4)',
        x: xValues,
        y: integralValues,
        line: {color: 'green'}
      }
    ];

    return (
      <Plot
        data={data}
        layout={{
          title: 'Graph of Original Function, Derivative, and Integral',
          xaxis: {title: 'x'},
          yaxis: {title: 'y'}
        }}
      />
    );
  }
}

export default Graph;
