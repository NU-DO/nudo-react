import React from 'react';
import './ComponentHeader.scss'

const ComponentHeader = ({ nudoIcon, text }) => {
    return (
        <div className='ComponentHeaderStyle'>
           
                <img src= {nudoIcon} className='NudoIconStyle'/>
          
            <h2>{text}</h2>
           
        </div>
    );
};

export default ComponentHeader;