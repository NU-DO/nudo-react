import React, { useEffect, useState } from 'react'
import { getImages } from '../../../services/Api'
import './ImagesMemoryForm.scss'

const ImagesMemoryForm = ({ stateForm, setStateForm }) => {

    const [myImages, setMyImages] = useState([])
    const [selected, setSelected] = useState()
    const [favLoaded, setFavLoaded] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getImages()
            .then(images => {
                setMyImages(images)
                setLoaded(true)
            })
            .catch(err => console.log(err))

    }, [])



    const handleSelectImage = (image) => {
        setStateForm(prev => {
            return {
                ...prev,
                image: image.url
            }
        })
        setFavLoaded(true)
        console.log(stateForm)
    }

    return (
        <div className='MemoryImagesContainer'>
            <div>
                <h5 className='py-3'>Elige una foto de tu galería:</h5>
                <div className='MyImagesContainer'>
                    {loaded && myImages.map((image, index) => {
                        return (
                            <div className='MemoryImageCard' key={index} onClick={() => handleSelectImage(image)}>
                                <img src={image.url} />
                                <p>{image.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='MemorySelectedImage'>
                <div>
                    <h5 className='py-3'>Imagen seleccionada:</h5>
                    {favLoaded && (
                        <div className='PortraitSelectedImage'>
                            <img src={stateForm.image} />
                        </div>
                    )}

                </div>
            </div>


        </div>
    )
}

export default ImagesMemoryForm