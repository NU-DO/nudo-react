import React from 'react'
import SongCard from './SongCard'

const SongFav = ({ fav }) => {
    return (
        <div className='maxWidth'>
            <h4>Canciones Favoritas</h4>
            <ul>
                {!fav.length ? <p>No coincide ninguan fav</p> :
                    fav.map(song => {
                        return (
                            <SongCard song={song}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SongFav