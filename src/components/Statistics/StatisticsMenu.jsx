import React, {useState, useEffect} from 'react'
import ComponentHeader from '../Generic/ComponentHeader'
import StatisticsFavFilter from './StatisticsFavFilter'
import StatisticsBoxNumber from './StatisticsBoxNumber'
import StatisticsGraphic from './StatisticsGraphic'
import { getSongs, getLocations, getImages, getContacts, getScores } from '../../services/Api'
import './StatisticsMenu.scss'

const StatisticsMenu = ({ setDecade }) => {
    const [total, setTotal] = useState({})
    const [selected, setSelected] = useState()
    const [selectedInfo, setSelectedInfo] = useState([])
    const [totalLength, setTotalLength] = useState(0)

    useEffect(() => {
        getSongs()
            .then(songs => {
                setTotal(prev => {
                    return {
                        ...prev,
                        songs: songs
                    }
                })
            })
            .then(() => {
                getLocations()
                    .then(locations => {
                        setTotal(prev => {
                            return {
                                ...prev,
                                locations: locations
                            }
                        })
                    })
            })
            .then(() => {
                getImages()
                    .then(images => {
                        setTotal(prev => {
                            return {
                                ...prev,
                                images: images
                            }
                        })
                    })
            })
            .then(() => {
                getContacts()
                    .then(contacts => {
                        setTotal(prev => {
                            return {
                                ...prev,
                                contacts: contacts
                            }
                        })
                    })
            })
            .then(() => {
                getScores()
                    .then(gameScores => {
                        setTotal(prev => {
                            return {
                                ...prev,
                                gameScores: gameScores
                            }
                        })
                    })
            })
            .then(() => setSelectedInfo(total))
            .then(() => setSelected('total'))
        //Falta eventos
    }, [])

    useEffect(() => {
        const allElementsLength = total.images?.length + total.songs?.length + total.locations?.length + total.contacts?.length + total.gameScores?.length
        setTotalLength(allElementsLength)
    }, [total])

    const setFocus = (category) => {
        setSelected(category)
        switch (category) {
            case 'total':
                setSelectedInfo(total)
                break;
            case 'imagenes':
                setSelectedInfo(total.images)
                break;
            case 'canciones':
                setSelectedInfo(total.songs)
                break;
            case 'lugares':
                setSelectedInfo(total.locations)
                break;
            case 'contactos':
                setSelectedInfo(total.contacts)
                break;
            case 'eventos':
                setSelectedInfo(total.events)
                break;
            case 'partidas':
                setSelectedInfo(total.gameScores)
                break;
        }
    }

    return (
        <div className='NudoMap StatisticsMenu'>
            <ComponentHeader
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296190/NUDO/assets/Dashboard-icons/Icon-login_cuaa4a.svg'
                title='Estadísticas'
                description='¿Qué apartado de Nudo has utilizado más?. Aquí podrás comporbar tu actividad.'
            />
            <StatisticsFavFilter 
                setFocus={setFocus}
            />
            {totalLength ? 
                <div>
                    <div className='statisticsBoxNumberDiv'>
                        <StatisticsBoxNumber 
                            selected={selected}
                            selectedInfo={selectedInfo}
                            totalLength={totalLength}
                        />
                        <StatisticsBoxNumber 
                            selected={selected}
                            selectedInfo={selectedInfo}
                            lastDays={true}
                        />
                    </div>
                    <StatisticsGraphic />
                </div>
                
                : <div>Campo sin información</div>
            }
        </div>
    )
}

export default StatisticsMenu