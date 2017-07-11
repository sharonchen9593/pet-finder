import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class NavBar extends React.Component {
	render() {
		return (
			<Navbar fixedTop inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">Furry Friends</a>
					</Navbar.Brand>
					<Nav>
						<NavItem href="/search">Search Pet</NavItem>
						<NavItem href="/shelters">Search Shelters</NavItem>
					</Nav>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem href="/lostandfound">Lost and Found</NavItem>
					<NavItem href="/donate">Donate/Fundraise</NavItem>
					<NavItem href="/login">Log In</NavItem>
					<NavItem href="/signup">Sign Up</NavItem>

				</Nav>
			</Navbar>
		)
	}
}