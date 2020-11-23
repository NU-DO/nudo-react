import React from 'react'
import GenericButton from '../../Generic/GenericButton'
import './CongratulationsMemoryForm.scss'

const CongratulationsMemoryForm = ({ modalSent }) => {

    return (
        <div className='MemoryCongratContainer'>
            <div className='success-icon'>
                <div className='success-icon__tip'></div>
                <div className='success-icon__long'></div>
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