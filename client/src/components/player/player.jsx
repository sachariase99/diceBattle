import React from 'react';

const Player = ({ playerNumber, lives }) => {
  return (
    <div>
      <h2>Player {playerNumber}</h2>
      <p>Lives: {lives}</p>
    </div>
  );
};

export default Player;
