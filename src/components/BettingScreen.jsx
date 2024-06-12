import { parseDependencies } from 'mathjs';
import React, { useState } from 'react';

const BettingScreen = () => {
    const [dollarAmount, setDollarAmount] = useState();
    const [odds, setOdds] = useState();
    const [result, setResult] = useState(null);

    const calculatePayout = () => {

        const d = dollarAmount;
        const o = odds;
        const tot = 0;

        if (o > 0) {
            alert('> 0')
            alert('amt ' + d);
            alert('odds ' + o);
        
            const payout = parseFloat(d) * parseFloat(o) / 100;
            setResult(payout.toFixed(2));

        } else {
            alert('< 0')
            alert('amt ' + d);
            alert('odds ' + o);

            const payout = (parseFloat(d) / parseFloat(o) * -100);
            setResult(payout.toFixed(2));
        }
    };

    return (
        <div style={styles.container}>
            <h1>Betting Screen</h1>
            <div style={styles.inputGroup}>
                <label htmlFor="dollarAmount">Dollar Amount:</label>
                <input
                    type="number"
                    id="dollarAmount"
                    value={dollarAmount}
                    onChange={(e) => setDollarAmount(e.target.value)}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label htmlFor="odds">Odds:</label>
                <input
                    type="number"
                    id="odds"
                    value={odds}
                    onChange={(e) => setOdds(e.target.value)}
                    style={styles.input}
                />
            </div>
            <button onClick={calculatePayout} style={styles.button}>Calculate Payout</button>
            {result !== null && (
                <div style={styles.result}>
                    <h2>Potential Payout: ${result}</h2>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    inputGroup: {
        marginBottom: '1rem',
    },
    input: {
        marginLeft: '0.5rem',
        padding: '0.5rem',
        fontSize: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    result: {
        marginTop: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
};

export default BettingScreen;

/*
const calc = () => {
    const b = Number(textValue);
    const o = Number(oddsValue);
    const m = Number(mlValue);

    //const totStr = textValue + "+" + oddsValue + "(" + textValue + "/" + 100 + ")";
    const totStr = oddsValue + "(" + textValue + "/" + 100 + ")";
    const totMinusStr = textValue + "*" + 100 + "/" + oddsValue;

    try {
      //let x = 250;
      //let y = 135;
      console.log(b + " " + o);
      //console.log(typeof x);
      //console.log(typeof b);

      let tot = eval("o * (b/100)");

      //let tot = eval("b + o * (b/100)");
      let minusOdds = eval("(b * 100) / o");

      //setTextValue(tot.toString()); 
      setFormulaValue("");
      if (isNaN(oddsValue) || isNaN(textValue) || isNaN(tot) || isNaN(minusOdds)) {
        ToastAndroid.show('Invalid Format', ToastAndroid.SHORT);
      }
      else {
        if (oddsValue > 0) {
          let totPercent = eval("100/(o + 100) * 100");
          console.log("+ " + totPercent.toFixed(0));
          setFormulaValue(tot.toFixed(2) + " = " + totStr + "   " + totPercent.toFixed(0) + "%");
        } else {
          let oddsTest = oddsValue * -1;
          let minusOddsTest = minusOdds * -1;

          let minusPercent = eval("oddsTest/(oddsTest + 100) * 100");
          console.log(oddsTest + " - " + minusPercent.toFixed(0));

          const totMinusStr = textValue + "*" + 100 + "/" + oddsTest;
          setFormulaValue(minusOddsTest.toFixed(2) + " = " + totMinusStr + "   " + minusPercent.toFixed(0) + "%");
        }
      }
    } catch (e) {
      ToastAndroid.show('Invalid Format', ToastAndroid.SHORT);
    }
  }



*/