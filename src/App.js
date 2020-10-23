import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthenticatedRoute, NotAuthenticatedRoute } from './components/AuthenticatedRoute/AuthenticatedRoute'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import SongMenu from './components/Songs/SongMenu'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
            <NotAuthenticatedRoute exact path="/login" component={Login}/>
            <AuthenticatedRoute exact path="/songs" component={SongMenu}/>
            <AuthenticatedRoute exact path="/" component={Dashboard}/>
        </Switch>
      </div>
    </div>
  )
}

export default App