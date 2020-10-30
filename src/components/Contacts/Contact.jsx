import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './Contact.scss'

const Contact = ({ contact, handleDelete, editThisContact }) => {

    return (
        <div className='Contact'>
            <div className='CRUDButtons'>
                <EditIcon className='editButton' onClick={() => editThisContact(contact)} />
                <DeleteIcon className='deleteButton' onClick={() => handleDelete(contact.id)} />
            </div>
            <div className='alwaysOn'>
                <img src={contact.photo} className='contactPhoto' alt='foto de contacto' />
                <h5>{contact.name}</h5>
            </div>
            <p>{contact.role}</p>
            <p>{contact.birthday}</p>
            <p>{contact.description}</p>
            <p>{contact.phone}</p>

        </div>
    )
}

export default Contact