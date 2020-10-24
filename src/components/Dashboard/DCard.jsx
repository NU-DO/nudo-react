import React from 'react'
import { Link } from 'react-router-dom'
import './DCard.scss'

const DCard = ({ img, textHead, buttonText, nudoIcon, link }) => {
    return (
        <div>
            <Link to={link}>
                <div class='card'>
                    <img src={nudoIcon} className='nudo-icon-card' alt={`${link}`} />
                    <div class='content'>
                        <img src={img} className='card-image' alt={`${link}`}/>
                    </div>

                    <div class='backdrop'>
                        <h1>{textHead}</h1>
                        <div class='action-buttons'><a class='btn' href={link}>Ir</a></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DCard