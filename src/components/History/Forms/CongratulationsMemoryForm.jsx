import React from 'react'
import GenericButton from '../../Generic/GenericButton'

const CongratulationsMemoryForm = ( { modalSent }) => {
    return (
        <div onClick={modalSent}>
            <GenericButton text='Guardar Recuerdo' onClick={modalSent} />
        </div>
    )
}

export default CongratulationsMemoryForm