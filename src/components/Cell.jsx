import { TURNOS } from '../constants'

export const Cell = ({ cell, onClick }) => {
  return (
    <div className="cell" onClick={onClick}>
      {cell === TURNOS[1] && (
        <img src="/4-En-Raya/circuloAzul.png" alt="Ficha azul" />
      )}
      {cell === TURNOS[2] && (
        <img src="/4-En-Raya/circuloRojo.png" alt="Ficha roja" />
      )}
    </div>
  )
}
