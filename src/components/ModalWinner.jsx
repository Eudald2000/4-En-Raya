import { NewGame } from './NewGame'
import { RestartGame } from './RestartGame'

export const ModalWinner = ({ ganador, revancha, newgame }) => {
  return (
    <div className="modalWinner">
      <h1>TENEMOS UN GANADAOR, EL JUGADOR: {ganador}</h1>
      <div className='cajaBotones'>
        <NewGame revancha={revancha}/>
        <RestartGame newgame={newgame}/>
      </div>
    </div>
  )
}
