import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {


  hdCheckAll=(event) => { 
     this.props.cheackAllTodo(event.target.checked)
   }
   xxx=() => { 
    this.props.clearDone()

    }
  render() {
    const {todos} =this.props
    const doneCount = todos.reduce((pre,cur)=> pre+(cur.done ? 1 :0)  ,0)
    console.log(doneCount);
    const total =todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount===total&&total!==0 ?  true:false}  onChange={this.hdCheckAll}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.xxx} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
