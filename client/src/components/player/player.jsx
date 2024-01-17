// Player.jsx
import styles from './player.module.scss'

import React from 'react';

const Player = ({ playerNumber, lives, isAI, imageUrl }) => {
  return (
    <div className={styles.playerContainer}>
      <h2>{isAI ? 'AI' : `Player ${playerNumber}`}</h2>
      {imageUrl && <img src={imageUrl} alt={`Player ${playerNumber}`} />}
      <p>Lives: {lives}</p>
    </div>
  );
};

export default Player;
