import * as ActionTypes from './ActionTypes'
import fetch from 'cross-fetch'
import { baseURL } from '../shared/baseURL'

export const Add_Comment = (comment) => ({
    type : ActionTypes.Add_Comment,
    payload : comment
})


export const Post_Comments = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(baseURL + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(Add_Comment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchDishes = () => (dispatch) => {
    dispatch(DishesLoading());

    return fetch(baseURL+'dishes')
    .then(response => {
        if(response.ok)
        {
            return response;
        }
        else{
            var error = new Error('Error' + response.status + " : "+response.statusText)
            error.response = response
            throw error;
        }
    },    
    error => {
        var err = new Error(error.message)
        throw err;
    })
    .then(response => response.json())
    .then(dishes => dispatch(AddDishes(dishes)))
    .catch( error => dispatch(DishesFailed(error.message)));
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
    .then(response => {
        if(response.ok)
        {
            return response
        }
        else{
            var error = new Error('Error' + response.status + " : "+response.statusText)
            error.response = response
            throw error
        }
    },    
    error => {
        var error = new Error(error.message)
        throw error
    })
    .then(response => response.json())
    .then(promos => dispatch(AddPromos(promos)))
    .catch( error => dispatch(PromosFailed(error.message)));
  
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
    .then(response => {
        if(response.ok)
        {
            return response;
        }
        else{
            var error = new Error('Error' + response.status + " : "+response.statusText)
            error.response = response
            throw error;
        }
    },    
    error => {
        var error = new Error(error.message)
        throw error;
    })
    .then(response => response.json())
    .then(comments => dispatch(AddComments(comments)))
    .catch( error => dispatch(CommentsFailed(error.message)));
  
}


export const AddComments = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
})

export const CommentsFailed = (errmsg) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmsg
})


export const FetchLeaders= () => (dispatch) =>{
    dispatch(LeadersLoading());

    return fetch(baseURL +'leaders')
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error' + response.status + " : "+response.statusText)
                    error.resonse = response
                    throw error
                }
            }, error => {
                var error = new Error(error.message);
                throw error;}
            ) .then(response => response.json())
            .then(leaders => dispatch(AddLeaders(leaders)))
            .catch( error => dispatch(LeadersFailed(error.message)));

}

export const AddLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload : leaders

})

export const LeadersLoading = () => ({
    type : ActionTypes.LEADERS_LOADING
})

export const LeadersFailed = (errmsg) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload :errmsg
})

export const Post_Feedback = (firstname, lastname,telnum, email,agree,contactType,message) => () => {

    const newFeedback = {
        "firstname": firstname,
        "lastname": lastname,
        "telnum": telnum,
        "email": email,
        "agree": agree,
        "contactType": contactType,
        "message": message,
    }
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseURL+'feedback', {
        method : "POST",
        body : JSON.stringify(newFeedback),
        headers:{
            "Content-Type": "application/json"
        },
        credentials : "same-origin"
    })
    .then( response => {
        if(response.ok)
        {
            return response;
        }
        else{
            var error = new Error('Error' + response.status + " : "+response.statusText);
            error.resonse = response;
            throw error;
        }
    }, error => {
        throw error
    }).then(response => response.json())
    .catch(error => alert("Your feedback was not submitted due to "+error))
    .then (response => alert("Thank you for the feedback , we got "+JSON.stringify(response)))
    .catch(error => alert("Response submitted but not able to show reponse duer to"+error))
    
}