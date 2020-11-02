import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const ModalContent = (props) => {



    return (
        <div className='ModalOverlay'>
            {props.children}
        </div>
    )
}

const Modal = (props) => {
    return (
        ReactDOM.createPortal(<ModalContent {...props} />, document.getElementById("root"))
    )
}

export default Modal