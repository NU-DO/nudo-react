import React from 'react'


const Video = ({ playVideo, videosYT, addVideoClick }) => {
    const allVideos = videosYT.map((video, index) => {
        return (
            <div
                className='VideoCard'
                key={index}
                >
                <div>
                    <img src={video.snippet.thumbnails.high.url} key={index} className='VideoThumbnail' alt='recorte' onClick={() => playVideo(video)}/>
                </div>
                <div>
                    <p className='VideoCardTitle' onClick={() => playVideo(video)}>{video.snippet.title}</p>
                </div>
                <div className='AddVideo' onClick={() => addVideoClick()}>
                    +
                </div>
            </div>
        )
    })

    return (
        <div>
            { allVideos}
        </div>
    )
}

export default Video