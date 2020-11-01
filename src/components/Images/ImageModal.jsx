import React, { useEffect, useState } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import { makeStyles } from '@material-ui/core/styles'
import GenericButton from '../Generic/GenericButton'
import './ImageModal.scss'

const useStyles = makeStyles((theme) => ({
   paper: {
       backgound: 'red'
   }
}))

const ImageModal = ({ closeModal, modalSent, handleChange, handleFileUpload, handleEditImage, state, error }) => {
   
    const [edit, setEdit] = useState(false)
    
    useEffect(() => {
        if(state.id) {
            setEdit(true)
        }
    }, [])
    
    const classes = useStyles()

    return (
        <div className='ImageDialog'>
            <CloseModalButton onClick={closeModal} />
            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>
            <form onSubmit={edit ? handleEditImage : modalSent} className={classes}>
                <div className='ImageModalContainer'>
                    <div>
                        <br />
                        <label>Título:</label>
                        <input
                            id='title'
                            type='text'
                            className={`form-control ${error?.title ? `is-invalid` : null}`}
                            name='title'
                            value={state.title}
                            onChange={handleChange}
                        />
                        {error?.title ?
                            <div class='invalid-feedback'>
                                {error.title}
                            </div>
                            : null
                        }
                    </div>
                    <div>
                        <br />
                        <label>Descripción:</label>
                        <textarea
                            id='descripcion'
                            className='form-control'
                            name='description'
                            value={state.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <br />
                        <label>Fecha:</label>
                        <input
                            id='date'
                            name='date'
                            className={`form-control ${error?.date ? `is-invalid` : null}`}
                            value={state.date}
                            onChange={handleChange}
                        />
                        {error?.date ?
                            <div class='invalid-feedback'>
                                {error.date}
                            </div>
                            : null
                        }
                    </div>
                    {!edit ? <div>
                        <br />
                        <label>Archivo:</label>
                        <input
                            type='file'
                            name='url'
                            className='form-control'
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