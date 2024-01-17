import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../gameBoard.module.scss';
import { Player, Dice } from '../../../components';
import player from '../../../assets/diceBattle-player-character.png'
import ai from '../../../assets/diceBattle-ai-character.png'

const GameBoard = () => {
  const [player1Lives, setPlayer1Lives] = useState(20);
  const [player2Lives, setPlayer2Lives] = useState(20);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameMode, setGameMode] = useState('ai');
  const [gameOver, setGameOver] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [rolledNumber, setRolledNumber] = useState(null);

  const rollDice = (rollResult) => {
    const damage = rollResult;

    if (currentPlayer === 1) {
      setPlayer2Lives((prevLives) => Math.max(prevLives - damage, 0));
      if (player2Lives - damage <= 0) {
        setGameOver(true);
        return;
      }
    } else {
      setPlayer1Lives((prevLives) => Math.max(prevLives - damage, 0));
      if (player1Lives - damage <= 0) {
        setGameOver(true);
        return;
      }
    }

    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
    setRolledNumber(null);
  };

  const simulateAITurn = () => {
    if (currentPlayer === 2) {
      setRolling(true);

      setTimeout(() => {
        const aiRollResult = Math.floor(Math.random() * 6) + 1;
        setRolledNumber(aiRollResult);
        setRolling(false);

        rollDice(aiRollResult);
      }, 1500);
    }
  };

  useEffect(() => {
    if (currentPlayer === 2 && gameMode === 'ai') {
      simulateAITurn();

      const delayId = setTimeout(() => {
        setCurrentPlayer(1);
      }, 1600);

      return () => clearTimeout(delayId);
    }
  }, [currentPlayer, gameMode]);

  useEffect(() => {
    if (gameOver) {
      if (gameMode === 'ai' && currentPlayer === 2) {
        alert('The AI won the game!');
      } else {
        alert(`Player ${currentPlayer} won the game!`);
      }
  
      const delayId = setTimeout(() => {
        resetGame();
        setGameOver(false);
      }, 1000);
  
      return () => clearTimeout(delayId);
    }
  }, [gameOver, gameMode, currentPlayer]);

  const resetGame = () => {
    setPlayer1Lives(20);
    setPlayer2Lives(20);
    setCurrentPlayer(1);
    setGameOver(false);
  };

  return (
    <div className={styles.playerContainer}>
      <h1>{`Current Turn: ${gameMode === 'ai' && currentPlayer === 2 ? 'AI' : `Player ${currentPlayer}`}`}</h1>
      <div className={styles.players}>
        <Player playerNumber={1} lives={player1Lives} imageUrl={player} />
        <Dice rollDice={rollDice} currentPlayer={currentPlayer} rolling={rolling} rolledNumber={rolledNumber} />
        <Player playerNumber={2} lives={player2Lives} isAI={gameMode === 'ai'} imageUrl={ai} />
      </div>
      <div className={styles.buttons}>
        <button><Link className={styles.link} to="/">Choose Gamemode</Link></button>
        <button onClick={() => { resetGame(); setGameOver(false); }}>Restart</button>
      </div>
    </div>
  );
};

export default GameBoard;
