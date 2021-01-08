import {createStore} from'redux'
import {Reducer, initialstate} from './Reducer'


export const conigureStore = () =>{
    const store = createStore(Reducer, initialstate);
    return store;

}