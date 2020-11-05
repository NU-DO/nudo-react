import React from 'react'
import { Link } from 'react-router-dom'
import GenericButton from './GenericButton'
import './NotFound.scss'

const NotFound = () => {
    
    return (
        <div className='ContainerNotFound'>
            <div className='NotFoundTop'>
                <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1604133079/NUDO/assets/Recurso_17_rdzzfx.svg' alt='nudo logo' />
            </div>
            <div className='NotFoundContainer'>
                <div className='NotFoundText'>
                    <h1 className='NotFoundNumbers'>404</h1>
                    <p className='NotFoundOps'>Oooooops! <br />Esta página no existe</p>
                </div>
                <div className='NotFoundCrying'>
                    <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1604133107/NUDO/assets/Recurso_18_bdcxrb.svg' alt='Página no encontrada' />
                </div>
            </div>
            <div className='NotFoundButton'>
                <Link to='/'>
                    <GenericButton
                        text='Volver a NUDO'
                    />
                </Link>

            </div>
        </div>
    )
}

export default NotFound