/* @ts-disable */
import {Routes, Route} from 'react-router-dom'
import Providers from "./components/Providers";
import Home from './components/Home/Home'
import Site from "./components/Layout/Site";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './custom-theme.css'

AOS.init();

function App() {
    return (
        <>
            {/*@ts-ignore*/}
            <Site>
                <Routes>
                    <Route path={'/rantikore/providers'} element={<Providers data-aos={'fade-in'}/>}/>
                    <Route path={'/providers'} element={<Providers data-aos={'fade-in'}/>}/>
                    <Route path={'/rantikore/'} element={<Home data-aos={'fade-in'}/>}/>
                    <Route path={'/'} element={<Home data-aos={'fade-in'}/>}/>
                </Routes>
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
