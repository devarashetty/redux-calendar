import React from 'react';
import {
	addNotes,
	updateNotes,
	deleteNotes
} from '../store/actions.js';
import moment from 'moment';
import {connect} from 'react-redux';
import { updateDate } from '../store/actions.js';

class Month extends React.Component {
	constructor(props){
		super();
		this.monthsList = moment.months();
		this.currentMonth =  moment(props.data &&  props.data.currentDate).format('M');	
	}
	
	_clickMonth = (event)=>{
		event.preventDefault();
		let newMonth = event.target.value;
		let oldDate = this.props.data.currentDate;

		if(Number(newMonth)<Number(this.currentMonth)){
			let diff = Number(this.currentMonth)-Number(newMonth);
			this.props.dispatch(updateDate(moment(oldDate).subtract(diff,'months').toDate()));
			this.currentMonth = event.target.value;
			return;
		}
		
		let diff = Number(newMonth)-Number(this.currentMonth);
		this.props.dispatch(updateDate(moment(oldDate).add(diff,'months').toDate()));
		this.currentMonth = event.target.value;
		
		this.forceUpdate();	
		// moment
		// this.props.dispatch({type:})
	}

	render(){

		return (
			<select style={{width:"100px",padding:"10px"}} value={this.currentMonth} onChange={this._clickMonth}>
				{
					this.monthsList &&  this.monthsList.map((item,index)=>(<option value={index+1}>{item}</option>))
				}
			</select>
		)
	}
}

export default connect()(Month);