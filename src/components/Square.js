import React from 'react'

const Square = ({value, index, handleGamePlay}) => {

  const handleClick = () => {
    return handleGamePlay(index)
    console.log("clicked")
  }
  return (
    <>
    <div className="square" onClick={handleClick}>
      {value}
  
    </div>
    </>
  )
}
export default Square
