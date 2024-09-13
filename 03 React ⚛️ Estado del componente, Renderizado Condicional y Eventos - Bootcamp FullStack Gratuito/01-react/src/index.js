import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'; // gancho-hook

const rootElement = document.getElementById("root");

/* use state es un método al que le paso como parámetro el valor inicial de este estado 
pero el estado es un array compuesto por dos posiciones:
- el valor del estado, en posición 0
- un método, que al ejecutarlo permite actualizar el estado, en posición 1
*/
const App = (props) => {
  // const contador = useState(0); --> lo mismo que const [contador, ...]
  // const contadorValue = contador[0];
  // const updateContador = contador[1];
  const [contadorValue, updateContador] = useState(0);
  // esta forma de usar setInterval es incorrecta, porque el componente se re-renderiza y se acumulan varios setInterval
  setInterval(() => {
    updateContador(contadorValue + 1)
  }, 10000)
  return (
    <div>
      <h1>
        {contadorValue}
      </h1>
    </div>
    )
}

ReactDOM.render(<App />, rootElement);

