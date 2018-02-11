import {ADD_CHARACTER,REMOVE_CHARACTER} from '../actions';
import {createCharacter} from './helpers';

let stats = {
    strength : 0,
    intellegence : 0,
    speed : 0
}

function squadStat(state =stats,action){

    switch(action.type){
        case ADD_CHARACTER : 
        let character = createCharacter(action.id);
        state.strength += character.strength;
        state.intellegence += character.intelligence;
        state.speed += character.speed;
        return state;

        case REMOVE_CHARACTER : 
         character = createCharacter(action.id);
        state.strength -= character.strength;
        state.intellegence -= character.intelligence;
        state.speed -= character.speed;
        return state;

        default : return state;


    }

}

export default squadStat;