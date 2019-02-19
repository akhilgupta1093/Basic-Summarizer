import React from "react";
import Create from "./create";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 style={{ padding: "20px", textAlign: "center", color: "purple" }}>
					{" "}
					Welcome to Summarizer{" "}
				</h1>
				<h2> Please input your text: </h2>
				<Create />
			</div>
		);
	}
}





