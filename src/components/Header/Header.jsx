import React, { useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { logout } from '../../services/Api'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core'

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
        event.preventDefault();
        console.log('desloguea');
        logout()
        .then(user => logOut())
        .catch(err => console.log(err))
      }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        NUDO
          </Typography>
                    {user && (
                        <div>
                            <Button variant="contained" color="secondary" onClick={handleLogout}>
                                LogOut
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}