import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component{
    render(){
        return(
            <div className="nav">
                <NavLink to = "/home/hot" activeClassName="active">正在热映</NavLink>
                <NavLink to = "/home/future" activeClassName="active">即将上映</NavLink>
            </div>
        )
    }
}