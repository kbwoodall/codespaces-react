import './App.css';
import ComponentA from './ComponentA.jsx';
import ComponentB from './ComponentB.jsx';
import ChainRuleExample from './ChainRuleExample.jsx';
import React, { useState } from 'react';
import IntegralGraph from './IntegralGraph.jsx';
import Graph from './Graph.jsx';

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Current Date: {date.toDateString()}</h1>
    </div>
  );
}
function App() {

  const graphData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [65, 59, 80, 81, 56, 55, 40]
  };

  return (

    <div className="App" >
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Kerry Woodall  <CurrentDate />
        </p>

        <ChainRuleExample />
        <IntegralGraph />

        <ComponentA />
        <ComponentB />
      </header>

    </div>
  );
}

export default App;
// <Graph data={graphData} />