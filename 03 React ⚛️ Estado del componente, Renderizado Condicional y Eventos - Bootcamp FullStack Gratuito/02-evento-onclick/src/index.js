/*
    he inventado este ejercicio para practicar lo aprendido en este módulo del curso
*/
import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {

    const foodAndKcal = [
        ['Manzana', 52],
        ['Pera', 55],
        ['Plátano', 88],
        ['Fresas', 32],
        ['Pechuga de pollo', 75],
        ['Ternera', 94],
        ['Filete de vacuno', 115],
        ['Pasta de espelta cocida',	128],
        ['Tortita de wrap integral', 170],
        ['Cerveza', 43],
        ['Kebab', 215],
        ['Cheeseburger', 250],
        ['Patatas fritas', 539],
    ]

    const [selected, setSelected] = useState([])

    const addAndCount = (food) => {
        const newSelected = selected.concat([food])
        setSelected(newSelected)
        setKcal(kcal + food[1])
    }

    const [kcal, setKcal] = useState(0)

    const Buttons = () => {
        return (
            <div>
                {foodAndKcal.map((food, index) => (
                    <button 
                        key={index}
                        style={{ display: 'block', margin: '5px 20px' }}
                        onClick={() => addAndCount(food)}
                    >
                        {food[0]}
                    </button>
                ))}
            </div>
        )
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th style={{border: '1px solid black'}}>Alimento</th>
                        <th style={{border: '1px solid black'}}>Kcal</th>
                    </tr>
                </thead>
                <tbody>
                {selected.map((food, index) => (
                    <tr key={index}>
                        <td style={{border: '1px solid black'}}>{food[0]}</td>
                        <td style={{border: '1px solid black'}}>{food[1]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }

    return (
            <>
                <h1>Contador de calorías</h1>
                <h2>Selecciona tu ingesta de alimentos</h2>
                <Buttons />
                {kcal > 0 ? <h2>Has ingerido {kcal} calorías</h2> : <h2>Haz click sobre un alimento para comenzar a contar calorías</h2>}
                {kcal > 0 ? <h3>Tabla de alimentos y calorías</h3> : <></>}
                {kcal > 0 ? <Table />  : <></>}
            </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)