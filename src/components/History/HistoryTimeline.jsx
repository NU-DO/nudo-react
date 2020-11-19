import React from 'react'
import { Chrono } from 'react-chrono'

const HistoryTimeline = ( {items} ) => {
    return (
        <Chrono
            items={items}
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


