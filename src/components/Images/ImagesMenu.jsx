import React, { useState, useEffect, useCallback } from 'react'
import Album from './Album'
import ComponentHeader from '../Generic/ComponentHeader'
import ImageModal from './ImageModal'
import { getImages, createImage, handleUpload, deleteImage, editImage } from '../../services/Api'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { Snackbar } from '@material-ui/core'
import AlertSnackBar from '../Generic/AlertSnackBar'
import '../Locations/NudoMap.scss'

const ImagesMenu = () => {
    const [state, setState] = useState({})
    const [images, setImages] = useState([])
    const [snackSavedOpen, setSnackSavedOpen] = useState(false)
    const [snackEditOpen, setSnackEditOpen] = useState(false)
    const [snackDeleteOpen, setSnackDeleteOpen] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [error, setError] = useState({})

    useEffect(() => {
        getImages()
            .then(images => {
                setImages(images)
            })
            .catch(err => console.log(err))
    }, [])

    const openModal = () => setShowDialog(true)
    const closeModal = () => setShowDialog(false)
    const handleSavedSnack = () => setSnackSavedOpen(true)
    const handleEditSnack = () => setSnackEditOpen(true)
    const handleDeleteSnack = () => setSnackDeleteOpen(true)
    const handleCloseSavedSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackSavedOpen(false)
    }

    const handleCloseEditSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackEditOpen(false)
    }

    const handleCloseDeleteSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackDeleteOpen(false)
    }

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
    }

    const modalSent = (event) => {
        event.preventDefault()
        createImage(state)
            .then(() => {
                getImages()
                    .then(images => setImages(images))
                setState({})
                closeModal()
                setError({})
                handleSavedSnack()
            })
            .catch(err => setError(err.response.data.errors))
    }

    const handleDelete = (id) => {
        handleDeleteSnack()
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
        handleEditSnack()
        const body = {}
        body.title = state.title
        body.description = state.description
        body.date = state.date

        editImage(state.id, body)
            .then(() => {
                getImages()
                    .then(images => setImages(images))
                setState({})
                closeModal()
                setError({})
                handleEditSnack()
            })
            .catch(err => setError(err.response.data.errors))
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
                    error={error}
                />
            </Dialog>
            <Snackbar open={snackSavedOpen} autoHideDuration={4000} onClose={handleCloseSavedSnack}>
                <AlertSnackBar onClose={handleCloseSavedSnack} severity='success'>
                    Imagen guardada correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackEditOpen} autoHideDuration={4000} onClose={handleCloseEditSnack}>
                <AlertSnackBar onClose={handleCloseEditSnack} severity='info'>
                    Imagen editada correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackDeleteOpen} autoHideDuration={4000} onClose={handleCloseDeleteSnack}>
                <AlertSnackBar onClose={handleCloseDeleteSnack} severity='warning'>
                    Imagen borrada correctamente!
                 </AlertSnackBar>
            </Snackbar>
        </div>
    )
}

export default ImagesMenu