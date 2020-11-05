import React from 'react'
import DCard from './DCard'
import './Dashboard.scss'

const Dashboard = () => {

    return (
        <div className='Dashboard'>
            <div className='DashBoardHeader'>
                <h1 className='text-center'>Bienvenido a <b>NUDO</b></h1>
                <p className='text-center'>¿Qué quieres hacer hoy? Elige una opción de las que te mostramos a continuación.</p>
            </div>
            <div className='Dashboard-card-container'>
                <DCard
                    action='Mira'
                    textHead='Fotos'
                    img='https://www.carena.org/wp-content/uploads/memories.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Imagenes_dudrsk.svg'
                    link='imagenes'
                    textBody='¿Recuerdas aquel concierto? pues esta sección es ideal para guardar esos recuerdos y añadir los comentarios que quieras.'
                />
                <DCard
                    action='Escucha'
                    textHead='Música'
                    img='https://res.cloudinary.com/difhe4gl3/image/upload/v1604520799/NUDO/assets/91amyAksDiL._AC_SL1500__o10gfm.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-musica_a9qwta.svg'
                    link='canciones'
                    textBody='¿Recuerdas aquella canción? pues esta sección es genial para guardar esas canciones y añadir a la decada a la que pertenecieron de tu vida.'
                />
                <DCard
                    action='Agenda'
                    textHead='Contactos'
                    img='https://designthinking.gal/wp-content/uploads/2017/05/personas.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-contactos_qaigqt.svg'
                    link='contactos'
                    textBody='¿Cuál era el teléfono o la dirección de ...? pues en esta sección podrás tener a mano los datos de tus contactos inmediatamente.'

                />
                <DCard
                    action='Mapas'
                    textHead='Sitios'
                    img='https://www.master-finanzas-cuantitativas.com/wp-content/uploads/2019/08/adventure-blur-cartography-408503-e1563195599874.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Localizaciones_oyhg3m.svg'
                    link='localizaciones'
                    textBody='¿Recuerdas aquellas vacaciones? Aquí podrás marcar tus sitios y añadir comentarios en ellos, además de pasear de nuevo por allí.'

                />
                <DCard
                    action='Vida'
                    textHead='Historia'
                    img='https://res.cloudinary.com/difhe4gl3/image/upload/v1604521245/NUDO/assets/typewriter_xhzuit.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-eventos_ydhdym.svg'
                    link='historia'
                    textBody='¿Recuerdas aquel acontecimiento inolvidable? Aquí podrás guardar esos y muchos más recuerdos cronológicamente.'

                />
                <DCard
                    action='Disfruta'
                    textHead='Juegos'
                    img='https://res.cloudinary.com/difhe4gl3/image/upload/v1604521497/NUDO/assets/juegos_nycbt7.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Juegos_axxxkw.svg'
                    link='juegos'
                    textBody='¿Unas partiditas? Ejercita tu cerebro con un simple juego de memoría con tres niveles de dificultad diferentes. Cuidado que engancha.'
                />
            </div>
        </div>
    )
}

export default Dashboard