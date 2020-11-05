import React from 'react'
import './Footer.scss'

const Footer = () => {
    
    return (
        <div>
            <footer>
                <div className='FooterWaves'>
                    <div className='FooterIconNudo'>
                        <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1604245115/NUDO/assets/Recurso_2_aheau7.svg' alt='logo nudo white icon' />
                    </div>
                    <div className='FooterText'>
                        <div>
                            <h5>NUDO</h5>
                            <ul>
                                <li>Contacto</li>
                                <li>Compañía</li>
                                <li>Desarroladores</li>
                                <li>Diseñadores</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Enlaces</h5>
                            <ul>
                                <li>Recomienda</li>
                                <li>Categorias</li>
                                <li>Preguntas Frecuentes</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h5>RRSS</h5>
                            <ul>
                                <li>Facebook</li>
                                <li>Tweeter</li>
                                <li>Linked In</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                    </div>
                    <div className='FooterTextCopy'>
                        <small>Copyright © All Rights Reserved 2020 |  Development and Design by Miguel Valle & Fernando Marín</small>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer