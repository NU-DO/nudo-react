import React from 'react'
import ButtonAddSong from './ButtonAddSong'
import DeleteIcon from '@material-ui/icons/Delete'
import './SongCard.scss'

const SongCard = ({ song, typeSearch, form, handleOpen, addFav, handleDeleteSong }) => {

    return (
        <div className={`SongCard ${'d' + song.decade?.slice(0, 3)}`}>
            <img
                className='albumImage'
                src={typeSearch ? song.album.images[0].url : song.image}
                alt={song.name} />
            <div className='songCardInfo'>
                <div className='songText'>
                    <p className='songName'>"{song.name}"</p>
                    <p className='songArtist'>{song.artists[0].name} {typeSearch ? null : `| ${song.decade}`}</p>
                </div>
                <audio controls src={typeSearch ? song.preview_url : song.url} type='audio/mpeg' />
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
                    : <div onClick={() => handleDeleteSong(song.id)}><DeleteIcon className='songsDeleteIcon' /></div>}
            </div>
        </div>
    )
}

export default SongCard