import React from 'react'
import SongSearcherForm from './SongSearchForm'

const SongSearch = ({ matchSong, handleOpen, addFav, form, handleChange, search }) => {
    return (
        <div className='SongSearch'>
            <SongSearcherForm handleChange={handleChange} search={search}/>
            <div>
                    <ul>
                        {!matchSong.length ? <p>No coincide ninguna cancion</p> :
                            matchSong.map(song => (
                                <li className='splitted'>
                                    <p>{song.name} ---</p>
                                    <p>{song.artists[0].name}</p>
                                    <button onClick={() => handleOpen(song.name)}>Add Fav</button>
                                    {form === song.name ? <div><button onClick={() => addFav(song, "60's")}>60</button><button onClick={() => addFav(song, "70's")}>70</button></div> : null}
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </div>
    )
}

export default SongSearch