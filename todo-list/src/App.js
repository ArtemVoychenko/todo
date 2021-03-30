import React from "react";
import TaskList from "./components/TaskList";

const TASKS = [
	{ title: 'Прочитать', id: 0, done: false },
	{ title: 'Запомнить', id: 1, done:  false},
	{ title: 'Зазубрить', id: 2, done: false },
]

class App extends React.Component{

	render() {
		
		return(
			<div className="App">
				<TaskList data={TASKS }/>
			</div>
		)
	}
}

export default App;
