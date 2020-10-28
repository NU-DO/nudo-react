import React from 'react'
import Image from './Image'

const Album = ({ images }) => {
    return (
        <div className='ContainerAlbum'>
            {images.map(image => <Image image={image}/>)}
        </div>
    )
}

export default Album