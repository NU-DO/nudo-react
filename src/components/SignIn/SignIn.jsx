import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ComponentHeader from '../Generic/ComponentHeader'
import GenericButton from '../Generic/GenericButton'
import { useAuthContext } from '../../contexts/AuthContext'
import { signin } from '../../services/Api'
import './SignIn.scss'

const SignIn = () => {
    const [state, setState] = useState({
        data: {
            username: '',
            email: '',
            password: ''
        },
        error: false
    })
    const authContext = useAuthContext()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state.data)
        signin(state.data)
            .then(user => authContext.login(user))
            .catch(err => {
                console.log(err.response.data.errors)
                setState({ error: err })
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
            <div className='row'>
                <div className='col-12 mt-5'>
                    <div className='NudoMap'>
                        <ComponentHeader
                            nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-login_cuaa4a.svg'
                            title='Entra'
                            description='Entra a NUDO con tu email y tu password.'
                        />
                    </div>
                </div>
                <div className='col-12 mt-5 SignInContainer'>
                    <div className='SignInImage'>

                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div class='form-group'>
                            <label for='exampleInputEmail1'>Nombre de usuario</label>
                            <input type='text'
                                class={`form-control ${state.error.username ? `is-invalid` : null}`}
                                id='username'
                                name='username'
                                aria-describedby='emailHelp'
                                onChange={handleChange} />
                            {state.error.username ?
                                <div class="invalid-feedback">
                                   {state.error.username}
                                </div>
                                : null
                            }
                        </div>
                        <div class='form-group'>
                            <label for='exampleInputEmail1'>Email address</label>
                            <input type='email'
                                class={`form-control ${state.error ? `is-invalid` : null}`}
                                id='email'
                                name='email'
                                aria-describedby='emailHelp'
                                onChange={handleChange} />
                            {state.error ?
                                <div class="invalid-feedback">
                                    Email o contraseña incorrecta
                </div>
                                : null
                            }
                        </div>
                        <div class='form-group'>
                            <label for='exampleInputPassword1'>Password</label>
                            <input
                                type='password'
                                class={`form-control ${state.error ? `is-invalid` : null}`}
                                id='password'
                                name='password'
                                onChange={handleChange} />
                        </div>
                        <div class='form-group form-check'>
                            <label class='form-check-label' for='exampleCheck1'>Si no estas logeado <Link to='/signup'>Regístrate</Link></label>
                        </div>
                        <GenericButton text='Login' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn