import React from 'react'
import Image from './Image'
import './Album.scss'
import GenericButton from '../Generic/GenericButton'

const Album = ({ images, addImageClick }) => {
    return (
        <div>
            <div className='ContainerAlbum'>
                <div className='ContainerAlbumButtons'>
                    <GenericButton
                        text='Nueva foto'
                        onClick={addImageClick} />
                </div>
                {images.map(image => <Image image={image} key={image.id} />)}
            </div>
        </div>
    )
}

export default Album