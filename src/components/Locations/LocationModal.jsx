import React, { useState, useEffect } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import { makeStyles } from '@material-ui/core/styles'
import InputText from '../Generic/InputText'
import GenericButton from '../Generic/GenericButton'
import './LocationModal.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: 0,
            border: '0',
            borderRadius: '10px',
            width: 'auto'
            
        },
    },
}))

const LocationModal = ({ modalSent, handleEditLocation, handleChange, tempCoordenates }) => {
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (tempCoordenates.name) {
            setEdit(true)
        }
    }, [])

    const classes = useStyles()

    return (
        <div >
            <form onSubmit={edit ? handleEditLocation : modalSent} className={classes.root} noValidate autoComplete='off'>
                <div className='LocationModalContainer'>
                    <h4 className='ml-1'>Completa los campos</h4>
                    <div className="form-group">
                        <label for="name">Nombre</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name='name'
                        onChange={handleChange}
                        value={tempCoordenates.name}
                         />
                    </div>
                    <div className="form-group">
                        <label for="name">Descripción</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="description" 
                        name='description'
                        onChange={handleChange}
                        value={tempCoordenates.description}
                         />
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