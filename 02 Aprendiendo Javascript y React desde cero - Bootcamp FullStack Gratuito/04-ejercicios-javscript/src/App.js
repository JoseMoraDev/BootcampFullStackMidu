const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

const Header = ({curso}) => <h1>{curso}</h1>

const Content = ({array}) => {
  return array.map(({name, exercises}) => {
    return <p>{name} =&gt; {exercises}</p>
  })
}

const Total = ({array_2}) => {
  const total = array_2.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Total number of exercises =&gt; {total}</p>
  }


  return (
    <div>
    <Header curso={course} />
    <Content array={parts} />
    <Total array_2={parts} />
  </div>
  )
}

export default App