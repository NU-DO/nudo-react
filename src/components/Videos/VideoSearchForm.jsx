import React from 'react'
import InputText from '../Generic/InputText'
import './VideoSearchForm.scss'

const VideoSearcher = ({ handleChangeSearch, handleSubmit, title }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-group mb-3 ml-4'>
                <InputText
                    id='youtubeSearcher'
                    type='text'
                    name='search'
                    placeholder='Busca en Youtube'
                    value={title}
                    onChange={handleChangeSearch}
                    autoFocus
                />
                <div className='input-group-append'>
                    <button className='SearchVideoButton' type='submit' id='button-addon2'>
                        <img
                            src='https://res.cloudinary.com/difhe4gl3/image/upload/v1605480624/NUDO/assets/Recurso_20_t4tf3s.svg'
                            alt='logo'
                            className='LupaIcon'
                        />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default VideoSearcher