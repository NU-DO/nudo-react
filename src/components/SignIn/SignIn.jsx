import React, { useState } from 'react'
import GenericButton from '../Generic/GenericButton'
import { signin } from '../../services/Api'
import { Redirect } from 'react-router-dom'
import './SignIn.scss'

const SignIn = () => {
    const [state, setState] = useState({
        data: {
            username: '',
            email: '',
            password: ''
        },
        error: {}
    })
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        signin(state.data)
            .then(user => {
                setRedirect(true) 
            })
            .catch(err => {
                setState((prev) => {
                    return {
                        ...prev,
                        error: err.response.data.errors
                    }
                })
            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setState(prev => {
            return {
                ...prev,
                data: {
                    ...prev.data,
                    [name]: value,
                },
            }
        })
    }

    return (
        <div className='container'>
            <div className='row NudoMap'>
                <div className='col-12 mt-5'>
                    <div className='NudoMap'>
                        <h1 className='text-center'>Regístrate</h1>
                        <p className='text-center'>Para acceder a NUDO necesitamos algunos datos tuyos como tu nombre, <br /> correo electrónico y una contraseña para que puedas acceder a tu perfil.</p>
                    </div>
                </div>
                <div className='SignInContainer'>
                    <div className='SignInNudoIcon'>
                        <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-signin_ekelsq.svg' alt='login rock and roll'/>
                    </div>
                    <div className='SignInImage'>
                    </div>
                    <div className='SignInForm'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className='SignInFormContainer'>
                                <div class='form-group'>
                                    <label for='exampleInputEmail1'>Nombre de usuario</label>
                                    <input type='text'
                                        class={`form-control ${state.error?.username ? `is-invalid` : null}`}
                                        id='username'
                                        name='username'
                                        aria-describedby='emailHelp'
                                        value={state.data?.username}
                                        onChange={handleChange} />

                                    {state.error?.username ?
                                        <div class='invalid-feedback'>
                                            {state.error.username}
                                        </div>
                                        : null
                                    }
                                </div>
                                <div class='form-group'>
                                    <label for='exampleInputEmail1'>Correo electrónico</label>
                                    <input type='email'
                                        class={`form-control ${state.error?.email ? `is-invalid` : null}`}
                                        id='email'
                                        name='email'
                                        aria-describedby='emailHelp'
                                        value={state.data?.email}
                                        onChange={handleChange} />
                                    {state.error?.email ?
                                        <div class='invalid-feedback'>
                                            {state.error.email}
                                        </div>
                                        : null
                                    }
                                </div>
                                <div class='form-group'>
                                    <label for='exampleInputPassword1'>Contraseña</label>
                                    <input
                                        type='password'
                                        class={`form-control ${state.error?.password ? `is-invalid` : null}`}
                                        id='password'
                                        name='password'
                                        value={state.data?.password}
                                        onChange={handleChange} />
                                    {state.error?.password ?
                                        <div class='invalid-feedback'>
                                            {state.error.password}
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className='SignInButton'>
                                <GenericButton text='Regístrate' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {redirect ?
                <Redirect to={{
                    pathname: '/login',
                    state: { fromSignin: redirect }
                }}/>
                : null }
        </div>
    )
}

export default SignIn