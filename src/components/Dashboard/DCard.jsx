import React from 'react';
import './DCard.scss'

const DCard = ({img, textHead, buttonText, nudoIcon}) => {
    return (
        <div>
             <div class="wrap">
                <div class="card">
                <img src={nudoIcon} className='nudo-icon-card'/>
                    <div class="content">
                        <img src={img} className='card-image'/>
                    </div>
                    
                    <div class="backdrop">
                        <h1>Imágenes</h1>
                        <div class="action-buttons"><a class="btn" href="#">Ir</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DCard;

// background: linear-gradient(180deg, #8b3fd3 0%, #3f28dd 26.52%);
// #ef7e93 0%, #f2c9d1 