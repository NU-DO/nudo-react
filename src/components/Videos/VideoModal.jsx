import React, { useEffect, useState } from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
import './VideoModal.scss'

const VideoModal = ({ closeModal, error, state, handleChange, handleEditVideo, modalSent }) => {
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (state.id) {
            setEdit(true)
        }
    }, [])

    return (
        <div className='ModalVideoContainer'>
            <CloseModalButton onClick={closeModal} />
            <h4 style={{ textAlign: 'center' }}>Completa los campos</h4>
            <form onSubmit={edit ? handleEditVideo : modalSent}>
                <div className='VideoModalContainer'>
                    <div>
                        <br />
                        <label>Título:</label>
                        <input
                            id='title'
                            type='text'
                            className={`form-control ${error?.title ? `is-invalid animate__animated animate__shakeX` : null}`}
                            name='title'
                            value={state.title}
                            onChange={handleChange}
                            required
                        />
                        {error?.title ?
                            <div className='invalid-feedback animate__animated animate__shakeX'>
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
                            className={`form-control ${error?.description ? `is-invalid animate__animated animate__shakeX` : null}`}
                            name='description'
                            value={state.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {error?.description ?
                            <div className='invalid-feedback animate__animated animate__shakeX'>
                                {error.title}
                            </div>
                            : null
                        }
                    </div>
                    <br/>
                    <GenericButton
                        type='button'
                        text='Guardar'
                    />
                </div>
            </form>
        </div>
    )
}

export default VideoModal