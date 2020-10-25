import React, { useState } from 'react'
import SongSearcherForm from './SongSearchForm'
import SongCard from './SongCard'
import './SongSearch.scss'

const SongSearch = ({ matchSong, handleOpen, addFav, form, handleChange, search }) => {
    const [typeSearch, setTypeSearch] = useState(true)
    return (
        <div className='SongSearch'>
            <div className='songSearcher'>
                <SongSearcherForm handleChange={handleChange} search={search} />
            </div>
            <div className='songFavContainer'>
                {!matchSong.length ? <p>No coincide ninguna cancion</p> :
                    matchSong.map(song => (
                        <SongCard song={song} typeSearch={typeSearch} form={form} handleOpen={handleOpen} addFav={addFav} />
                    ))
                }
            </div>
        </div>
    )
}

export default SongSearch