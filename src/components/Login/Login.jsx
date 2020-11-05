import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import GenericButton from '../Generic/GenericButton'
import { login } from '../../services/Api'
import Alert from 'react-bootstrap/Alert'
import './Login.scss'

const LogIn = (props) => {
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
      .then(user => {
        authContext.login(user)
        setState({
          data: {
            email: '',
            password: ''
          },
          error: false 
        })
      })
      .catch(err => setState((prev) => {
        return {
          ...prev, 
          error: true
        }
      }))
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
            <h1 className='text-center'>Entrar</h1>
            <p className='text-center'>Si ya eres usuario de NUDO, ingresa tu correo y tu contraseña <br /> para acceder al menú principal.</p>
            {props.location.state?.fromSignin ? 
              <Alert variant='primary' className='my-1'>
                Revisa tu correo para activar tu cuenta!
              </Alert>
              : null}
            {props.location.state?.fromMail ? 
              <Alert variant='primary' className='my-1'>
                Cuenta activada con éxito
              </Alert>
              : null}
          </div>
        </div>
        <div className='LogInContainer'>
          <div className='LogInNudoIcon'>
            <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-login_cuaa4a.svg' alt='login rock and roll' />
          </div>
            <div className='LogInImage'>
            </div>
          <div className='LogInForm'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='LogInFormContainer'>
                <div class='form-group'>
                  <label for='exampleInputEmail1'>Correo electrónico</label>
                  <input type='email'
                    class={`form-control ${state.error ? `is-invalid` : null}`}
                    id='email'
                    name='email'
                    aria-describedby='emailHelp'
                    onChange={handleChange} />
                  {state.error ?
                    <div class='invalid-feedback'>
                      Email o contraseña incorrecta
                </div>
                    : null
                  }
                </div>
                <div class='form-group'>
                  <label for='exampleInputPassword1'>Contraseña</label>
                  <input
                    type='password'
                    class={`form-control ${state.error ? `is-invalid` : null}`}
                    id='password'
                    name='password'
                    onChange={handleChange} />
                </div>
                <small class='form-text text-muted LogInText' for='exampleCheck1'>Si no tienes perfil, <Link to='/signin' style={{color: '#839672'}}>Regístrate</Link></small>
              </div>
              <div className='LogInButton'>
                <GenericButton text='Entrar' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn