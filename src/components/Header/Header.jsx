import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'
import { useAuthContext } from '../../contexts/AuthContext'
import { logout } from '../../services/Api'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import './Header.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 2,
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

    const LinkStyle = {
        textDecoration: 'none',
        color: 'black',
        marginTop: '20px'
    }

    return (
        <div className='NudoHeader fixed-top'>
            <nav class='navbar'>
                <div className='NudoHeaderLeft'>
                    <Link to='/' class='NudoHeaderLogo'>
                        <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1604218253/NUDO/assets/Recurso_17_ky7ydo.svg' alt='Nudo Logo Header' loading='lazy' className='NudoHeaderIcon' />
                    </Link>

                    {/* <Link to='/logout' style={LinkStyle}><span className='NudoHeaderSpan'>Desconectar</span> </Link> */}
                </div>
                <div className='NudoHeaderRight'>
                    {user ? <IconButton
                        edge='start'
                        size='small'
                        className={classes.menuButton}
                        color='inherit'
                        disableFocusRipple={true}
                        aria-label='menu'>
                        <Drawer />
                    </IconButton>
                        : 
                        <><Link to='/login' style={LinkStyle}><span className='NudoHeaderSpan'>Entrar</span> </Link>
                            <Link to='/signin' style={LinkStyle}><span className='NudoHeaderSpan'>Registrate</span> </Link></>
                    }
                </div>

            </nav>
            {/* <AppBar position='static'>
                <Toolbar>
                    {user ? <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            <Drawer />
                        </IconButton>
                    : null}
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
            </AppBar> */}
        </div>
    )
}