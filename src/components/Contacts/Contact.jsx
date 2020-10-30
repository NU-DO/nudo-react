import React from 'react'

const Contact = ({ contact, handleDelete, editThisContact }) => {

    return (
        <div className='Contact'>
            {contact.name}
            <button onClick={() => handleDelete(contact.id)} >x</button>
            <button onClick={() => editThisContact(contact)} >E</button>
        </div>
    )
}

export default Contact