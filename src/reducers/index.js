import { combineReducers } from 'redux';

export default combineReducers({
    replaceMe: () => 10 //tricks redux into thinking it has a reducer value, only used when you know what reducers are and is used to get rid of that dummy message
});