import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import MapStyles from './MapStyles'
import '@reach/combobox/styles.css'
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden"
import Locate from './Locate'
import SearchMap from './SearchMap'

const mapContainerStyle = {
  width: '50vw',
  height: '50vh'
}
const center = {
  lat: 43.653225,
  lng: -79.383186,
}
const options = {
  styles: MapStyles,
  disableDefaultUI: false,
  zoomControl: true,
}

const NudoMap = () =>  {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)
  const [showDialog, setShowDialog] = useState(false);
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);


 

  const onMapClick = useCallback((event) => {
    openModal()
    setMarkers(current => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
        
      }
    ])
  }, [])

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(14)
  }, [])

  if (loadError) return "Error loading Google Maps"
  if (!isLoaded) return "Loading Google Maps"

  return (
    <div className="App">
      <h1>🧠 NUDO Map 🧠</h1>
      <SearchMap panTo={panTo} />
      <Locate panTo={panTo}/>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker =>
          <Marker
            key={marker.time.toISOString()}
            position={{
              lat: marker.lat, lng: marker.lng
            }}
            // icon={{
            //   url: '/icon',
            //   scaledSize: new window.google.maps.Size(30,30),
            //   origin: new window.google.maps.Point(0, 0),
            //   anchor: new window.google.maps.Point(15, 15),
            // }}
            onClick={() => {
              setSelected(marker)
            }}
          />)}

        {selected ? (<InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => { setSelected(null) }}>
          <div>
            <h2>Location Stored</h2>
            <p>Stored {formatRelative(selected.time, new Date())}</p>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
      <ul>
      {console.log(markers)}
      {markers ? markers.map((pin, i) => {
        return( <li key={i}> lat: {pin.lat} || lng: {pin.lng}</li>)
      }) : null}
      </ul>
      <Dialog isOpen={showDialog} onDismiss={closeModal}>
        <button className="close-button" onClick={closeModal}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Form to edit marker</p>
        {/* <ComboboxInput
        value={'name'}
          onChange={(e) => {
            setMarkers({ name : e.target.value})
          }}
          placeHolder='Escribe un nombre de localización'
        /> */}
      </Dialog>
    </div>
  );
}

export default NudoMap