import React, { useCallback, useEffect, useRef, useState } from 'react'
import SearchMap from './SearchMap'
import LocationModal from './LocationModal'
import LocationList from './LocationList'
import LocationDetails from './LocationDetails'
import { createLocation, getLocations, deleteLocation, editLocation } from '../../services/Api'
import ComponentHeader from '../Generic/ComponentHeader'
import AlertSnackBar from '../Generic/AlertSnackBar'
import MapStyles from './MapStyles'
import './NudoMap.scss'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import '@reach/combobox/styles.css'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
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
    const [snackSavedOpen, setSnackSavedOpen] = useState(false)
    const [snackEditOpen, setSnackEditOpen] = useState(false)
    const [snackDeleteOpen, setSnackDeleteOpen] = useState(false)
    const [tempCoordenates, setTempCoordenates] = useState({})
    const [error, setError] = useState({})


    const openModal = () => setShowDialog(true)
    const closeModal = () => setShowDialog(false)
    const handleSavedSnack = () => setSnackSavedOpen(true)
    const handleEditSnack = () => setSnackEditOpen(true)
    const handleDeleteSnack = () => setSnackDeleteOpen(true)
    const handleCloseSavedSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackSavedOpen(false)
    }

    const handleCloseEditSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackEditOpen(false)
    }

    const handleCloseDeleteSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setSnackDeleteOpen(false)
    }

    useEffect(() => {
        getLocations()
            .then(locations => setMarkers(locations))
            .catch(err => console.log(err))
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

    const modalSent = (event) => {
        event.preventDefault()
        createLocation(tempCoordenates)
            .then(() => {
                getLocations()
                    .then(locations => setMarkers(locations))
                setTempCoordenates({})
                closeModal()
                handleSavedSnack()
                setError({})
            })
            .catch(err => setError(err.response.data.errors))
    }

    const editMarker = (marker) => {
        setTempCoordenates(marker)
        openModal()
    }

    const handleEditLocation = (event) => {
        event.preventDefault()
        const data = {}
        data.name = tempCoordenates.name
        data.description = tempCoordenates.description
        editLocation(tempCoordenates.id, data)
            .then(() => {
                getLocations()
                    .then(locations => setMarkers(locations))
                setTempCoordenates({})
                closeModal()
                handleEditSnack()
                setError({})
            })
            .catch(err => setError(err.response.data.errors))
    }

    const handleDeleteLocation = (id) => {
        handleDeleteSnack()
        deleteLocation(id)
            .then(locations => {
                getLocations()
                    .then(locations => setMarkers(locations))
            })
            .catch(err => console.log(err))
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
                        <LocationList
                            markers={markers}
                            zoomToMarker={zoomToMarker}
                            deleteMarker={handleDeleteLocation}
                            onEdit={editMarker}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-sm-12 d-lg-none '>
                        <h3 className='mt-4'>Mis Localizaciones:</h3>
                        <LocationList
                            markers={markers}
                            zoomToMarker={zoomToMarker}
                            deleteMarker={handleDeleteLocation}
                            onEdit={editMarker}
                        />
                    </div>
                </div>
            </div>


            <Dialog isOpen={showDialog} onDismiss={closeModal} className='NudoMapDialog'>
                <LocationModal
                    closeModal={closeModal}
                    modalSent={modalSent}
                    handleEditLocation={handleEditLocation}
                    handleChange={handleChange}
                    tempCoordenates={tempCoordenates}
                    error={error}
                />
            </Dialog>
            <Snackbar open={snackSavedOpen} autoHideDuration={4000} onClose={handleCloseSavedSnack}>
                <AlertSnackBar onClose={handleCloseSavedSnack} severity='success'>
                    Localización guardada correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackEditOpen} autoHideDuration={4000} onClose={handleCloseEditSnack}>
                <AlertSnackBar onClose={handleCloseEditSnack} severity='info'>
                    Localización editada correctamente!
                 </AlertSnackBar>
            </Snackbar>
            <Snackbar open={snackDeleteOpen} autoHideDuration={4000} onClose={handleCloseDeleteSnack}>
                <AlertSnackBar onClose={handleCloseDeleteSnack} severity='warning'>
                    Localización borrada correctamente!
                 </AlertSnackBar>
            </Snackbar>
        </div>
    )
}

export default NudoMap