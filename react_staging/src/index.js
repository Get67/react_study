//引入React 核心库
import React from 'react'
//引入 ReactDOM
import ReactDOM from 'react-dom'
//引入App
import App from './App'

import { BrowserRouter } from 'react-router-dom'



//渲染App到页面
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'))










