import React from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
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
            <h4 style={{ textAlign: 'center' }}>Has Ganado! tu puntuación es:</h4>
            <div>{score} puntos</div>
            <div >
                <div>
                <br/>
                    <GenericButton
                        text='Juega otra vez'
                        style={{marginTop: '5px'}}
                        onClick={() => {
                            newGame()
                        }}
                    />       
                    <br/>      
                <GenericButton
                        text='Volver al Menu'
                        style={{marginTop: '5px'}}
                        onClick={() => {
                            goMenu()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default LocationModal