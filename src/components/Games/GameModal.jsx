import React from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

const LocationModal = ({ closeModal, score, newGame, goMenu }) => {

    return (
        <div className='containerDialog'>
            <CloseModalButton onClick={closeModal} />

            <h2 style={{ textAlign: 'center' }}>Has Ganado! tu puntuación es:</h2>
            <div>{score}</div>
            <div >
                <div>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className='mt-3'
                        onClick={() => {
                            newGame()
                        }}
                    >
                        Juega otra vez
                </Button>
                <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className='mt-3'
                        onClick={() => {
                            goMenu()
                        }}
                    >
                        Volver al Menu
                </Button>
                </div>
            </div>
        </div>
    )
}

export default LocationModal