import './App.css';
import ComponentA from './ComponentA.jsx';
import ComponentB from './ComponentB.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
        Kerry Woodall  Friday 03/15/2024
        </p>
        <ComponentA />
      <ComponentB />
      </header>
 
    </div>
  );
}

export default App;
