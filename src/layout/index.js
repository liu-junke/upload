import React,{Component} from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar'
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Home from '../pages/home/index'
import Recommend from '../pages/recommend'
// import Category from '../pages/category'
import ShopCar from '../pages/shopcar'
import Mine from '../pages/mine'
import Login from '../pages/login'
import Register from '../pages/register'
import Detail from '../pages/detail'
// import List from '../pages/list'
import Error from '../pages/error'

class LayOut extends Component {
    constructor(props){
        super(props)
        this.state={
            tabFlag:false,
            tabBarFlag:true,
            name:'山海边',
            title:{
                '/home':'首页',
                '/recommend':'推荐',
                '/category':'分类',
                '/shopcar':'购物车',
                '/mine':'我的',
                '/home/hot':'正在热映',
                '/home/future':'即将上映',
                '/list':'商品列表'
            },
            arr:['/recommend','/category','/shopcar','/mine','/list'],
            tabbar_arr:['/recommend','/shopcar']
        }
    }
    checkTabFlag=(nextProps)=>{
        const {pathname}=nextProps && nextProps.location || this.props.location
        const f = this.state.arr.some(item=>item==pathname)
        if(f){
            this.setState({
                tabFlag:true
            })
        }else{
            this.setState({
                tabFlag:false
            })
        }
    }
    checkTabBarFlag=(nextProps)=>{
        const {pathname}=nextProps && nextProps.location || this.props.location
        const f = this.state.tabbar_arr.some(item=>item==pathname)
        if(f){
            this.setState({
                tabBarFlag:false
            })
        }else{
            this.setState({
                tabBarFlag:true
            })
        }
    }

    componentDidMount(){
        this.checkTabFlag()
        this.checkTabBarFlag()
    }
    componentWillReceiveProps(nextProps){
        this.checkTabFlag(nextProps)
        this.checkTabBarFlag(nextProps)
    }
    render(){
        const {tabFlag,tabBarFlag,name,title} =this.state
        const {pathname}=this.props.location
        return(
            <div className="layout">
                <Tab tabFlag={tabFlag} {...this.props} title={title[pathname]}></Tab>
                <Switch>
                    <Redirect from = "/" to = "/home" exact></Redirect>
                    <Route path = "/home" component = {Home} ></Route>
                    <Route path = "/recommend" component = {Recommend} ></Route>
                    {/* <Route path = "/category" component = {Category} ></Route> */}
                    <Route path = "/shopcar" component = {ShopCar} ></Route>
                    <Route path = "/mine" render = {() => <Mine name = { name } />} ></Route>
                    <Route path = "/login" component = {Login}/>
                    <Route path = "/register" component = {Register}/>
                    {/* <Route path = "/list" component = {List} /> */}
                    <Route path = "/detail" component = {Detail}/>
                    <Route component = {Error} ></Route>
                </Switch>
                {tabBarFlag && <TabBar></TabBar>}
            </div>
        )
    }
}

export default withRouter(LayOut)