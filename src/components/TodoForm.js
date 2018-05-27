import React from 'react';
import style from './TodoForm.css';


class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iform: '',
		};
	this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}
	onSubmitHandler(event) {
		event.preventDefault(); 
		this.props.addTodo(this.state.iform)
	}
	onChange(event) {
		this.setState({iform: event.target.value});
	}

	render() {
		return (
			<div>
				<form className= "TodoForm" onSubmit={(event) => this.onSubmitHandler(event)}>
					<input type="text" value={this.state.iform} onChange={(event) => this.onChange(event)}/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
};	



export default TodoForm;