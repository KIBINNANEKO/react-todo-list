import React from 'react';
import './CurrentlyTodoItem.css';
import Timer from '../Timer/Timer';
import Checkbox from '../UI/Checkbox/Checkbox';

function TodoItem(props) {

  return (
    <div className='TodoItem'>
		<div className='TodoItem__textBlock'>
			<p className='currently__title'>{props.title}</p>
			<p className='textBlock__description'>{props.description}</p>
			<Timer/>
		</div>
		<div className='TodoItem__buttonBlock'>
			<Checkbox className='Checkbox Checkbox__empty' onClick={() => props.done(props.id)}></Checkbox>
		</div>
    </div>
  );
}

export default TodoItem;
