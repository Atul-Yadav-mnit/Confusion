import {COMMENTS} from '../shared/COMMENTS'
import * as ActionTypes from './ActionTypes'

export const Comments = (state = COMMENTS , action ) => {
    switch (action.type){
        case ActionTypes.Add_Comment : 
            var temp = action.payload
            temp.id = state.length
            temp.date = new Date().toISOString();
            return state.concat(temp);
        default: return state;
    }
}