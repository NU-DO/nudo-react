import React, { useState, useEffect, useCallback } from 'react'
import ComponentHeader from '../Generic/ComponentHeader'
import Agenda from './Agenda'
import ContactModal from './ContactModal'
import { getContacts, handleUpload, createContact } from '../../services/Api'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

const ContactMenu = () => {
    const [tempState, setTempState] = useState({})
    const [contacts, setContacts] = useState([])
    const [showDialog, setShowDialog] = useState(false)

    useEffect(() => {
        getContacts()
            .then(contacts => {
                setContacts(contacts)
            })
            .catch(err => console.log(err))
    }, [])

    const openModal = () => setShowDialog(true)
    const closeModal = () => setShowDialog(false)

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
    }

    const handleFileUpload = (event) => {
        const uploadData = new FormData()
        uploadData.append('url', event.target.files[0])
        handleUpload(uploadData)
            .then(response => {
                console.log(response.secure_url);
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
        closeModal()
    }

    return (
        <div className='ContactMenu'>
            <ComponentHeader
                title='Contactos'
                description='Las personas que nos rodean son lo más importante. Mantén sus datos al día y organizalos en este apartado.'
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Imagenes_dudrsk.svg'
            />
            <Agenda contacts={contacts} addContactClick={addContactClick} />
            <Dialog isOpen={showDialog} onDismiss={closeModal} className='ContactDialog'>
                <ContactModal
                    closeModal={closeModal}
                    handleChange={handleChange}
                    tempState={tempState}
                    handleFileUpload={handleFileUpload}
                    modalSent={modalSent}
                />
            </Dialog>
        </div>
    )
}

export default ContactMenu