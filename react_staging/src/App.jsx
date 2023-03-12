//创建外壳组件 App

//引入React 核心库
//{Component} 是React里的Component 不是结构赋值拿出来的
//是分别暴露的 Component 把分别暴露的Component拿出来了
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'



//创建并且 暴露App组件
export default class App extends Component {
    //状态在哪里  操作状态的方法就在哪里

    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '打代码', done: false },
            { id: '003', name: '睡觉', done: false },
            { id: '004', name: '冲冲冲', done: false },
        ]
    }

    //用于添加一个todo 接受参数是todo对象
    addTodo = (todoObj) => {
        // 获取原来todos
        const { todos } = this.state
        //追加一个todos
        const newTodos = [todoObj, ...todos]
        //更新状态 state
        this.setState({ todos: newTodos })
    }

    updateTodo = (id, done) => {
        // 获取原来todos
        const { todos } = this.state
        //匹配 加工数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else {
                return todoObj
            }
        })
        //更新状态 state
        this.setState({ todos: newTodos })
    }

    deleteTodo = (id) => {
        //获取原来的todos
        const { todos } = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        //更新状态
        this.setState({ todos: newTodos })
    }


    cheackAllTodo = (done) => {
        //获取原来的todos
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        //更新状态
        this.setState({ todos: newTodos })
    }

    clearDone = () => {
        //获取原来的todos
        const { todos } = this.state
        const newTodos =  todos.filter((todoObj) => {
            return !todoObj.done
        })
        //更新状态
        this.setState({ todos: newTodos })
    }

    render() {

        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} cheackAllTodo={this.cheackAllTodo} clearDone={this.clearDone} />
                </div>
            </div>
        )
    }
}













