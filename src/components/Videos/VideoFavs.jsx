import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './VideoFavs.scss'

<<<<<<< HEAD
const VideoFavs = ({ videos, editThisVideo, handleDelete, onVideoSelected}) => {
    
=======
const VideoFavs = ({ videos, editThisVideo, handleDelete }) => {

>>>>>>> 535ecc9967ff54e7f65fca012a70446ea8d03a48
    return (
        <div className='ContainerVideoCardFav'>
            {videos.map((video, index) => {
                return (
                    <div className='VideoCardFav' key={index}>
<<<<<<< HEAD
                        <img src={video.snippet} className='VideoCardFavImage' onClick={() => onVideoSelected(index, video.snippet)}/>
=======
                        <img src={video.snippet} className='VideoCardFavImage' />
>>>>>>> 535ecc9967ff54e7f65fca012a70446ea8d03a48
                        <h5>{video.title}</h5>
                        <p> Descripción: {video.description}</p>
                        <div className='CardFavCRUDButtons'>
                            <EditIcon className='CardFavEditButton' onClick={() => editThisVideo(video)} />
                            <DeleteIcon className='CardFavDeleteButton' onClick={() => handleDelete(video.id)} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VideoFavs