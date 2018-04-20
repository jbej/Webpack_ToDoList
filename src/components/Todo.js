import React from 'react';
import style from './Todo.css';
import TodoForm from './TodoForm';

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className = {style.Todo}>
				{this.props.todo}
				<button onClick = {event=> this.handleClick()}>Remove</button>
			</li>	
		)
	}

	handleClick(event) {
		this.props.remove(this.props.id)
	}
}
export default Todo;