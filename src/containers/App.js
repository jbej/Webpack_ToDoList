import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import uuid from 'uuid';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iform: '',
			data: [{
				id: 1,
					text: 'milk'
				},
				{
				id: 2,
					text: 'butter'
				},
				{
				id: 3,
					text: 'carrot'
				},
				{
				id: 4,
					text: 'sugar'
				}]
		};
		this.addTodo = this.addTodo.bind(this);
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !==id);

		this.setState({data: remainder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title title="Shopping list" number={this.state.data.length}/>
				<TodoList remove={this.removeTodo.bind(this)} data={this.state.data}/>
				<TodoForm addTodo={this.addTodo} value={this.state.iform}/>
			</div>

		);
	}
}
export default App;