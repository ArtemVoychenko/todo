import React from "react";





class TaskInputFilter extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			
			input: '',
			inputFilterValue: ''
		}
	}

	inputHandler = (e) => {
		const {onInputChange} = this.props;
		const {value} = e.target;

		this.setState({inputFilterValue: value})
		onInputChange(value)

	}
	render(){

		const {input, inputFilterValue} = this.state;
		
		
		

		return(
			<div className="task-input">
				<input onChange={this.inputHandler} value={inputFilterValue} placeholder={'Поиск задачи'}></input>
			</div>
		)
	}
}




export default TaskInputFilter;