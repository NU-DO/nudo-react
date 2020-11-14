import React from 'react'
import InputText from '../Generic/InputText'

const VideoSearcher = ({ handleChangeSearch, handleSubmit, title }) => {
    
    return (
        <form method='GET' onSubmit={handleSubmit}>
            <InputText
                id='youtubeSearcher'
                type='text'
                name='search'
                placeholder='Busca un vídeo de Youtube'
                value={title}
                onChange={handleChangeSearch}
                autoFocus
            />
        </form>
    )
}

export default VideoSearcher