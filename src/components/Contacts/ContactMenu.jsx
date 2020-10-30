import React, { useState, useEffect, useCallback } from 'react'
import ComponentHeader from '../Generic/ComponentHeader'
import ContactSeacher from './ContactSearcher'
import Agenda from './Agenda'
import ContactModal from './ContactModal'
import GenericButton from '../Generic/GenericButton'
import { getContacts, handleUpload, createContact, deleteContact, editContact } from '../../services/Api'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import './ContactMenu.scss'

const ContactMenu = () => {
    const [search, setSearch] = useState({
        search: ''
    })
    const [tempState, setTempState] = useState({})
    const [contacts, setContacts] = useState([])
    const [searchedContacts, setSearchedContacts] = useState([])
    const [showDialog, setShowDialog] = useState(false)

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

    const openModal = () => setShowDialog(true)
    const closeModal = () => {
        setShowDialog(false)
        setTempState({})
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
            .then(() => {
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
                <ContactSeacher handleSearch={handleSearch} search={search} />
                <GenericButton text='Nuevo Contacto' onClick={addContactClick} />
            </div>
            <Agenda
                contacts={searchedContacts}
                handleDelete={handleDelete}
                editThisContact={editThisContact}
            />
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
        </div>
    )
}

export default ContactMenu