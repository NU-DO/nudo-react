import React from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'
import './MemoryForm.scss'

const MemoyForm = ({ handleChange, error }) => {
    const { user } = useAuthContext()

    return (
        <div className='ContainerMemoryForm'>
            <form>
                <div className='InputsMemoryForm'>
                    <div className='FirstInputsMemory'>
                        <label htmlFor='memoryForm'>Escribe un título</label>
                        <input
                            type='text'
                            className={`form-control ${error?.title ? `is-invalid animate__animated animate__shakeX` : null}`}
                            placeholder='Recuerdo'
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
                        <label htmlFor='memoryForm' className='pt-3'>Año del recuerdo</label>
                        <input
                            type='number'
                            className={`form-control ${error?.year ? `is-invalid animate__animated animate__shakeX` : null}`}
                            placeholder='Año'
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
                        <div className=' py-3'>
                            <label htmlFor='memoryForm'>Escribe una descripción</label>
                            <textarea
                                className='form-control'
                                id='exampleFormControlTextarea1'
                                name='description'
                                placeholder='Descripción'
                                onChange={handleChange}
                                required
                                rows='3'></textarea>
                        </div>
                    </div>
                </div>
            </form>
            <div className='ContainerWelcomeMemory'>
                <img
                    src='https://res.cloudinary.com/difhe4gl3/image/upload/v1606028460/NUDO/assets/Dashboard-icons/Recurso_22_st41he.svg'
                    alt='Logo de Nudo'
                />
                <h5>Hola {user.username}</h5>
                <p>Para crear un recuerdo, primero debes escribir este formulario.</p>
                <p>Accede a todos los pasos para ir añadiendo contactos, imágen, localización, canción favorita y video a este recuerdo.</p>
            </div>
        </div>
    )
}

export default MemoyForm