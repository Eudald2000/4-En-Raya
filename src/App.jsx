import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tablero } from './components/Tablero'
import { ModalWinner } from './components/ModalWinner'
import { TURNOS } from './constants'

function App () {
  const [tablero, setTablero] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(8).fill(null))
  )
  const [turnoActual, setTurnoActual] = useState(1)
  const [ganador, setGanador] = useState()
  const [marcadorJ1, setMarcadorJ1] = useState(0)
  const [marcadorJ2, setMarcadorJ2] = useState(0)

  useEffect(() => {
    if (ganador === '🔵') {
      setMarcadorJ1(prev => prev + 1)
    } else if (ganador === '🔴') {
      setMarcadorJ2(prev => prev + 1)
    } else if (ganador === 'empate') {
      console.log('NO HAY GANADOR')
    }
  }, [ganador])

  function revancha () {
    setTablero(Array(7)
      .fill(null)
      .map(() => Array(8).fill(null)))
    setGanador()
  }
  function newGame () {
    setTablero(Array(7)
      .fill(null)
      .map(() => Array(8).fill(null)))
    setTurnoActual(1)
    setGanador()
    setMarcadorJ1(0)
    setMarcadorJ2(0)
  }

  return (
    <>
      <Header turno={TURNOS[turnoActual]} J1={marcadorJ1} J2={marcadorJ2} revancha={revancha} newgame={newGame}/>
      <main>
        <Tablero
        turno={turnoActual}
        setTurno={setTurnoActual}
        ganador={ganador}
        setGanador={setGanador}
        tablero={tablero}
        setTablero={setTablero}
        />
        {
          ganador ? <ModalWinner revancha={revancha} newgame={newGame} ganador={ganador}/> : ''
        }
      </main>
    </>
  )
}

export default App
