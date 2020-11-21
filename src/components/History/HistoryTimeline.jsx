import React, { useEffect, useState } from 'react'
import { Chrono } from 'react-chrono'

const HistoryTimeline = ({ savedEvents, setSelected }) => {
    const [eventsWithFormat, setEventsWithFormat] = useState([])

    useEffect(() => {
        const formatted = savedEvents.sort((a, b) => {
            return a.year - b.year
        }).map(event => {
                return {
                    title: event.year,
                    cardTitle: event.title,
                    cardSubtitle: <div>{event.description}<button onClick={() => setSelected(event)}>Detalle</button></div>,
                    media: {
                        type: "IMAGE",
                        source: {
                            url: event.image?.url
                        }
                    }
                }
            })
        setEventsWithFormat(formatted)
    }, [savedEvents.length])

    return (
        eventsWithFormat.length &&
        <Chrono
            items={eventsWithFormat}
            mode={'VERTICAL_ALTERNATING'}
            slideShow
            flipLayout={true}
            slideItemDuration={3000}
            scrollable={{ scrollbar: true }}
            theme={{ primary: '#839672', secondary: '#EFEFE1', cardBgColor: 'white', cardForeColor: 'black' }}
        />
    )
}

export default HistoryTimeline


