import React, { useState, useEffect } from 'react'
import HistoryTimeline from './HistoryTimeline'
import GeneralMemoryForm from './Forms/GeneralMemoryForm'
import ComponentHeader from '../Generic/ComponentHeader'
import { getEvents, createEvent, deleteEvent, editEvent } from '../../services/Api'
import './HistoryMenu.scss'

const HistoryMenu = () => {
    const [showForm, setShowForm] = useState(false)
    
    useEffect(() => {
        getEvents()
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
                    <GeneralMemoryForm />
                </div>

            )}

            <div className='ContainerHistoryTimeline'>
                <HistoryTimeline items={items} />
            </div>
        </div>

    )
}

export default HistoryMenu