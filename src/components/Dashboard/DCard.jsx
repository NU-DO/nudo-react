import React from 'react'
import { Link } from 'react-router-dom'
import './DCard.scss'

const DCard = ({ img, textHead, textBody, nudoIcon, link, action }) => {
    return (
        <>
            <Link to={link} style={{ textDecoration: 'none', color: 'white' }}>
                <div className="cardDashboard">
                    <div className="imgAvatar">
                        <img src={nudoIcon} className='nudo-icon-card' alt={`${link}`} />
                    </div>
                    <div className="cardDashboard-text">
                        <div className="portada" style={{ backgroundImage: `url(${img})` }}>
                        </div>
                        <div className="title-total">
                            <div className="title">{action}</div>
                            <h3>{textHead}</h3>
                            <div className="desc">{textBody}</div>
                            <div className="actions">
                                <button className='DashboardCardButton'>ir a {textHead}</button>
                            </div></div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default DCard