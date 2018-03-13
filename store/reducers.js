import { availableActions } from './actions.js';
import { combineReducers } from 'redux';
import moment from 'moment';

function dateNotes(state={notes:[]},action){
	console.log("state",state);
	return state;
};

function currentDate(state=null,action){
	console.log("currentDate",state,action);
	if(action.type === availableActions.UPDATE_DATE){
		return action.date
	}
	return state
}

export default combineReducers({
	dateNotes,
	currentDate
});


