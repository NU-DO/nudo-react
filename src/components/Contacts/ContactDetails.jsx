import React from 'react'
import GenericButton from '../Generic/GenericButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
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
                            <h3 className='contactCardTitle'>{selected.name}</h3>
                            <p className='contactCardSubtitle'>{selected.role}</p>
                            <img src={selected.photo} className='contactPhoto' alt='contact photo' />
                        </div>
                        <div className='contactCardBody'>
                            <p>{selected.description}</p>
                            <div className='contactCardInfo'>
                                <p>{selected.phone}  |</p>
                                <p>|  {selected.email}</p>
                            </div>
                            <p>{selected.address}</p>
                            <p>Cumpleaños: {selected.birthday}</p>
                        </div>
                        <div className='containerCardFooter'>
                            <div className='CRUDButtons'>
                                <EditIcon className='editButton' onClick={() => editThisContact(selected)} />
                                <DeleteIcon className='deleteButton' onClick={() => handleDelete(selected.id)} />
                            </div>
                        </div>
                    </div>
                    </div>
                : <p>Selecciona un contacto para ver sus detalles</p>
            }  
        </div>
    )
}

export default Agenda