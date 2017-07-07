import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class NavBar extends React.Component {
	render() {
		return (
			<Navbar fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">PetFinder</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem href="/lostandfound">Lost and Found</NavItem>
					<NavItem href="/donate">Donate</NavItem>
				</Nav>
			</Navbar>
		)
	}
}