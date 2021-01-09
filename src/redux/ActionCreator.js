import * as ActionTypes from './ActionTypes'

export const Add_Comment = (dishId, rating, comment, author) => ({
    type : ActionTypes.Add_Comment,
    payload : {
        dishId : dishId,
        rating : rating, 
        comment : comment,
        author : author
    } 
})