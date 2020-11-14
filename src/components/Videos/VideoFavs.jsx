import React from 'react'

const VideoFavs = ({ videos, handleVideoEdit, handleDelete}) => {
    
    console.log(videos);
    return (
        <div>
            <ul>{videos.map((video, index) => {
                return (<li key={index}>{video.title}</li>)
            })}
            </ul>
        </div>
    )
}

export default VideoFavs