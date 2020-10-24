import React from 'react'
import LocationElement from './LocationElement'
import './LocationList.scss'

const LocationList = ({ markers, zoomToMarker }) => {
    return (
        <div className='LocationList'>
            <ul>
                {markers.length ? markers.map((marker, i) => (
                    <LocationElement marker={marker} zoomToMarker={zoomToMarker} i={i}/>
                )) : null}  
            </ul>
        </div>
    )
}

export default LocationList