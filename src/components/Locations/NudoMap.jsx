import React, { useCallback, useEffect, useRef, useState } from 'react'
import SearchMap from './SearchMap'
import LocationModal from './LocationModal'
import LocationList from './LocationList'
import LocationDetails from './LocationDetails'
import Locate from './Locate'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import '@reach/combobox/styles.css'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import VisuallyHidden from '@reach/visually-hidden'
import { createLocation, getLocations } from '../../services/Api'
import MapStyles from './MapStyles'
import './NudoMap.scss'

const mapContainerStyle = {
    width: '90vw',
    height: '50vh',
}
const center = {
    lat: 40.463667,
    lng: -3.74922,
}
const options = {
    styles: MapStyles,
    disableDefaultUI: false,
    zoomControl: true,
}

const libraries = ['places']

const NudoMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        libraries: libraries,
    })
    const [markers, setMarkers] = useState([])
    const [selected, setSelected] = useState(null)
    const [showDialog, setShowDialog] = useState(false)
    const [tempCoordenates, setTempCoordenates] = useState({
        lat: '',
        lng: '',
        name: '',
        description: '',
    })

    const openModal = () => setShowDialog(true)
    const closeModal = () => setShowDialog(false)

    useEffect(() => {
        getLocations()
            .then(locations => setMarkers(locations))
    }, [])

    const onMapClick = useCallback((event) => {
        setTempCoordenates(
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                name: '',
                description: ''
            }
        )
        openModal()

    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setTempCoordenates(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const modalSent = (event) => {
        event.preventDefault()
        setMarkers(current => [
            ...current,
            {
                lat: tempCoordenates.lat,
                lng: tempCoordenates.lng,
                name: tempCoordenates.name,
                description: tempCoordenates.description,
            }
        ])
        createLocation(tempCoordenates)
        setTempCoordenates({})
        closeModal()
    }

    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng })
        mapRef.current.setZoom(18)
    }, [])

    const zoomToMarker = (lat, lng) => {
        mapRef.current.panTo({ lat, lng })
        mapRef.current.setZoom(14)   
    }

    if (loadError) return 'Error loading Google Maps'
    if (!isLoaded) return 'Loading Google Maps'

    return (
            <div className='NudoMap'>
                <h1>🧠 NUDO Map 🧠</h1>
                <SearchMap panTo={panTo} />
                <Locate panTo={panTo} />
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={6}
                    center={center}
                    options={options}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                    {!markers.length ? 
                    <div>Loading</div> :
                    markers.map((marker, i) =>
                        <Marker
                            key={i}
                            position={{
                                lat: marker.lat, lng: marker.lng
                            }}
                            icon={{
                              url: 'https://res.cloudinary.com/difhe4gl3/image/upload/v1603541727/NUDO/assets/Dashboard-icons/Icon-Marker-Map_ghhptr.png',
                              scaledSize: new window.google.maps.Size(30,40),
                              origin: new window.google.maps.Point(0, 0),
                              anchor: new window.google.maps.Point(15, 15),
                            }}
                            onClick={() => {
                                setSelected(marker)
                            }}
                        />)}

                    {selected ? <LocationDetails selected={selected} setSelected={setSelected} closeModal={closeModal} /> : null}
                </GoogleMap>
                <LocationList markers={markers} zoomToMarker={zoomToMarker} />
                <Dialog isOpen={showDialog} onDismiss={closeModal} className='NudoMapDialog'>
                    <LocationModal  
                        closeModal={closeModal} 
                        modalSent={modalSent} 
                        handleChange={handleChange}
                    />
                </Dialog>
            </div>
    )
}

export default NudoMap