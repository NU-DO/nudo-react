import React from 'react'
import './Spinner.scss'

const Spinner = () => {
    return (
        <div className='SpinnerContainer'>
            <div className='loading-box'>
                <div className='line line1'></div>
                <div className='line line2'></div>
                <div className='line line3'></div>
                <div className='dot'></div>
            </div>
        </div>
    )
}

export default Spinner