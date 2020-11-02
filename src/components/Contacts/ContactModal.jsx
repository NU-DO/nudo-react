import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
import { makeStyles } from '@material-ui/core/styles'
import './ContactModal.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}))

const ContactModal = ({ closeModal, tempState, handleChange, handleFileUpload, handleEditContact, modalSent, error }) => {
    const classes = useStyles()

    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (tempState.id) {
            setEdit(true)
        }
    }, [])

    return (
        <div >
            <CloseModalButton onClick={closeModal} />

            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>

            <form onSubmit={edit ? handleEditContact : modalSent} className={classes.root} noValidate autoComplete='off'>
                <div className='ContactModalContainer'>
                    <div className='form-row'>
                        <div className='form-group col-md-8'>
                            <label for='exampleFormControlInput1'>Nombre</label>
                            <input type='text'
                                className={`form-control ${error?.name ? `is-invalid` : null}`}
                                id='exampleFormControlInput1'
                                name='name'
                                value={tempState.name}
                                onChange={handleChange}
                            />
                            {error?.name ?
                                <div class='invalid-feedback'>
                                    {error.name}
                                </div>
                                : null
                            }
                        </div>
                        <div className='form-group col-md-4'>
                            <label for='exampleFormControlInput1'>Relación</label>
                            <input type='text'
                                className={`form-control ${error?.role ? `is-invalid` : null}`}
                                id='relación'
                                name='role'
                                value={tempState.role}
                                onChange={handleChange}
                            />
                            {error?.role ?
                                <div class='invalid-feedback'>
                                    {error.role}
                                </div>
                                : null
                            }
                        </div>
                    </div>

                    <div className='form-group'>
                        <label for='exampleFormControlInput1'>Dirección</label>
                        <input type='text'
                            className='form-control'
                            id='address'
                            name='address'
                            value={tempState.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-4'>
                            <label for='exampleFormControlInput1'>Email</label>
                            <input type='email'
                                className={`form-control ${error?.email ? `is-invalid` : null}`}
                                id='email'
                                name='email'
                                value={tempState.email}
                                onChange={handleChange}
                            />
                            {error?.email ?
                                <div class='invalid-feedback'>
                                    {error.email}
                                </div>
                                : null
                            }
                        </div>
                        <div className='form-group col-md-4'>
                            <label for='exampleFormControlInput1'>Teléfono</label>
                            <input type='text'
                                className={`form-control ${error?.phone ? `is-invalid` : null}`}
                                id='phone'
                                name='phone'
                                value={tempState.phone}
                                onChange={handleChange}
                            />
                            {error?.phone ?
                                <div class='invalid-feedback'>
                                    {error.phone}
                                </div>
                                : null
                            }
                        </div>
                        <div className='form-group'>
                            <label for='exampleFormControlInput1'>Cumpleaños</label>
                            <input type='text'
                                className='form-control'
                                id='birthday'
                                name='birthday'
                                value={tempState.birthday}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label for='description'>Descripción</label>
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
                            <label for='file'>Foto</label>
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
                        <GenericButton
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='mt-3'
                            text='Guardar'
                        />
                    </div>
                    <div>
                        <img src={tempState.photo} style={{ width: '200px' }} />
                        {tempState.photo && <p>Imagen actual</p>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactModal