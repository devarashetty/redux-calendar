import React from 'react';
import Month from './month.js';
import Year from './year.js';
import DateComponent from './date.js';
import { connect } from 'react-redux';
import store from '../store';

class App extends React.Component {
	constructor(){
		super();
		this.storeSubscribe();
		this.state = store.getState();
	}

	storeSubscribe = () => {
		let self = this;
		store.subscribe(function () {
			self.setState(store.getState());
			console.log("Testing",store.getState());
		});
	}

	render(){
		console.log("APP",this.state);
		return (
			<div style={
				{
					width:"1000px",
					backgroundColor:"#66ccff",
					padding:"40px",
					display:"flex",
					justifyContent:"center",
					alignItems:"center",
					flexDirection:"column"
				}
			}>
				<div style={{display:"flex",justifyContent:"space-around",width:"100%"}}>
					<div style={{color:"black"}}>
						<Year data={this.state}/>
					</div>

					<div style={{color:"black"}}>
						<Month data={this.state}/>
					</div>	
				</div>
				
				<div style={{color:"black" , width:"100%"}}>
					<DateComponent data={this.state}/>
				</div>
			</div>
		)
	}
}

export default connect()(App);