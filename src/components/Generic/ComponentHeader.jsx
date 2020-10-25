import React from 'react'
import './ComponentHeader.scss'

const ComponentHeader = ({ nudoIcon, title, description }) => {
    return (
        <div className='ComponentHeaderStyle'>
            <img src= {nudoIcon} className='NudoIconStyle' alt="logo" />
            <div>
                <h2>{title}</h2>
                <p className='descriptionHeader'>{description}</p>
            </div>
        </div>
    )
}

export default ComponentHeader