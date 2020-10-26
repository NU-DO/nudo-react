import React from 'react'
import './Dashboard.scss'
import DCard from './DCard'

const Dashboard = () => {
    return (
        <div className='Dashboard'>
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
                    img='https://i1.wp.com/metro.co.uk/wp-content/uploads/2017/09/169954367.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1'
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
                    textBody='¿Recuerdas aquellas vacaciones? pues aquí podrás marcar tus sitios y añadir comentarios en ellos, además de pasear de nuevo por allí.'

                />
                <DCard
                    action='Vida'
                    textHead='Historia'
                    img='https://contextomediagroup.com/wp-content/uploads/2019/06/tu-historia-678x381.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-eventos_ydhdym.svg'
                    link='historia'
                    textBody='¿Recuerdas aquel acontecimiento? aquí en esta sección podrás guardar esos recuerdos y organizarlos cronológicamente.'

                />
                <DCard
                    action='A mano'
                    textHead='Eventos'
                    img='https://static1.laverdad.es/www/multimedia/201903/20/media/cortadas/calendario-laboral-2020-murcia-kuGG-U70964365249noF-624x385@La%20Verdad.jpg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-appointments_grmf6d.svg'
                    link='eventos'
                    textBody='¿A qué hora tenía yo el médico? Tranquilo, ahora con esta sección no se te pasará ni el más mínimo detalle.'

                />
                <DCard
                    action='Disfruta'
                    textHead='Juegos'
                    img='https://i.blogs.es/21f6e6/mandos/1366_2000.jpeg'
                    nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Juegos_axxxkw.svg'
                    link='juegos'
                    textBody='¿Unas partiditas? Ejercita tu cerebro con un simple juego de memoría con tres niveles de dificultad diferentes. Cuidado que engancha.'
                />
            </div>
        </div>


    )
}

export default Dashboard