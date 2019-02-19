
// InputText.jsx

import React, { Component } from "react";
var $ = require('jquery');
import fetch from 'isomorphic-fetch';

export default class InputText extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			textinput: "",
			textoutput: "",
			textdisplayed: ""
		};
		this.updateText = this.updateText.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	updateText(e) {
		this.setState({
			textinput: e.target.value
		});
	}
	changeoutput(data) {
		this.setState({
			textoutput: data
		});
	}
	createSummary(information) {
		$.ajax({
			type: "POST",
			url: window.location.href + 'summarizer',
			data: JSON.stringify({ text: information }), 
			dataType: "json",
			contentType: 'application/json; charset=utf-8',
			success: (data) => {
				alert(data)
			},
			failure: (errMsg) => {
				alert(errMsg)
			},
		});
	}
	returnSummary() {
		$.get(window.location.href + 'sendback', (data) => {
			console.log(data);
			this.changeoutput(data);
		});
	}
	handleInput(event) {
		event.preventDefault();
		this.setState({
			textdisplayed: this.state.textinput,
			textinput: ""
		});
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.textdisplayed != this.state.textdisplayed) {
			this.createSummary(this.state.textdisplayed);
			this.returnSummary();
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleInput}>
					<textarea
						rows="6"
						cols="85"
						type="text"
						value={this.state.textinput}
						onChange={this.updateText}
					/>
					<button style={{ color: "purple" }}> Submit </button>
					<h5> {this.state.textoutput} </h5>
				</form>
			</div>
		);
	}
}








