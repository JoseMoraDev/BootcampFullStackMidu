import ReactDom from "react-dom"
import { useState } from "react";

const rootElement = document.getElementById("root");

// este no es el uso que se le suele dar a las props...
// const Counter = (props) => {
//   return  <h1>{props.number}</h1>
// }
// ... se usa desestructuración así:
const Counter = ({number}) => {
  return  <h1>{number}</h1>
}

const App = (props) => {
  const [state, setState] = useState(0);

  const handleReset = () => {
    setState(0)
  }

  const isEven = state % 2 === 0

  const handleClick = () => {
    setState(prevState => {
      return prevState + 1
    })
  }
  
  return (
    <div className="App">
      <p>El valor del contador es:</p>
      <Counter number={state} />
      <small>
        El número es {isEven ? 'es par' : 'es impar'}
      </small>
      <br />
      <button onClick={() => {
        // forma 1:
          // setState(state+1)
        // forma 2:
          // es mejor porque asegura que siempre se toma el valor anterior
        setState(prevState => {
          return prevState + 1
        })
        // forma 2, depurada: pasando una función:
          // onClick = {handleClick}
          // si se usa handleClick() se producirá un bucle infinito ya que nunca deja de renderizar
            // onClick = {handleClick()}
      }}>
        Incrementar
      </button>
      <button onClick={handleReset}>
        Resetear
      </button>
    </div>
  );
}

ReactDom.render(<App/>, rootElement);

// un componente se vuelve a ejecutar cada vez que le lleguen nuevas props
  // se produce un renderizado en react, que si en el dom no cambia, react no lo re-renderiza