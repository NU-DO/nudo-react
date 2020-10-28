import React from 'react'
import { Switch } from 'react-router-dom'
import { AuthenticatedRoute, NotAuthenticatedRoute } from './components/AuthenticatedRoute/AuthenticatedRoute'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import SongMenu from './components/Songs/SongMenu'
import NudoMap from './components/Locations/NudoMap'
import ImagesMenu from './components/Images/ImagesMenu'
import Game from './components/Games/Game'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <Switch>
            <NotAuthenticatedRoute exact path='/login' component={Login}/>7
            <AuthenticatedRoute exact path='/canciones' component={SongMenu}/>
            <AuthenticatedRoute exact path='/localizaciones' component={NudoMap}/>
            <AuthenticatedRoute exact path='/imagenes' component={ImagesMenu}/>
            <AuthenticatedRoute exact path='/juegos' component={Game}/>
            {/* <AuthenticatedRoute exact path='/contactos' component={}/>
            <AuthenticatedRoute exact path='/historia' component={}/>
            <AuthenticatedRoute exact path='/eventos' component={}/>*/}
            <AuthenticatedRoute exact path='/' component={Dashboard}/> 
        </Switch>
      </div>
    </div>
  )
}

export default App