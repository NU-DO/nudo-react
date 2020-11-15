import React, {useState, useEffect} from 'react'
import SongCard from './SongCard'
import SongFavFilter from './SongFavFilter'
import './SongSearch.scss'

const SongFav = ({ favFiltered, handleDeleteSong, setDecade, decade }) => {
    const [favSongs, setFavSongs] = useState([])

    useEffect(() => {
        setFavSongs(favFiltered) 
    }, [favFiltered])

    return (
        <div className='maxWidth'>
            <h4 className='py-3 pl-3'>Canciones Favoritas</h4>
            <SongFavFilter setDecade={setDecade} decade={decade}/>
            <div className='songFavContainer'>
                {!favFiltered.length ? <p>No coincide ningún fav</p> :
                    favSongs.map(song => {
                        return (
                            <SongCard song={song} key={song.id} handleDeleteSong={handleDeleteSong}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SongFav