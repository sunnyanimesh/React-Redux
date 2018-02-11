import characters_json from '../data/characters.json';
import {ADD_CHARACTER,REMOVE_CHARACTER} from '../actions';
import {createCharacter} from './helpers';

function characters(state = characters_json,actions){
switch(actions.type){
   case ADD_CHARACTER : 
            let characters = state.filter(item =>item.id !== actions.id );
            return characters;
    case REMOVE_CHARACTER : 
       return [...state,createCharacter(actions.id)];
      
    default : return state;
}    
}


export default characters;