import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import { makeStyles } from '@material-ui/core/styles'
import InputText from '../Generic/InputText'
import GenericButton from '../Generic/GenericButton'
import './ImageModal.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

const ImageModal = ({ closeModal, modalSent, handleChange, handleFileUpload, state}) => {

    const classes = useStyles()

    return (
        <div >
            <CloseModalButton onClick={closeModal} />

            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>

            <form  className={classes.root}>
                <div className='ImageModalContainer'>
                    <div>
                    <br />
                        <label>Fecha:</label>
                        <InputText
                            id='name'
                            margin='normal'
                            required
                            fullWidth
                            label='Nombre de localización'
                            name='date'
                            onChange={handleChange}
                            autoFocus
                            variant='outlined' />
                    </div>
                    <div>
                    <br />
                        <label>Descripción:</label>
                        <InputText
                            id='descripcion'
                            margin='normal'
                            required
                            fullWidth
                            label='Describe tu localización'
                            name='description'
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    <div>
                    <br />
                        <label>Título:</label>
                        <InputText
                            id='descripcion'
                            margin='normal'
                            required
                            fullWidth
                            label='Describe tu localización'
                            name='title'
                            onChange={handleChange}
                            variant='outlined'
                            placeholder='Escribe un título' />
                    </div>
                    <br />
                        <label>Archivo:</label>
                        <input
                            type='file'
                            name='url'
                            onChange={(e) => handleFileUpload(e)}
                            placeholder='Selecciona un archivo'
                        />
                    <div>
                        <br />
                        {state.url ? <GenericButton
                            type='submit'
                            onClick={() => modalSent()}
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='mt-3'
                            text='Guardar'
                        /> : <div>Subiendo Imagen</div>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ImageModal