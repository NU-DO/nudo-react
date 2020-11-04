import React, { useEffect, useState } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
import './ImageModal.scss'


const ImageModal = ({ closeModal, modalSent, handleChange, handleFileUpload, handleEditImage, state, error }) => {
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (state.id) {
            setEdit(true)
        }
    }, [])


    return (
        <div className='ModalImageContent'>
            <CloseModalButton onClick={closeModal} />
            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>
            <form onSubmit={edit ? handleEditImage : modalSent}>
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
                        <label>Descripción</label>
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
                        <label>Año</label>
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
                        <label>Archivo</label>
                        <input
                            type='file'
                            name='url'
                            className='form-control-file'
                            onChange={(e) => handleFileUpload(e)}
                            placeholder='Selecciona un archivo'
                        />
                    </div> : null}
                    <div>
                        <br />
                        {state.url &&
                            <div className='d-flex justify-content-around align-items-center'>
                                <GenericButton
                                    type='button'
                                    text='Guardar'
                                />
                                <div>
                                    <img src={state.url} style={{ width: '100px', marginLeft: '10px'}} alt='Cargando' />
                                    {state.url &&  <p className='text-center text-muted mt-2'>Imagen actual</p>}
                                </div>
                            </div>

                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ImageModal