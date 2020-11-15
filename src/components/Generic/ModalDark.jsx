import React from 'react'
import ReactDOM from 'react-dom'
import './ModalDark.scss'

const ModalDarkContent = (props) => {

    return (
        <div className='ModalDarkOverlay'>
            {props.children}
        </div>
    )
}

const ModalDark = (props) => {
    
    return (
        ReactDOM.createPortal(<ModalDarkContent {...props} />, document.getElementById('root'))
    )
}

export default ModalDark