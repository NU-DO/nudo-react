import React, { useEffect, useState } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import { makeStyles } from '@material-ui/core/styles'
import InputText from '../Generic/InputText'
import GenericButton from '../Generic/GenericButton'
import './ImageModal.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '400px',
        },
    },
}))

const ImageModal = ({ closeModal, modalSent, handleChange, handleFileUpload, handleEditImage, state }) => {
    const classes = useStyles()
    const [edit, setEdit] = useState(false)
    
    useEffect(() => {
        if(state.id) {
            setEdit(true)
        }
    }, [])
    
    return (
        <div className='ImageModalContainer'>
            <CloseModalButton onClick={closeModal} />
            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>
            <form onSubmit={edit ? handleEditImage : modalSent} className={classes.root}>
                <div className='ImageModalContainer'>
                    <div>
                        <br />
                        <label>Título:</label>
                        <InputText
                            id='descripcion'
                            type='text'
                            margin='normal'
                            required
                            name='title'
                            value={state.title}
                            onChange={handleChange}
                            variant='outlined'
                            placeholder='Escribe un título' />
                    </div>
                    <div>
                        <br />
                        <label>Descripción:</label>
                        <InputText
                            id='descripcion'
                            margin='normal'
                            required
                            fullWidth
                            name='description'
                            value={state.description}
                            onChange={handleChange}
                            variant='outlined'
                            multiline />
                    </div>
                    <div>
                        <br />
                        <label>Fecha:</label>
                        <InputText
                            id='name'
                            margin='normal'
                            required
                            fullWidth
                            name='date'
                            value={state.date}
                            onChange={handleChange}
                            autoFocus
                            variant='outlined' />
                    </div>
                    {!edit ? <div>
                        <br />
                        <label>Archivo:</label>
                        <input
                            type='file'
                            name='url'
                            onChange={(e) => handleFileUpload(e)}
                            placeholder='Selecciona un archivo'
                        />
                    </div> : null}
                    <div>
                        <br />
                        {state.url ? <GenericButton
                            type='button'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='mt-3'
                            text='Guardar'
                        />  : <div>Subiendo Imagen</div>}
                        {/* <GenericButton
                            type='button'
                            // onClick={() => modalSent()}
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='mt-3'
                            text='Guardar'
                        /> */}
                    </div>
                    <div>
                        <img src={state.url} style={{width: '200px'}} />
                        {state.url && <p>Imagen actual</p>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ImageModal