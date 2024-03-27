import React from 'react';

class ChainRuleExample extends React.Component {
  // Define the function g(u) = 3u
  g = (u) => {
    return 3 * u;
  }

  // Define the derivative of g(u) = 3
  gDerivative = () => {
    return 3;
  }

  // Define the derivative of f(x) = 3x
  fDerivative = () => {
    return 3;
  }

  // Calculate the chain rule using g'(f(x)) * f'(x)
  chainRule = () => {
    // Calculate g'(f(x))
    const gOfF = this.gDerivative();
    
    // Calculate f'(x)
    const fPrime = this.fDerivative();

    // Calculate the result of the chain rule
    const result = gOfF * fPrime;

    return result;
  }

  render() {
    return (
      <div>
        <h2>Chain Rule Example</h2>
        <p>Given f(x) = 3x, the derivative using the chain rule is: {this.chainRule()}</p>
      </div>
    );
  }
}

export default ChainRuleExample;
