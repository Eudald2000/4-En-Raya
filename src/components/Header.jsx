import { TURNOS } from '../constants'

export const Header = ({}) => {
  return (
  <header>
    <h1>4 EN RAYA</h1>
    <div className="marcador">
      <div>
        <h2>Jugador {TURNOS[1]}:</h2>
        <p>0</p>
      </div>
      <div>
        <h2>Jugador {TURNOS[2]}:</h2>
        <p>0</p>
      </div>
    </div>
  </header>
  )
}
