import React from 'react'
import LocationElement from './LocationElement'
import './LocationList.scss'

const LocationList = ({ markers, zoomToMarker, deleteMarker }) => {
    return (
        <div className='LocationList'>
            <ul>
                {markers.length ? markers.map((marker, i) => (
                    <LocationElement 
                    marker={marker} 
                    zoomToMarker={zoomToMarker}  
                    deleteMarker={deleteMarker} 
                    i={i}
                    />
                )) : null}  
            </ul>
        </div>
    )
}

export default LocationList