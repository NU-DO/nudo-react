import React, { useState, useEffect } from 'react'
import ComponentHeader from '../Generic/ComponentHeader'
import StatisticsFavFilter from './StatisticsFavFilter'
import StatisticsBoxNumber from './StatisticsBoxNumber'
import StatisticsGraphic from './StatisticsGraphic'
import StatisticsGameGraphic from './StatisticsGameGraphic'
import Spinner from '../Generic/Spinner'
import { getSongs, getLocations, getImages, getContacts, getScores } from '../../services/Api'
import './StatisticsMenu.scss'

const StatisticsMenu = () => {
    const [total, setTotal] = useState({})
    const [selected, setSelected] = useState()
    const [selectedInfo, setSelectedInfo] = useState([])
    const [totalLength, setTotalLength] = useState(0)
    const [totalsArray, setTotalsArray] = useState()
    const [gamesArray, setGameArray] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const arrayTotals = [0, 0, 0, 0, 0, 0]
        getImages()
            .then(images => {
                setTotal(prev => {
                    return {
                        ...prev,
                        images: images
                    }
                })
                arrayTotals[0] = images.length
            })
            .then(() => {
                getSongs()
                    .then(songs => {
                        setTotal(prev => {
                            return {
                                ...prev,
                                songs: songs
                            }
                        })
                        arrayTotals[1] = songs.length
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
                        arrayTotals[2] = locations.length
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
                        arrayTotals[3] = contacts.length
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
                        const gameScoresArray = []
                        gameScores.forEach(score => gameScoresArray.push([score.createdAt, score.score]))
                        setGameArray(gameScoresArray)
                        arrayTotals[5] = gameScores.length
                    })
            })
            .then(() => setSelectedInfo(total))
            .then(() => setSelected('total'))
            .then(() => setTotalsArray(arrayTotals))
            .then(() => setLoaded(true))
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
            default:
        }
    }

    return (
        <div className='NudoMap StatisticsMenu'>
            {loaded ?
                <>
                    <ComponentHeader
                        nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1604479126/NUDO/assets/Dashboard-icons/Recurso_14_n3acgw.svg'
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
                            {selected !== 'partidas' ?
                                <StatisticsGraphic
                                    totalsArray={totalsArray}
                                /> :
                                <StatisticsGameGraphic
                                    gamesArray={gamesArray}
                                />
                            }
                        </div>

                        : <div>Campo sin información</div>
                    }
                </> :
                <Spinner />
            }
        </div>
    )
}

export default StatisticsMenu