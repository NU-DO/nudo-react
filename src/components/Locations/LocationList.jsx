import React from 'react'
import LocationElement from './LocationElement'
import LocationSearcher from './LocationSearcher'
import './LocationList.scss'

const LocationList = ({ searchedMarkers, zoomToMarker, deleteMarker, onEdit, handleSearch, search }) => {

    return (
        <div>
            <LocationSearcher handleSearch={handleSearch} search={search} />
            {searchedMarkers.length ?
                <div className='LocationList'>
                    <ul>
                        {searchedMarkers.length ? searchedMarkers.map((marker, i) => (
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