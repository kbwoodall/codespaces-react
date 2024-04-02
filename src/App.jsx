import './App.css';
import ComponentA from './ComponentA.jsx';
import ComponentB from './ComponentB.jsx';
import ChainRuleExample from './ChainRuleExample.jsx';
import React, { useState } from 'react';
import IntegralGraph from './IntegralGraph';
import DerivativeGraph from './DerivativeGraph';
import LinearGraph from './ LinearGraph';

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
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Kerry Woodall  <CurrentDate />
        </p>
        <DerivativeGraph/>
        <p>Linear Graph Example</p>
        <LinearGraph data={data} width={400} height={300} />

        <ChainRuleExample />
        <IntegralGraph />


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