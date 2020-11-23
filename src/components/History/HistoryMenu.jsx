import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import HistoryTimeline from './HistoryTimeline'
import EventDetailModal from './EventDetailModal'
import GeneralMemoryForm from './Forms/GeneralMemoryForm'
import ComponentHeader from '../Generic/ComponentHeader'
import Modal from '../Generic/Modal'
import Spinner from '../Generic/Spinner'
import { getEvents, createEvent, deleteEvent } from '../../services/Api'
import './HistoryMenu.scss'

const defaultEvents = [{
    title: 'Llegada del hombre a la luna',
    year: 1969,
    description: 'Apolo 11 fue una misión espacial tripulada de Estados Unidos cuyo objetivo fue lograr que un ser humano caminara en la superficie de la Luna. La misión se envió al espacio el 16 de julio de 1969, llegó a la superficie de la Luna el 20 de julio de ese mismo año y al día siguiente logró que dos astronautas (Armstrong y Aldrin) caminaran sobre la superficie lunar. El Apolo 11 fue impulsado por un cohete Saturno V desde la plataforma LC 39A y lanzado a las 13:32 UTC del complejo de cabo Kennedy, en Florida (EE. UU.). Oficialmente se conoció a la misión como AS-506. La misión está considerada como uno de los momentos más significativos de la historia de la Humanidad y la Tecnología.',
    image: { url: 'https://res.cloudinary.com/difhe4gl3/image/upload/v1606143993/NUDO/assets/el-ultimo-hombre-en-la-luna_0f9eb6c7_1280x720_g6olci.jpg' },
    playlist: {
        name: 'La Cabalgata De Las Valkirias - De La Opera "La Valkiria"',
        url: 'https://p.scdn.co/mp3-preview/83bd529171d817ad274c0c13da19181092cdb7f8?cid=d37f1f747425408d87a3df7bfbf54045',
        image: 'https://i.scdn.co/image/ab67616d0000b2739cb08a2f9804ac4103231eca',
        artists: [{ name: 'Wagner' }]
    },
    location: { name: 'La luna', description: 'Un lugar especial' },
    contacts: [
        { photo: 'https://www.milenio.com/uploads/media/2019/07/19/neil-armstrong-murio-en-a_0_184_1041_648.jpg' },
        { photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michael_Collins_%28S69-31742%2C_restoration%29_%28cropped%29.jpg' },
        { photo: 'https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/buzz_aldrin_marquee.jpg' }
    ],
    video: {
        videoId: 'q1GA71TeZik',
        snippet: 'https://i.ytimg.com/vi/q1GA71TeZik/hqdefault.jpg',
    },
},
{
    title: 'Constitución Española',
    year: 1978,
    description: `La Constitución española de 1978 es la norma suprema del ordenamiento jurídico español, a la que están sujetos todos los poderes públicos y ciudadanos de España desde su entrada en vigor el 29 de diciembre de 1978. La Constitución fue ratificada en referéndum el 6 de diciembre de 1978, siendo posteriormente sancionada y promulgada por el rey Juan Carlos I el 27 de diciembre y publicada en el Boletín Oficial del Estado el 29 de diciembre del mismo año. La promulgación de la Constitución implicó la culminación de la llamada transición a la democracia, que tuvo lugar como consecuencia de la muerte, el 20 de noviembre de 1975, del anterior jefe de Estado, el dictador general Franco, precipitando una serie de acontecimientos políticos e históricos que transformaron el anterior régimen dictatorial en un «Estado social y democrático de derecho que propugna como valores superiores del ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político», tal y como proclama el artículo primero de la Constitución.6​ En él también se afianza el principio de soberanía nacional, que reside en el pueblo,7​ y se establece la monarquía parlamentaria como forma de gobierno.8​ Deroga, además, en la Disposición Derogatoria (en sus últimas páginas), las Leyes Fundamentales del Reino, aprobadas en 1938 y modificadas en múltiples ocasiones, la última de ellas en 1977 precisamente para abrir paso a la democracia.`,
    image: { url: 'https://res.cloudinary.com/difhe4gl3/image/upload/v1606144350/NUDO/assets/Congreso_de_los_Diputados-Meritxell_Batet-Coronavirus-Enfermedades_infecciosas-Infecciones-Espana_473716308_147912452_1024x576_dspubw.jpg' },
    playlist: {
        name: 'Cantares',
        url: 'https://p.scdn.co/mp3-preview/9ee94692b4768a2778332dee9c32a8538338e8d8?cid=d37f1f747425408d87a3df7bfbf54045',
        image: 'https://i.scdn.co/image/ab67616d0000b27341500ef6271359321090acfd',
        artists: [{ name: 'Joan Manuel Serrat' }]
    },
    location: { name: 'Las Cortes', description: 'Madrid' },
    contacts: [
        { photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/%28Peces-Barba%29_Felipe_Gonz%C3%A1lez_junto_al_presidente_del_Senado_y_el_presidente_del_Congreso_%28cropped%29.jpeg/220px-%28Peces-Barba%29_Felipe_Gonz%C3%A1lez_junto_al_presidente_del_Senado_y_el_presidente_del_Congreso_%28cropped%29.jpeg' },
    ],
    video: {
        videoId: 'MSuX5I2KrUo',
        snippet: 'https://i.ytimg.com/vi/MSuX5I2KrUo/hqdefault.jpg',
    },
},
{
    title: 'Olimpiadas de Barcelona',
    year: 1992,
    description: 'Los Juegos Olímpicos de Barcelona 1992, oficialmente conocidos como los Juegos de la XXV Olimpiada, fueron un evento multideportivo internacional celebrado en la ciudad de Barcelona, España, entre el 25 de julio y el 9 de agosto de 1992. En esta edición participaron 9356 atletas —6652 hombres y 2704 mujeres— de 169 comités nacionales, Son los segundos Juegos Olímpicos que se han realizado en un país hispanohablante después de México 1968.',
    image: { url: 'https://res.cloudinary.com/difhe4gl3/image/upload/v1606144799/NUDO/assets/barcelona_92_olimpiadas_jqwtkh.jpg' },
    playlist: {
        name: 'La Macarena',
        url: 'https://p.scdn.co/mp3-preview/3d5cc449365bc428be4082d94a3bb1ac87e03d00?cid=d37f1f747425408d87a3df7bfbf54045',
        image: 'https://i.scdn.co/image/ab67616d0000b2739703f5d0504b3581cbbb586b',
        artists: [{ name: 'Los del Río' }]
    },
    location: { name: 'Barcelona', description: 'Gran Ciudad' },
    contacts: [
        { photo: 'https://los40es00.epimg.net/los40/imagenes/los40classic/2015/11/freddie-barcelona.png' },
        { photo: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/10/06/15388070460156.jpg' },
        { photo: 'https://elcultural.com/wp-content/uploads/2020/08/michael-jordan-696x400.jpeg' },
        { photo: 'https://www.laimprentacg.com/wp-content/uploads/2017/07/cobi-1.jpg' }
    ],
    video: {
        videoId: 'Y1fiOJDXA-E',
        snippet: 'https://i.ytimg.com/vi/Y1fiOJDXA-E/hqdefault.jpg',
    },
},
{
    title: 'Cambio de Milenio',
    year: 2000,
    description: `El decenio de los años 2000 comprenden el periodo que va desde el 1 de enero de 2000, hasta el 31 de diciembre de 2009. La década fue declarada Decenio Internacional de una cultura de paz y no violencia para los niños del mundo por la ONU. La década de los años 2000 estuvo marcada por la guerra contra el terrorismo declarada por los Estados Unidos (bajo el mandato de George W. Bush) tras los atentados terroristas del 11 de septiembre de 2001 contra las Torres Gemelas de Nueva York y El Pentágono. En ese contexto tuvieron lugar los conflictos bélicos en Afganistán (desde 2001) e Irak (desde 2003) que provocaron, respectivamente, el derrocamiento del regímen Talibán y el de Saddam Hussein. Aunque el terrorismo de Al-Qaeda siguió golpeando y provocando más muertes en Bali (2002), Madrid (2004), Londres (2005), Bombay (2006) y multitud de atentados en Irak y Afganistán.`,
    image: { url: 'https://res.cloudinary.com/difhe4gl3/image/upload/v1606145840/NUDO/assets/2000_wfnlqd.jpg' },
    playlist: {
        name: 'Un año más - Mecano',
        url: 'https://p.scdn.co/mp3-preview/e2b0b492c6194f2ee332d752cb7a28a560ca7253?cid=d37f1f747425408d87a3df7bfbf54045',
        image: 'https://i.scdn.co/image/ab67616d0000b273a10f5f16b750ec7435d01aa8',
        artists: [{ name: 'Mecano' }]
    },
    location: { name: 'Puerta del Sol', description: 'Madrid y el mundo entero' },
    contacts: [
        { photo: 'https://assets.catawiki.nl/assets/2016/4/30/4/7/9/479f5a70-0ecb-11e6-96cc-1236cf6a2dbc.jpg' },
    ],
    video: {
        videoId: 'Vwvix4ahHEk',
        snippet: 'https://i.ytimg.com/vi/Vwvix4ahHEk/hqdefault.jpg',
    },
}
]

const HistoryMenu = () => {
    const [showForm, setShowForm] = useState(false)
    const [stateForm, setStateForm] = useState({})
    const [savedEvents, setSavedEvents] = useState(defaultEvents)
    const [selected, setSelected] = useState({})
    const [showDialog, setShowDialog] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState({})

    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
        getEvents()
            .then(events => setSavedEvents(prev => {
                return [...prev,
                ...events]
            }))
            .then(() => setLoaded(true))
    }, [])

    const handleSelect = (event) => {
        setSelected(event)
        setShowDialog(true)
    }

    const closeModal = () => {
        setShowDialog(false)
        setSelected({})
    }

    const handleShowMemoryForm = () => {
        setShowForm(true)
    }

    const handleCloseMemoryForm = () => {
        setShowForm(false)
        setStateForm({})
        setError({})
    }

    const modalSent = (event) => {
        event.preventDefault()
        const contactsId = stateForm.contacts?.map(contact => contact.id)
        setStateForm(prev => {
            return {
                ...prev,
                contacts: contactsId
            }
        })
        createEvent(stateForm)
            .then(() => {
                history.go(0)
            })
            .catch(err => setError(err))
    }

    const handleDelete = (id) => {
        deleteEvent(id)
            .then(() => {
                history.go(0)
            })
            .catch(err => setError(err))
    }

    return (
        <div className='NudoMap'>
            {loaded ?
                <>
                    <ComponentHeader
                        title='Historia'
                        description='En esta seción podrás crear y organizar tus recuerdos cronológicamente en una linea del tiempo. Todas las ventajas de NUDO en una sola sección.'
                        nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-eventos_ydhdym.svg'
                    />

                    {showForm ?
                        <div className=''>
                            <GeneralMemoryForm
                                setStateForm={setStateForm}
                                stateForm={stateForm}
                                modalSent={modalSent}
                                handleCloseMemoryForm={handleCloseMemoryForm}
                                error={error}
                            />
                        </div>
                        : <button className='ButtonMemoryForm' onClick={handleShowMemoryForm}>Crea un recuerdo</button>
                    }

                    <div className='ContainerHistoryTimeline'>
                        <HistoryTimeline savedEvents={savedEvents} handleSelect={handleSelect} />
                    </div>

                    {showDialog ?
                        <Modal>
                            <EventDetailModal
                                closeModal={closeModal}
                                selected={selected}
                                setSelected={setSelected}
                                handleDelete={handleDelete}
                            />
                        </Modal>
                        : null}
                </>
                : <Spinner />
            }
        </div>

    )
}

export default HistoryMenu