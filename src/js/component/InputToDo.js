import React from "react";

//include bootstrap npm library into the bundle
import "bootstrap";

//create your first component
export class InputToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			messages: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.keyPressed = this.keyPressed.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	keyPressed(event) {
		if (event.key === "Enter" && event.target.value !== "") {
			this.submitMessage();
			event.preventDefault();
		}
	}

	submitMessage() {
		this.setState({ messages: [...this.state.messages, this.state.input] });
		this.setState({ input: "" });
	}

	deleteTask(item) {
		const newMessages = this.state.messages.filter(messages => {
			return messages !== item;
		});
		this.setState({ messages: [...newMessages] });
	}

	render() {
		return (
			<div className="container">
				<h2 className="title">
					To Do List
					<i className="fas fa-tasks" />
				</h2>
				<input
					className="divInput"
					placeholder="What´s do you need to do?"
					onChange={this.handleChange}
					onKeyPress={this.keyPressed}
					value={this.state.input}
				/>
				<ul className="list-group">
					{this.state.messages.map((item, i) => (
						<li className="list-group-item d-flex" key={i}>
							{item}
							<i
								onClick={e => this.deleteTask(item)}
								className="far fa-trash-alt ml-auto"
							/>
						</li>
					))}
					<div className="taskCounter">
						You have{" "}
						<strong className="length">
							{this.state.messages.length} tasks to do{" "}
						</strong>
					</div>
				</ul>
			</div>
		);
	}
}
