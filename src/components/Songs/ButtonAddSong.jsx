import React, { useState, useEffect } from 'react'
import './ButtonAddSong.scss'

const ButtonAddSong = ({ decade, addFav, song }) => {
    const [decadeBtn, setDecadeBtn] = useState('')

    useEffect(() => {
        switch (decade) {
            case "50's":
                setDecadeBtn('fifties')
                break;
            case "60's":
                setDecadeBtn('sixties')
                break;
            case "70's":
                setDecadeBtn('seventies')
                break;
            case "80's":
                setDecadeBtn('eighties')
                break;
            case "90's":
                setDecadeBtn('nineties')
                break;
            case "00's":
                setDecadeBtn('current')
                break;
            default:
                setDecadeBtn('')
        }
    }, [song])
    return (
        <div className={`ButtonAddSong ${decadeBtn}Btn`} onClick={() => addFav(song, decade)}>
            {decade}
        </div>
    )
}

export default ButtonAddSong