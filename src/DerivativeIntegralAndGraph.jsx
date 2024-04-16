import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const DerivativeAndIntegralGraph = () => {
    const [x, setX] = useState(2);
    const [derivative, setDerivative] = useState(null);
    const [integral, setIntegral] = useState(null);

    useEffect(() => {
        // Calculate derivative of f(x) = x^3
        const derivativeValue = 3 * Math.pow(x, 2);
        setDerivative(derivativeValue);

        // Calculate integral of f(x) = x^3
        const integralValue = Math.pow(x, 4) / 4;
        setIntegral(integralValue);
    }, [x]);

    return (
        <div>
            <h2>Derivative and Integral at x = 2</h2>
            <p>Value of f'(x) at x = 2: {derivative}</p>
            <p>Value of ∫f(x)dx from 0 to 2: {integral}</p>
            <Plot
                data={[
                    {
                        x: [x],
                        y: [Math.pow(x, 3)],
                        type: 'scatter',
                        mode: 'markers',
                        name: 'f(x) = x^3',
                    },
                ]}
                layout={{ title: 'Graph of f(x) = x^3 at x = 2' }}
            />
        </div>
    );
};

export default DerivativeAndIntegralGraph;
