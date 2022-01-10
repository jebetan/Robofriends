import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import ErrorBoundry from '../component/ErrorBoundry';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState ({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots =robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
		 <h1>Loading Please Wait</h1> :
			( 
			<div className='tc'>
		
		<SearchBox searchChange={this.onSearchChange} />
				<ErrorBoundry>
				<CardList robots={filteredRobots} />
				</ErrorBoundry>	
			</div>
 		);
	}
}
export default App;