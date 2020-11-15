import React from 'react'
import './SongFavFilter.scss'

const SongFavFilter = ({ setDecade, decade }) => {
    
    return (
        <div className='SongFavFilter'>
            <div className={`filterButton allBtn ${decade === 'all' && 'selectedDecadeBtn'}`} onClick={() => setDecade('all')}>Todas</div>
            <div className={`filterButton fiftiesBtn ${decade === "50's" && 'selectedDecadeBtn'}`} onClick={() => setDecade("50's")}>50's</div>
            <div className={`filterButton sixtiesBtn ${decade === "60's" && 'selectedDecadeBtn'}`} onClick={() => setDecade("60's")}>60's</div>
            <div className={`filterButton seventiesBtn ${decade === "70's" && 'selectedDecadeBtn'}`} onClick={() => setDecade("70's")}>70's</div>
            <div className={`filterButton eightiesBtn ${decade === "80's" && 'selectedDecadeBtn'}`} onClick={() => setDecade("80's")}>80's</div>
            <div className={`filterButton ninetiesBtn ${decade === "90's" && 'selectedDecadeBtn'}`} onClick={() => setDecade("90's")}>90's</div>
            <div className={`filterButton currentBtn ${decade === "00's" && 'selectedDecadeBtn'}`} onClick={() => setDecade("00's")}>00's</div>
        </div>
    )
}

export default SongFavFilter