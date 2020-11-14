import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
import './LocationModal.scss'

const LocationModal = ({ closeModal, modalSent, handleEditLocation, handleChange, tempCoordenates, error }) => {
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (tempCoordenates.name) {
            setEdit(true)
        }
    }, [])
    
    return (
        <div className='ModalContent'>
         <CloseModalButton onClick={closeModal} />
            <form onSubmit={edit ? handleEditLocation : modalSent}>
                <div className='ModalLocationContainer'>
                    <h4 className='text-center'>Completa los campos</h4>
                    <div className='form-group'>
                        <label for='name'>Nombre</label>
                        <input
                            type='text'
                            className={`form-control ${error?.name ? `is-invalid animate__animated animate__shakeX` : null}`}
                            id='name'
                            name='name'
                            onChange={handleChange}
                            value={tempCoordenates.name}
                        />
                        {error?.name ?
                            <div class='invalid-feedback animate__animated animate__shakeX'>
                                {error.name}
                            </div>
                            : null
                        }
                    </div>
                    <div className='form-group'>
                        <label for='name'>Descripción</label>
                        <textarea
                            type='text'
                            className={`form-control`}
                            id='description'
                            rows='3'
                            name='description'
                            onChange={handleChange}
                            value={tempCoordenates.description}
                        ></textarea>
                    </div>
                    <div>
                        <br />
                        <GenericButton
                            type='submit'
                            text='Guardar'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LocationModal