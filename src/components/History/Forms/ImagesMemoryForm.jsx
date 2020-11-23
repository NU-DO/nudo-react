import React, { useEffect, useState } from 'react'
import ContactSeacher from '../../Contacts/ContactSearcher'
import { getImages } from '../../../services/Api'
import './ImagesMemoryForm.scss'

const ImagesMemoryForm = ({ stateForm, setStateForm }) => {
    const [myImages, setMyImages] = useState([])
    const [favLoaded, setFavLoaded] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [searchedImages, setSearchedImages] = useState([])
    const [search, setSearch] = useState({
        search: ''
    })

    useEffect(() => {
        getImages()
            .then(images => {
                setMyImages(images)
                setSearchedImages(images)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const match = myImages.filter(image => image.title.toLowerCase().includes(search.search))
        setSearchedImages(match)
    }, [search])

    const handleSearchImage = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    const handleSelectImage = (image) => {
        setStateForm(prev => {
            return {
                ...prev,
                image: image
            }
        })
        setFavLoaded(true)
    }

    return (
        <div className='MemoryImagesContainer'>
            <div>
                <h5 className='py-3'>Elige una foto de tu galería:</h5>
                <ContactSeacher
                    handleSearch={handleSearchImage}
                    search={search}
                    placeholder='Busca una Imagen'
                />
                <div className='MyImagesContainer'>
                    {loaded && searchedImages.map((image, index) => {
                        return (
                            <div className='MemoryImageCard' key={index} onClick={() => handleSelectImage(image)}>
                                <img src={image.url} alt={image.title} />
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
                            <img src={stateForm.image.url} alt={stateForm.image.title} />
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ImagesMemoryForm