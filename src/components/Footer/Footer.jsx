import React from 'react';
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
                            <h6>Titulo 1</h6>
                            <ul>
                                <li>Elemento</li>
                                <li>Elemento</li>
                                <li>Elemento</li>
                                <li>Elemento</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Titulo 1</h6>
                            <ul>
                                <li>Elemento</li>
                                <li>Elemento</li>
                                <li>Elemento</li>
                                <li>Elemento</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Titulo 1</h6>
                            <ul>
                                <li>Elemento</li>
                                <li>Elemento</li>
                                <li>Elemento</li>
                                <li>Elemento</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <small>Copiright Developed by Fernando Marín y Miguel del Vale</small>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;