import React from 'react'
import InputText from '../Generic/InputText'

const VideoSearcher = ({ handleChangeSearch, handleSubmit, title }) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="youtubeSearcher">Busca un video:</label>
            <InputText
                id='youtubeSearcher'
                type='text'
                name='search'
                placeHolder='Busca un vídeo de Youtube'
                value={title}
                onChange={handleChangeSearch}
                autoFocus
            />
        </form>
    )
}

export default VideoSearcher