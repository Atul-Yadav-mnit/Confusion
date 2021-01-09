import { act } from 'react-dom/test-utils'
import {DISHES} from '../shared/DISHES'

export const Dishes = (state = DISHES , action ) => {
    switch (action.type){
        default: return state;
    }
}