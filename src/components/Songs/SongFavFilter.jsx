import React from 'react'
import './SongFavFilter.scss'

const SongFavFilter = ({ setDecade, decade }) => {
    
    return (
        <div className='SongFavFilter'>
            <h5 className='SongFavFilterHeader'>Filtra por decada:</h5>
            <select onClick={(e) => setDecade(e.target.value)} className="custom-select selectMenu">
                <option value='all'>Todas</option>
                <option value="50's">50's</option>
                <option value="60's">60's</option>
                <option value="70's">70's</option>
                <option value="80's">80's</option>
                <option value="90's">90's</option>
                <option value="00's">00's</option>
            </select>
        </div>
    )
}

export default SongFavFilter