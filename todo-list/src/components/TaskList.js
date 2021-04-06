import React from "react";
import TaskItem from "./taskList/TaskItem";
import TaskInput from "./taskList/TaskInput";
import TaskInputFilter from "./taskList/TaskInputFilter"


class TaskList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			tasks: props.data,
			filteredTasks: props.data,
			filter: 'all'
		};
	};

	addTask = task => {
		const { tasks } = this.state;
		const tempTasks = [...tasks, {
			title: task,
			id: tasks.length,
			done: false
		}];
		this.setState({ tasks: tempTasks,
			filteredTasks: tempTasks

		 })
		 
		
		console.log(this.state.tasks);
	};

	doneTask = (id) => {
		const index = this.state.tasks.map(task => task.id).indexOf(id);
		if (index !== -1){
		this.setState(state => {
			let { tasks } = state;
		
			tasks[index].done = true;
			return tasks;
		
		});
	}
	console.log(id);
	console.log(this.state.tasks);
	};

	deleteTask = (id) => {
		const index = this.state.tasks.map(task => task.id).indexOf(id);
		this.setState(state => {
			let { tasks } = state;
			delete tasks[index];
			return tasks;
		});
		
	};

	onInputChange = (inputFilterValue ) => {
		 const { tasks } = this.state;
		if (inputFilterValue === '') { 
			this.setState({ filteredTasks: tasks }); 
		}
	
	const filteredTasks = tasks.filter((item) => item.title.toLowerCase().includes(inputFilterValue.toLowerCase()) )
	this.setState({filteredTasks})
		
	};

	onButtonClick = (filter) =>{
		const { tasks } = this.state;
		
		let currentTasks = [...tasks]
		if (filter === 'active'){
			currentTasks = tasks.filter(task => task.done);
		}
		if (filter === 'done'){
			currentTasks = tasks.filter(task => !task.done);
		}
		if (filter === 'all'){
			console.log(tasks);
			currentTasks = tasks;
		}
		
		this.setState({filteredTasks: currentTasks})

	}
	

	render() {
		
		const { tasks, filteredTasks } = this.state;
		
		
		

	return(
		<div>
			<h1 className="top1">Список задач:</h1>
			<div className="top">
			<div onClick={()=> this.onButtonClick('all')}>Все</div>
			<div onClick={()=> this.onButtonClick('active')}>Выполненные</div>
			<div onClick={()=> this.onButtonClick('done')}>Не выполненные</div>
			</div>

			{filteredTasks.map(task => (
					<TaskItem 
					doneTask={() => this.doneTask(task.id)}
					deleteTask={() => this.deleteTask(task.id)}
					 task={task} 
					 key={task.id}>
					 </TaskItem>
				))}
				<TaskInput addTask={this.addTask}></TaskInput>
				<TaskInputFilter onInputChange={this.onInputChange}></TaskInputFilter>
				<h1 className="top2">Artem Voychenko 	&#169;</h1>
		</div>
	)

}
}





export default TaskList;
