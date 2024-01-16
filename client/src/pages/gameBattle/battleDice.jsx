import React, { useState } from 'react';
import Player from './Player';

const GameBoard = () => {
  const [player1Lives, setPlayer1Lives] = useState(20);
  const [player2Lives, setPlayer2Lives] = useState(20);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const damage = rollResult === 6 ? rollResult * 2 : rollResult;

    if (currentPlayer === 1) {
      setPlayer2Lives((prevLives) => prevLives - damage);
    } else {
      setPlayer1Lives((prevLives) => prevLives - damage);
    }

    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };

  const resetGame = () => {
    setPlayer1Lives(20);
    setPlayer2Lives(20);
    setCurrentPlayer(1);
  };

  return (
    <div>
      <Player playerNumber={1} lives={player1Lives} rollDice={rollDice} />
      <Player playerNumber={2} lives={player2Lives} rollDice={rollDice} />
      <button onClick={resetGame}>Genstart</button>
    </div>
  );
};

export default GameBoard;
