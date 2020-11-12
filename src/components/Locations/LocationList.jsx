import React from 'react'
import LocationElement from './LocationElement'
import './LocationList.scss'

const LocationList = ({ markers, zoomToMarker, deleteMarker, onEdit, handleSearch, search }) => {

    return (
        <div>
            {markers.length ?
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
                : 'Añada sus localizaciones'
            }
        </div>
    )
}

export default LocationList