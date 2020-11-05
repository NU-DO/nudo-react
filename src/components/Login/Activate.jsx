import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { activate } from '../../services/Api'

const Activate = (props) => {
    const [activated, setActivated] = useState(false)
    const fromMail = true
    
    useEffect(() => {
        activate(props.match.params.id, props.match.params.token)
            .then(setActivated(true))
    }, [])

    return (
        <div>
            {activated ? 
                <Redirect to={{
                    pathname: '/login',
                    state: { fromMail: fromMail }
                }}/>  : 
                null
            }
        </div> 
    )
}

export default Activate