import React from 'react';
import {
	BrowserRouter as Router,
	Route} from 'react-router-dom';
import Main from './main';
import LostAndFound from './lostandfound';
import Donate from './donate';
import Navbar from './navbar';
import NewEntry from './newentry';
import LogIn from './login';
import Signup from './signup';
import Home from './home';
import Random from './random';
import Shelters from './shelters';
import NewFund from './newfund'

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
						<Route exact path="/" component={Home} />
						<Route path="/lostandfound" component={LostAndFound} />
						<Route path="/donate" component={Donate} />
						<Route path="/newentry" component={NewEntry} />
						<Route path="/login" component={LogIn} />
						<Route path='/signup' component={Signup}/>
						<Route path="/search" component={Main} />
						<Route path="/random" component={Random} />
						<Route path="/shelters" component={Shelters} />
						<Route path="/newfund" component={NewFund} />
				</div>
			</Router>
		);
	}
}
