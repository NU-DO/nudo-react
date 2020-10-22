import React, { useState, useEffect, useRef } from 'react'
import { getSongsFromSpotify, createSong, getSongs } from '../../services/Api'
import { useAuthContext } from '../../contexts/AuthContext'

function SongsMenu() {
    const [search, setSearch] = useState({
        search: ''
    })
    const [matchSong, setMatchSong] = useState([])
    const [form, setForm] = useState(false)
    const [fav, setFav] = useState([]) //back
    const { user } = useAuthContext()

    const handleChange = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    useEffect(() => {
        getSongs()
            .then(data => {
                setFav(data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getSongsFromSpotify(search)
            .then(data => {
                setMatchSong(data.slice(0, 3))
            })
            .catch(err => console.log(err))
    }, [search])

    const handleOpen = (name) => {
        setForm(name)
    }

    const addFav = (song, decade) => {
        song.decade = decade
        song.url = song.preview_url
        createSong(song, user)
            .then(() => {
                getSongs()
                    .then(data => {
                        setFav(data)
                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="songsMenu">
            <form method="GET">
                <input name="search" placeholder="search for an artist" onChange={handleChange} value={search.search} />
            </form>
            <br></br>
            <br></br>
            <div className="splitted">
                <div className="maxWidth">
                    <h3>Songs</h3>
                    <ul>
                        {!matchSong.length ? <p>No coincide ninguan cancion</p> :
                            matchSong.map(song => (
                                <li className="splitted">
                                    <p>{song.name} ---</p>
                                    <p>{song.artists[0].name}</p>
                                    <button onClick={() => handleOpen(song.name)}>Add Fav</button>
                                    {form === song.name ? <div><button onClick={() => addFav(song, "60's")}>60</button><button onClick={() => addFav(song, "70's")}>70</button></div> : null}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="maxWidth">
                    <h4>Fav Songs</h4>
                    <ul>
                        {!fav.length ? <p>No coincide ninguan fav</p> :
                            fav.map(song => {
                                console.log(song)
                                return (
                                    <li>
                                        <p>{song.name}</p>
                                        <p>{song.decade}</p>
                                        <audio controls>
                                            <source src={song.url} type="audio/mpeg" />
                                        </audio>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SongsMenu