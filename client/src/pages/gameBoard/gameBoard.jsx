import React from 'react'
import { Link } from 'react-router-dom'

const GameBoard = () => {
  return (
    <div>
        <ul>
            <li><Link to="/playerboard">Player</Link></li>
            <li><Link to="/aiboard">Ai</Link></li>
        </ul>
    </div>
  )
}

export default GameBoard
