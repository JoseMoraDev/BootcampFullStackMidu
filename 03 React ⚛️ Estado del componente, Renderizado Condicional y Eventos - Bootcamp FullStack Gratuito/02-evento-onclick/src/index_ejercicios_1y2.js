/*
    ejercicios 1 y 2
    - Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).
    - La aplicación debe mostrar el número total de comentarios recopilados para cada categoría.
    - Amplía tu aplicación para que muestre más estadísticas sobre los comentarios recopilados: el número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.
*/
import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

const INITIAL_STATE = {
    good : 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
}

const App = () => {

    const [good, setGood] = useState(INITIAL_STATE.good)
    const handleGood = () => {
        const newGood = good + 1
        setGood(newGood)
        handleStatistics(newGood, neutral, bad)
    }
    const [neutral, setNeutral] = useState(INITIAL_STATE.neutral)
    const handleNeutral = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
        handleStatistics(good, newNeutral, bad)
    }
    const [bad, setBad] = useState(INITIAL_STATE.bad)
    const handleBad = () => {
        const newBad = bad + 1
        setBad(newBad)
        handleStatistics(good, neutral, newBad)
    }
    const [all, setAll] = useState(INITIAL_STATE.all)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)
    const handleStatistics = (newGood, newNeutral, newBad) => {
        const newAll = all + 1
        setAll(newAll)
        const newAverage = (newGood - newBad)/(newAll)
        setAverage(newAverage)
        const newPositive = newGood * 100 / newAll
        setPositive(newPositive)
    }


    return (
        <div>
            <h1>give feedback</h1>
                <button onClick={handleGood}>good</button>
                <button onClick={handleNeutral}>neutral</button>
                <button onClick={handleBad}>bad</button>
            <h2>statistics</h2>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {all}</p>
                <p>average {average}</p>
                <p>positive {positive} %</p>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)