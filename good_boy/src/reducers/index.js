import { combineReducers } from 'redux';

// IMPORTING REDUCERS
import progress from "./Progress";
import shelters from './Shelters';
import firstStage from './FirstStage';
import secondStage from './SecondStage';
import thirdStage from './ThirdStage';
import generalState from './AllIsReady';

const allReducers = combineReducers({

    progress,
    shelters,
    firstStage,
    secondStage,
    thirdStage,
    generalState

})

export default allReducers;