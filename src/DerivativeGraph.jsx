import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class DerivativeGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xValues: [], // Array to store x values
      derivative1: [], // Array to store derivative 1 values
      derivative2: [] // Array to store derivative 2 values
    };
  }

  componentDidMount() {
    // Generate x values
    const xValues = Array.from({ length: 100 }, (_, i) => i / 10);
    
    // Calculate derivative 1 values (Example: derivative of sin(x) = cos(x))
    const derivative1 = xValues.map(x => Math.cos(x));
    
    // Calculate derivative 2 values (Example: derivative of cos(x) = -sin(x))
    const derivative2 = xValues.map(x => -Math.sin(x));

    // Update state with calculated values
    this.setState({ xValues, derivative1, derivative2 });
  }

  render() {
    const { xValues, derivative1, derivative2 } = this.state;

    return (
      <div>
        <Plot
          data={[
            { x: xValues, y: derivative1, type: 'scatter', mode: 'lines', name: 'Derivative 1' },
            { x: xValues, y: derivative2, type: 'scatter', mode: 'lines', name: 'Derivative 2' }
          ]}
          layout={{ title: 'Derivatives Plot', xaxis: { title: 'X' }, yaxis: { title: 'Y' } }}
        />
      </div>
    );
  }
}

export default DerivativeGraph;
