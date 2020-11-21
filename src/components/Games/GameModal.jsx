import React from 'react'
import CloseModalButton from '../Generic/CloseModalButton'
import GenericButton from '../Generic/GenericButton'
import './GameModal.scss'

const LocationModal = ({ closeModal, score, newGame, goMenu }) => {

    return (
        <div className='ModalGameContent'>
            <CloseModalButton onClick={closeModal} />
            <h4 style={{ textAlign: 'center' }}>Has Ganado! <br /> tu puntuación es:</h4>
            <div className='text-center'>{score} puntos</div>
            <div >
                <div className='d-flex mt-5'>
                    <br />
                    <GenericButton
                        text='Juega otra vez'
                        style={{ marginTop: '5px' }}
                        onClick={() => {
                            newGame()
                        }}
                    />
                    <br />
                    <GenericButton
                        text='Volver al Menu'
                        style={{ marginTop: '5px' }}
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