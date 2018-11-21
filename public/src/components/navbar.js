import React from 'react';

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="nav-item-logo">
					<a className="nav-item" href="/">Furry Friends</a>
				</div>
				<div className="nav-item-left">
					<a className="nav-item">Search Shelters</a>
				</div>
				<div className="nav-item-right">
					<a className="nav-item" href="/lostandfound">Lost and Found</a>
					<a className="nav-item" href="/donate">Donate/Fundraise</a>
					<a className="nav-item" href="/login">Log In</a>
					<a className="nav-item" href="/signup">Sign Up</a>
				</div>
			</div>
		)
	}
}