import React, {useState} from 'react'
import ComponentHeader from '../Generic/ComponentHeader'
import StatisticsFavFilter from './StatisticsFavFilter'
import StatisticsBoxNumber from './StatisticsBoxNumber'
import './StatisticsMenu.scss'

const StatisticsMenu = ({ setDecade }) => {
    const [selected, setSelected] = useState('total')
    const [selectedInfo, setSelectedInfo] = useState([])

    const setFocus = (category) => {
        setSelected(category)
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
            <div className='StatisticsBoxNumberDiv'>
                <StatisticsBoxNumber 
                    selected={selected}
                />
                <StatisticsBoxNumber 
                    selected={selected}
                    lastDays={true}
                />
            </div>
        </div>
    )
}

export default StatisticsMenu