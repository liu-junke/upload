import {GET_MOVIES} from '../actions/actionType'
import {GET_FUTUREMOVIES} from '../actions/actionType'

const initState ={
    movies:null
}

const movieReducer =(state=initState,action)=>{
const newState={...state}
switch(action.type){
    case GET_MOVIES:  //修改数据
        newState.movies=action.payload
    break;
    case GET_FUTUREMOVIES:
        newState.movies.movieList.push(...action.payload.coming)
        console.log('getfuturemovies')
        console.log('newState.movies.movieList',newState.movies.movieList)
    default:
        break;
}
return newState
}

export default movieReducer

