import React, { useState, useEffect } from 'react'
import HistoryTimeline from './HistoryTimeline'
import GeneralMemoryForm from './Forms/GeneralMemoryForm'
import ComponentHeader from '../Generic/ComponentHeader'
import { getEvents, createEvent, deleteEvent, editEvent } from '../../services/Api'
import './HistoryMenu.scss'

// const createDefaultEvents = (id) => {
//   const event1 = new Event({
//     title: 'Llegada del hombre a la luna',
//     year: 1969,
//     description: 'La humanidad da un pequeño gran paso',
//     images: ['https://www.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg'],
//     playlist: {
//       name: 'La Cabalgata De Las Valkirias - De La Opera "La Valkiria"',
//       url: 'https://p.scdn.co/mp3-preview/83bd529171d817ad274c0c13da19181092cdb7f8?cid=d37f1f747425408d87a3df7bfbf54045',
//       image: 'https://i.scdn.co/image/ab67616d0000b2739cb08a2f9804ac4103231eca'
//     },
//     location: { name: 'La luna', description: 'Un lugar especial' },
//     contacts: [
//       { photo: 'https://www.milenio.com/uploads/media/2019/07/19/neil-armstrong-murio-en-a_0_184_1041_648.jpg' },
//       { photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michael_Collins_%28S69-31742%2C_restoration%29_%28cropped%29.jpg' },
//       { photo: 'https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/buzz_aldrin_marquee.jpg' }
//     ],
//     video: {
//       videoId: 'q1GA71TeZik',
//       snippet: 'https://i.ytimg.com/vi/q1GA71TeZik/hqdefault.jpg',
//     },
//   })

//   const event2 = new Event({
//     title: 'Constitución Española',
//     year: 1978,
//     description: 'Nueva era. Democracia.',
//     images: ['https://lh3.googleusercontent.com/proxy/DDtUKQoFjhBQj6ovWC7AEF53zBzjEBmam8R4afq_5kVcUfRPvJygM4252Wj5AZ9dYtlOE3rtPnsRX2zJt0jHUezaRQ3hPKxFC_7qB0j7otNKcg'],
//     playlist: {
//       name: 'Cantares',
//       url: 'https://p.scdn.co/mp3-preview/9ee94692b4768a2778332dee9c32a8538338e8d8?cid=d37f1f747425408d87a3df7bfbf54045',
//       image: 'https://i.scdn.co/image/ab67616d0000b27341500ef6271359321090acfd'
//     },
//     location: { name: 'Las Cortes', description: 'Madrid' },
//     contacts: [
//       { photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/%28Peces-Barba%29_Felipe_Gonz%C3%A1lez_junto_al_presidente_del_Senado_y_el_presidente_del_Congreso_%28cropped%29.jpeg/220px-%28Peces-Barba%29_Felipe_Gonz%C3%A1lez_junto_al_presidente_del_Senado_y_el_presidente_del_Congreso_%28cropped%29.jpeg' },
//     ],
//     video: {
//       videoId: 'MSuX5I2KrUo',
//       snippet: 'https://i.ytimg.com/vi/MSuX5I2KrUo/hqdefault.jpg',
//     },
//   })

//   const event3 = new Event({
//     title: 'Llegada del hombre a la luna',
//     year: 1969,
//     description: 'La humanidad da un pequeño gran paso',
//     images: ['https://www.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg'],
//     playlist: {
//       name: 'La Cabalgata De Las Valkirias - De La Opera "La Valkiria"',
//       url: 'https://p.scdn.co/mp3-preview/83bd529171d817ad274c0c13da19181092cdb7f8?cid=d37f1f747425408d87a3df7bfbf54045',
//       image: 'https://i.scdn.co/image/ab67616d0000b2739cb08a2f9804ac4103231eca'
//     },
//     location: { name: 'La luna', description: 'Un lugar especial' },
//     contacts: [
//       { photo: 'https://www.milenio.com/uploads/media/2019/07/19/neil-armstrong-murio-en-a_0_184_1041_648.jpg' },
//       { photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michael_Collins_%28S69-31742%2C_restoration%29_%28cropped%29.jpg' },
//       { photo: 'https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/buzz_aldrin_marquee.jpg' }
//     ],
//     video: {
//       videoId: 'q1GA71TeZik',
//       snippet: 'https://i.ytimg.com/vi/q1GA71TeZik/hqdefault.jpg',
//     },
//   })

