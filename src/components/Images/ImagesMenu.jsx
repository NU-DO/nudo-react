import React, { useState, useEffect, useCallback } from 'react'
import Album from './Album'
import ComponentHeader from '../Generic/ComponentHeader'
import ImageModal from './ImageModal'
import { getImages, createImage, handleUpload, deleteImage, editImage } from '../../services/Api'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

const ImagesMenu = () => {
    const [state, setState] = useState({})
    const [images, setImages] = useState([])
    const [showDialog, setShowDialog] = useState(false)

    useEffect(() => {
        getImages()
            .then(images => {
                setImages(images)
            })
            .catch(err => console.log(err))
    }, [])

    const openModal = () => setShowDialog(true)
    const closeModal = () => setShowDialog(false)

    const addImageClick = useCallback((event) => {
        openModal()
    }, [])

    const handleFileUpload = (event) => {
        const uploadData = new FormData()
        uploadData.append('url', event.target.files[0])
        handleUpload(uploadData)
            .then(response => {
                setState(prev => {
                    return {
                        ...prev,
                        url: response.secure_url
                    }
                })
            })
            .catch(err => {
                console.log('Error while uploading the file: ', err)
            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setState(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
        console.log('handelChangeForm: ', state);
    }

    const modalSent = (event) => {
        event.preventDefault()
        console.log('modalSent state:', state)
        createImage(state)
            .then(() => {
                getImages()
                    .then(images => setImages(images))
            })
            .catch(err => console.log(err))
        setState({})
        closeModal()
    }

    const handleDelete = (id) => {
        deleteImage(id)
            .then(() => {
                getImages()
                    .then(images => setImages(images))
            })
    }

    const editThisImage = (image) => {
        setState(image)
        openModal()
    }

    const handleEditImage = (event) => {
        event.preventDefault()
        // handleEditSnack()
        const body = {}
        body.title = state.title
        body.description = state.description
        body.date = state.date
        

    console.log('body', body)
        editImage(state.id, body)
            .then((images) => {
                getImages()
                    .then(images => setImages(images))
            })
            .catch(err => console.log(err))
        setState({})
        closeModal()
    }

    return (
        <div className='NudoMap'>
            <ComponentHeader
                title='Imágenes'
                description='Una imagen vale más que mil palabras... o eso dicen. Añade las imagenes que quieras tener a mano para poderlas rememorar diariamente'
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Imagenes_dudrsk.svg'
            />
            <SimpleReactLightbox>
                <Album
                    images={images}
                    setImages={setImages}
                    addImageClick={addImageClick}
                    handleDelete={handleDelete}
                    editThisImage={editThisImage} />
            </SimpleReactLightbox>
            <Dialog isOpen={showDialog} onDismiss={closeModal} className='ImageDialog'>
                <ImageModal
                    closeModal={closeModal}
                    modalSent={modalSent}
                    handleChange={handleChange}
                    handleFileUpload={handleFileUpload}
                    handleEditImage={handleEditImage}
                    state={state}
                />
            </Dialog>
        </div>
    )
}

export default ImagesMenu