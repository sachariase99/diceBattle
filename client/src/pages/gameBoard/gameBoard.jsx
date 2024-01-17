import React from 'react'
import { Link } from 'react-router-dom'
import styles from './gameBoard.module.scss';

const GameBoard = () => {
  return (
    <div className={styles.navLinks}>
      <h1>Choose Gamemode</h1>
        <ul>
            <li><Link className={styles.link} to="/playerboard">Player</Link></li>
            <li><Link className={styles.link} to="/aiboard">AI</Link></li>
        </ul>
    </div>
  )
}

export default GameBoard
