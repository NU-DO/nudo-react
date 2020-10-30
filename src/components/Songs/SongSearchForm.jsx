import React from 'react'
import InputText from '../Generic/InputText'

const SongSearcher = ({ handleChange, search }) => {
    
    return (
        <form method='GET'>
            <InputText
                id='searchSong'
                name='search'
                placeHolder='Busca una canción'
                value={search.search}
                onChange={handleChange}
                autoFocus
            />
        </form>
    )
}

export default SongSearcher