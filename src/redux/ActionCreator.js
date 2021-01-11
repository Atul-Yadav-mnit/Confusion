import * as ActionTypes from './ActionTypes'
import fetch from 'cross-fetch'
import { baseURL } from '../shared/baseURL'

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
    dispatch(DishesLoading());

    return fetch(baseURL+'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(AddDishes(dishes)));
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



export const fetchPromos = () => (dispatch) => {
    
    dispatch(PromosLoading());

    return fetch(baseURL + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(AddPromos(promos)));
  
}


export const PromosLoading = () => ({
    type : ActionTypes.PROMOS_LOADING
})

export const AddPromos = (promos) => ({
    type : ActionTypes.ADD_PROMOS,
    payload : promos
})

export const PromosFailed = (errmsg) => ({
    type : ActionTypes.PROMOS_FAILED,
    payload : errmsg
})



export const fetchComments = () => (dispatch) => {
    
   // dispatch(CommentsLoading());  NO NEED AS BY THE TIME WE WILL REACH DISH DETAIL COMPONENT WE HAVE ALREADY LOADED COMMENTS

    return fetch(baseURL + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(AddComments(comments)));
  
}


export const AddComments = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
})

export const CommentsFailed = (errmsg) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmsg
})