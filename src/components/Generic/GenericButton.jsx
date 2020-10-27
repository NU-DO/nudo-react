import React from 'react';
import './GenericButton.scss'

const GenericButton = ({text, onClick}) => {
    return (
        <div>
            <button className='GenericButton' onClick={onClick}>{text}</button>
        </div>
    );
};

export default GenericButton;