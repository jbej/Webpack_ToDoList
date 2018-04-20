import React from 'react';
import style from './Title.css';
import TodoList from './TodoList';

const Title = props => {
	return(
		<div className={style.Title}>
			<h1>{props.title}</h1>
			<div><p>Numbers:</p>{props.number}</div>
		</div>
	);
}

export default Title;