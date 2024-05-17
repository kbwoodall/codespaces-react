import React from 'react';
import { Line, Chart } from 'react-chartjs-2';

// Disable animation for better initial rendering
Chart.defaults.animation = false;

class Graph extends React.Component {
  constructor(props) {
    super(props);

    // Generate data for the function f(x) = x^3
    const data = [];
    for (let x = -5; x <= 5; x += 0.1) {
      data.push({ x, y: Math.pow(x, 3) });
    }

    // Find the index where x = 2
    const xIndex = data.findIndex(point => point.x >= 2);
    const areaData = data.slice(0, xIndex + 1); // Data points from x = -5 to x = 2

    this.state = {
      data: {
        labels: data.map(point => point.x),
        datasets: [
          {
            label: 'f(x) = x^3',
            data: data.map(point => point.y),
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
          },
          {
            label: 'Area under curve',
            data: areaData.map(point => point.y),
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <h2>Graph of f(x) = x^3 and Area under curve from x = 0 to x = 2</h2>
        <Line
          data={this.state.data}
          options={{
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'x',
                },
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'f(x)',
                },
              }],
            },
          }}
        />
      </div>
    );
  }
}

export default Graph;
