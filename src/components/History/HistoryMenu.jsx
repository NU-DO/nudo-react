import React, { useState, useEffect } from 'react'
import HistoryTimeline from './HistoryTimeline'
import EventDetailModal from './EventDetailModal'
import GeneralMemoryForm from './Forms/GeneralMemoryForm'
import ComponentHeader from '../Generic/ComponentHeader'
import Modal from '../Generic/Modal'
import { getEvents, createEvent, deleteEvent, editEvent } from '../../services/Api'
import './HistoryMenu.scss'

const defaultEvents = [{
    title: 'Llegada del hombre a la luna',
    year: 1969,
    description: 'La humanidad da un pequeño gran paso',
    image: { url: 'https://www.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg' },
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
    description: 'Nueva era. Democracia.',
    image: { url: 'https://s1.eestatic.com/2020/03/10/espana/Congreso_de_los_Diputados-Meritxell_Batet-Coronavirus-Enfermedades_infecciosas-Infecciones-Espana_473716308_147912452_1024x576.jpg' },
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
    description: 'Evento que será recordado por siempre',
    image: { url: 'https://4.bp.blogspot.com/-8OGNPZ8k3Hg/WXteH6Yw_SI/AAAAAAAA6d8/-HfCu1Si_z4PFlUOzm6BravSr0HC41_aACLcBGAs/w1200-h630-p-k-no-nu/barcelona_92_olimpiadas.jpg' },
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
        { photo: 'https://elcultural.com/wp-content/uploads/2020/08/michael-jordan-696x400.jpeg' }
    ],
    video: {
        videoId: 'Y1fiOJDXA-E',
        snippet: 'https://i.ytimg.com/vi/Y1fiOJDXA-E/hqdefault.jpg',
    },
},
{
    title: 'Cambio de Milenio',
    year: 2000,
    description: 'Todo dejaría de funcionar...Veremos',
    image: { url: 'https://img.blogs.es/sareb/wp-content/uploads/2020/03/nokia-3301-telefono-ano-2000.jpg' },
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
    }

    const modalSent = (event) => {
        event.preventDefault()
        setShowDialog(false)
        createEvent(stateForm)
            .then(() => {
                getEvents()
                    .then(events => setSavedEvents(events))
                setStateForm({})
                // closeModal()
                // setError({})
                // handleSavedSnack()
            })
            .catch(err => setError(err))
    }

    return (
        <div className='NudoMap'>
            <ComponentHeader
                title='Historia'
                description='En esta seción podrás crear y organizar tus recuerdos cronológicamente en una linea del tiempo. Todas las ventajas de NUDO en una sola sección.'
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-eventos_ydhdym.svg'
            />
            <button onClick={handleShowMemoryForm}>Crea un recuerdo</button>
            {showForm && (
                <div className='ContainerMemoryForm'>
                    <GeneralMemoryForm 
                        setStateForm={setStateForm} 
                        stateForm={stateForm}
                        modalSent={modalSent}
                    />
                </div>
            )}

            <div className='ContainerHistoryTimeline'>
                {loaded && <HistoryTimeline savedEvents={savedEvents} handleSelect={handleSelect} />}
            </div>

            {showDialog ?
                <Modal>
                    <EventDetailModal
                        closeModal={closeModal}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Modal>
                : null}
        </div>

    )
}

export default HistoryMenu