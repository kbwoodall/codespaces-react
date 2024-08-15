import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';

const IntegralGraph = () => {
  const plotContainer = useRef(null);

  useEffect(() => {
    // Generate data for the integral graph
    const xValues = [];
    const yValues = [];
    const step = 0.1;
    for (let x = -10; x <= 10; x += step) {
      xValues.push(x);
      yValues.push(Math.sin(x));
    }

    // Calculate integral using trapezoidal rule
    let integral = 0;
    for (let i = 0; i < xValues.length - 1; i++) {
      integral += (yValues[i] + yValues[i + 1]) * step / 2;
    }

    // Create data trace
    const trace = {
      x: xValues,
      y: yValues,
      type: 'scatter',
      mode: 'lines',
      name: 'f(x)=sin(x)'
    };

    // Create layout
    const layout = {
      title: `Integral of sin(x) from -10 to 10 is approximately ${integral.toFixed(2)}`,
      xaxis: {
        title: 'x'
      },
      yaxis: {
        title: 'f(x)'
      }
    };

    // Plot graph
    Plotly.newPlot(plotContainer.current, [trace], layout);

    // Cleanup on unmount
    return () => {
      Plotly.purge(plotContainer.current);
    };
  }, []);

  return (
    <div ref={plotContainer}></div>
  );
};

export default IntegralGraph;
