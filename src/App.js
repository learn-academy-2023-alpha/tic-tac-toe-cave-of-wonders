import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [nextTurn, setNextTurn] = useState(true);

  const handleGamePlay = (index) => {
    if (squares[index]) {
      return;
    }
        const updatedBoard = squares;
        if (nextTurn) {
            updatedBoard[index] = "❌";
            setSquares(updatedBoard);
            setNextTurn(!nextTurn);
        } else {
            updatedBoard[index] = '⭕️';
            setSquares(updatedBoard);
            setNextTurn(!nextTurn);
        }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='game-board'>
      {squares.map((value, index) => {
        return (
          <Square 
            value={value}
            key={index}
            index={index}
            handleGamePlay={handleGamePlay}
            />
        )
      })
      } 
      </div>
      
    </>
  )
}

export default App