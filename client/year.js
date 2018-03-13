import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import { updateDate } from '../store/actions.js';

class Year extends React.Component {	
	constructor(props){
		super();
		let yearList = [];
		let defaultYear = 1900;
		for(var i=0;i<140;i++){
			yearList.push(defaultYear++)
		}
		
		this.state = {
			yearList:yearList
		}

		this.currentYear = Number(moment(props.data &&  props.data.currentDate).format('YYYY'));
	}


	_handleYearChange = (e)=>{
		var year = e.target.value;
		let oldDate = this.props.data.currentDate;
		if(this.currentYear > year){
			let diff = this.currentYear - year;
			this.props.dispatch(updateDate(moment(oldDate).subtract(diff,'years').toDate()));
			this.currentYear = e.target.value;
			this.forceUpdate();	
			return;
		}
		let diff = year - this.currentYear;
		this.props.dispatch(updateDate(moment(oldDate).add(diff,'years').toDate()))
		this.currentYear = e.target.value;
		forceUpdate();
	}

	render(){
		const result = this.state.yearList &&
							this.state.yearList.map((year)=>{
								return (<option value={year}>{year}</option>)
							});
		return (
			<div>
				<select style={{width:"100px",padding:"10px"}} value={this.currentYear} onChange={this._handleYearChange}>
					{result}
				</select>
			</div>
		)
	}	
}

export default connect()(Year);