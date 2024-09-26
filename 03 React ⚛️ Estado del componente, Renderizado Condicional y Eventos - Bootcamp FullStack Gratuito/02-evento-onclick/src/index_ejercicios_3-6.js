/*
    ejercicio 3
    --> Refactoriza tu aplicación para que la visualización de las estadísticas se extraiga en su propio componente Statistics. El estado de la aplicación debe permanecer en el componente raíz App.

    ejercicio 4
    --> Cambia tu aplicación para mostrar estadísticas solo una vez que se hayan recopilado los votos.

    ejercicio 5
    --> Extrae los siguiente dos componentes:
        --> Button para definir los botones utilizados para enviar comentarios
        --> StatisticLine para mostrar una única estadística, por ejemplo, la puntuación media.
    
    ejercicio 6
    --> Muestra las estadísticas en una tabla HTML

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

const StatisticLine = ({text, value, unit}) => {
    return (
            <tr>
                <td>{text}</td>
                <td> {value}{unit}</td>
            </tr>
    )
    
}

const Button = ({funcName, showText}) => {
    return <button onClick={funcName}>{showText}</button>
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    if (all === 0){
        return( 
            <>
                <p>No habrá feedback hasta el primer click</p>
            </>
            )
    }
    return(
        <div>
            <table style={{width:"20%"}}>
                <StatisticLine text="good" value ={good} />
                <StatisticLine text="neutral" value ={neutral} />
                <StatisticLine text="bad" value ={bad} />
                <StatisticLine text="all" value ={all} />
                <StatisticLine text="average" value ={average} />
                <StatisticLine text="positive" value ={positive} unit="%" />
            </table>
        </div>
    )
}

const App = () => {


    const [good, setGood] = useState(INITIAL_STATE.good)
    const [neutral, setNeutral] = useState(INITIAL_STATE.neutral)
    const [bad, setBad] = useState(INITIAL_STATE.bad)
    const all = good + neutral + bad
    const average = all === 0 ? 0 : (good - bad) / all
    const positive = all === 0 ? 0 : (good * 100) / all

    const handleGood = () => setGood(good +1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)


    return (
        <div>
            <h1>give feedback</h1>
            <Button funcName={handleGood} showText="good" />
            <Button funcName={handleNeutral} showText="neutral" />
            <Button funcName={handleBad} showText="bad" />
            <h2>statistics</h2>
            <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
                average={average}
                positive={positive}
            />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)