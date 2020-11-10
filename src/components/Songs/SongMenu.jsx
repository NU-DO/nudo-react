import React, { useState, useEffect } from 'react'
import SongSearch from './SongSearch'
import SongFav from './SongFav'
import Spinner from '../Generic/Spinner'
import ComponentHeader from '../Generic/ComponentHeader'
import AlertSnackBar from '../Generic/AlertSnackBar'
import { getSongsFromSpotify, createSong, getSongs, deleteSong } from '../../services/Api'
import { Snackbar } from '@material-ui/core'
import './SongMenu.scss'

function SongMenu() {
    const [search, setSearch] = useState({
        search: ''
    })
    const [matchSong, setMatchSong] = useState([])
    const [form, setForm] = useState(false)
    const [fav, setFav] = useState([])
    const [snackSavedOpen, setSnackSavedOpen] = useState(false)
    const [snackDeleteOpen, setSnackDeleteOpen] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        getSongs()
            .then(data => {
                setFav(data)   
            })
            .then(() => setLoaded(true))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getSongsFromSpotify(search)
            .then(data => {
                if (data.length) {
                    setMatchSong(data.slice(0, 15))
                }
            })
            .catch(err => console.log(err))
    }, [search])

    const handleSavedSnack = () => setSnackSavedOpen(true)
    const handleDeleteSnack = () => setSnackDeleteOpen(true)
    const handleCloseSavedSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setSnackSavedOpen(false)
    }

    const handleCloseDeleteSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setSnackDeleteOpen(false)
    }

    const handleChange = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    const handleOpen = (name) => {
        setForm(name)
    }

    const addFav = (song, decade) => {
        handleSavedSnack()
        song.decade = decade
        song.url = song.preview_url
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

    const handleDeleteSong = (id) => {
        handleDeleteSnack()
        deleteSong(id)
            .then(() => {
                getSongs()
                    .then(songs => setFav(songs))
            })
    }

    return (
        <div className='SongMenu'>
            {loaded ?
                <><ComponentHeader
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-musica_a9qwta.svg'
                    title='Canciones'
                    description='Busca tus canciones favoritas de siempre y guardalas en Nudo. Disfruta, baila, recuerda.'
                />
                <div className='splitted'>
                    <div className='songSearchDiv'>
                        <SongSearch matchSong={matchSong} handleOpen={handleOpen} addFav={addFav} form={form} handleChange={handleChange} search={search} />
                    </div>
                    <div className='songSearchDiv'>
                        <SongFav fav={fav} handleDeleteSong={handleDeleteSong} />
                    </div>
                </div></>
                :
                <Spinner />
            }

            <Snackbar open={snackSavedOpen} autoHideDuration={4000} onClose={handleCloseSavedSnack}>
                <AlertSnackBar onClose={handleCloseSavedSnack} severity='success'>
                    Canción guardada correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackDeleteOpen} autoHideDuration={4000} onClose={handleCloseDeleteSnack}>
                <AlertSnackBar onClose={handleCloseDeleteSnack} severity='warning'>
                    Canción eliminada correctamente!
                 </AlertSnackBar>
            </Snackbar>
        </div>
    )
}

export default SongMenu