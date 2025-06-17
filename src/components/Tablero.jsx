import { TURNOS } from '../constants'
import { Cell } from './Cell'

export const Tablero = ({ tablero, ganador, turno, setTablero, setTurno, setGanador }) => {
  function handleClick (rowIndex, colIndex) {
    if (tablero[rowIndex][colIndex] || ganador) {
      return
    }

    const nuevoTablero = tablero.map((row) => [...row])
    nuevoTablero[rowIndex][colIndex] = TURNOS[turno]
    setTablero(nuevoTablero)

    comrobarGanador(nuevoTablero, rowIndex, colIndex)
    setTurno((prev) => (prev === 1 ? 2 : 1))
  }

  function comrobarGanador (tablero, rowIndex, colIndex) {
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
    <div className="board">
      {tablero.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell
              cell={cell}
              onClick={() => handleClick(rowIndex, colIndex)}
              key={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
