import React, { useState, useEffect } from 'react'
import GenericButton from '../Generic/GenericButton'
import Contact from './Contact'

const Agenda = ({ contacts, addContactClick }) => {

    return (
        <div className='Agenda'>
            <GenericButton text='Nuevo Contacto' onClick={addContactClick} />
            {contacts.map(contact => (
                <Contact contact={contact} key={contact.id} />
            ))}
        </div>
    )
}

export default Agenda