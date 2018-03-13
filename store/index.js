import { createStore } from 'redux';
import Reducer from './reducers.js';
import moment from 'moment';


//initalization works only for single reducer

// console.log("Reducer",Reducer.name);
let store;

if(Reducer.name === "combinator"){
	store = createStore(Reducer);
}
else{
	store = createStore(Reducer,{currentDate:moment().toDate()});
}

console.log("store",store);

export default store;
