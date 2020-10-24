import React from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

const LocationModal = ({ closeModal, modalSent, handleChange }) => {
    const classes = useStyles()

    return (
        <div>
            <CloseModalButton onClick={closeModal} />

            <h2 style={{ textAlign: 'center' }}>Completa los campos</h2>
            <div >
                <form onSubmit={modalSent} className={classes.root} noValidate autoComplete='off' className='MapDialogElements'>
                    <div>
                        <TextField
                            id='name'
                            margin='normal'
                            required
                            fullWidth
                            label='Nombre de localización'
                            name='name'
                            onChange={handleChange}
                            autoFocus
                            variant='outlined' />
                    </div>
                    <div>
                        <TextField
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
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='mt-3'
                        >
                            Guardar
                </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LocationModal