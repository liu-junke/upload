import request from './request'
import {GET_MOVIES} from './actionType'
import {GET_FUTUREMOVIES} from './actionType'
export const getMovies=()=>{  //创建动作
    return async dispatch =>{
        const result=await request({
            url:'/ajax/movieOnInfoList',
            params:{
                token:''
            }
        })
        console.log('result',result)
        dispatch({                   //发送动作
            type:GET_MOVIES,
            payload:result.data
        })
    }
}

export const getFutureMovies=(movieIds)=>{
    return async dispatch =>{
        const result = await request({
            url:'/ajax/moreComingList',
            params:{
                token:'',
                movieIds
            }
        })
        dispatch({
            type:GET_FUTUREMOVIES,
            payload:result.data
        })
    }
}