import React from 'react'
import './SongMemoryCard.scss'

const SongMemoryCard = ({ song }) => {
   

    return (
        <div className='SongMemoryCard'>
            <img
                className='MemoryAlbumImage'
                src={song.image}
                alt='Album caratula' />
            <div className='songMemoryCardInfo'>
                <div className='songMemoryText'>
                    <p className='songMemoryName'>"{song.name}"</p>
                    <p className='songMemoryArtist'>{song.artists[0].name} | {song.decade}</p>
                </div>
                <audio controls src={song.url} type='audio/mpeg' />
            </div>
        </div>
    )
}

export default SongMemoryCard