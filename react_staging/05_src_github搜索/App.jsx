
import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'





export default class App extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoding: false,
        err: '',
    }
    // saveUsers = (users) => {
    //     this.setState({ users })
    // }
    updateAppState = (state0bj) => {
        this.setState(state0bj)
    }




    render() {


        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />

            </div>
        )
    }
}













