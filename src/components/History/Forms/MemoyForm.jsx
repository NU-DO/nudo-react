import React, { useState } from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'

const MemoyForm = ({handleChange, modalSent}) => {

    const [error, setError] = useState({})

    return (
        <div className='ContainerMemoryForm'>
            <form onSubmit={modalSent}>
                <div className='row'>
                    <div className='col-8'>
                        <label htmlFor='memoryForm'>Escribe un título</label>
                        <input
                            type='text'
                            className={`form-control ${error?.title ? `is-invalid animate__animated animate__shakeX` : null}`}
                            placeholder='Titulo del recuerdo'
                            name='title'
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
                    <div className='col-4'>
                        <label htmlFor='memoryForm'>Año del recuerdo</label>
                        <input
                            type='number'
                            className={`form-control ${error?.year ? `is-invalid animate__animated animate__shakeX` : null}`}
                            placeholder='Año del recuerdo'
                            name='year'
                            onChange={handleChange}
                            required
                        />
                        {error?.year ?
                            <div className='invalid-feedback animate__animated animate__shakeX'>
                                {error.year}
                            </div>
                            : null
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label htmlFor='memoryForm'>Escribe una descripción</label>
                        <textarea
                            className='form-control'
                            id='exampleFormControlTextarea1'
                            name='description'
                            onChange={handleChange}
                            required
                            rows='3'></textarea>
                    </div>
                </div>
                <button className='btn btn-primary' tye='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MemoyForm