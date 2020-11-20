import React, { useEffect, useState } from 'react'
import { getContacts } from '../../../services/Api'
import ContactSeacher from '../../Contacts/ContactSearcher'

const ContactsMemoryForm = ({ stateForm, setStateForm, handleSearch }) => {

    const [myContacts, setMyContacts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [selected, setSelected] = useState()
    const [searchedContacts, setSearchedContacts] = useState([])
    const [search, setSearch] = useState({
        search: ''
    })

    useEffect(() => {
        getContacts()
            .then(contacts => {
                setMyContacts(contacts.sort((a, b) => ('' + a.name).localeCompare(b.name)))
                setLoaded(true)
                console.log(myContacts)
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
                    contacts: [...prev.contacts, prev]
                }
            } else {
                return {
                    ...prev,
                    contacts: [contact]
                }
            }
        })
        console.log('contact added to state: ', stateForm)
    }
    const handleSearchContact = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    return (
        <div>
            <h5>Contactos</h5>
            <p>Añade personas que pertenecen a este recuerdo:</p>
           
                {loaded && (
                    <div className='ContactsMemoryContainer'>
                        <div className='ContactsFromDB'>
                            <ContactSeacher handleSearch={handleSearchContact} search={search} />
                            <div className='Agenda'>
                                {searchedContacts.map(contact => (
                                    <div className='Contact' onClick={() => handleSelectContact(contact)}>
                                        <div className='contactSm'>
                                            <img
                                                className='contactPhoto'
                                                src={contact.photo}
                                                alt={contact.name} />
                                            <p className='nameHeader'>{contact.name}<span><small>  {contact.role}</small></span></p>
                                        </div>
                                        <div className='detailsButton'>></div>
                                    </div>
                                ))}
                            </div>
                                    
                        </div>
                        <div className='SelectedContacts'>
                                {stateForm.contacts && stateForm.contacts.map(contact => {
                                    return (
                                        <div className='Contact'>
                                        <div className='contactSm'>
                                            <img
                                                className='contactPhoto'
                                                src={contact.photo}
                                                alt={contact.name} />
                                            <p className='nameHeader'>{contact.name}<span><small>  {contact.role}</small></span></p>
                                        </div>
                                        <div className='detailsButton'>></div>
                                    </div>
                                    )
                                })}
                            </div>
                    </div>
                )}

           


        </div>
    )
}

export default ContactsMemoryForm