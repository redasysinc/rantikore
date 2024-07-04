import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [name, setName] = useState(0)
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:8080/api/getusername');
            const data = await res.json()
            console.log(data)
            setName(data.username)
        }
        getData()
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                HELLO {name} {'<--'} if userName is shown, it was fetched from the API runnine on PORT: 8080. Proving Koa to be running alongside of vite
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
