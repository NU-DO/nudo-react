import React from 'react'

const SongCard = ({ song, typeSearch, form, handleOpen, addFav }) => {
    return (
        <li>
            <p>{song.name}</p>
            <p>{song.artists[0].name}</p>
            <p>{song.decade}</p>
            <audio controls>
                <source src={typeSearch ? song.preview_url : song.url} type='audio/mpeg' />
            </audio>
            {typeSearch ?
                <div>
                    <button onClick={() => handleOpen(song.name)}>Add Fav</button>
                    {form === song.name ? <div><button onClick={() => addFav(song, "60's")}>60</button><button onClick={() => addFav(song, "70's")}>70</button></div> : null}
                </div>
            : null}
        </li>
    )
}

export default SongCard