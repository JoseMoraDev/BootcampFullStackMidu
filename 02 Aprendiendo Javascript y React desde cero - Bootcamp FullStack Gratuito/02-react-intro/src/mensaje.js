const Mensaje = (props) => {
    console.log(props);
    
    return <h1 style={{color: props.color}}>
                {props.message}
            </h1>
    // nunca generar este componente dentro de otro, deben estar aislados
    // a los componentes les puedo pasar parámetros, se conocen como 'props'
    // el color hay que pasarlo como un objeto
    // un componente siempre tiene que devolver un elemento, que puede contener a muchos, pero no se pueden devolver múltiples elementos
        // puede ser un div, un span, string... o un fragment < >
}

export default Mensaje