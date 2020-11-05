import React from 'react'
import { InfoWindow } from '@react-google-maps/api'

const LocationDetails = ({ selected, setSelected, closeModal }) => {
    
    return (
        <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => { setSelected(null) }}>
            <div>
                <h2>{selected.name}</h2>
                <p>{selected.description}</p>
            </div>
        </InfoWindow>
    )
}

export default LocationDetails