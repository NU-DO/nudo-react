import React from 'react'
import GenericButton from '../Generic/GenericButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled'
import EmailIcon from '@material-ui/icons/Email'
import HomeIcon from '@material-ui/icons/Home'
import CakeIcon from '@material-ui/icons/Cake'
import './Agenda.scss'
import './ContactDetails.scss'

const Agenda = ({ selected, editThisContact, handleDelete, addContactClick }) => {

    return (
        <div className='ContactDetailsDiv'>
            <div className='ContactGenericButton'>
                <GenericButton text='Nuevo Contacto' onClick={addContactClick} />
            </div>
            {selected ?
                <div className='contactDetailsContainer'>
                    <div className='contactCard'>
                        <div className='contactCardHeader'>
                            <div className='CRUDButtons'>
                                <EditIcon className='editButton' onClick={() => editThisContact(selected)} />
                                <DeleteIcon className='deleteButton' onClick={() => handleDelete(selected.id)} />
                            </div>
                            <h5 className='contactCardTitle'>{selected.name}</h5>
                            <p className='contactCardSubtitle'>{selected.role}</p>
                            <img src={selected.photo} className='contactPhoto' alt='contact' />
                        </div>
                        <div className='contactCardBody'>
                            {selected.description && <p>{selected.description}</p>}
                            {selected.phone && 
                                <div className='phoneInfo' >
                                    <p><PhoneEnabledIcon className='contactCardIcon' /><a href={`tel:${selected.phone}`}>{selected.phone} | </a></p>
                                    <a href={`https://api.whatsapp.com/send?phone=34${selected.phone}`}><img className='whatsappLogo' src='https://res.cloudinary.com/difhe4gl3/image/upload/v1606068707/NUDO/assets/WaRecurso_1_aj2r27.svg' alt='whatsappLogo' /></a>
                                </div>
                                
                            }
                            {selected.email && <p><EmailIcon className='contactCardIcon' /> <a href={`mailto:${selected.email}`}>{selected.email}</a></p>}
                            {selected.address && <p><HomeIcon className='contactCardIcon' /> {selected.address}</p>}
                            {selected.birthday && <p><CakeIcon className='contactCardIcon' /> {selected.birthday}</p>}
                        </div>
                    </div>
                </div>
                : <div className='contactDetailsContainer'><p>Selecciona un contacto para ver sus detalles</p></div>
            }
        </div>
    )
}

export default Agenda