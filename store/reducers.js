import { availableActions } from './actions.js';
import { combineReducers } from 'redux';
import moment from 'moment';

function dateNotes(state={currentDate:moment().toDate(),notes:[]},action){
	if(action.type === availableActions.ADD_NOTES){
		let availableNotes = state.availableNotes;
		let newAvailableNotes = state.availableNotes.concat(action.note);
		return Object.assign({},state,{availableNotes:newAvailableNotes});
	}
	return state;
};

function currentDate(state=null,action){
	console.log("currentUser",state);
	return state;
}

export default combineReducers({
	dateNotes,
	currentDate
});
