import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './Image.scss'


const Image = ({ image, handleDelete, editThisImage }) => {

    return (
        <div className='PolaroidCard'>
            <div className='PolaroidCardImgContainer'>
                <a href={image.url}>
                    <img src={image.url} alt={image.description} className='PolaroidCardImg' />
                </a>
            </div>
            <h6 className='PolaroidCardTitle'>{image.title}</h6>
            <p className='PolaroidCardDate'>({image.date})</p>
            <div className='PolaroidCRUDButtons'>
                <EditIcon className='PolaroidEditButton' onClick={() => editThisImage(image)} />
                <DeleteIcon className='PolaroidDeleteButton' onClick={() => handleDelete(image.id)} />
            </div>
        </div>
    )
}

export default Image