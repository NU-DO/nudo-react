import React, { useState, useEffect } from 'react'
import SongSearch from './SongSearch'
import SongFav from './SongFav'
import { getSongsFromSpotify, createSong, getSongs } from '../../services/Api'
import './SongMenu.scss'

function SongsMenu() {
    const [search, setSearch] = useState({
        search: ''
    })
    const [matchSong, setMatchSong] = useState([])
    const [form, setForm] = useState(false)
    const [fav, setFav] = useState([])

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

    const handleChange = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    const handleOpen = (name) => {
        setForm(name)
    }

    const addFav = (song, decade) => {
        song.decade = decade
        song.url = song.preview_url
        console.log(song)
        createSong(song)
            .then(() => {
                getSongs()
                    .then(data => {
                        setFav(data)
                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='SongMenu'>
            <div className='splitted'>
                <SongSearch matchSong={matchSong} handleOpen={handleOpen} addFav={addFav} form={form} handleChange={handleChange} search={search} />
                <SongFav fav={fav}/>
            </div>
        </div>
    )
}

export default SongsMenu