import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'


export default class Search extends Component {

    search = () => {
     



        const { keyWordElement: { value: keyWord } } = this
        console.log(keyWord);

        
       // this.props.updateAppState({isFirst:false,isLoding:true})
       Pubsub.publish('atguigu',{isFirst:false,isLoding:true})

       

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => { 
         
     
              Pubsub.publish('atguigu',{isLoding:false,users:response.data.items})
            },
            error => { 
                
    
             Pubsub.publish('atguigu',{isLoding:false,err:error.message})

             }
        )

    }




    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索 Github 用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词搜索" />&nbsp;<button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
