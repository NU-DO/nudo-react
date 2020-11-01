import React, { useState, useEffect, useCallback } from 'react'
import ComponentHeader from '../Generic/ComponentHeader'
import Agenda from './Agenda'
import ContactDetails from './ContactDetails'
import ContactModal from './ContactModal'
import { getContacts, handleUpload, createContact, deleteContact, editContact } from '../../services/Api'
import './ContactMenu.scss'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { Snackbar } from '@material-ui/core'
import AlertSnackBar from '../Generic/AlertSnackBar'


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

    useEffect(() => {
        getContacts()
            .then(contacts => {
                setContacts(contacts)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setSearchedContacts(contacts)
    }, [contacts])

    const handleSearch = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    useEffect(() => {
        const match = contacts.filter(contact => contact.name.toLowerCase().includes(search.search))
        setSearchedContacts(match)
    }, [search])
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

    const handleSelect = (contact) => {
        setSelected(contact)
    }

    const addContactClick = useCallback((event) => {
        openModal()
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setTempState(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
        console.log(tempState);
    }

    const handleFileUpload = (event) => {
        const uploadData = new FormData()
        uploadData.append('url', event.target.files[0])
        handleUpload(uploadData)
            .then(response => {
                setTempState(prev => {
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
            })
            .catch(err => console.log(err))
        setTempState({})
        closeModal()
    }

    const handleDelete = (id) => {
        deleteContact(id)
            .then(() => {
                getContacts()
                    .then(contact => setContacts(contact))
            })
            .catch(err => console.log(err))
    }

    const editThisContact = (contact) => {
        setTempState(contact)
        openModal()
    }

    const handleEditContact = (event) => {
        event.preventDefault()
        // handleEditSnack()
        editContact(tempState.id, tempState)
            .then(edited => {
                setSelected(edited)
                getContacts()
                    .then(contact => setContacts(contact))
            })
            .catch(err => console.log(err))
        setTempState({})
        closeModal()
    }
    return (
        <div className='ContactMenu'>
            <div className="NudoMap">
                <ComponentHeader
                    title='Contactos'
                    description='Las personas que nos rodean son lo más importante. Mantén sus datos al día y organizalos en este apartado.'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Imagenes_dudrsk.svg'
                />
            </div>
            <div className="dividedBody">
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
            <Dialog isOpen={showDialog} onDismiss={closeModal} className='ContactDialog'>
                <ContactModal
                    closeModal={closeModal}
                    tempState={tempState}
                    handleChange={handleChange}
                    tempState={tempState}
                    handleFileUpload={handleFileUpload}
                    handleEditContact={handleEditContact}
                    modalSent={modalSent}
                />
            </Dialog>
            <Snackbar open={snackSavedOpen} autoHideDuration={4000} onClose={handleCloseSavedSnack}>
                <AlertSnackBar onClose={handleCloseSavedSnack} severity='success'>
                    Contacto guardado correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackEditOpen} autoHideDuration={4000} onClose={handleCloseEditSnack}>
                <AlertSnackBar onClose={handleCloseEditSnack} severity='info'>
                   Contacto guardado correctamente!
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