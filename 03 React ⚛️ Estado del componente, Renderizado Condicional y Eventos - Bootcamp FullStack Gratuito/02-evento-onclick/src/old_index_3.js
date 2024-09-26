import ReactDom from "react-dom"

// const Hello = (props) => {
//     const {name, age} = props
const Hello = ({name, age}) => {
// const name = props.name
    // const age = props.age
    const bornYear = () => new Date().getFullYear() - age
    
    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>
                You probably were born in {bornYear()}
            </p>
        </div>
    )
}

const App = () => {
    const name = 'Clint Eastwood'
    const age = 94

    return (
        <div>
            <h1>Example App</h1>
            <Hello name={name} age={age} />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App/>, rootElement);