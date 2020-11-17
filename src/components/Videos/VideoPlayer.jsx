import React from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import './VideoPlayer.scss'

const Videoplayer = ({ videoId, closeDarkModal }) => {
    if (!videoId) {
        return (
            <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                Busca un video
            </p>
        )
    }

    return (
        <div className='ModalPlayerContainer'>
            <div className='ContainerVideoPlayer'>
                <CloseModalButton onClick={closeDarkModal} />
                <iframe
                    title={videoId}
                    width='auto'
                    height='auto'
                    allowfullscreen='allowfullscreen'
                    className='video-iframe'
                    src={`https://www.youtube.com/embed/${videoId}`}
                />
            </div>
        </div>
    )
}

export default Videoplayer