import React from 'react'
import { Link } from 'react-router-dom'
import './DCard.scss'

const DCard = ({ img, textHead, textBody, nudoIcon, link, action }) => {
    return (
        // <div>
        //     <Link to={link}>
        //         <div class='card'>
        //             <img src={nudoIcon} className='nudo-icon-card' alt={`${link}`} />
        //             <div class='content'>
        //                 <img src={img} className='card-image' alt={`${link}`}/>
        //             </div>

        //             <div class='backdrop'>
        //                 <h1>{textHead}</h1>
        //                 <div class='action-buttons'><a class='btn' href={link}>Ir</a></div>
        //             </div>
        //         </div>
        //     </Link>
        // </div>
        <>
            <Link to={link} style={{ textDecoration: 'none', color: 'white' }}>
                <div class="cardDashboard">
                    <div class="imgAvatar">
                        <img src={nudoIcon} className='nudo-icon-card' alt={`${link}`} />
                    </div>
                    <div class="cardDashboard-text">
                        <div class="portada" style={{ backgroundImage: `url(${img})` }}>
                        </div>
                        <div class="title-total">
                            <div class="title">{action}</div>
                            <h3>{textHead}</h3>
                            <div class="desc">{textBody}</div>
                            <div class="actions">
                                <button className='DashboardCardButton'>ir a {textHead}</button>
                            </div></div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default DCard