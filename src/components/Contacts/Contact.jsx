import React from 'react'
import './Contact.scss'

const Contact = ({ contact, handleSelect }) => {

    return (
        <div className='Contact' onClick={() => handleSelect(contact)}>
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
}

export default Contact