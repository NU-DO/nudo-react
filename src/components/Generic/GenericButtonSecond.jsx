import React from 'react'
import './GenericButtonSecond.scss'

const GenericButton = ({ text, onClick }) => {

    return (
        <div>
            <button className='GenericButtonSecond' onClick={onClick}>{text}</button>
        </div>
    )
}

export default GenericButton