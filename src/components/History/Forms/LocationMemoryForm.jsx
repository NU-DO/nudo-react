import React, { useEffect, useState } from 'react'
import { getLocations } from '../../../services/Api'
import './LocationMemoryForm.scss'

const LocationMemoryForm = ({ stateForm, setStateForm }) => {
    
    const [myLocations, setMyLocations] = useState([])
    const [selected, setSelected] = useState()
    const [favLoaded, setFavLoaded] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getLocations()
            .then(locations => {
                console.log(locations)
                setMyLocations(locations)
                setLoaded(true)
            })
            .catch(err => console.log(err))

    }, [])

    const handleSelectLocation = (location) => {
        console.log('entra')
        // setStateForm(prev => {
        //     return {
        //         ...prev,
        //         image: image.url
        //     }
        // })
        setFavLoaded(true)
        console.log(stateForm)
    }


    
    
    return (
        <div className='MemoryLocationsContainer'>
        <div>
            <h5 className='py-3'>Elige una localización:</h5>
            <div className='MyLocationsContainer'>
                {loaded && myLocations.map((location, index) => {
                    return (
                        <div className='MemoryLocationsCard' key={index} onClick={() => handleSelectLocation(location)}>
                            <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603541727/NUDO/assets/Dashboard-icons/Icon-Marker-Map_ghhptr.png' />
                            <p>{location.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='MemorySelectedImage'>
            <div>
                <h5 className='py-3'>Localización seleccionada:</h5>
                {favLoaded && (
                    <div className='PortraitSelectedImage'>
                        <img src={stateForm.location} />
                    </div>
                )}

            </div>
        </div>


    </div>
    )
}

export default LocationMemoryForm