import React from 'react'
import './StatisticsBoxNumber.scss'

const StatisticsBoxNumber = ({ selected, lastDays }) => {
    return (
        <div className='StatisticsBoxNumber'>
            {lastDays ?
                <><h5>Número de {selected.charAt(0).toUpperCase() + selected.slice(1)} en los últimos 7 días:</h5>
                <h1 className='statisticsRightH'>9</h1></> :
                <><h5>Número total de {selected.charAt(0).toUpperCase() + selected.slice(1)}:</h5>
                <h1 className='statisticsRightH'>45</h1></>
            }
        </div>
    )
}

export default StatisticsBoxNumber