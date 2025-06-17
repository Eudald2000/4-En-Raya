import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tablero } from './components/Tablero'

function App () {
  const [tablero, setTablero] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(8).fill(null))
  )
  const [turnoActual, setTurnoActual] = useState(1)
  const [ganador, setGanador] = useState(null)
  const [marcadorJ1, setMarcadorJ1] = useState(0)
  const [marcadorJ2, setMarcadorJ2] = useState(0)

  useEffect(() => {
    if (ganador === '🔵') {
      setMarcadorJ1(prev => prev + 1)
    } else if (ganador === '🔴') {
      setMarcadorJ2(prev => prev + 1)
    }
  }, [ganador])

  return (
    <>
      <Header J1={marcadorJ1} J2={marcadorJ2} />
      <main>
        <Tablero
        turno={turnoActual}
        setTurno={setTurnoActual}
        ganador={ganador}
        setGanador={setGanador}
        tablero={tablero}
        setTablero={setTablero}
        />
      </main>
    </>
  )
}

export default App
