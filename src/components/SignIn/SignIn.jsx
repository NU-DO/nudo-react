import React, { useState } from 'react'
import ComponentHeader from '../Generic/ComponentHeader'
import GenericButton from '../Generic/GenericButton'
import { signin } from '../../services/Api'
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

    const handleSubmit = (event) => {
        event.preventDefault()
        signin(state.data)
            .then(user => console.log('Hola'))
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
        console.log(state);
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
                                value={state.data?.username}
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
                                class={`form-control ${state.error.email ? `is-invalid` : null}`}
                                id='email'
                                name='email'
                                aria-describedby='emailHelp'
                                value={state.data?.email}
                                onChange={handleChange} />
                            {state.error.email ?
                                <div class="invalid-feedback">
                                   {state.error.email}
                                </div>
                                : null
                            }
                        </div>
                        <div class='form-group'>
                            <label for='exampleInputPassword1'>Password</label>
                            <input
                                type='password'
                                class={`form-control ${state.error.password ? `is-invalid` : null}`}
                                id='password'
                                name='password'
                                value={state.data?.password}
                                onChange={handleChange} />
                            {state.error.password ?
                                <div class="invalid-feedback">
                                   {state.error.password}
                                </div>
                                : null
                            }
                        </div>
                        <GenericButton text='Signin' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn