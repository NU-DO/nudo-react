import React, { useCallback, useEffect, useRef, useState } from 'react'
import SearchMap from './SearchMap'
import LocationModal from './LocationModal'
import LocationList from './LocationList'
import LocationDetails from './LocationDetails'
import ComponentHeader from '../Generic/ComponentHeader'
import AlertSnackBar from '../Generic/AlertSnackBar'
import MapStyles from './MapStyles'
import './NudoMap.scss'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import '@reach/combobox/styles.css'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { createLocation, getLocations } from '../../services/Api'

import { Snackbar } from '@material-ui/core'

const mapContainerStyle = {
    width: '100%',
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
    const [snackOpen, setSnackOpen] = useState(false);
    const [tempCoordenates, setTempCoordenates] = useState({
        lat: '',
        lng: '',
        name: '',
        description: '',
    })


    const openModal = () => setShowDialog(true)
    const closeModal = () => setShowDialog(false)
    const handleSnack = () => setSnackOpen(true);
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackOpen(false);
      };
      

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
        handleSnack()
        createLocation(tempCoordenates)
        setTimeout(() =>setTempCoordenates({}), 3000) 
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
            <ComponentHeader
                title='Localizaciones'
                description='Bienvenido a Localizaciones. En esta sección puedes guardar tus localizaciones. Clickando en el mapa generas un marcador para guardar un lugar que quieras mantener en tu recuerdo.'
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Localizaciones_oyhg3m.svg'
            />
            <div className='container ContainerMap'>
                <div className='row'>
                    <div className='col col-lg-8 col-sm-12 RoundedMap'>
                        <div className='SearchMap'>
                            <SearchMap panTo={panTo} />
                        </div>
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
                                            scaledSize: new window.google.maps.Size(30, 40),
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(15, 15),
                                        }}
                                        onClick={() => {
                                            setSelected(marker)
                                        }}
                                    />)}

                            {selected ? <LocationDetails selected={selected} setSelected={setSelected} closeModal={closeModal} /> : null}
                        </GoogleMap>
                    </div>
                    <div className='col col-lg-4 d-none d-lg-block'>
                        <h3>Mis Localizaciones:</h3>
                        <LocationList markers={markers} zoomToMarker={zoomToMarker} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-sm-12 d-lg-none '>
                        <h3 className='mt-4'>Mis Localizaciones:</h3>
                        <LocationList markers={markers} zoomToMarker={zoomToMarker} />
                    </div>
                </div>
            </div>


            <Dialog isOpen={showDialog} onDismiss={closeModal} className='NudoMapDialog'>
                <LocationModal
                    closeModal={closeModal}
                    modalSent={modalSent}
                    handleChange={handleChange}
                />
            </Dialog>
            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleCloseSnack}>
                <AlertSnackBar onClose={handleCloseSnack} severity="success">
                    {tempCoordenates.name} guardada correctamente!
        </AlertSnackBar>
            </Snackbar>
        </div>
    )
}

export default NudoMap