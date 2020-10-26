import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'

const AlertSnackBar = (props) => {
    return (<MuiAlert elevation={6} variant='filled' {...props} />)
}

export default AlertSnackBar