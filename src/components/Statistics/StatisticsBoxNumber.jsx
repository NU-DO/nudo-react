import React from 'react'
import './StatisticsBoxNumber.scss'

const StatisticsBoxNumber = ({ selected, lastDays, selectedInfo , totalLength}) => {
    return (
        <div className='StatisticsBoxNumber'>
            {selected === 'total' ?
                (lastDays ?
                    <><h5>Total en los últimos 7 días:</h5>
                    <h1 className='statisticsRightH'>X</h1></> :
                    <><h5>Total:</h5>
                    <h1 className='statisticsRightH'>{totalLength}</h1></>
                ) :
                (lastDays ?
                    <><h5>Número de {selected.charAt(0).toUpperCase() + selected.slice(1)} en los últimos 7 días:</h5>
                    <h1 className='statisticsRightH'>X</h1></> :
                    <><h5>Número total de {selected.charAt(0).toUpperCase() + selected.slice(1)}:</h5>
                    <h1 className='statisticsRightH'>{selectedInfo.length}</h1></>
                )
            }
        </div>
    )
}

export default StatisticsBoxNumber