import React, { Component } from 'react';
//import Plot from 'react-plotly.js';

class IntegralGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      functionString: '',
      integralResult: null,
      graphData: null
    };
  }

  // Function to handle input change
  handleInputChange = (event) => {
    this.setState({ functionString: event.target.value });
  };

  // Function to calculate the integral
  calculateIntegral = () => {
    // Implement integration logic here (similar to the functional component)

    // Example: Integrate f(x) = x^2 from 0 to 1
    const integralValue = 1 / 3; // The actual integral value of x^2 from 0 to 1 is 1/3

    // Set the integral result
    this.setState({ integralResult: integralValue });

    // Generate graph data
    const xValues = [];
    const yValues = [];
    const numPoints = 100;
    const dx = 1 / numPoints;
    for (let i = 0; i <= numPoints; i++) {
      const x = i * dx;
      const y = Math.pow(x, 2); // Evaluate the function (x^2 in this example)
      xValues.push(x);
      yValues.push(y);
    }

    // Set graph data
    this.setState({
      graphData: [
        {
          type: 'scatter',
          mode: 'lines',
          x: xValues,
          y: yValues,
        },
      ],
    });
  };

  render() {
    const { functionString, integralResult, graphData } = this.state;

    return (
      <div>
        <h2>Integral Graph</h2>
        <div>
          <label>Enter a function:</label>{' '}
          <input type="text" value={functionString} onChange={this.handleInputChange} />
          <button onClick={this.calculateIntegral}>Calculate Integral</button>
        </div>
        {integralResult !== null && (
          <p>Integral Result: {integralResult}</p>
        )}
        {graphData && (
          <Plot
            data={graphData}
            layout={{ width: 800, height: 400, title: 'Function Graph' }}
          />
        )}
      </div>
    );
  }
}

export default IntegralGraph;
