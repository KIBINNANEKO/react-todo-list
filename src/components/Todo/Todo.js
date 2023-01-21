import React, {useState} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import Form from '../Form/Form';
import Modal from '../modals/Modal';
import './Todo.css'

function Todo() {

  let [things, setThings] = useState([
	{title: "Помыть посуду",
	 description: "Вымыть 2 кастрюли, скорвородку, собрать по комнатам чашки, вымыть плиту.",
	 isdone: true,
	 priority: 1,
	 id: 0 
	},
	 
	{title: "Постирать",
	 description: "Запустить стиральную машину.",
	 isdone: false,
	 priority: 2,
	 id: 1
	}, 
	{title: "Поучиться",
	 description: "Выучить побитовые операции и узнать об их предназначении, попрактиковаться, прочитать 10-15 страниц книги об алгоритмах и структурах данных.",
	 isdone: true,
	 priority: 2,
	 id: 2 
	}, 
	{title: "Поесть",
	 description: "Сварить грибной суп и пообедать.",
	 isdone: false,
	 priority: 3,
	 id: 3 
	}, 
	{title: "Покормить Мяту",
	 description: "Сварить Мяте мясо из морозильника.",
	 isdone: false,
	 priority: 3,
	 id: 4 
	}])

	function sorting(){
		setThings([...things.sort((x, y) => x.priority - y.priority).reverse()])
	}

	function createPost(newPost){
		setThings([...things, newPost])
	}

	function deletePost(post){
		setThings(things.filter(p => p.id !== post.id))
	}

	function done(id){
		for(let i = 0; i < things.length; i++){
			if(things[i].id === id){
				setThings(things[i].isdone = !(things[i].isdone))
				setThings([...things])
				}
			}
		}

	let [currentThings, SetCurrentThings] = useState([])

	function currentlyRunning(id){
		let temp = things.filter(p => p.id === id)

		if (currentThings[0] === undefined){
			SetCurrentThings(currentThings = [...currentThings, temp[0]])
			}
		else{
			console.log(2)
			let copy = false
			for(let i = 0; i < currentThings.length; i++){
				if (currentThings[i].title === temp[0].title) copy = true
			}
			if(copy){
				console.log('Nothing')
				for(let j = 0; j < things.length; j++){
					if (temp[0].id === things[j].id){
						setThings((things) => {
							return things[j].isdone = true
						})
						setThings([...things])
					}
				}
				
			}
			else{
				SetCurrentThings(currentThings = [...currentThings, temp[0]])
			}
			
		}

		console.log(currentThings)
	}

  return (
    <div className='Todo'>
		<div className='Todo__block'>
			{ things.length === 0 
			 ? 
			<h2 className='noPosts'>Нет заданий</h2>
			 :
			things.sort((x, y) => x.priority - y.priority).reverse().map(thing => {
			return(
			<TodoItem 
			create = {createPost}
			key = {thing.id} 
			title = {thing.title} 
			description = {thing.description} 
			isdone = {thing.isdone} 
			done = {() => {done(thing.id)}}
			priority={thing.priority} 
			post={thing} 
			delete={deletePost}
			currentlyRunning={currentlyRunning}>
			</TodoItem>)})
			}
			
		</div>
		<Form current_things={currentThings} className="form" create={createPost} sort={sorting}></Form>
		<div>
			<Modal stle={`${things.every(item => item.isdone === true) ? 'show' : ''}`}></Modal>
		</div>
    </div>
  );
		}
		

export default Todo;
