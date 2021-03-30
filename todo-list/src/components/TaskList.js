import React from "react";
import TaskItem from "./taskList/TaskItem";
import TaskInput from "./taskList/TaskInput";


class TaskList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			tasks: props.data,
			filter: 'all'
		};
	};

	addTask = task => {
		const { tasks } = this.state;
		const tempTasks = [...tasks, {
			id: tasks.length + 1,
			title: task,
			done: false
		}];
		this.setState({ tasks: tempTasks })
		
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


	render() {
		
		const { tasks, filter } = this.state;
		// const activeTasks = tasks.filter(task => !task.done);
		// const doneTasks = tasks.filter(task => task.done);
		let currentTasks = tasks;
		if (filter === 'active'){
			// currentTasks = tasks.filter(task => !task.done);
			currentTasks = tasks.filter(task => task.done);
		}
		if (filter === 'done'){
			// currentTasks = tasks.filter(task => task.done);
			currentTasks = tasks.filter(task => !task.done);
		}

	return(
		<div>
			<h1 className="top1">Список задач:</h1>
			<div className="top">
			<div onClick={()=> this.setState({filter: 'all'})}>Все</div>
			<div onClick={()=> this.setState({filter: 'active'})}>Выполненные</div>
			<div onClick={()=> this.setState({filter: 'done'})}>Не выполненные</div>
			</div>

			{currentTasks.map(task => (
					<TaskItem 
					doneTask={() => this.doneTask(task.id)}
					deleteTask={() => this.deleteTask(task.id)}
					 task={task} 
					 key={task.id}>
					 </TaskItem>
				))}
				<TaskInput addTask={this.addTask}></TaskInput>
				<h1 className="top2">Artem Voychenko 	&#169;</h1>
		</div>
	)

}
}





export default TaskList;
