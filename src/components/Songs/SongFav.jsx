import React, {useState, useEffect} from 'react'
import SongCard from './SongCard'
import SongFavFilter from './SongFavFilter'
import './SongSearch.scss'

const SongFav = ({ fav }) => {
    const [favSongs, setFav] = useState(fav)

    useEffect(() => {
        setFav(fav)
    }, [])

    const setDecade = (decade) => {
        if (decade === 'all') {
            setFav(fav)
        } else {
            const songDecade = fav.filter(song => song.decade === decade)
            setFav(songDecade)
        }
    }

    return (
        <div className='maxWidth'>
            <h4 className='py-3'>Canciones Favoritas</h4>
            <SongFavFilter setDecade={setDecade} />
            <div className='songFavContainer'>
                {!favSongs.length ? <p>No coincide ningún fav</p> :
                    favSongs.map(song => {
                        return (
                            <SongCard song={song}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SongFav