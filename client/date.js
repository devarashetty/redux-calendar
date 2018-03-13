import React from 'react';
import moment from 'moment';
import './date.css';
import { connect } from 'react-redux';
import { updateDate,addNotes } from '../store/actions.js';
class DateComponent extends React.Component {
	constructor(props){
		super();
		this.activeDate = moment(props.data &&  props.data.currentDate);
		this.today = moment();
		this.notes = props.data && props.data.dateNotes;
		this.daysView();
	}
	
	componentWillReceiveProps(nexprops){
		console.log("NEXT PROPS",nexprops);
		this.activeDate =  moment(nexprops.data &&  nexprops.data.currentDate) 
		this.daysView();
	}

	dayClick = (date)=>{
		console.log("date clicked",date);
	}

	daysView = () => {
		console.log("this.currentDate",this.activeDate)
		this.daysLength = this.activeDate.daysInMonth();
		this.daysGrid = [];
		this.date = Number(moment().format('D'));
		console.log("DAYS VIEW",this.daysLength);
		for(var i=1;i<this.daysLength+1;i++){
			var date = moment(this.activeDate).subtract(this.date,'day').add(i,'day').startOf('day').toDate();
			if(moment().isSame(date,'day')){
				this.daysGrid.push(
					<div className="grid-item currentDate" onClick={this.dayClick.bind(this,date)}>
						{i}
					</div>
				);
				continue;
			}
			this.daysGrid.push(
				<div className="grid-item" onClick={this.dayClick.bind(this,date)}>
					{i}
				</div>
			)
		}	
	}

	render(){
		return (
			<div className="grid-container">
				{this.daysGrid}
			</div>
		)
	}
}

export default connect()(DateComponent);