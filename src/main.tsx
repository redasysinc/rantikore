import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider, theme} from 'antd';
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
