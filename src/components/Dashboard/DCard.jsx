import React from 'react';
import { Link } from 'react-router-dom'
import './DCard.scss'

const DCard = ({ img, textHead, buttonText, nudoIcon, link }) => {
    return (
        <div>
            <Link to={link}>
                <div class="card">
                    <img src={nudoIcon} className='nudo-icon-card' />
                    <div class="content">
                        <img src={img} className='card-image' />
                    </div>

                    <div class="backdrop">
                        <h1>{textHead}</h1>
                        <div class="action-buttons"><a class="btn" href="#">Ir</a></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DCard;

// background: linear-gradient(180deg, #8b3fd3 0%, #3f28dd 26.52%);
// #ef7e93 0%, #f2c9d1 