import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './radio-button.css';

class RadioButtonContainer extends Component {
	render() {
		return (
			<form onSubmit={() => this.props.handleSubmit}>
				{this.props.children}
			</form>
		);
	}
}

RadioButtonContainer.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

// ##################################################

class RadioButtonGroup extends Component {
	render() {
		return (
			<div>
				<div className="title">{this.props.headline}</div>
				<ul>
					{this.props.children}
				</ul>
			</div>
		);
	}
}

RadioButtonGroup.propTypes = {
	headline: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

// ##################################################

class RadioButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			size: event.target.value
		});
		console.log(event.target.value);
	}

	render() {
		return (
			<li>
				<label>
					<input
						type="radio"
						value={this.props.size}
						name={this.props.name + "[]"}
						checked={this.state.size === this.props.size}
						onChange={this.handleChange}
					/>
					{this.props.text}
				</label>
			</li>
		);
	}
}

RadioButton.propTypes = {
	size: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

// ##################################################

class RadioButtonSubmit extends Component {
	render() {
		return (
			<button type="submit" className="submit-button">{this.props.name}</button>
		);
	}
}

RadioButtonSubmit.propTypes = {
	name: PropTypes.string.isRequired
}

// ##################################################

export {
	RadioButtonContainer,
	RadioButtonGroup,
	RadioButton,
	RadioButtonSubmit
}
