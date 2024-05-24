import './App.css';
import ComponentA from './ComponentA.jsx';
import ComponentB from './ComponentB.jsx';
import ChainRuleExample from './ChainRuleExample.jsx';
import React, { useState } from 'react';
import Graph from './Graph2';
import DerivativeGraph from './DerivativeGraph';
import DateTimeComponent from './DateTimeComponent';
import TimeComponent from './TimeComponent';
import DateDisplay from './DateDisplay';

import IntegralGraph from './IntegralGraph';
import LinearGraph from './ LinearGraph';
//import Dashboard from './Dashboard.js';
import Dashboard from './components/Dashboard';
import './App.css';

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Current Date: {date.toDateString()}</h1>
    </div>
  );
}
function App() {
  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 300];

  return (

    <div className="App" >

      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Kerry Woodall
        </p>
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>


        <DateDisplay />

        <Dashboard />

        <DerivativeGraph />

        <Graph />

      </header>

    </div>

  );
}

export default App;

/*
    <ChainRuleExample />
        <IntegralGraph />
        <ComponentA />
        <ComponentB />

*/