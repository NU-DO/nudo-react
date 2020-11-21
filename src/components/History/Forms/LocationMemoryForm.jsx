import React, { useEffect, useState } from 'react'
import ContactSeacher from '../../Contacts/ContactSearcher'
import { getLocations } from '../../../services/Api'
import './LocationMemoryForm.scss'

const LocationMemoryForm = ({ stateForm, setStateForm }) => {
    const [myLocations, setMyLocations] = useState([])
    const [favLoaded, setFavLoaded] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [searchedLocations, setSearchedLocations] = useState([])
    const [search, setSearch] = useState({
        search: ''
    })

    useEffect(() => {
        getLocations()
            .then(locations => {
                setMyLocations(locations)
                setSearchedLocations(locations)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const match = myLocations.filter(location => location.name.toLowerCase().includes(search.search))
        setSearchedLocations(match)
    }, [search])

    const handleSearchLocation = (e) => {
        setSearch({ search: e.target.value.toLowerCase() })
    }

    const handleSelectLocation = (location) => {
        setStateForm(prev => {
            return {
                ...prev,
                location: location
            }
        })
        setFavLoaded(true)
    }

    return (
        <div className='MemoryLocationsContainer'>
            <div>
                <h5 className='py-3'>Elige una localización:</h5>
                <ContactSeacher handleSearch={handleSearchLocation} search={search} placeholder='Busca una Localización' />
                <div className='MyLocationsContainer'>
                    {loaded && searchedLocations.map((location, index) => {
                        return (
                            <div className='MemoryLocationsCard' key={index} onClick={() => handleSelectLocation(location)}>
                                <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603541727/NUDO/assets/Dashboard-icons/Icon-Marker-Map_ghhptr.png' />
                                <p>{location.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='MyLocationsContainer'>
                <div>
                    <h5 className='py-3'>Localización seleccionada:</h5>
                    {favLoaded && (
                        <div className='MemorySelectedLocations'>
                                <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1603541727/NUDO/assets/Dashboard-icons/Icon-Marker-Map_ghhptr.png' />
                                <p>{stateForm.location.name}</p>
                            </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default LocationMemoryForm