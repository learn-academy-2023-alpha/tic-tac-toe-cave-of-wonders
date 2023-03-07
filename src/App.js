import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleGamePlay = (index) => {
  let updatedBoard = [...squares]
    updatedBoard[index] = "❌"
    setSquares(updatedBoard)
  // alert(index)
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