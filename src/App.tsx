import React, {useEffect, useState} from 'react'
import {List} from 'antd';
import api from "./api/api.ts";
import './App.css'

function App() {
    const [name, setName] = useState('');

    useEffect(() => {
        const load = async () => {
            const res = await api.getUsername()
            setName(res)
        }
        load()
    }, []);

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                HELLO {name} {'<--'} if userName is shown, it was fetched from the API runnine on PORT: 8080. Proving
                Koa to be running alongside of vite
                <article>
                    Tech Stack for this template:
                    <List>
                        <List.Item><h5>Front end: React</h5></List.Item>
                        <List.Item><h5>Styling and basic components: Ant Design </h5></List.Item>
                        <List.Item><h5>State Management: Zustand </h5></List.Item>
                        <List.Item><h5>Back End: Koa</h5></List.Item>
                        <List.Item><h5>HTTP: Axios </h5></List.Item>
                        <List.Item><h5>Persistence: MongoDB </h5></List.Item>
                        also included to help speed development: json-server and faker
                    </List>
                </article>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>

        </>
    )
}

export default App
