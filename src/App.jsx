import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'

function App () {
  const [tablero, setTablero] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(8).fill(null))
  )
  const TURNOS = { 1: '🔵', 2: '🔴' }
  const [turnoActual, setTurnoActual] = useState(1)
  const [ganador, setGanador] = useState()

  function handleClick (rowIndex, colIndex) {
    if (tablero[rowIndex][colIndex] || ganador) {
      return
    }

    const nuevoTablero = tablero.map((row) => [...row])
    nuevoTablero[rowIndex][colIndex] = TURNOS[turnoActual]
    setTablero(nuevoTablero)

    comrovarGanador(nuevoTablero, rowIndex, colIndex)
    setTurnoActual((prev) => (prev === 1 ? 2 : 1))
  }

  function comrovarGanador (tablero, rowIndex, colIndex) {
    comprobarVertical(tablero, rowIndex, colIndex)
    comprobarHorizontal(tablero, rowIndex, colIndex)
    comprobarDiagonal_1(tablero, rowIndex, colIndex)
    comprobarDiagonal_2(tablero, rowIndex, colIndex)
  }

  // COMPRUEBA VERTICAL
  function comprobarVertical (tablero, rowIndex, colIndex) {
    let contador = 1
    const ficha = tablero[rowIndex][colIndex]

    // HACIA ABAJO
    for (let i = 1; i < 4; i++) {
      if (rowIndex + i >= tablero.length) break
      if (tablero[rowIndex + i][colIndex] === ficha) {
        contador++
      } else {
        break
      }
    }

    // HACIA ARRIBA
    for (let i = 1; i < 4; i++) {
      if (rowIndex - i < 0) break
      if (tablero[rowIndex - i][colIndex] === ficha) {
        contador++
      } else {
        break
      }
    }

    if (contador >= 4) {
      console.log('TENEMOS GANADOR, EN VERTICAL:', ficha)
      setGanador(ficha)
    }
  }

  // COMPRUEVA HORIZONTAL
  function comprobarHorizontal (tablero, rowIndex, colIndex) {
    let contador = 1
    const ficha = tablero[rowIndex][colIndex]

    // COMPRUEBA DERECHA
    for (let i = 1; i < 4; i++) {
      if (colIndex + i >= tablero[0].length) break
      if (tablero[rowIndex][colIndex + i] === ficha) {
        contador++
      } else {
        break
      }
    }

    // COMPRUEBA IZQUIERDA
    for (let i = 1; i < 4; i++) {
      if (colIndex - i < 0) break
      if (tablero[rowIndex][colIndex - i] === ficha) {
        contador++
      } else {
        break
      }
    }
    if (contador >= 4) {
      console.log('TENEMOS GANADOR, EN HORIZONTAL:', ficha)
      setGanador(ficha)
    }
  }

  // COMPRUEBA DIAGONAL 1
  function comprobarDiagonal_1 (tablero, rowIndex, colIndex) {
    let contador = 1
    const ficha = tablero[rowIndex][colIndex]

    // COMPRUEBA ABAJO-DERECHA
    for (let i = 1; i < 4; i++) {
      if (
        rowIndex + i >= tablero.length ||
      colIndex + i >= tablero[0].length
      ) break

      if (tablero[rowIndex + i][colIndex + i] === ficha) {
        contador++
      } else {
        break
      }
    }

    // COMRUEBA ARRIBA-IZQUIERDA
    for (let i = 1; i < 4; i++) {
      if (
        rowIndex - i < 0 ||
      colIndex - i < 0
      ) break

      if (tablero[rowIndex - i][colIndex - i] === ficha) {
        contador++
      } else {
        break
      }
    }

    if (contador >= 4) {
      console.log('TENEMOS GANADOR, DIAGONAL 1:', ficha)
      setGanador(ficha)
    }
  }

  // Comprueba diagonal abajo-izquierda
  function comprobarDiagonal_2 (tablero, rowIndex, colIndex) {
    let contador = 1
    const ficha = tablero[rowIndex][colIndex]

    // COMPRUEBA ABAJO-IZQUIERDA
    for (let i = 1; i < 4; i++) {
      if (
        rowIndex + i >= tablero.length ||
        colIndex - i < 0
      ) break
      if (tablero[rowIndex + i][colIndex - i] === ficha) {
        contador++
      } else {
        break
      }

      // COMPRUEBA ARRIBA-DERECHA
      for (let i = 1; i < 4; i++) {
        if (
          rowIndex - i < 0 ||
          colIndex + i >= tablero[0].length
        ) break
        if (tablero[rowIndex - i][colIndex + i]) {
          contador++
        } else {
          break
        }
      }

      if (contador >= 4) {
        console.log('TENEMOS GANADOR, DIAGONAL 2:', ficha)
        setGanador(ficha)
      }
    }
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
