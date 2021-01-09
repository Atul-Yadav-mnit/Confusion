import * as ActionTypes from './ActionTypes'
import {DISHES} from '../shared/DISHES'

export const Add_Comment = (dishId, rating, comment, author) => ({
    type : ActionTypes.Add_Comment,
    payload : {
        dishId : dishId,
        rating : rating, 
        comment : comment,
        author : author
    } 
})


export const fetchDishes = () => (dispatch) => {
    dispatch(DishesLoading())

    setTimeout(() => {
        dispatch(AddDishes(DISHES))
    }, 5000);
}

export const DishesLoading = () => ({
    type : ActionTypes.DISHES_LOADING
})

export const AddDishes = (dishes) => ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
})

export const DishesFailed = (errmsg) => ({
    type : ActionTypes.DISHES_FAILED,
    payload : errmsg
})