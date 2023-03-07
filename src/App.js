import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='game-board'>
      {squares.map(() => {
        return (
          <Square />
        )
      })
      } 
      </div>
      
    </>
  )
}

export default App