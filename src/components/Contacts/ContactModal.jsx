import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
import { Spinner } from 'react-bootstrap'
import './ContactModal.scss'



const ContactModal = ({ closeModal, tempState, handleChange, handleFileUpload, handleEditContact, modalSent, imageLoad, error }) => {
    const [edit, setEdit] = useState(false)
    

    useEffect(() => {
        if (tempState.id) {
            setEdit(true)
        }
    }, [])

    return (
        <div className='ModalContent animate__animated animate__bounceInDown'>
            <CloseModalButton onClick={closeModal} />
            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>
            <form onSubmit={edit ? handleEditContact : modalSent}>
                <div className='ContactModalContainer'>
                    <div className='form-row'>
                        <div className='form-group col-8 '>
                            <label htmlFor='exampleFormControlInput1'>Nombre</label>
                            <input 
                                type='text'
                                className={`form-control ${error?.name ? `is-invalid animate__animated animate__shakeX` : null}`}
                                id='exampleFormControlInput1'
                                name='name'
                                value={tempState.name}
                                onChange={handleChange}
                                required
                            />
                            {error?.name ?
                                <div className='invalid-feedback animate__animated animate__shakeX'>
                                    {error.name}
                                </div>
                                : null
                            }
                        </div>
                        <div className='form-group col-4'>
                            <label htmlFor='exampleFormControlInput1'>Relación</label>
                            <input 
                                type='text'
                                className={`form-control ${error?.role ? `is-invalid animate__animated animate__shakeX` : null}`}
                                id='relación'
                                name='role'
                                value={tempState.role}
                                onChange={handleChange}
                                required
                            />
                            {error?.role ?
                                <div className='invalid-feedback animate__animated animate__shakeX'>
                                    {error.role}
                                </div>
                                : null
                            }
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='exampleFormControlInput1'>Dirección</label>
                        <input 
                            type='text'
                            className='form-control'
                            id='address'
                            name='address'
                            value={tempState.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-4 col-md-4'>
                            <label htmlFor='exampleFormControlInput1'>Email</label>
                            <input 
                                type='email'
                                className={`form-control ${error?.email ? `is-invalid animate__animated animate__shakeX` : null}`}
                                id='email'
                                name='email'
                                value={tempState.email}
                                onChange={handleChange}
                            />
                            {error?.email ?
                                <div className='invalid-feedback animate__animated animate__shakeX'>
                                    {error.email}
                                </div>
                                : null
                            }
                        </div>
                        <div className='form-group col-4 col-md-4'>
                            <label htmlFor='exampleFormControlInput1'>Teléfono</label>
                            <input 
                                type='text'
                                className={`form-control ${error?.phone ? `is-invalid animate__animated animate__shakeX` : null}`}
                                id='phone'
                                name='phone'
                                value={tempState.phone}
                                onChange={handleChange}
                            />
                            {error?.phone ?
                                <div className='invalid-feedback animate__animated animate__shakeX'>
                                    {error.phone}
                                </div>
                                : null
                            }
                        </div>
                        <div className='form-group col-4'>
                            <label htmlFor='exampleFormControlInput1'>Cumpleaños</label>
                            <input 
                                type='text'
                                className='form-control'
                                id='birthday'
                                name='birthday'
                                value={tempState.birthday}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'>Descripción</label>
                        <textarea
                            className='form-control'
                            id='description'
                            rows='3'
                            name='description'
                            value={tempState.description}
                            onChange={handleChange}></textarea>
                    </div>
                    {!edit ?
                        <div className='form-group'>
                            <label htmlFor='file'>Foto</label>
                            <input
                                type='file'
                                className='form-control-file'
                                id='foto'
                                name='url'
                                onChange={(e) => handleFileUpload(e)}
                                placeholder='Selecciona un archivo'
                            />
                        </div> : null}
                    <div>
                        <br />
                        <div className='d-flex justify-content-around align-items-center'>
                            <GenericButton
                                type='submit'
                                text='Guardar'
                            />
                            <div>
                                {imageLoad &&  <Spinner animation="border" style={{ color: '#B73551'}} />}
                                {tempState.photo && <img src={tempState.photo} style={{ width: '100px', marginLeft: '10px' }} alt='cargando' className='rounded-circle' />}
                                {tempState.photo && <p className='text-center text-muted'>Imagen actual</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactModal