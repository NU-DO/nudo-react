import React, { useEffect, useState } from 'react'
import MemoryGame from './MemoryGame'
import ComponentHeader from '../Generic/ComponentHeader'
import GenericButton from '../Generic/GenericButton'
import Spinner from '../Generic/Spinner'
import { getScores, newScore } from '../../services/Api'
import './Game.scss'

const Game = () => {
    const [options, setOptions] = useState(null)
    const [score, setScore] = useState(1000)
    const [highScore, setHighScore] = useState(0)
    const [level, setLevel] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        getScores()
            .then(scores => {
                const orderedScores = scores.sort((a, b) => b.score - a.score)
                setHighScore(orderedScores[0].score)
            })
            .catch(e => console.log(e))
        setLoaded(true)
    }, [])

    const sendScore = (lastScore, selectedLevel) => {
        const data = {}
        data.score = lastScore
        data.level = selectedLevel
        newScore(data)
    }

    return (
        <div className='NudoMap'>
            {loaded ?
                <>
                    <ComponentHeader
                        title='Juegos'
                        description='Bienvenido a Juegos. En esta sección puedes poner a prueba tu memoria. Puedes elegir el nivel que quieras y practicar tu memoria buscando parejas. ¡Intenta conseguir la mayor puntuación!'
                        nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Juegos_axxxkw.svg'
                    />
                    <div className='containerGeneralGame'>
                        <div className='containerGame mt-3'>
                            <div className='text-left'>Max Score: {(highScore).toFixed(0)}</div>
                            {level ? <div className='text-left'>Score: {(score).toFixed(0)}</div> : null}
                            {level ? <div className='text-left'>Nivel : {level}</div> : null}
                            <div>
                                {options === null ? (
                                    <div className='ContainerLevelButtons'>
                                        <GenericButton
                                            text='Fácil'
                                            onClick={() => {
                                                setOptions(12)
                                                setLevel('Fácil')
                                            }} />
                                        <GenericButton
                                            text='Medio'
                                            onClick={() => {
                                                setOptions(18)
                                                setLevel('Medio')
                                            }} />
                                        <GenericButton
                                            text='Dificil'
                                            onClick={() => {
                                                setOptions(24)
                                                setLevel('Dificil')
                                            }} />
                                    </div>
                                ) : (
                                        <div className='ContainerLevelButtons'>
                                            <GenericButton
                                                text='Reiniciar'
                                                onClick={() => {
                                                    const prevOptions = options
                                                    setOptions(null)
                                                    setScore(1000)
                                                    setTimeout(() => {
                                                        setOptions(prevOptions)
                                                    }, 5)
                                                }}
                                            />
                                            <GenericButton
                                                text='Menú principal'
                                                onClick={() => {
                                                    setOptions(null)
                                                    setLevel(null)
                                                }} />
                                        </div>
                                    )}
                            </div>
                        </div>

                        {options ? (
                            <MemoryGame
                                options={options}
                                setOptions={setOptions}
                                score={score}
                                setScore={setScore}
                                level={level}
                                setLevel={setLevel}
                                highScore={highScore}
                                setHighScore={setHighScore}
                                sendScore={sendScore}
                            />
                        ) : (
                                <h2>Elige una dificultad para empezar el juego</h2>
                            )}
                    </div>
                </> :
                <Spinner />
            }
        </div>
    )
}

export default Game