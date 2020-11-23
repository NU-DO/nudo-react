import React from 'react'
import './StatisticsFavFilter.scss'

const StatisticsFavFilter = ({ setFocus }) => {

    return (
        <div className='StatisticsFavFilter'>
            <p>Categorías:</p>
            <select className='custom-select selectMenu' onClick={(e) => setFocus(e.target.value)}>
                <option value='total' >Total</option>
                <option value='imagenes'>Imágenes</option>
                <option value='canciones'>Canciones</option>
                <option value='lugares'>Lugares</option>
                <option value='contactos'>Contactos</option>
                <option value='eventos'>Historia</option>
                <option value='partidas'>Puntuaciones</option>
            </select>
        </div>

    )
}

export default StatisticsFavFilter