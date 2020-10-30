import React, { useState, useEffect } from 'react'
import Contact from './Contact'
import './Agenda.scss'

const Agenda = ({ contacts, handleDelete, editThisContact }) => {

    return (
        <div className='Agenda'>
            {contacts.map(contact => (
                <Contact
                    contact={contact}
                    key={contact.id}
                    handleDelete={handleDelete}
                    editThisContact={editThisContact} 
                />
            ))}
        </div>
    )
}

export default Agenda