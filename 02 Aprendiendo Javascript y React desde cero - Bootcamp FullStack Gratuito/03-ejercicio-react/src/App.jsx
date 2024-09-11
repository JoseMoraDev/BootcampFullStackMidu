const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

// MODOS DE DESARROLLAR EL COMPONENTE 'TITLE'

// const Title = (props) => {
//   return <h1>{props.course}</h1>
// }

// se puede hacer con desestructuración
// const Title = (props) => {
//   const {course} = props // es lo mismo que const {course} = props.course
//   return <h1>{course}</h1>
// }

// A la desestructuración se le puede dar una vuelta mas
// const Title = ({course}) => {
//   return <h1>{course}</h1>
// }

// Si solo tiene una línea se puede hacer ONE LINER
// Devuelve lo primero que está evaluando
const Title = ({course}) => <h1>{course}</h1>

const PartAndExercise = (props) => {
  return <p>{props.part}{props.exercise}</p>
}

const ExercisesCount = (props) => {
  return <p>Number of exercises {props.ex1 + props.ex2 + props.ex3} </p>
}

  return (
    <div>
      <Title course={course} />
      <PartAndExercise part={part1} exercise={exercises1} />
      <PartAndExercise part={part2} exercise={exercises2} />
      <PartAndExercise part={part3} exercise={exercises3} />
      <ExercisesCount ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App