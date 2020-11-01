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
            <GenericButton text='Nuevo Contacto' onClick={addContactClick} />
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
                            <img src={selected.photo} className='contactPhoto' alt='contact photo' />
                        </div>
                        <div className='contactCardBody'>
                            <p>{selected.description}</p>
                            <p><PhoneEnabledIcon className='contactCardIcon'/> {selected.phone}</p>
                            <p><EmailIcon className='contactCardIcon' /> {selected.email}</p>
                            <p><HomeIcon className='contactCardIcon' /> {selected.address}</p>
                            <p><CakeIcon className='contactCardIcon' /> {selected.birthday}</p>
                        </div>
                    </div>
                </div>
                : <div className='contactDetailsContainer'><p>Selecciona un contacto para ver sus detalles</p></div>
            }
        </div>
    )
}

export default Agenda