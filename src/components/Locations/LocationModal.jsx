import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import { makeStyles } from '@material-ui/core/styles'
import InputText from '../Generic/InputText'
import GenericButton from '../Generic/GenericButton'
import './LocationModal.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

const LocationModal = ({ closeModal, modalSent, handleEditLocation, handleChange, tempCoordenates }) => {
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (tempCoordenates.name) {
            setEdit(true)
        }
    }, [])

    const classes = useStyles()

    return (
        <div >
            <CloseModalButton onClick={closeModal} />

            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>

            <form onSubmit={edit ? handleEditLocation : modalSent} className={classes.root} noValidate autoComplete='off'>
                <div className='LocationModalContainer'>
                    <div>
                    <br />
                        <label>Nombre:</label>
                        <InputText
                            id='name'
                            margin='normal'
                            required
                            fullWidth
                            label='Nombre de localización'
                            name='name'
                            onChange={handleChange}
                            autoFocus
                            value={tempCoordenates.name}
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
                            value={tempCoordenates.description}
                            multiline />
                    </div>
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
                </div>
            </form>
        </div>
    )
}

export default LocationModal