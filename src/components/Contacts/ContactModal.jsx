import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import InputText from '../Generic/InputText'
import GenericButton from '../Generic/GenericButton'
import { makeStyles } from '@material-ui/core/styles'
import './ContactModal.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

const ContactModal = ({ closeModal, tempState, handleChange, handleFileUpload, handleEditContact, modalSent }) => {
    const classes = useStyles()

    const [edit, setEdit] = useState(false)
    
    useEffect(() => {
        if(tempState.id) {
            setEdit(true)
        }
    }, [])

    return (
        <div >
            <CloseModalButton onClick={closeModal} />

            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>

            <form onSubmit={edit ? handleEditContact : modalSent} className={classes.root} noValidate autoComplete='off'>
                <div className='LocationModalContainer'>
                    <div>
                        <br />
                        <label>Nombre:</label>
                        <InputText
                            id='name'
                            margin='normal'
                            required
                            name='name'
                            value={tempState.name}
                            onChange={handleChange}
                            variant='outlined' />
                    </div>
                    <div>
                        <br />
                        <label>Relación:</label>
                        <InputText
                            id='role'
                            margin='normal'
                            required
                            name='role'
                            value={tempState.role}
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    <div>
                        <br />
                        <label>Dirección:</label>
                        <InputText
                            id='address'
                            margin='normal'
                            required
                            name='address'
                            value={tempState.address}
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    <div>
                        <br />
                        <label>Email:</label>
                        <InputText
                            id='email'
                            margin='normal'
                            required
                            name='email'
                            value={tempState.email}
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    <div>
                        <br />
                        <label>Teléfono:</label>
                        <InputText
                            id='phone'
                            margin='normal'
                            required
                            name='phone'
                            value={tempState.phone}
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    <div>
                        <br />
                        <label>Cumpleaños:</label>
                        <InputText
                            id='birthday'
                            margin='normal'
                            required
                            name='birthday'
                            value={tempState.birthday}
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    <div>
                        <br />
                        <label>Descripción:</label>
                        <InputText
                            id='description'
                            margin='normal'
                            required
                            name='description'
                            value={tempState.description}
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    {!edit ? 
                        <div>
                            <br />
                            <label>Foto:</label>
                            <input
                                type='file'
                                name='url'
                                onChange={(e) => handleFileUpload(e)}
                                placeholder='Selecciona un archivo'
                            />
                        </div>
                    : null}
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
                        <img src={tempState.photo} style={{width: '200px'}} />
                        {tempState.photo && <p>Imagen actual</p>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactModal