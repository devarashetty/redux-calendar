import React from 'react';
import moment from 'moment';
import './date.css';

class DateComponent extends React.Component {
	constructor(props){
		super();
		this.currentDate = props.data &&  props.data.currentDate;
		this.daysView();
	}

	daysView = ()=>{
		this.daysLength = moment(this.currentDate).daysInMonth();
		this.daysGrid = [];
		for(var i=0;i<this.daysLength;i++){
			this.daysGrid.push(
				<div class="grid-item">{i}</div>
			)
		}	
	}

	render(){
		return (
			<div class="grid-container">
				{this.daysGrid}
			</div>
		)
	}
}

export default DateComponent;