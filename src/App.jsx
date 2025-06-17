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
  const [turnoActual, setTurnoActual] = useState(1)
  const [ganador, setGanador] = useState()

  return (
    <>
      <Header />
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
