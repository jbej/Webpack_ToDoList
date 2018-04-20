import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';
import TodoForm from './TodoForm';



const TodoList = props => {
	const todoListItems = props.data.map(item => <Todo key={item.id} id={item.id} todo={item.text}
		remove={props.remove} iform={props.iform}/>)
	return(
		<div className={style.TodoList}>{todoListItems}
		</div>

	)
}

export default TodoList;