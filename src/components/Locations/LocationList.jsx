import React from 'react'
import LocationElement from './LocationElement'
import './LocationList.scss'

const LocationList = ({ markers, zoomToMarker, deleteMarker, onEdit }) => {
    return (
        <div className='LocationList'>
            <ul>
                {markers.length ? markers.map((marker, i) => (
                    <LocationElement 
                    marker={marker} 
                    zoomToMarker={zoomToMarker}  
                    deleteMarker={deleteMarker} 
                    i={i}
                    onEdit={onEdit}
                    key={i}
                    />
                )) : null}  
            </ul>
        </div>
    )
}

export default LocationList