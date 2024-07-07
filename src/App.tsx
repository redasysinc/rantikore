/* @ts-disable */
import  {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import api from "./api/api.ts";
import Providers from "./components/Providers";
import Home from './components/Home/Home'
import Site from "./components/Layout/Site";
import './custom-theme.css'

function App() {
    //const [name, setName] = useState('');

    useEffect(() => {
        const load = async () => {
            const res = await api.getUsername()
            console.log(res)
            //setName(res)
        }
        load()
    }, []);

    return (
        <>
            {/*@ts-ignore*/}
            <Site>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/rantikore/providers'} element={<Providers />} />
                        <Route path={'/rantikore/search'} element={<Providers />} />
                        <Route path={'/rantikore'} element={<Home/>} />
                        <Route path={'/'} element={<Home/>} />
                    </Routes>
                </BrowserRouter>
            </Site>

            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*    HELLO {name} {'<--'} if userName is shown, it was fetched from the API runnine on PORT: 8080. Proving*/}
            {/*    Koa to be running alongside of vite*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.tsx</code> and save to test HMR*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<Test/>*/}

        </>
    )
}

export default App
