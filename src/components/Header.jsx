import { TURNOS } from '../constants'
import { NewGame } from './NewGame'
import { RestartGame } from './RestartGame'

export const Header = ({ J1, J2, newgame, revancha, turno }) => {
  return (
  <header>
    <h1>4 EN RAYA</h1>
    <div className="marcador">
      <div className='marcadorJugador'>
        <h2>Jugador {TURNOS[1]}:</h2>
        <p>{J1}</p>
      </div>
      <div className='cajaBotones'>
        <NewGame revancha={revancha}/>
        <RestartGame newgame={newgame}/>
      </div>
      <h2>Turno de: {turno}</h2>
      <div className='marcadorJugador'>
        <h2>Jugador {TURNOS[2]}:</h2>
        <p>{J2}</p>
      </div>
    </div>
  </header>
  )
}
