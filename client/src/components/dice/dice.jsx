import React, { useState, useEffect } from 'react';
import styles from './dice.module.scss';

const Dice = ({ rollDice, currentPlayer, aiTurn }) => {
  const [rolling, setRolling] = useState(false);
  const [rolledNumber, setRolledNumber] = useState(null);

  useEffect(() => {
    if (rolling) {
      const intervalId = setInterval(() => {
        const randomRoll = Math.floor(Math.random() * 6) + 1;
        setRolledNumber(randomRoll);
      }, 100);

      setTimeout(() => {
        clearInterval(intervalId);
        const finalRoll = Math.floor(Math.random() * 6) + 1;
        setRolledNumber(finalRoll);
        rollDice(finalRoll);
        setRolling(false);
      }, 1500);
    }
  }, [rolling, rollDice]);

  const handleRollDice = () => {
    setRolledNumber(null);

    if (aiTurn) {
      setRolling(true);
      setTimeout(() => {
        setRolling(false);
      }, 1500);
    } else {
      
      setRolling(true);
    }
  };

  return (
    <div className={styles.diceContainer}>
      <div className={`${styles.dice} ${rolling ? styles.rolling : ''}`}>
        {rolledNumber !== null && <div className={styles.diceNumber}>{rolledNumber}</div>}
      </div>
      <button onClick={handleRollDice} disabled={currentPlayer === 2}>
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
