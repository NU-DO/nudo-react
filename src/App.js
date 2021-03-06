import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthenticatedRoute, NotAuthenticatedRoute } from './components/AuthenticatedRoute/AuthenticatedRoute'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Activate from './components/Login/Activate'
import Signin from './components/SignIn/SignIn'
import Dashboard from './components/Dashboard/Dashboard'
import SongMenu from './components/Songs/SongMenu'
import NudoMap from './components/Locations/NudoMap'
import ImagesMenu from './components/Images/ImagesMenu'
import ContactMenu from './components/Contacts/ContactMenu'
import VideoMenu from './components/Videos/VideoMenu'
import HistoryMenu from './components/History/HistoryMenu'
import Game from './components/Games/Game'
import StatisticsMenu from './components/Statistics/StatisticsMenu'
import LandingPage from './components/LandingPage/LandingPage'
import NotFound from './components/Generic/NotFound'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className='App' id='App'>
      <Header />
      <div>
        <Switch>
          <NotAuthenticatedRoute exact path='/landing' component={LandingPage} />
          <NotAuthenticatedRoute exact path='/login' component={Login} />
          <NotAuthenticatedRoute exact path='/user/:id/activate/:token' component={Activate} />
          <NotAuthenticatedRoute exact path='/signin' component={Signin} />
          <AuthenticatedRoute exact path='/imagenes' component={ImagesMenu} />
          <AuthenticatedRoute exact path='/canciones' component={SongMenu} />
          <AuthenticatedRoute exact path='/localizaciones' component={NudoMap} />
          <AuthenticatedRoute exact path='/contactos' component={ContactMenu} />
          <AuthenticatedRoute exact path='/videos' component={VideoMenu} />
          <AuthenticatedRoute exact path='/historia' component={HistoryMenu} />
          <AuthenticatedRoute exact path='/juegos' component={Game} />
          <AuthenticatedRoute exact path='/estadisticas' component={StatisticsMenu} />
          <AuthenticatedRoute exact path='/' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App