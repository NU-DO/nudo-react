import React, { useState, useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './Game.scss'

const Card = ({
    id,
    color,
    game,
    score,
    setScore,
    flippedCount,
    setFlippedCount,
    flippedIndexes,
    setFlippedIndexes,
}) => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    useEffect(() => {
        if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
            setTimeout(() => {
                set(state => !state)
                setFlippedCount(flippedCount + 1)
                setScore(prev => {
                    if (prev > 0) {
                        return prev -15
                    } else {
                        return prev = 0
                    }})
                setFlippedIndexes([])
            }, 1000)
        } else if (flippedIndexes[2] === false && id === 0) {
            setFlippedCount(flippedCount + 1)
            setFlippedIndexes([])
            setScore(prev => prev + 50)
        }
    }, [flippedIndexes])

    const onCardClick = () => {
        if (!game[id].flipped && flippedCount % 3 === 0) {
            set(state => !state)
            setFlippedCount(flippedCount + 1)
            const newIndexes = [...flippedIndexes]
            newIndexes.push(id)
            setFlippedIndexes(newIndexes)
        } else if (
            flippedCount % 3 === 1 &&
            !game[id].flipped &&
            flippedIndexes.indexOf(id) < 0
        ) {
            set(state => !state)
            setFlippedCount(flippedCount + 1)
            const newIndexes = [...flippedIndexes]
            newIndexes.push(id)
            setFlippedIndexes(newIndexes)
        }
    }

    return (
        <div onClick={onCardClick}>
            <a.div
                className='c back'
                style={{
                    opacity: opacity.interpolate(o => 1 - o),
                    transform,
                }}
            />
            <a.div
                className='c front'
                style={{
                    opacity,
                    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                    background: color,
                }}
            />
        </div>
    )
}

export default Card