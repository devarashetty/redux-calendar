import React from 'react';
import {
	addNotes,
	updateNotes,
	deleteNotes
} from '../store/actions.js';
import moment from 'moment';

class Month extends React.Component {
	constructor(){
		super();
		this.monthsList = moment.months();
	}
	render(){
		return (
			<select style={{width:"100px",padding:"10px"}}>
				{
					this.monthsList &&  this.monthsList.map((item)=>(<option value={item}>{item}</option>))
				}
			</select>
		)
	}
}

export default Month;