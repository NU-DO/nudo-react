import React from 'react'
import './SongFavFilter.scss'

const SongFavFilter = ({ setDecade }) => {
    
    return (
        <div className='SongFavFilter'>
            <div className='filterButton allBtn' onClick={() => setDecade('all')}>Todas</div>
            <div className='filterButton fiftiesBtn' onClick={() => setDecade("50's")}>50's</div>
            <div className='filterButton sixtiesBtn' onClick={() => setDecade("60's")}>60's</div>
            <div className='filterButton seventiesBtn' onClick={() => setDecade("70's")}>70's</div>
            <div className='filterButton eightiesBtn' onClick={() => setDecade("80's")}>80's</div>
            <div className='filterButton ninetiesBtn' onClick={() => setDecade("90's")}>90's</div>
            <div className='filterButton currentBtn' onClick={() => setDecade("00's")}>00's</div>
        </div>
    )
}

export default SongFavFilter