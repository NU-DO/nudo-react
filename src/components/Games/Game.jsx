import React, { useEffect, useState } from "react";
import ComponentHeader from '../Generic/ComponentHeader'
import MemoryGame from "./MemoryGame";
import { getScores } from '../../services/Api'
import './Game.scss'

const Game = () => {

    const [options, setOptions] = useState(null)
    const [allScores, setAllScores] = useState(null)
    const [score, setScore] = useState(1000)
    const [highScore, setHighScore] = useState(0)
    const [level, setLevel] = useState(null)



    useEffect(() => {
        getScores()
            .then(scores => setAllScores(scores))
            .catch(e => console.log(e))


    }, [])

    // const lastScores = allScores.map(item => item.score)
    // const topScore = lastScores.sort((a, b) => a - b).reverse()[0]
    console.log(allScores)
    // let topScore
    // const bestScore = (allScores) => {
    //     const lastScores = arr.map(item => item.score)
    //     const maxScore = lastScores.sort((a, b) => a - b).reverse()[0]
    //     maxScore = topScore
    // }


    return (
        <div className='NudoMap'>
            <ComponentHeader
                title='Juegos'
                description='Bienvenido a Juegos. En esta sección puedes poner a prueba tu memoria. Puedes elegir el nivel que quieras y practicar tu memoria buscando parejas. ¡Intenta conseguir la mayor puntuación!'
                nudoIcon='https://res.cloudinary.com/difhe4gl3/image/upload/v1603296188/NUDO/assets/Dashboard-icons/Icon-Juegos_axxxkw.svg'
            />
            <div className='containerGeneralGame'>
                <div className="containerGame mt-3">
                    <div>

                        {/* <img src='https://res.cloudinary.com/difhe4gl3/image/upload/v1602165130/NUDO/assets/nudo-logo-header_m0ojwr.png' style={{ width: 200 }} /> */}
                    </div>
                    <div className='text-left'>Máxima Puntuación: {(highScore).toFixed(0)}</div>
                    <div className='text-left'>Puntuación: {(score).toFixed(0)}</div>
                    {level ? <div className='text-left'>Nivel : {level}</div> : null}
                    <div>
                        {options === null ? (
                            <>
                                <button className='gameButtons' onClick={() => {
                                    setOptions(12)
                                    setLevel('Fácil')
                                }}>Fácil</button>
                                <button className='gameButtons' onClick={() => {
                                    setOptions(18)
                                    setLevel('Medio')
                                }}>Medio</button>
                                <button className='gameButtons' onClick={() => {
                                    setOptions(24)
                                    setLevel('Dificil')
                                }}>Dificil</button>
                            </>
                        ) : (
                                <>
                                    <button className='gameButtons'
                                        onClick={() => {
                                            const prevOptions = options
                                            const prevLevel = level
                                            setOptions(null)
                                            setScore(1000)
                                            setTimeout(() => {
                                                setOptions(prevOptions)
                                            }, 5)
                                        }}
                                    >
                                        Empezar de nuevo
              </button>
                                    <button className='gameButtons' onClick={() => {
                                        setOptions(null)
                                        setLevel(null)
                                    }}>Menú principal</button>
                                </>
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
                        highScore={highScore}
                        setHighScore={setHighScore}
                    />
                ) : (
                        <h2>Elige una dificultad para empezar el juego</h2>
                    )}
            </div>

        </div>
    );
};

export default Game;


