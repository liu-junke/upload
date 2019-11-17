import React, { Component } from 'react'
import './index.scss'
import qs from 'querystring'
import axios from 'axios'


export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        const { search } = this.props.location
        const { cid } = qs.parse(search.slice(1))
        console.log('cid', cid)
        axios({
            url: '/index.php',
            params: {
                r: 'class/cyajaxsub',
                page: 1,
                cid: 22,
                px: 't',
                cac_id: ''
            }
        }).then(res => {
            console.log('res', res)
            this.setState({
                list: res.data.data.content
            })
            console.log('list', this.state.list)
        })
    }

    renderShopList=(list)=>{
        return list.map(item=>(
           <li id = "cms-goods-items_23281051"className = "row-s" key = {item.id} >
              <a href = "/index.php?r=p/d&amp;id=23281051" >
                <div className = "img ui-act-label" >
                   <img src = {`http:${item.pic}`}/>
                </div>
              </a> 
              <div className = "cent" >
                <a href = "/index.php?r=p/d&amp;id=23281051" >
                  <h3 className = "product_title" >
                    <span className = "labelTop tm" > </span>          
                    <span className = "title_text" > {item.d_title} </span >  
                  </h3>     
                </a>  
                <div className = "product_info" >
                <a href = "/index.php?r=p/d&amp;id=23281051" >
                <div className = "price" >
                  <span> 券后 &nbsp; </span>             
                  <span className = "RMB" > ¥ </span >  
                  <span className = "price_num" > {item.jiage}</span>         
                </div>  
                <div className = "label_box" >
                <span><span className = "juan" ><span> 劵 </span>{item.quan_jine}</span > </span>
                </div >
                <div className = "salse" > < span > 已售{item.xiaoliang} </span><span>评论{item.comment}</span ></div>
                </a> 
                </div>
              </div >
            </li> 
        ))
    }



    render() {
        const {list}=this.state
        return ( 
            <div className = "container">
                <div className="list">
                   { this.renderShopList(list) }
                </div>
            </div>
        )
    }
}