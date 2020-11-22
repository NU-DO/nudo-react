import React from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import SongMemoryCard from './SongMemoryCard'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EventIcon from '@material-ui/icons/Event'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import './EventDetailModal.scss'
import './SongMemoryCard.scss'

const EventDetailModal = ({ selected, setSelected, closeModal, handleDelete }) => {

    return (
        // <div className='ModalContentEvent animate__animated animate__bounceInDown'>
        //     6
        //     <h4>{selected.title}</h4>
        //     <div className='subtitleEvent'>
        //         <div className='divSubtitleEvent'>{selected.description}</div>
        //         <div className='divSubtitleEvent'><EventIcon className='contactCardIcon' />{selected.year}</div>
        //         {selected.location && <div className='divSubtitleEvent'><LocationOnIcon className='contactCardIcon' />{selected.location?.name}</div>}
        //     </div>
        //     <div className='imageAndSong'>
        //         {selected.image && <img src={selected.image?.url} className='eventImage' alt={selected.title} />}
        //         <div className='songAndContact'>
        //             {selected.playlist && <SongCard song={selected.playlist} fromEvent={true} />}
        //             {selected.contacts.length ? <div><PeopleAltIcon className='contactCardIcon' />
        //                 {selected.contacts.map((contact, index) => {
        //                     return <img key={index} className='avatarEvent' src={contact.photo} alt='foto de contacto' />
        //                 })}
        //             </div> : null}
        //         </div>
        //     </div>
        //     {selected.video ? 
        //         <div className='eventVideoContainer'>
        //             <iframe
        //                 title={selected.video.videoId}
        //                 width='auto'
        //                 height='auto'
        //                 allowFullScreen='allowfullscreen'
        //                 className='video-iframe videoEvent'
        //                 src={`https://www.youtube.com/embed/${selected.video.videoId}`}
        //             />
        //         </div>
        //     : null
        //     }
        //     <div className='CardFavCRUDButtons'>
        //         <DeleteIcon className='CardFavDeleteButton' onClick={() => handleDelete(selected.id)} />
        //     </div>
        // </div>

        <div className='ModalContentEvent animate__animated animate__bounceInDown'>
            <CloseModalButton onClick={() => closeModal()} />
            <div>
                <h4>{selected.title}</h4>
                <div className='SubtitleIconsMemory'>
                    <div className='divSubtitleEvent'>
                        <EventIcon className='contactCardIcon' />
                        <span>{selected.year}</span>
                    </div>
                    {selected.location && (
                        <div className='divSubtitleEvent pl-3'>
                            <LocationOnIcon className='contactCardIcon' />
                            <span>{selected.location?.name}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className='imageAndSong'>
                {selected.image && (
                    <div className='PortraitPhotoMemoryDetail'>
                        <img src={selected.image?.url} className='eventImage' alt={selected.title} />
                    </div>
                )}
                <div className='VideoSongContainer'>
                    {selected.video ?
                        <div className='eventVideoContainer'>
                            <iframe
                                title={selected.video.videoId}
                                width='330px'
                                height='150px'
                                allowFullScreen='allowfullscreen'
                                className='videoEvent'
                                src={`https://www.youtube.com/embed/${selected.video.videoId}`}
                            />
                        </div>
                        : null
                    }
                    {selected.playlist && <SongMemoryCard song={selected.playlist} fromEvent={true} />}
                </div>
            </div>
            <div className='divParagraphEvent'><p>{selected.description}</p></div>
            <div className='songAndContact'>
                {selected.contacts.length ? <div><PeopleAltIcon className='contactCardIcon' />
                    {selected.contacts.map((contact, index) => {
                        return <img key={index} className='avatarEvent' src={contact.photo} alt='foto de contacto' />
                    })}
                </div> : null}
            </div>
            <div className='CardFavCRUDButtons'>
                <EditIcon className='PolaroidEditButton' />
                <DeleteIcon className='CardFavDeleteButton' onClick={() => handleDelete(selected.id)} />
            </div>
        </div>
    )
}

export default EventDetailModal