import React, { useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import SongCard from '../Songs/SongCard'
import './EventDetailModal.scss'

const EventDetailModal = ({ selected, setSelected, closeModal }) => {

    return (
        <div className='ModalContent animate__animated animate__bounceInDown'>
            <CloseModalButton onClick={() => closeModal()} />
            <div>Name:{selected.title}</div>
            <div>{selected.description}</div>
            <div>{selected.year}</div>
            <div>{selected.location?.name}</div>
            <SongCard song={selected.playlist} />
            <img src={selected.image?.url} />
        </div>
    )
}

export default EventDetailModal