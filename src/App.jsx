import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tablero } from './components/Tablero'

function App () {
  const [tablero, setTablero] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(8).fill(null))
  )
  const TURNOS = { 1: '🔵', 2: '🔴' }
  const [turnoActual, setTurnoActual] = useState(1)

  function handleClick (rowIndex, colIndex) {
    if (tablero[rowIndex][colIndex]) return

    const nuevoTablero = [...tablero]
    nuevoTablero[rowIndex][colIndex] = TURNOS[turnoActual]
    setTablero(nuevoTablero)
    setTurnoActual((prev) => (prev === 1 ? 2 : 1))
  }

  return (
    <>
      <Header />
      <main>
        <div className="board">
          {tablero.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((cell, colIndex) => (
                <div
                  onClick={() => handleClick(rowIndex, colIndex)}
                  className="cell"
                  key={colIndex}
                >
                  {cell === TURNOS[1] && (
                    <img src="/4-En-Raya/circuloAzul.png" alt="Ficha azul" />
                  )}
                  {cell === TURNOS[2] && (
                    <img src="/4-En-Raya/circuloRojo.png" alt="Ficha roja" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
