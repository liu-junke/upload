import React,{Component} from 'react'
import './index.scss'
import Nav from './Nav'
import Hot from './Hot'
import Future from './Future'
import {Route,Redirect} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
            <div className="container home">
                <Nav/>
                <Redirect from ="/home" to ="/home/hot" exact/>
                <Route path = "/home/hot" component = { Hot} />
                <Route path = "/home/future" component = {Future} />
            </div>
        )
    }
}