import React, { useState, useEffect } from 'react'
import SongSearch from './SongSearch'
import SongFav from './SongFav'
import { getSongsFromSpotify, createSong, getSongs } from '../../services/Api'
import './SongMenu.scss'
import ComponentHeader from '../Generic/ComponentHeader'

function SongMenu() {
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
                setMatchSong(data.slice(0, 20))
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
                        setForm(false)
                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='SongMenu'>
            <ComponentHeader
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-musica_a9qwta.svg'
                title='Canciones'
                description='Busca tus canciones favoritas de siempre y guardalas en Nudo. Disfruta, baila, recuerda.'
            />
            <div className='splitted'>
                <div className='songSearchDiv'>
                    <SongSearch matchSong={matchSong} handleOpen={handleOpen} addFav={addFav} form={form} handleChange={handleChange} search={search} />
                </div>
                <div className='songSearchDiv'>
                    <SongFav fav={fav} />
                </div>
            </div>
        </div>

    )
}

export default SongMenu