import React from 'react';

class Year extends React.Component {	
	constructor(){
		super();
		let yearList = [];
		let defaultYear = 1900;
		for(var i=0;i<140;i++){
			yearList.push(defaultYear++)
		}
		this.state = {
			yearList:yearList
		}
	}


	render(){
		console.log(this.state.yearList);
		const result = this.state.yearList &&
							this.state.yearList.map((year)=>{
								return (<option value={year}>{year}</option>)
							});
		console.log("RESULT",result);					
		return (
			<div>
				<select style={{width:"100px",padding:"10px"}}>
					{result}
				</select>
			</div>
		)
	}	
}

export default Year;