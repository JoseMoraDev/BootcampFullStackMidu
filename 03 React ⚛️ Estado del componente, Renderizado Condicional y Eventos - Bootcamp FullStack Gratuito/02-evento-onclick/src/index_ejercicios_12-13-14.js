/*
    Ejercicio 1*12
        Expande la siguiente aplicación agregando un botón en el que se pueda hacer clic para mostrar una anécdota aleatoria del campo de la ingeniería de software
    
    1.13*: anecdotes, paso 2
        - Expande tu aplicación para que puedas votar por la anécdota mostrada.
        - Almacena los votos de cada anécdota en un array u objeto en el estado del componente.
        - La forma correcta de actualizar el estado almacenado en estructuras de datos complejas como objetos y arrays es hacer una copia del estado.

    1.14*: anecdotes, paso 3
        muestra la anécdota con el mayor número de votos
*/
import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {

    const anecdotes = [
        '1) Si duele, hazlo más a menudo',
        '2) ¡Agregar mano de obra a un proyecto de software tardío lo hace más tarde!',
        '3) El primer 90 por ciento del código representa el primer 10 por ciento del tiempo de desarrollo... El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo.',
        '4) Cualquier tonto puede escribir un código que una computadora puede entender. Los buenos programadores escriben código que los humanos pueden entender.',
        '5) La optimización prematura es la raíz de todos los males.',
        '6) La depuración es dos veces más difícil que escribir el código en primer lugar. Por lo tanto, si escribes el código de la manera más inteligente posible, no eres, por definición, lo suficientemente inteligente como para depurarlo.',
        '7) Programar sin un uso extremadamente intensivo de console.log es lo mismo que si un médico se negara a usar rayos X o análisis de sangre al diagnosticar pacientes.',
        '8) La única manera de ir rápido es ir bien'
    ]

    const Button = ({handleFunction, buttonText}) => {
        return <button onClick={handleFunction}>{buttonText}</button>
    }

    const [random, setRandom] = useState(Math.floor(Math.random()*anecdotes.length))

    const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

    const nextAnectode = () => {
        const newRandom = Math.floor(Math.random()*anecdotes.length)
        setRandom(newRandom)
    }

    const voteAnectode = () => {  
        const votesCopy = [...vote]
        votesCopy[random] += 1      
        setVote(votesCopy)
        getMax(votesCopy)
    }

    const [topVoted, setTopVoted] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)

    const getMax = (votesCopy) => {
        let maxVotes = 0
        let maxIndex = 0
        for (let i=0; i < votesCopy.length; i++) {
            if (votesCopy[i] >= maxVotes){
                maxIndex = i
                maxVotes = votesCopy[i] 
            }
        }
        setTopVoted(maxVotes)
        setMaxIndex(maxIndex)
    }


    return (
        <div>
            <h1>Anectode of the day</h1>
            <p>{anecdotes[random]}</p>
            <Button handleFunction={voteAnectode} buttonText="vote" />
            <Button handleFunction={nextAnectode} buttonText="next anecdote" />
            {topVoted > 0 && (
                <>
                    <h1>Anectode with most votes</h1>
                    <p>{anecdotes[maxIndex]}</p>
                    <p>Has {topVoted} votes</p>
                </>
            )}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)