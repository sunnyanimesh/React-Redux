import {ADD_CHARACTER,REMOVE_CHARACTER} from '../actions';

import {createCharacter} from './helpers';

function heroes(state=[],action){
    switch(action.type){
        case ADD_CHARACTER : 
            let heroes = [...state,createCharacter(action.id)];
            return heroes;
        case REMOVE_CHARACTER : 
            return state.filter(item =>item.id !== action.id );
           
        default :return state;
    }
    }




export default heroes;
