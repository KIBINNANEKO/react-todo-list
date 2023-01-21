import React, {useState} from 'react';
import './CurrentlyTodoItem.css';
import Input from '../UI/Checkbox/Checkbox'
import DeleteButton from '../UI/Buttons/DeleteButton/DeleteButton';

function TodoItem(props) {

  return (
    <div className='TodoItem'>
		<div className='TodoItem__textBlock'>
			<p className='textBlock__title' onClick={() => props.currentlyRunning(props.post.id)}>{props.title}</p>
			<p className='textBlock__description'>{props.description}</p>
			
		</div>
		<div className='TodoItem__buttonBlock'>
			<button>x</button>
		</div>
    </div>
  );
}

export default TodoItem;
