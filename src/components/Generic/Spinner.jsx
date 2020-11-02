import React from 'react';
import './Spinner.scss'

const Spinner = () => {
    return (
        <div className='SpinnerContainer'>
            <div class="loading-box">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
                <div class="dot"></div>
            </div>
        </div>
    );
};

export default Spinner;