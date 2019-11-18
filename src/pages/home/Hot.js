import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getMovies,getFutureMovies} from '../../actions'
import {imgFilter} from '../../filter'
import './hot.scss'
import BScroll from 'better-scroll';
import _ from 'loadsh'

class Movie extends Component{

    componentDidMount(){
      console.log('didmount')
        this.props.getMovies()

        let count=0
        const bs=new BScroll('.page',{
          pullUpLoad:{
            threshold:50
          }
        })  
        bs.on('pullingUp',()=>{ 
          const movieIds=this.props.movies.movieIds.slice(12)
          const ids=_.chunk(movieIds,10)
          console.log('ids',ids)
    
          if(count == ids.length){
            // Toast({
            //   message: '已经到达底部了',
            //   position: 'bottom',
            //   duration: 2000
            // });
            bs.finishPullUp()
            return;
          }
    
          if(count < ids.length){
            console.log('上拉加载一次') ;
            // Indicator.open('加载中...');
            // this.showLoading()
            setTimeout(()=>{
            this.props.getFutureMovies( ids[ count ].join(',') );
            // // Indicator.close();
            // this.hideLoading()
            },800)
            // console.log('movieids',movieIds)
            console.log('movielist',this.props.movies.movieList)
          }
          // bs.refresh()
          bs.finishPullUp()
          count++   
          console.log(count)
        })
    }
    componentDidUpdate(){
      // this.renderList()
    }
    renderList=()=>{
        // console.log('movieList',this.props.movies.movieList)
        return this.props.movies.movieList.map(item=> 
    <div className="item" data-id="342773" data-bid="dp_wx_home_movie_list" key ={item.id}>
      <div className="main-block">
        <div className="avatar" sort-flag="">       
          <div className="default-img-bg">
            <img src= {imgFilter(item.img)}    />		
          </div>
        </div> 
        <div className="mb-outline-b content-wrapper">       
          <div className="column content">
            <div className="box-flex movie-title">
              <div className="title  text line-ellipsis v2dimax_title">{item.nm}</div>             
                {/* <span className="version v2d imax"></span>           */}
            </div>
            <div className="detail column">
            <div className="score text">{item.sc &&`观众评 ${item.sc}`  || `暂无评价`}</div>
                <div className="actor text line-ellipsis">主演:{item.star}</div>   
                <div className="show-info text line-ellipsis">{item.showInfo}</div>           
            </div>
          </div>   
          <div className="button-block" data-id="342773">           
              <div className="btn normal"><span className="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>      
          </div>      
        </div>
      </div>
    </div> )
    }
    render(){
        return(
            <div className="container page">
                <div className="list-wrap"  > 
                    {this.props.movies && this.renderList()}
                </div>
            </div>    
        )
    }
}

export default connect(
    state=>state.movieReducer,
    dispatch=>bindActionCreators({getMovies,getFutureMovies},dispatch)
)(Movie)



{/* <li key = {item.id}> 
        <div>
            <img src = {imgFilter(item.img)} alt ="" />
        </div>
        <div>
            <div></div>
        </div>
        </li> */}