import { combineReducers } from 'redux';

// IMPORTING REDUCERS
import progress from "./Progress";
import shelters from './Shelters';
import firstStage from './FirstStage';


const allReducers = combineReducers({

    progress,
    shelters,
    firstStage

})

export default allReducers;