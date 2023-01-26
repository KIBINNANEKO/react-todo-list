import React from 'react';
import './TodoItem.css';
import Checkbox from '../UI/Checkbox/Checkbox'
import DeleteButton from '../UI/Buttons/DeleteButton/DeleteButton';

function TodoItem(props) {

	let priority = props.priority

  return (
    <div className='TodoItem'>
		<div className='TodoItem__textBlock'>
			<p className='textBlock__title' onClick={() => props.currentlyRunning(props.post.id)}>{props.title}</p>
			<p className='textBlock__description'>{props.description}</p>
			{priority === 1 && (
				<div className='textBlock__priority'>
					<div className='star'></div>
				</div>
			)}
			{priority === 2 && (
				<div className='textBlock__priority'>
					<div className='star'></div>
					<div className='star'></div>
				</div>
			)}
			{priority === 3 && (
				<div className='textBlock__priority'>
					<div className='star'></div>
					<div className='star'></div>
					<div className='star'></div>
				</div>
			)}
		</div>
		<div className='TodoItem__buttonBlock'>
			<Checkbox className={props.isdone ? 'Checkbox Checkbox__active' : 'Checkbox Checkbox__empty'} onClick={() => props.done(props.post.id)}/>
			<DeleteButton onClick={() => props.delete(props.post)}></DeleteButton>
		</div>
    </div>
  );
}

export default TodoItem;
