import React, { useEffect, useState } from 'react'
import ContactSeacher from '../../Contacts/ContactSearcher'
import { getContacts } from '../../../services/Api'
import './ContactsMemoryForm.scss'

const ContactsMemoryForm = ({ stateForm, setStateForm }) => {
    const [myContacts, setMyContacts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [searchedContacts, setSearchedContacts] = useState([])
    const [search, setSearch] = useState({
        search: ''
    })

    useEffect(() => {
        getContacts()
            .then(contacts => {
                setMyContacts(contacts.sort((a, b) => ('' + a.name).localeCompare(b.name)))
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setSearchedContacts(myContacts.sort((a, b) => ('' + a.name).localeCompare(b.name)))
    }, [myContacts])

    useEffect(() => {
        const match = myContacts.filter(contact => contact.name.toLowerCase().includes(search.search))
            .sort((a, b) => ('' + a.name).localeCompare(b.name))
        setSearchedContacts(match)
    }, [search])

    const handleSelectContact = (contact) => {
        setStateForm(prev => {
            if (prev.contacts) {
                return {
                    ...prev,
                    contacts: [...prev.contacts, contact]
                }
            } else {
                return {
                    ...prev,
                    contacts: [contact]
                }
            }
        })
    }

    const handleSearchContact = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    const handleDelete = (contactID) => {
       setStateForm((prev) => {
           return {
               ...prev,
               contacts: [...prev.contacts.filter(contact => contact.id !== contactID)]
           }
       })
    }

    return (
        <div>
            <h5>Contactos</h5>
            <p>Añade personas que pertenecen a este recuerdo:</p>

            {loaded && (
                <div className='ContactsMemoryContainer'>
                    <div className='ContactsFromDB'>
                        <ContactSeacher handleSearch={handleSearchContact} search={search} placeholder='Busca un contacto' />
                        <div className='AgendaFromDB'>
                            {searchedContacts.map((contact, index) => (
                                <div className='Contact' onClick={() => handleSelectContact(contact)} key={index}>
                                    <div className='contactSm'>
                                        <img
                                            className='contactPhoto'
                                            src={contact.photo}
                                            alt={contact.name} />
                                        <p className='nameHeader'>{contact.name}<span><small>  {contact.role}</small></span></p>
                                    </div>
                                    <div className='detailsButton'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='SelectedContacts'>
                        <h5>Personas añadidas al recuerdo:</h5>
                        <div className='SelectedContactsContainer'>
                            {stateForm.contacts && stateForm.contacts.map((contact, index)=> {
                                return (
                                    <div className='ContactAdded' key={index}>
                                        <div className='contactSmAdded'>
                                            <img
                                                className='contactPhotoAdded'
                                                src={contact.photo}
                                                alt={contact.name} />
                                            <p className='nameHeaderAdded'>{contact.name}<span><small>  {contact.role}</small></span></p>
                                        </div>
                                        <div className='detailsButton'  onClick={() => {handleDelete(contact.id)}}>X</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}




        </div>
    )
}

export default ContactsMemoryForm