import React from 'react'
import Contact from './Contact'
import ContactSeacher from './ContactSearcher'
import './Agenda.scss'

const Agenda = ({ contacts, handleSelect, handleSearch, search }) => {

    return (
        <div className='AgendaDiv'>
            <ContactSeacher handleSearch={handleSearch} search={search} placeholder='Busca un contacto' />
            <div className='Agenda'>
                {contacts.map(contact => (
                    <Contact
                        contact={contact}
                        key={contact.id}
                        handleSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    )
}

export default Agenda 