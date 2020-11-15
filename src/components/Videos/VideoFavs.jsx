import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './VideoFavs.scss'

const VideoFavs = ({ videos, editThisVideo, handleDelete, onVideoSelected}) => {
    
    return (
        <div className='ContainerVideoCardFav'>
            {videos.map((video, index) => {
                return (
                    <div className='VideoCardFav' key={index}>
                        <img src={video.snippet} className='VideoCardFavImage' onClick={() => onVideoSelected(index, video.snippet)}/>
                        <h5>{video.title}</h5>
                        <p> Descripción: {video.description}</p>
                        <div className='CardFavCRUDButtons'>
                        <EditIcon className='CardFavEditButton' onClick={() => editThisVideo(video)}/>
                        <DeleteIcon className='CardFavDeleteButton' onClick={() => handleDelete(video.id)}/>
                        </div>
                    </div>
                    )
            })}
        </div>
    )
}

export default VideoFavs