import React, { useState } from 'react'
import SongSearcherForm from './SongSearchForm'
import SongCard from './SongCard'
import './SongSearch.scss'

const SongSearch = ({ matchSong, handleOpen, addFav, form, handleChange, search }) => {
    const typeSearch = useState(true)

    return (
        <div className='SongSearch'>
            <div className='songSearcher'>
                <SongSearcherForm handleChange={handleChange} search={search} />
            </div>
            <div className='songFavContainer'>
                {!matchSong.length ? <p>Empieza a buscar tus canciones favoritas!</p> :
                    matchSong.map((song, index) => (
                        <SongCard song={song} key={index} typeSearch={typeSearch} form={form} handleOpen={handleOpen} addFav={addFav} />
                    ))
                }
            </div>
        </div>
    )
}

export default SongSearch