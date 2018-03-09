import { createStore } from 'redux';
import Reducer from './reducers.js';
import moment from 'moment';


let store = createStore(Reducer,{currentDate:moment().toDate()});

export default store;
