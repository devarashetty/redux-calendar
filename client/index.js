import React from 'react';

import ReactDom from 'react-dom';
import store from '../store';
import { Provider } from 'react-redux';
import App from './app.js';

class Calendar extends React.Component {
	constructor(){
		super();
	}
	render(){
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		)
	}
}

ReactDom.render(<Calendar/>,document.getElementById('app'));

