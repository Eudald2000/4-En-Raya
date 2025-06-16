import { useState } from 'react'

export const Tablero = ({}) => {
  const [tablero, setTablero] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(8).fill(null))
  )
  return (
  <div className="board">
          {tablero.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((cell, colIndex) => (
                <div className="cell" key={colIndex}></div>
              ))}
            </div>
          ))}
        </div>
  )
}
