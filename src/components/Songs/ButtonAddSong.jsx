import React from 'react'
import './ButtonAddSong.scss'

const ButtonAddSong = ({ decade, addFav, song }) => {
    return (
        <div className='ButtonAddSong' onClick={() => addFav(song, decade)}>
            {decade}
        </div>
    )
}

export default ButtonAddSong