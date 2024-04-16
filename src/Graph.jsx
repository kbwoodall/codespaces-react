import React from 'react';
import { Line } from 'react-chartjs-2';

class Graph extends React.Component {
    render() {
        // Function to calculate y values for given x values
        const calculateFunction = (x) => Math.pow(x, 3);
        const calculateDerivative = (x) => 3 * Math.pow(x, 2); // Derivative function
        
        // Generating x values from -10 to 10
        const xValues = Array.from({ length: 21 }, (_, i) => i - 10);
        
        // Calculating y values for corresponding x values
        const yValues = xValues.map(calculateFunction);
        const yDerivativeValues = xValues.map(calculateDerivative); // Derivative y values
        
        // Data to be displayed on the graph
        const data = {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = x^3',
                    data: yValues,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: "f'(x) = 3x^2",
                    data: yDerivativeValues,
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }
            ]
        };
        
        return (
            <div>
                <h2>Graph of f(x) = x^3 and its Derivative</h2>
                <div style={{width: '600px', height: '400px'}}>
                    <Line data={data} />
                </div>
            </div>
        );
    }
}

export default Graph;
