import React from 'react'
import './Video.scss'

const Videoplayer = ({ videoId }) => {
    if (!videoId) {
        return (
            <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                Busca un video
            </p>
        )
    }
    return (
        <div className='VideoPlayer'>
            <iframe
                title={videoId}
                width='640'
                height='360'
                allowfullscreen='allowfullscreen'
                style={{ borderRadius: '10px' }}
                className='video-iframe'
                src={`https://www.youtube.com/embed/${videoId}`}
            />
        </div>
    )
}

export default Videoplayer