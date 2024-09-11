import './App.css';
import Mensaje from './mensaje.js';

  // los componentes se declaran con la primera letra en mayúscula, de lo contrario serán considerados como etiquetas html estándar

  // este código es JSX que se parseará con Babel a JavaScript
    // todas las etiquetas JSX se tienen que cerrar

  // renderiza el componente 'App' en el elemento cuyo id es 'root'
const App = () => {
  const mensaje = 'Hola '
  const a = 2
  const b = 3
  return (
    <div className="App">
      <Mensaje color='green' message='Segundo vídeo' />
      <Mensaje color='blue' message='del curso' />
      <Mensaje color='orange' message='de React' />
        {mensaje + 'evaluación en JSX'} {/* contenido entre llaves evalua JS */}
        <br />
        {(a + b)}
        <br />
            {/* no se puede renderizar directamente un objeto:
                {new Date()} no funcionará */}
            {/* si que funcionará si se transforma en un TimeStamp */}
                {+new Date()}

    </div>
  );
}

export default App;
