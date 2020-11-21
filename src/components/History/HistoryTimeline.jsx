import React, { useEffect, useState } from 'react'
import { Chrono } from 'react-chrono'

const HistoryTimeline = ({ savedEvents }) => {
    const [eventsWithFormat, setEventsWithFormat] = useState([])

    useEffect(() => {
        const formatted = savedEvents.sort((a, b) => {
            return a.year - b.year
        }).map(event => {
                return {
                    title: event.year,
                    cardTitle: event.title,
                    cardSubtitle: event.description,
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

    useEffect(() => {
        console.log(eventsWithFormat);
    }, [eventsWithFormat])

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


