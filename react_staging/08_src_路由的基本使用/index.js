//引入React 核心库
import React from 'react'
//引入 ReactDOM
import ReactDOM from 'react-dom'
//引入App
import App from './App'
//引入BrowserRouter
import { HashRouter } from 'react-router-dom'



//渲染App到页面
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'))










