import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

const RedirectToLogin = () => <Redirect to='/landing'/>

const RedirectToHome = () => <Redirect to='/'/>

export const AuthenticatedRoute = (props) => {
  const { user } = useAuthContext()

  return <Route {...props } component={user ? props.component : RedirectToLogin}/>
}

export const NotAuthenticatedRoute = (props) => {
  const { user } = useAuthContext()

  return <Route {...props } component={!user ? props.component : RedirectToHome}/>
}
