import React from 'react'
import ReactDOM from 'react-dom'

const ModalContent = () => {
    return (
        <div>
            Esto es un Modal
        </div>
    )
}

const Modal = (props) => {
    return (
        ReactDOM.createPortal(<ModalContent {...props}/>, document.getElementById("root"))
    )
}

export default Modal