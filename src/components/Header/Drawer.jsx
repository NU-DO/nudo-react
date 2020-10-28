import React, { useState } from 'react'
import './Drawer.scss'
import { useAuthContext } from '../../contexts/AuthContext'
import { logout } from '../../services/Api'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import ContactsIcon from '@material-ui/icons/Contacts'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import EventIcon from '@material-ui/icons/Event'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})

const routesRedirect = ['Imagenes', 'Canciones', 'Contactos', 'Localizaciones', 'Historia', 'Eventos', 'Juegos']

const NudoDrawer = () => {
    const { user, logout: logOut } = useAuthContext()
    const classes = useStyles()
    const [state, setState] = useState({
        hamMenu: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const handleLogout = (event) => {
        console.log('logout')
        event.preventDefault()
        logout()
            .then(user => logOut())
            .catch(err => console.log(err))
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='ComponentHeaderStyleDrawer'>
                <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603577840/NUDO/assets/Dashboard-icons/logo-menu_rxm9q6.svg' className='NudoIconStyleDrawer' alt="logo" />
                <h5 className='mt-3 text-center'>Hola {user.username}!</h5>
            </div>
            <List>
                {routesRedirect.map((text, index) => (
                    <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <div>
                            <ListItem button key={text}>
                                <ListItemIcon>{index === 0 ? <PhotoLibraryIcon /> :
                                    index === 1 ? <MusicNoteIcon /> :
                                        index === 2 ? <ContactsIcon /> :
                                            index === 3 ? <LocationOnIcon /> :
                                                index === 4 ? <TimelapseIcon /> :
                                                    index === 5 ? <EventIcon /> :
                                                        index === 6 ? <SportsEsportsIcon /> : <EqualizerIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </div>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem button onClick={handleLogout}>
                    <ListItemIcon>
                        <MeetingRoomIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Logout'} />
                </ListItem>
            </List>
        </div>
    )

return (
    <div>
        {['hamMenu'].map((anchor) => (
            <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)} />
                <Drawer anchor={`/${anchor.toLowerCase()}`} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
    </div>
)
}

export default NudoDrawer