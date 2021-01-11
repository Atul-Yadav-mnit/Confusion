import {createStore, combineReducers, applyMiddleware} from'redux'
import {Dishes} from './Dishes'
import {Comments} from './Comments'
import {Leaders} from './Leaders'
import {Promotions} from './Promotions'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {createForms } from 'react-redux-form'
import { InitialFeedbak } from './InitialFeedback'



export const configureStore = () =>{
    const store = createStore(
        combineReducers({
        dishes : Dishes,
        comments : Comments,
        leaders : Leaders,
        promotions : Promotions,
        ...createForms({
            feedback : InitialFeedbak
        })
    }), applyMiddleware(thunk, logger)
    );

    return store;

}