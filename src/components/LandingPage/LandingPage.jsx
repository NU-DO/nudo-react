import React from 'react'
import ReactRotatingText  from 'react-rotating-text'
import './LandingPage.scss'

const LandingPage = () => {

    const words = ['tus viajes', 'tus imágenes', 'tus contactos', 'tus lugares favoritos', 'tus canciones de siempre', 'recuerdos...']

    return (
        <div className='prueba'>
            {/* <p className='prueba'>Nudo es una aplicación <br/> para guardar ...
            <ReactRotatingText 
                items={words}
                cursor='true'
                typingInterval= {150}
                emptyPause={200}
            />
            </p> */}

            <p className='prueba'>Hola!!!</p>
            
           
    
        </div>
    );
};

export default LandingPage;