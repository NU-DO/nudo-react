import React from 'react'
import GenericButton from '../Generic/GenericButton'
import './SongFavFilter.scss'

const SongFavFilter = ({ setDecade }) => {
    return (
        <div className='SongFavFilter'>
            <div className='filterButton' onClick={() => setDecade('all')}>Todas</div>
            <div className='filterButton' onClick={() => setDecade("50's")}>50's</div>
            <div className='filterButton' onClick={() => setDecade("60's")}>60's</div>
            <div className='filterButton' onClick={() => setDecade("70's")}>70's</div>
            <div className='filterButton' onClick={() => setDecade("80's")}>80's</div>
            <div className='filterButton' onClick={() => setDecade("90's")}>90's</div>
            <div className='filterButton' onClick={() => setDecade("00's")}>00's</div>
        </div>
    )
}

export default SongFavFilter