import React, { useState, useEffect, useRef } from 'react'
import { getSongsFromSpotify } from '../../services/Api';

function SongsMenu() {
    const [search, setSearch] = useState({
        search: ''
    });
    const [matchSong, setMatchSong] = useState([]);
    const intervalId = useRef()
    const [fav, setFav] = useState([]);
    const [form, setForm] = useState(false)

    const handleChange = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    useEffect(() => {
        window.clearTimeout(intervalId.current)
        getSongsFromSpotify(search)
            .then(data => {
                setMatchSong(data)
            })
            .catch(err => console.log(err))
    }, [search])

    const addFav = (song, decade) => {
        song.decade = decade
        setFav(prev => {
            return [
                ...prev,
                song
            ]
        })
    }

    const handleOpen = (name) => {
        setForm(name);
    };


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
                            )).slice(0, 3)
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
                                            <source src={song.preview_url} type="audio/mpeg" />
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