//   const event4 = new Event({
//     title: 'Llegada del hombre a la luna',
//     year: 1969,
//     description: 'La humanidad da un pequeño gran paso',
//     images: ['https://www.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg'],
//     playlist: {
//       name: 'La Cabalgata De Las Valkirias - De La Opera "La Valkiria"',
//       url: 'https://p.scdn.co/mp3-preview/83bd529171d817ad274c0c13da19181092cdb7f8?cid=d37f1f747425408d87a3df7bfbf54045',
//       image: 'https://i.scdn.co/image/ab67616d0000b2739cb08a2f9804ac4103231eca'
//     },
//     location: { name: 'La luna', description: 'Un lugar especial' },
//     contacts: [
//       { photo: 'https://www.milenio.com/uploads/media/2019/07/19/neil-armstrong-murio-en-a_0_184_1041_648.jpg' },
//       { photo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Michael_Collins_%28S69-31742%2C_restoration%29_%28cropped%29.jpg' },
//       { photo: 'https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/buzz_aldrin_marquee.jpg' }
//     ],
//     video: {
//       videoId: 'q1GA71TeZik',
//       snippet: 'https://i.ytimg.com/vi/q1GA71TeZik/hqdefault.jpg',
//     },
//   })
// }

const HistoryMenu = () => {
    const [showForm, setShowForm] = useState(false)
    const [savedEvents, setSavedEvents] = useState([])
    
    useEffect(() => {
        window.scrollTo(0, 0)
        getEvents()
            .then(events => setSavedEvents(events))
    }, [])

    const items = [{
        title: 'May 1940',
        cardTitle: 'Dunkirk',
        cardSubtitle: `Barque black spot me Cat o'nine tails `,
        cardDetailedText: `Barque black spot me Cat o'nine tails Sink me aye barkadeer yardarm splice the main brace mizzen. Tack gunwalls pinnace mutiny lass holystone barque fire ship crimp lee. Fore rope's end gaff booty execution dock scallywag cog nipper keelhaul pirate.

        Jack Tar keelhaul bilged on her anchor Yellow Jack to go on account barque clipper capstan hearties aye. Blow the man down driver avast scuttle Sink me scuppers deadlights hempen halter boom Shiver me timbers. Scuppers pillage spirits parrel gangway wherry booty Pirate Round nipper furl.
        
        Lad hang the jib lugsail Chain Shot heave to cog broadside haul wind man-of-war brig. Interloper lass parley Sink me man-of-war lanyard tack landlubber or just lubber Letter of Marque reef. Black jack port deadlights gaff brigantine stern hearties fore topsail pinnace.`,
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://www.gettyimages.es/gi-resources/images/500px/983801190.jpg'
            }
        }
    }, {
        title: 'May 1940',
        cardTitle: 'Dunkirk',
        cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://www.gettyimages.es/gi-resources/images/frontdoor/editorial/Velo/GettyImages-Velo-1088643550.jpg'
            }
        }
    }, {
        title: 'May 1940',
        cardTitle: 'Dunkirk',
        cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            }
        }
    }, {
        title: 'May 1940',
        cardTitle: 'Dunkirk',
        cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg'
            }
        }
    },
    {
        title: 'May 1940',
        cardTitle: 'Dunkirk',
        cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG'
            }
        }
    },
    {
        title: 'May 1940',
        cardTitle: 'Dunkirk',
        cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://static.addtoany.com/images/dracaena-cinnabari.jpg'
            }
        }
    },]


    const handleShowMemoryForm = () => {
        setShowForm(true)
    }

    const handleCloseMemoryForm = () => {
        setShowForm(false)
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
                        createEvent={createEvent}
                        getEvents={getEvents}
                    />
                </div>
            )}

            <div className='ContainerHistoryTimeline'>
                <HistoryTimeline items={items} />
            </div>
        </div>

    )
}

export default HistoryMenu