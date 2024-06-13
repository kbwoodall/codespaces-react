
// src/BettingScreen.js

import React, { useState } from 'react';
import './BettingScreen.css';

const BettingScreen = () => {
  const [dollars, setDollars] = useState('');
  const [odds, setOdds] = useState('');
  const [result, setResult] = useState(null);

  const calculateWinnings = () => {
    const dollarsValue = parseFloat(dollars);
    const oddsValue = parseFloat(odds);

    if (isNaN(dollarsValue) || isNaN(oddsValue)) {
      setResult('Invalid input');
      return;
    }

    let winnings;
    if (oddsValue > 0) {
      winnings = dollarsValue * (oddsValue / 100);
    } else {
      winnings = dollarsValue / (-oddsValue / 100);
    }

    setResult(winnings.toFixed(2));
  };

  return (
    <div className="betting-screen">
      <h1>Betting Calculator</h1>
      <div className="input-group">
        <label htmlFor="dollars">Dollar Amount:</label>
        <input
          id="dollars"
          type="number"
          value={dollars}
          onChange={(e) => setDollars(e.target.value)}
          className="rounded-input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="odds">Odds:</label>
        <input
          id="odds"
          type="number"
          value={odds}
          onChange={(e) => setOdds(e.target.value)}
          className="rounded-input"
        />
      </div>
      <button onClick={calculateWinnings} className="calculate-button">Calculate</button>
      {result !== null && (
        <div className="result">
          <h2>Winning Result: ${result}</h2>
        </div>
      )}
    </div>
  );
};

export default BettingScreen;
