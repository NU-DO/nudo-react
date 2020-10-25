import React, { useState } from 'react'
import SongSearcherForm from './SongSearchForm'
import SongCard from './SongCard'

const SongSearch = ({ matchSong, handleOpen, addFav, form, handleChange, search }) => {
    const [typeSearch, setTypeSearch] = useState(true)
    return (
        <div className='SongSearch'>
            <SongSearcherForm handleChange={handleChange} search={search}/>
            <div>
                    <ul>
                        {!matchSong.length ? <p>No coincide ninguna cancion</p> :
                            matchSong.map(song => (
                                <SongCard song={song} typeSearch={typeSearch} form={form} handleOpen={handleOpen} addFav={addFav} />
                            ))
                        }
                    </ul>
                </div>
        </div>
    )
}

export default SongSearch