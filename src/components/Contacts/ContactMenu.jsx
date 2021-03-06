import React, { useState, useEffect, useCallback } from 'react'
import Agenda from './Agenda'
import ContactDetails from './ContactDetails'
import ComponentHeader from '../Generic/ComponentHeader'
import Modal from '../Generic/Modal'
import ContactModal from './ContactModal'
import Spinner from '../Generic/Spinner'
import AlertSnackBar from '../Generic/AlertSnackBar'
import { getContacts, handleUpload, createContact, deleteContact, editContact } from '../../services/Api'
import '@reach/dialog/styles.css'
import { Snackbar } from '@material-ui/core'
import './ContactMenu.scss'

const ContactMenu = () => {
    const [search, setSearch] = useState({
        search: ''
    })
    const [tempState, setTempState] = useState({})
    const [contacts, setContacts] = useState([])
    const [selected, setSelected] = useState()
    const [searchedContacts, setSearchedContacts] = useState([])
    const [showDialog, setShowDialog] = useState(false)
    const [snackSavedOpen, setSnackSavedOpen] = useState(false)
    const [snackEditOpen, setSnackEditOpen] = useState(false)
    const [snackDeleteOpen, setSnackDeleteOpen] = useState(false)
    const [error, setError] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [imageLoad, setImageLoad] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        getContacts()
            .then(contacts => {
                setContacts(contacts.sort((a, b) => ('' + a.name).localeCompare(b.name)))
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setSearchedContacts(contacts.sort((a, b) => ('' + a.name).localeCompare(b.name)))
    }, [contacts])

    useEffect(() => {
        const match = contacts.filter(contact => contact.name.toLowerCase().includes(search.search))
            .sort((a, b) => ('' + a.name).localeCompare(b.name))
        setSearchedContacts(match)
    }, [search])

    const handleSearch = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

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

    const openModal = () => setShowDialog(true)
    const closeModal = () => {
        setShowDialog(false)
        setTempState({})
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setTempState(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleSelect = (contact) => {
        setSelected(contact)
    }

    const addContactClick = useCallback((event) => {
        openModal()
    }, [])

    const handleFileUpload = (event) => {
        const uploadData = new FormData()
        uploadData.append('url', event.target.files[0])
        setImageLoad(true)
        handleUpload(uploadData)
            .then(response => {
                setTempState(prev => {
                    setImageLoad(false)
                    return {
                        ...prev,
                        photo: response.secure_url
                    }
                })
            })
            .catch(err => {
                console.log('Error while uploading the file: ', err)
            })
    }

    const modalSent = (event) => {
        event.preventDefault()
        createContact(tempState)
            .then(() => {
                getContacts()
                    .then(contacts => setContacts(contacts))
                setTempState({})
                setError({})
                handleSavedSnack()
                closeModal()
            })
            .catch(err => setError(err.response.data.errors))
    }

    const handleDelete = (id) => {
        handleDeleteSnack()
        deleteContact(id)
            .then(() => {
                getContacts()
                    .then(contact => setContacts(contact))
                setSelected()
            })
            .catch(err => console.log(err))
    }

    const editThisContact = (contact) => {
        setTempState(contact)
        openModal()
    }

    const handleEditContact = (event) => {
        event.preventDefault()
        editContact(tempState.id, tempState)
            .then(edited => {
                setSelected(edited)
                getContacts()
                    .then(contact => setContacts(contact))
                setTempState({})
                setError({})
                closeModal()
                handleEditSnack()
            })
            .catch(err => setError(err.response.data.errors))
    }

    return (
        <div>
            {loaded ?
                <>
                    <div className='NudoMap'>
                        <ComponentHeader
                            title='Contactos'
                            description='Las personas que nos rodean son lo más importante. Mantén sus datos al día y organizalos en este apartado.'
                            nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Imagenes_dudrsk.svg'
                        />
                    </div>
                    <div className='ContactMenu'>
                        <div className='dividedBody'>
                            <Agenda
                                contacts={searchedContacts}
                                handleSelect={handleSelect}
                                handleSearch={handleSearch}
                                search={search}
                            />
                            <ContactDetails
                                selected={selected}
                                handleDelete={handleDelete}
                                editThisContact={editThisContact}
                                addContactClick={addContactClick}
                            />

                        </div>
                        {showDialog ?
                            <Modal>
                                <ContactModal
                                    closeModal={closeModal}
                                    tempState={tempState}
                                    handleChange={handleChange}
                                    handleFileUpload={handleFileUpload}
                                    handleEditContact={handleEditContact}
                                    imageLoad={imageLoad}
                                    modalSent={modalSent}
                                    error={error}
                                />
                            </Modal>
                            : null}
                    </div>
                </> :
                <Spinner />
            }

            <div className='AddContactButton'>
                <button className='AddContactButtonRounded' onClick={addContactClick}>+</button>
            </div>

            <Snackbar open={snackSavedOpen} autoHideDuration={4000} onClose={handleCloseSavedSnack}>
                <AlertSnackBar onClose={handleCloseSavedSnack} severity='success'>
                    Contacto guardado correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackEditOpen} autoHideDuration={4000} onClose={handleCloseEditSnack}>
                <AlertSnackBar onClose={handleCloseEditSnack} severity='info'>
                    Contacto editado correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackDeleteOpen} autoHideDuration={4000} onClose={handleCloseDeleteSnack}>
                <AlertSnackBar onClose={handleCloseDeleteSnack} severity='warning'>
                    Contacto borrado correctamente!
                 </AlertSnackBar>
            </Snackbar>
        </div>
    )
}

export default ContactMenu