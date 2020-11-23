import React from 'react'
import GenericButton from '../../Generic/GenericButton'
import './CongratulationsMemoryForm.scss'

const CongratulationsMemoryForm = ({ modalSent }) => {

    return (
        <div className='MemoryCongratContainer'>
            <div class='success-icon'>
                <div class='success-icon__tip'></div>
                <div class='success-icon__long'></div>
            </div>
            <h2>Enhorabuena!</h2>
            <p>Pulsa el botón de <b>Guardar Recuerdo</b> y tendrás ese momento que viviste para siempre en tu perfil.</p>
            <div>
                <GenericButton text='Guardar Recuerdo' onClick={modalSent} />
            </div>
        </div>
    )
}

export default CongratulationsMemoryForm