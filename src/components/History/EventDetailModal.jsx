import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
import { Spinner } from 'react-bootstrap'
// import './EventDetailModal.scss'

const EventDetailModal = ({ closeModal, selected }) => {
      return (
        <div className='ModalContent animate__animated animate__bounceInDown'>
            <CloseModalButton onClick={closeModal} />
            
        </div>
    )
}

export default EventDetailModal