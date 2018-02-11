import characters_json from '../data/characters.json';
import {ADD_CHARACTER} from '../actions';

function characters(state = characters_json,actions){
switch(actions.type){
   case ADD_CHARACTER : 
            let characters = state.filter(item =>item.id !== actions.id );
            return characters;
    default : return state;
}    
}


export default characters;