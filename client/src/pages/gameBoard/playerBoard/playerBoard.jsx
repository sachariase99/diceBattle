import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../gameBoard.module.scss';
import { Player, Dice } from '../../../components';
import player from '../../../assets/diceBattle-player-character.png'

const PlayerBoard = () => {
  const [player1Lives, setPlayer1Lives] = useState(20);
  const [player2Lives, setPlayer2Lives] = useState(20);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const rollDice = (rollResult) => {
    const damage = rollResult;

    if (currentPlayer === 1) {
      setPlayer2Lives((prevLives) => Math.max(prevLives - damage, 0));
      if (player2Lives - damage <= 0) {
        alert("Player 1 won the game!");
        resetGame();
        return;
      }
    } else {
      setPlayer1Lives((prevLives) => Math.max(prevLives - damage, 0));
      if (player1Lives - damage <= 0) {
        alert("Player 2 won the game!");
        resetGame();
        return;
      }
    }

    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };

  const resetGame = () => {
    setPlayer1Lives(20);
    setPlayer2Lives(20);
    setCurrentPlayer(1);
  };

  return (
    <div className={styles.playerContainer}>
      <h1>{`Player ${currentPlayer}'s turn`}</h1>
      <div className={styles.players}>
        <Player playerNumber={1} lives={player1Lives} imageUrl={player} />
        <Dice rollDice={rollDice} />
        <Player playerNumber={2} lives={player2Lives} imageUrl={player} />
      </div>
      <div className={styles.buttons}>
        <button><Link className={styles.link} to="/">Choose Gamemode</Link></button>
        <button onClick={resetGame}>Restart</button>
      </div>
    </div>
  );
};

export default PlayerBoard;
