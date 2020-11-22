import React, { useEffect, useState } from 'react'
import SongCard from '../../Songs/SongCard'
import ContactSeacher from '../../Contacts/ContactSearcher'
import { getSongs } from '../../../services/Api'
import './SongsMemoryForm.scss'

const SongsMemoryForm = ({ stateForm, setStateForm }) => {
    const [mySongs, setMySongs] = useState([])
    const [favLoaded, setFavLoaded] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [searchedSongs, setSearchedSongs] = useState([])
    const [search, setSearch] = useState({
        search: ''
    })

    useEffect(() => {
        getSongs()
            .then(songs => {
                setMySongs(songs)
                setSearchedSongs(songs)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const match = mySongs.filter(song => song.name.toLowerCase().includes(search.search))
        setSearchedSongs(match)
    }, [search])

    const handleSearchSong = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    const handleSelectSong = (song) => {
        setStateForm(prev => {
            return {
                ...prev,
                playlist: song
            }
        })
        setFavLoaded(true)
    }

    return (
        <div className='MemorySongsContainer'>
            <div>
                <h5 className='py-3'>Elige una canción:</h5>
                <ContactSeacher handleSearch={handleSearchSong} search={search} placeholder='Busca una Canción' />
                <div className='AgendaFromDB'>
                    {loaded && searchedSongs.map((song, index) => {
                        return (
                            <div className='MemorySongsCard' key={index} onClick={() => handleSelectSong(song)}>
                                <SongCard song={song} fromEvent={true} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='MySongsContainer'>
                <div>
                    <h5 className='py-3'>Localización seleccionada:</h5>
                    {favLoaded && (
                        <div className='MemorySelectedLocations'>
                            <SongCard song={stateForm.playlist} fromEvent={true} />
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SongsMemoryForm