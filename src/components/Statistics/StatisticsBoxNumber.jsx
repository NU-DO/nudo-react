import React, { useState, useEffect } from 'react'
import './StatisticsBoxNumber.scss'

const StatisticsBoxNumber = ({ selected, lastDays, selectedInfo }) => {
    const [totalLength, setTotalLength] = useState(0)

    useEffect(() => {
        if (selected === 'total') {
            console.log(selectedInfo);
            const allElementsLength = selectedInfo.images?.length + selectedInfo.songs?.length + selectedInfo.locations?.length + selectedInfo.contacts?.length + selectedInfo.gameScores?.length
            setTotalLength(allElementsLength)
        }
    }, [selectedInfo])

    return (
        <div className='StatisticsBoxNumber'>
            {selected === 'total' ?
                (lastDays ?
                    <><h5>Total en los últimos 7 días:</h5>
                    <h1 className='statisticsRightH'>Hacer</h1></> :
                    <><h5>Total:</h5>
                    <h1 className='statisticsRightH'>{totalLength}</h1></>
                ) :
                (lastDays ?
                    <><h5>Número de {selected.charAt(0).toUpperCase() + selected.slice(1)} en los últimos 7 días:</h5>
                    <h1 className='statisticsRightH'>{selectedInfo.length}</h1></> :
                    <><h5>Número total de {selected.charAt(0).toUpperCase() + selected.slice(1)}:</h5>
                    <h1 className='statisticsRightH'>{selectedInfo.length}</h1></>
                )
            }
        </div>
    )
}

export default StatisticsBoxNumber