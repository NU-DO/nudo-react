import React from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import SongCard from '../Songs/SongCard'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EventIcon from '@material-ui/icons/Event'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import './EventDetailModal.scss'

const EventDetailModal = ({ selected, setSelected, closeModal }) => {

    return (
        <div className='ModalContentEvent animate__animated animate__bounceInDown'>
            <CloseModalButton onClick={() => closeModal()} />
            <h4>{selected.title}</h4>
            <div className='subtitleEvent'>
                <div className='divSubtitleEvent'>{selected.description}</div>
                <div className='divSubtitleEvent'><EventIcon className='contactCardIcon' />{selected.year}</div>
                {selected.location && <div className='divSubtitleEvent'><LocationOnIcon className='contactCardIcon' />{selected.location?.name}</div>}
            </div>
            <div className='imageAndSong'>
                {selected.image && <img src={selected.image?.url} className='eventImage' alt={selected.title} />}
                <div className='songAndContact'>
                    {selected.playlist && <SongCard song={selected.playlist} fromEvent={true} />}
                    {selected.contacts.length ? <div><PeopleAltIcon className='contactCardIcon' />
                        {selected.contacts.map((contact, index) => {
                            return <img key={index} className='avatarEvent' src={contact.photo} alt='foto de contacto' />
                        })}
                    </div> : null}
                </div>
            </div>
            <div className='eventVideoContainer'>
                <iframe
                    title={selected.video.videoId}
                    width='auto'
                    height='auto'
                    allowFullScreen='allowfullscreen'
                    className='video-iframe videoEvent'
                    src={`https://www.youtube.com/embed/${selected.video.videoId}`}
                />
            </div>
        </div>
    )
}

export default EventDetailModal