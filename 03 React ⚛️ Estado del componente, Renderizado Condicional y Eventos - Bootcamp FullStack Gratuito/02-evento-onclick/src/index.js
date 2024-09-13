import ReactDom from "react-dom"
import { useState } from "react";
const INITIAL_STATE = {
  left: 0,
  right: 0,
  mensaje: 'Sin spread operator este mensaje se borrará al sobreescribir el objeto'
  // clicks: 0, <-- se calcula 
}

const App = () => {
    // lo normal es tener varios estados
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
    // para comprender como funciona, se junta en un solo estado
  const [counters, setCounters] = useState(INITIAL_STATE)

  // con array
  const [clicks, setClicks] = useState([])

  // se guardan todas las propiedades del objeto, y solo se modifican left, y clicks
  // sin ...counters, las propiedades right y mensaje del objeto, perderían su valor
  // spread = esparcir, quiero que todas las propiedades se esparzan en este objeto
  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left +1, 
      // clicks: counters.clicks +1 <-- se calcula
    };
    setCounters(newCountersState);
    setClicks(prevClicks => {
      return [...prevClicks, 'L']
    })
  }
      // las props y los estados son inmutables
        // nunca hacer counters.left++, nunca mutar el objeto del estado, porque puede tener resultados imprevistos
        // siempre modificar la propiedad del objeto

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right +1,
      // clicks: counters.clicks +1 <-- se calcula
    });
    setClicks(prevClicks => {
      return [...prevClicks, 'R']
    })
  }

  const WarningNotUsed = () => {
    return <h3>El contador no se ha usado todavía</h3>
  }

  const ListOfClicks = () => {
    return <p>{clicks.join(", ")}</p>
  }

  const handleReset = () => {
    setCounters(INITIAL_STATE);
    setClicks([])
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <button onClick={handleReset}>Reset</button>
      <p>Número total de clicks: {clicks.length}</p>
      <p>{counters.mensaje}</p>
      {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks />}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App/>, rootElement);