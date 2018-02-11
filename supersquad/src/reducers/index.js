import {combineReducers} from 'redux';

import characters from './characters_reducers';
import heroes from './heroes_reducers';
import squadStat from './squadStat_reducer';



const rootReducer = combineReducers(
    {
        characters,heroes,squadStat
    }
)

export default rootReducer;