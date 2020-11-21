import React from 'react'
import './StatisticsFavFilter.scss'

const StatisticsFavFilter = ({ setFocus }) => {

    return (
        <div className='StatisticsFavFilter'>
            <div className='filterButton' onClick={() => setFocus('total')}>Total</div>
            <div className='filterButton' onClick={() => setFocus('imagenes')}>Imágenes</div>
            <div className='filterButton' onClick={() => setFocus('canciones')}>Canciones</div>
            <div className='filterButton' onClick={() => setFocus('lugares')}>Lugares</div>
            <div className='filterButton' onClick={() => setFocus('contactos')}>Contactos</div>
            <div className='filterButton' onClick={() => setFocus('eventos')}>Historia</div>
            <div className='filterButton' onClick={() => setFocus('partidas')}>Puntuaciones</div>
        </div>
    )
}

export default StatisticsFavFilter