import React from 'react'
import ButtonAddSong from './ButtonAddSong'
import './SongCard.scss'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core'

const SongCard = ({ song, typeSearch, form, handleOpen, addFav }) => {
    return (
        <div className='SongCard'>
            <img
                className='albumImage'
                src={typeSearch ? song.album.images[0].url : song.image}
                alt={song.name} />
            <div className='songCardInfo'>
                <div className='songText'>
                    <p className='songName'>"{song.name}"</p>
                    <p className='songArtist'>{song.artists[0].name} | {song.decade}</p>
                </div>
                <audio controls>
                    <source src={typeSearch ? song.preview_url : song.url} type='audio/mpeg' />
                </audio>
                {typeSearch ?
                    <div className='addSongForm'>
                        <div className='addButton' onClick={() => handleOpen(song.id)}>+</div>
                        {form === song.id ? 
                            <div className='absolute'>
                                <ButtonAddSong decade="50's" addFav={addFav} song={song} />
                                <ButtonAddSong decade="60's" addFav={addFav} song={song} />
                                <ButtonAddSong decade="70's" addFav={addFav} song={song} />
                                <ButtonAddSong decade="80's" addFav={addFav} song={song} />
                                <ButtonAddSong decade="90's" addFav={addFav} song={song} />
                                <ButtonAddSong decade="00's" addFav={addFav} song={song} />
                            </div>
                        : null}
                    </div>
                : null}
            </div>
        </div>
    )
}

export default SongCard