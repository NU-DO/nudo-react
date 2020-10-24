import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import { logout } from '../../services/Api'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { Button } from '@material-ui/core'
import Drawer from './Drawer'
import './Header.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function MenuAppBar() {
    const classes = useStyles()
    const { user, logout: logOut } = useAuthContext()

    const handleLogout = (event) => {
        event.preventDefault()
        logout()
            .then(user => logOut())
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                        <Drawer />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>NUDO</Link>             
                    </Typography>
                    {user && (
                        <div>
                            <Button variant='contained' color='secondary' onClick={handleLogout}>
                                LogOut
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}