import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ComponentHeader from '../Generic/ComponentHeader'
import GenericButton from '../Generic/GenericButton'
import { useAuthContext } from '../../contexts/AuthContext'
import { login } from '../../services/Api'
import './Login.scss'

const LogIn = () => {
  const [state, setState] = useState({
    data: {
      email: '',
      password: ''
    },
    error: false
  })
  const authContext = useAuthContext()
  const { data } = state

  const handleSubmit = (event) => {
    event.preventDefault()
    login(data)
      .then(user => authContext.login(user))
      .catch(err => setState({ error: true }))
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
        <div className='col-12 mt-5 LoginContainer'>
        <div className='LoginImage'>
          
        </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <input type='email'
                class={`form-control ${state.error ? `is-invalid` : null}`}
                id='email'
                name='email'
                aria-describedby='emailHelp'
                onChange={handleChange} />
              {state.error  ? 
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
              <label class='form-check-label' for='exampleCheck1'>Si no estas logeado <Link to='/signin'>Regístrate</Link></label>
            </div>
            <GenericButton text='Login' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn