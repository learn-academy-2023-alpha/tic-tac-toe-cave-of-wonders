import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))

    const [nextTurn, setNextTurn] = useState(true);

    const handleGamePlay = (index) => {
        if (squares[index]) {
            return squares[index];
        }
        const updatedBoard = squares;
            if (nextTurn) {
                updatedBoard[index] = '❌';
            } else {
                updatedBoard[index] = '⭕️';
            }
            setSquares(updatedBoard);
            setNextTurn(!nextTurn);
    }


    const winningConditions = () => {

        const winningList = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let index = 0; index < winningList.length; index++) {
            const [a, b, c] = winningList[index];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    const winning = winningConditions(squares)
    let currentCondition 
    if (winning) {
        currentCondition = winning + "You've Won!!!"
    } else {
        currentCondition = (nextTurn ? '❌' : '⭕️') + "Your turn is next.";
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

        {currentCondition}
        
    </>
  )
}

export default App