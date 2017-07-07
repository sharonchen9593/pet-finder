import React from 'react';
import {
	BrowserRouter as Router,
	Route} from 'react-router-dom';
import Main from './main';
import LostAndFound from './lostandfound';
import Donate from './donate';
import Navbar from './navbar';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
						<Route exact path="/" component={Main}></Route>
						<Route path="/lostandfound" component={LostAndFound}></Route>
						<Route path="/donate" component={Donate}></Route>
				</div>
			</Router>
		);
	}
}
