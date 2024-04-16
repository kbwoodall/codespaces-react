import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import math from 'mathjs';

const FunctionGraph = () => {
  const [xValue, setXValue] = useState(2);
  const [derivative, setDerivative] = useState(null);
  const [integral, setIntegral] = useState(null);

  useEffect(() => {
    // Calculate derivative and integral when xValue changes
    const f = math.compile('x^3');
    const df = math.derivative(f, 'x');
    const integralValue = math.integral(f, 'x');
    const x = xValue;

    setDerivative(df.evaluate({ x }));
    setIntegral(integralValue.evaluate({ x }));
  }, [xValue]);

  return (
    <div>
      <h2>Function: \( f(x) = x^3 \)</h2>
      <div>
        <label htmlFor="xValue">Value of \( x \): </label>
        <input
          type="number"
          id="xValue"
          value={xValue}
          onChange={(e) => setXValue(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <h3>Derivative: {derivative}</h3>
        <h3>Integral: {integral}</h3>
      </div>
      <Plot
        data={[
          {
            x: [xValue],
            y: [math.evaluate('x^3', { x: xValue })],
            type: 'scatter',
            mode: 'markers',
            name: 'Function Value',
          },
          {
            x: [xValue],
            y: [derivative],
            type: 'scatter',
            mode: 'markers',
            name: 'Derivative Value',
          },
          {
            x: [xValue],
            y: [integral],
            type: 'scatter',
            mode: 'markers',
            name: 'Integral Value',
          },
        ]}
        layout={{ title: `Graph at x = ${xValue}` }}
      />
    </div>
  );
};

export default FunctionGraph;
