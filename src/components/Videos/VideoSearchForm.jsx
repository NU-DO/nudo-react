import React from 'react'
import InputText from '../Generic/InputText'
import './VideoSearchForm.scss'

const VideoSearcher = ({ handleChangeSearch, handleSubmit, title }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div class="input-group mb-3">
                <InputText
                    id='youtubeSearcher'
                    type='text'
                    name='search'
                    placeHolder='Busca en Youtube'
                    value={title}
                    onChange={handleChangeSearch}
                    autoFocus
                />
                <div class="input-group-append">
                <button class="SearchVideoButton" type="submit" id="button-addon2"><img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1605480624/NUDO/assets/Recurso_20_t4tf3s.svg' alt='logo' className='LupaIcon'/></button>
                </div>
            </div>
        </form>
    )
}

export default VideoSearcher