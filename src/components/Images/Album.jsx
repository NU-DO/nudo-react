import React, { useEffect, useState } from 'react'
import Image from './Image'
import './Album.scss'
import GenericButton from '../Generic/GenericButton'
import GenericButtonSecond from '../Generic/GenericButtonSecond'

const Album = ({ images, setImages, addImageClick, handleDelete, editThisImage }) => {

    const [dateImages, setDateImages] = useState(images)

    useEffect(() => {
        setDateImages(images)
    }, [images])

   

    const setCronological = (images) => {

        const imageDate = [...images].sort((a, b) => a.date - b.date)
        setDateImages(imageDate)
    }

    return (
        <div>
            <div className='ContainerAlbum'>
                <div className='ContainerAlbumButtons'>
                    <GenericButton
                        text='Nueva foto'
                        onClick={addImageClick} />
                    <GenericButtonSecond
                        text='Cronológico'
                        onClick={() => setCronological(dateImages)} />
                </div>
                {dateImages.map(image => <Image image={image} key={image.id} handleDelete={handleDelete} editThisImage={editThisImage} />)}
            </div>
        </div>
    )
}

export default Album