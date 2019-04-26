import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import songReducer from './songReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    songStore: songReducer,
});

export default  rootReducers;
