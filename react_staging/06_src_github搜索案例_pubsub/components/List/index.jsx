import React, { Component } from 'react'
import './index.css'
import Pubsub from 'pubsub-js'




export default class List extends Component {


    state = {
        users: [],
        isFirst: true,
        isLoding: false,
        err: '',
    }

    componentDidMount() {
        this.token = Pubsub.subscribe('atguigu', (msg, stateObj) => {
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        Pubsub.unsubscribe(this.token)
    }


    render() {
        const { users, isFirst, isLoding, err } = this.state

        return (
            <div className="row">

                {
                    isFirst ? <h2>欢迎使用</h2> :
                        isLoding ? <h2>Loading....</h2> :
                            err ? <h2>错误....</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <img src={userObj.avatar_url}
                                                    alt="es-lint want to get"
                                                    style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }


            </div>
        )
    }
}
