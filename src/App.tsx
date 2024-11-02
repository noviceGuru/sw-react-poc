import "./App.css"
import { SW } from "./swRegistration"

SW.init()

function App() {
    const fetchData = () => fetch("https://noviceguru.github.io/doveConvieneJson/data/db.json")
        .then(d => d.json())
        .then(data => console.log(data))
    return <button onClick={fetchData}>fetch</button>
}

export default App
