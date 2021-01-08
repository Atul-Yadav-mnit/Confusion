import {DISHES} from '../shared/DISHES'
import {COMMENTS} from '../shared/COMMENTS'
import {LEADERS} from '../shared/LEADERS'
import {PROMOTIONS} from '../shared/PROMOTIONS'


export const initialstate ={
    dishes :DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders :LEADERS
}


export const Reducer = (state = initialstate , action) =>{
    return state;
}