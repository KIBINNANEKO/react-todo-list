import React, {useState} from 'react';
import './Form.css';
import Button from '../UI/Buttons/Button/Button';
import useInput from '../../hooks/useInput';
import CurrentlyTodoItem from '../CurrentlyTodoItem/CurrentlyTodoItem';

function Form(props) {

		function add(event){
		event.preventDefault()

		const titleInput = document.querySelector('.block__input')
		const priorityList = document.querySelector('.block__list')

		if(inputTitle.value.length <= 3 || inputPriority.value === ''){
			titleInput.classList.add('error')
			priorityList.classList.add('error')
		}

		else{
			const newPost = {
			id: Date.now(),
			title: inputTitle.value,
			description: inputDescription.value,
			isdone: false,
			priority: parseInt(inputPriority.value)
			}

			props.create(newPost)
			priorityList.classList.remove('error')
			titleInput.classList.remove('error')
			inputTitle.clear()
			inputDescription.clear()
		}

	}

	const inputTitle = useInput('')
	const inputDescription = useInput('')
	const inputPriority = useInput('')

  return (
	<div className='Todo__block3'>
			<div className='Add'>
				<div className='block__title'>Добавить дело</div>
				<div>
					<input className='block__input' placeholder='Название' type="text" value={inputTitle.value} onChange={inputTitle.onChange}></input>
					<select className='block__list' value={inputPriority.value} onChange={inputPriority.onChange}>
						<option value='0'>Выберите приоритет</option>
						<option value='3'>Срочное</option>
						<option value='2'>Важное</option>
						<option value='1'>Не обязательное</option>
					</select>
				</div>
				<div className='Todo__block2'>
					<textarea className='block__textarea' name="textComment" placeholder='Описание' value={inputDescription.value} onChange={inputDescription.onChange}></textarea>
					<Button className="Button margin" onClick={add} value='Добавить'></Button>
					{/* <Button onClick={sort} value='Сортировать'>Сортировать</Button> */}
				</div>
			</div>
			<div className='Currency'>
			{ props.current_things.length !== 0
				?
				<div className='current_things'>
					<div className='block__title'>Выполняется:</div>
					{props.current_things.map(thing => {
						return(
						<CurrentlyTodoItem 
						className='TodoItem current'
						key = {thing.id} 
						title = {thing.title} 
						description = {thing.description} 
						isdone = {thing.isdone}>
						</CurrentlyTodoItem>
					)})}
				</div>
				: 
				<div className='block__title'>Пока ничего не выполняется</div>
			}
			</div>
	</div>
  );
}

export default Form;



