//创建外壳组件 App

//引入React 核心库
//{Component} 是React里的Component 不是结构赋值拿出来的
//是分别暴露的 Component 把分别暴露的Component拿出来了
import React ,{Component}from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

//创建并且 暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}













