import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { RadioButtonContainer, RadioButtonGroup, RadioButton, RadioButtonSubmit } from './components/radio-button';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render(){
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="content">
					<RadioButtonContainer 
						handleSubmit={this.handleSubmit}
					>
						<RadioButtonGroup 
							headline="Size"
						>
							<RadioButton 
								size="small"
                text="Small"
                name="bodysize"
							/>
							<RadioButton 
								size="medium"
								text="Medium"
                name="bodysize"
							/>
							<RadioButton 
								size="large"
								text="Large"
                name="bodysize"
							/>
							<RadioButtonSubmit
								name="Your Choice"
							/>
						</RadioButtonGroup>
					</RadioButtonContainer>
				</section>
				<footer className="App-footer">
					(c) Copyright - Mike Ludemann
				</footer>
			</div>
		);
		}
}

export default App;
