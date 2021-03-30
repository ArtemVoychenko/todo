import React from "react";




 const TaskItem = ({ task, ...props}) => {

const ActionBtn = () => (<div className="action-btn">
	{!task.done ? (
	<p onClick={props.doneTask}>&#9989;</p>
		) : (
		<p onClick={props.deleteTask}>&#10060;</p>
		)}
		</div>
		);

const className = 'task' + (task.done ? ' task-done' : '');

	return (
		<div className={className}>
			<p>{task.title}</p>
			<ActionBtn></ActionBtn>
		</div>);
  };

  export default TaskItem;