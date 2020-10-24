import React from 'react'

const SongCard = ({ song }) => {
    return (
        <li>
            <p>{song.name}</p>
            <p>{song.artists[0].name}</p>
            <p>{song.decade}</p>
            <audio controls>
                <source src={song.url} type='audio/mpeg' />
            </audio>
        </li>
    )
}

export default SongCard