import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

//STATE different to props, props is the properties, input like robots, STATE is how a child talks to a neighbour in the 1 way data flow tree structure, e.g. search box has to communicate with the cardlist and vice versa
//STATE is object which describes your application, e.g. the robot and whatever is input in the searchbox, state is able to change.
// Parent feeds STATE into Child component, as soon as child component receives STATE, its a property, which it can't change.

class App extends Component { //App or the Parent owns STATE so it can change it
	constructor() {
		super() //calls constructor of Component
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() { //component function so no arrow notation, lifecycle methods / hooks which occur in order, such as constructor() and render() and more
		fetch('https://jsonplaceholder.typicode.com/users') //fetch makes a http request
		.then(response=> response.json())
		.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => { //Random function name, arrow function for any function/method which doesnt come from REACT such as constructor(), redner() to avoid an error with state. As 'this' refers to the searchbox input right now instead of this App state robots, fixed with arrow notation
		this.setState({ searchfield: event.target.value }) // set State so the searchfield is always getting updated and not empty string
	}

	render() {
		const { robots, searchfield } = this.state;
		//const filteredRobots = this.state.robots.filter(robot =>{
		const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		//if (robots.length === 0) { //!robots.length could work too as it evaluates to true
		//	return <h1>Loading...</h1>
		//} else { if else statement can be changed to ternary 
		return !robots.length ? //!robots.length could work too as it evaluates to true
			<h1>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/> {/* searchChange is a prop which calls the onSearch function, passed into SearchBox component*/}
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default App;



// const App = () => {
// 	return (
// 		<div className='tc'>
// 			<h1>RoboFriends</h1>
// 			<SearchBox />
// 			<CardList robots={robots}/>
// 		</div>
// 	);
// } 

// <CardList robots={robots}/> accessed from the STATE now