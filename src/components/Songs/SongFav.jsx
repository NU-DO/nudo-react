import React, {useState, useEffect} from 'react'
import SongCard from './SongCard'
import SongFavFilter from './SongFavFilter'
import './SongSearch.scss'

const SongFav = ({ fav, handleDeleteSong }) => {
    const [favSongs, setFavSongs] = useState(fav)

    useEffect(() => {
        setFavSongs(fav) 
    }, [fav])

    const setDecade = (decade) => {
        if (decade === 'all') {
            setFavSongs(fav)
        } else {
            const songDecade = fav.filter(song => song.decade === decade)
            setFavSongs(songDecade)
        }
    }

    return (
        <div className='maxWidth'>
            <h4 className='py-3'>Canciones Favoritas</h4>
            <SongFavFilter setDecade={setDecade} />
            <div className='songFavContainer'>
                {!fav.length ? <p>No coincide ningún fav</p> :
                    favSongs.map(song => {
                        return (
                            <SongCard song={song} key={song.id} handleDeleteSong={handleDeleteSong} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SongFav