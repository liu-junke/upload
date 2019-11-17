import React,{Component} from 'react'
import './index.scss'

export default class Mine extends Component{
    render(){
        return(
            <div className="container">
                {this.props.name}
            </div>
        )
    }
}