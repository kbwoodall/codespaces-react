import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const IntegralGraph = () => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);

  useEffect(() => {
    const calculateIntegral = () => {
      const x = [];
      const y = [];
      let sum = 0;
      for (let i = -5; i <= 5; i += 0.1) {
        const integralValue = Math.sin(i); // Example integral function (you can replace this with your own)
        sum += integralValue * 0.1; // Riemann sum approximation
        x.push(i);
        y.push(sum);
      }
      setXValues(x);
      setYValues(y);
    };

    calculateIntegral();
  }, []);

  return (
    <div>
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            marker: { color: 'blue' },
            name: 'Integral Function',
          },
        ]}
        layout={{
          width: 800,
          height: 400,
          title: 'Integral Function Graph',
          xaxis: { title: 'X' },
          yaxis: { title: 'Integral Value' },
        }}
      />
    </div>
  );
};

export default IntegralGraph;
