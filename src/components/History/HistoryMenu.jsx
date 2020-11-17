import React from "react"
import { Chrono } from "react-chrono"

const HistoryMenu = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: <h3>Funciona</h3>,
        media: {
            type: "IMAGE",
            source: {
                url: "https://res.cloudinary.com/difhe4gl3/image/upload/v1604245115/NUDO/assets/Recurso_2_aheau7.svg"
            }
        }
    }, {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "https://res.cloudinary.com/difhe4gl3/image/upload/v1604245115/NUDO/assets/Recurso_2_aheau7.svg"
            }
        }
    }, {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "https://res.cloudinary.com/difhe4gl3/image/upload/v1604245115/NUDO/assets/Recurso_2_aheau7.svg"
            }
        }
    }, {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "https://res.cloudinary.com/difhe4gl3/image/upload/v1604245115/NUDO/assets/Recurso_2_aheau7.svg"
            }
        }
    }]

    return (
        <div style={{ width: "100%", height: "100%", paddingLeft: '20px' }}>
            <Chrono
                items={items}
                mode={ "VERTICAL_ALTERNATING"}
                slideshow
                slideItemDuration={1000}
                scrollable={{ scrollbar: true }}
            // theme={{ primary: "red", secondary: "blue", cardBgColor: "yellow", cardForeColor: "violet" }}
            />
        </div>
    )
}

export default HistoryMenu