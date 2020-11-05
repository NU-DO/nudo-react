import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import CancelSharpIcon from '@material-ui/icons/CancelSharp'
import './CloseModalButton.scss'

const CloseModalButton = ({ onClick }) => {
    
    return (
        <div className='CloseModalButton'>
            <VisuallyHidden>Close</VisuallyHidden>
            <CancelSharpIcon onClick={onClick}/>
        </div>
    )
}

export default CloseModalButton