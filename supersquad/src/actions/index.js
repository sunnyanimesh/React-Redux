export const ADD_CHARACTER = 'ADD_CHARACTER';
export function addCharacterByid(id){
    const action ={
        type : ADD_CHARACTER,
        id
    }
    return action;
}