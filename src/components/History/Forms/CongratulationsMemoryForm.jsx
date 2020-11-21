import React, { useEffect } from 'react'

const CongratulationsMemoryForm = ( { modalSent }) => {
    return (
        <div onClick={modalSent}>
            Congratulations!
        </div>
    )
}

export default CongratulationsMemoryForm