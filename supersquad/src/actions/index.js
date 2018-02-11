export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER ='REMOVE_CHARACTER';

export function addCharacterByid(id){
    const action ={
        type : ADD_CHARACTER,
        id
    }
    return action;
}


export function removeCharacterByid(id){
    const action ={
        type : REMOVE_CHARACTER,
        id
    }
    return action;
}