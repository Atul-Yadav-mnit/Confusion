import {COMMENTS} from '../shared/COMMENTS'
import * as ActionTypes from './ActionTypes'

export const Comments = (state = {
       isLoading : true,
       errmsg : null,
       comments : [] 
    } , action ) => {
    switch (action.type){
        case ActionTypes.Add_Comment : 
            var temp = action.payload
            return {...state , comments :state.comments.concat(temp)};
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading : false, errmsg: null , comments:action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading : false, errmsg: action.payload , comments:[]}
        default: return state;
    }
}