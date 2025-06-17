import { TURNOS } from '../constants'

export const Header = ({ J1, J2 }) => {
  return (
  <header>
    <h1>4 EN RAYA</h1>
    <div className="marcador">
      <div>
        <h2>Jugador {TURNOS[1]}:</h2>
        <p>{J1}</p>
      </div>
      <div>
        <h2>Jugador {TURNOS[2]}:</h2>
        <p>{J2}</p>
      </div>
    </div>
  </header>
  )
}
