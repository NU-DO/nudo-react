import React from 'react'
import './SongCard.scss'

const SongCard = ({ song, typeSearch, form, handleOpen, addFav }) => {
    return (
        <li className='SongCard'>
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
                    <div>
                        <button onClick={() => handleOpen(song.name)}>Add Fav</button>
                        {form === song.name ? <div><button onClick={() => addFav(song, "60's")}>60</button><button onClick={() => addFav(song, "70's")}>70</button></div> : null}
                    </div>
                    : null}
            </div>
        </li>
    )
}

export default SongCard