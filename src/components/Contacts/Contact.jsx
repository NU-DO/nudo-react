import React, { useState, useEffect } from 'react'

const Contact = ({ contact }) => {

    return (
        <div className='Contact'>
            {contact.name}
        </div>
    )
}

export default Contact