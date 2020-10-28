import React from 'react'
import './Image.scss'

const Image = ({ image }) => {
    return (
        <div className='ContainerImageStyle'>
            <img 
            src={`${image.url}`}
            alt={image.alt}
            className='ImageStyle'
            />
        </div>
    )
}

export default Image
